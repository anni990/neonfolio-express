
import React, { useRef, useEffect, useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
emailjs.init("YznXVwQDGmLILsdcw");

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
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
    
    // Prepare email template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || "Message from Portfolio Contact Form",
      message: formData.message,
      reply_to: formData.email,
    };
    
    // Send email using EmailJS
    emailjs.send(
      'service_4jt0r9t', // Replace with your EmailJS service ID
      'template_6laq5ih', // Replace with your EmailJS template ID
      templateParams,
      'YznXVwQDGmLILsdcw' // Replace with your EmailJS user ID
    )
    .then(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Hide success modal after 3 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);
      
      toast({
        title: 'Message Failed',
        description: 'There was an error sending your message. Please try again later.',
        variant: 'destructive',
      });
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 md:px-16 lg:px-24 relative opacity-0"
    >
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 transform animate-scale-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-bounce-light">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-6 py-2 bg-code-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
                  <a href="mailto:aniket22mishra2004@gmail.com" className="text-code-blue hover:underline">aniket22mishra2004@gmail.com</a>
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
