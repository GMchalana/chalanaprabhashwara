'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle, User, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message sent successfully! 🎉',
        description: 'Thank you for reaching out. I\'ll get back to you within 24 hours.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'gmchalanaprabhashwara@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      href: 'mailto:gmchalanaprabhashwara@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+94 71 66 15 228',
      gradient: 'from-green-500 to-emerald-500',
      href: 'tel:+94716615228',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Eheliyagoda, Sri Lanka',
      gradient: 'from-purple-500 to-pink-500',
      href: 'https://maps.google.com/?q=Eheliyagoda,Sri+Lanka',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 dark:to-muted/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/15 dark:bg-cyan-600/10 rounded-full blur-3xl animate-pulse-medium" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-200/10 dark:bg-purple-600/5 rounded-full blur-2xl animate-pulse-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 dark:bg-muted/20 rounded-2xl border border-border/50 mb-6">
            <MessageCircle className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-muted-foreground">Let's Connect</span>
            <MessageCircle className="h-5 w-5 text-blue-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's collaborate and create something extraordinary together. 
            I'm always excited to discuss new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block group"
              >
                <Card className="relative overflow-hidden bg-card/80 dark:bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-border/80 dark:hover:border-border/60">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-r ${method.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
                          {method.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-base">
                          {method.description}
                        </CardDescription>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardHeader>
                </Card>
              </a>
            ))}

            {/* Additional Info Card */}
            <Card className="bg-muted/40 dark:bg-muted/20 backdrop-blur-sm border border-border/50 rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  <CardTitle className="text-lg">Quick Response</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  I typically respond within a few hours. For urgent matters, feel free to call or WhatsApp me directly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="relative bg-card/80 dark:bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent opacity-50" />
              
              <CardHeader className="relative z-10 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
                    Send a Message
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground text-base">
                  Fill out the form below and I'll get back to you as soon as possible. Let's discuss your project requirements and how we can work together.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <User className="h-4 w-4 text-blue-500" />
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-background/50 dark:bg-background/30 border-border/50 focus:border-blue-500/50 transition-all duration-300 rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <Mail className="h-4 w-4 text-green-500" />
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-background/50 dark:bg-background/30 border-border/50 focus:border-green-500/50 transition-all duration-300 rounded-xl h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-purple-500" />
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements you have..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="bg-background/50 dark:bg-background/30 border-border/50 focus:border-purple-500/50 transition-all duration-300 rounded-xl resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>

              {/* Gradient Border Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent" />
            </Card>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border/30">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-muted/40 dark:bg-muted/20 rounded-2xl border border-border/50">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            <p className="text-lg text-muted-foreground">
              Let's create something amazing together! 💫
            </p>
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </div>
        </div>
      </div>
    </section>
  );
}