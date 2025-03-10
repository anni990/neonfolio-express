
import React, { useRef, useEffect, useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Show success message
      toast({
        title: 'Message Sent!',
        description: 'Thank you for your message. I will get back to you soon.',
        variant: 'default',
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 md:px-16 lg:px-24 relative opacity-0"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column - Contact Info */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Contact Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            
            <p className="text-lg text-foreground/80 mb-10">
              I'm currently available for freelance work or full-time positions. If you're interested in working together or have any questions, feel free to reach out!
            </p>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-code-blue/10 flex items-center justify-center text-code-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:hello@example.com" className="text-code-blue hover:underline">hello@example.com</a>
                </div>
              </div>
              
              <div className="code-block">
                <pre className="font-mono text-sm text-code-dark">
                  <code>{`// Let's connect\nconstStatus = "Open to opportunities";\nscheduleMeeting();`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          {/* Right column - Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-md glass-panel">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-code-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.name ? 'border-destructive/50' : 'border-code-blue/20'
                    } focus:outline-none focus:ring-2 focus:ring-code-blue/30 transition-all`}
                    placeholder="Your Name"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-destructive">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-code-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.email ? 'border-destructive/50' : 'border-code-blue/20'
                    } focus:outline-none focus:ring-2 focus:ring-code-blue/30 transition-all`}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-destructive">{formErrors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-code-dark mb-2">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-code-blue/20 focus:outline-none focus:ring-2 focus:ring-code-blue/30 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-code-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.message ? 'border-destructive/50' : 'border-code-blue/20'
                  } focus:outline-none focus:ring-2 focus:ring-code-blue/30 transition-all resize-none`}
                  placeholder="Your message here..."
                />
                {formErrors.message && (
                  <p className="mt-1 text-xs text-destructive">{formErrors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg bg-code-blue text-white font-medium flex items-center justify-center gap-2 transition-all ${
                  isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:shadow-lg hover:shadow-code-blue/20 hover:translate-y-[-2px]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
