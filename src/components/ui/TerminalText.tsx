
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TerminalTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
  cursorBlink?: boolean;
  onComplete?: () => void;
}

const TerminalText = ({
  text,
  className,
  typingSpeed = 50,
  startDelay = 0,
  cursorBlink = true,
  onComplete
}: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;
    
    timeout = setTimeout(() => {
      setIsTyping(true);
      
      const typingInterval = setInterval(() => {
        if (charIndex <= text.length) {
          setDisplayedText(text.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }, typingSpeed);
      
      return () => clearInterval(typingInterval);
    }, startDelay);
    
    return () => clearTimeout(timeout);
  }, [text, typingSpeed, startDelay, onComplete]);

  return (
    <span 
      ref={textRef}
      className={cn(
        'font-mono inline-block',
        cursorBlink && isTyping ? 'border-r-2 border-code-blue animate-[blink_0.75s_step-end_infinite]' : '',
        className
      )}
      aria-label={text}
    >
      {displayedText}
    </span>
  );
};

export default TerminalText;
