'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Send, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: 'Message sent!', description: "I'll reply within 24 hours." });
      setForm({ name: '', email: '', message: '' });
      setSubmitting(false);
    }, 2000);
  };

  const inputBase: React.CSSProperties = {
    width: '100%',
    background: '#0C0C0C',
    border: '1px solid #1F1F1F',
    borderRadius: '3px',
    padding: '0.85rem 1rem',
    color: '#F8F8F8',
    fontSize: '0.9rem',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  return (
    <section id="contact" ref={ref} style={{ background: '#050505', borderBottom: '1px solid #1F1F1F' }}>
      {/* Header */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        style={{ borderBottom: '1px solid #1F1F1F', paddingTop: '5rem', paddingBottom: '3rem' }}
      >
        <p className="section-num mb-3">05 — Contact</p>
        <h2
          className="text-headline"
          style={{
            color: '#F8F8F8',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          Let&apos;s Work<br />
          <span className="accent-text">Together</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderBottom: '1px solid #1F1F1F' }}>

          {/* Left: big email + info */}
          <div
            className="py-16 lg:pr-16"
            style={{
              borderRight: '1px solid #1F1F1F',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '200ms',
            }}
          >
            <p
              style={{
                fontSize: '0.9rem',
                color: '#6B6B6B',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.8,
                marginBottom: '3rem',
                maxWidth: '380px',
              }}
            >
              Have a project in mind? Looking to hire or collaborate?
              Feel free to reach out — I&apos;m currently open to new opportunities.
            </p>

            {/* Big email link */}
            <a
              href="mailto:gmchalanaprabhashwara@gmail.com"
              className="group block mb-10"
              style={{ textDecoration: 'none' }}
            >
              <p className="text-label mb-2" style={{ color: '#555' }}>Email me at</p>
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 2.2vw, 1.4rem)',
                  fontWeight: 600,
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: '#F8F8F8',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s ease',
                  wordBreak: 'break-all',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#F59E0B'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#F8F8F8'}
              >
                gmchalanaprabhashwara@gmail.com
                <ArrowUpRight size={18} style={{ flexShrink: 0 }} />
              </p>
              <div
                style={{
                  height: '1px',
                  background: '#1F1F1F',
                  marginTop: '0.75rem',
                  transformOrigin: 'left',
                  transition: 'background 0.3s ease',
                }}
              />
            </a>

            {/* Contact info cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Phone', value: '+94 71 66 15 228', href: 'tel:+94716615228' },
                { icon: MapPin, label: 'Location', value: 'Eheliyagoda, Sri Lanka', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      border: '1px solid #1F1F1F',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#555',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#F59E0B';
                      (e.currentTarget as HTMLElement).style.color = '#F59E0B';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#1F1F1F';
                      (e.currentTarget as HTMLElement).style.color = '#555';
                    }}
                  >
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="text-label" style={{ color: '#555', marginBottom: '1px' }}>{label}</p>
                    <p style={{ fontSize: '0.9rem', color: '#A0A0A0', fontFamily: 'Inter, sans-serif' }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="py-16 lg:pl-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '350ms',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-label block mb-2" style={{ color: '#555' }}>Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    style={inputBase}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#F59E0B'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#1F1F1F'}
                  />
                </div>
                <div>
                  <label className="text-label block mb-2" style={{ color: '#555' }}>Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    style={inputBase}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#F59E0B'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#1F1F1F'}
                  />
                </div>
              </div>

              <div>
                <label className="text-label block mb-2" style={{ color: '#555' }}>Message</label>
                <textarea
                  placeholder="Tell me about your project, timeline, budget..."
                  rows={6}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  style={{ ...inputBase, resize: 'none' }}
                  onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = '#F59E0B'}
                  onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = '#1F1F1F'}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full justify-center"
                style={{ opacity: submitting ? 0.7 : 1 }}
              >
                {submitting ? (
                  <>
                    <div
                      style={{
                        width: '14px',
                        height: '14px',
                        border: '2px solid rgba(5,5,5,0.3)',
                        borderTopColor: '#050505',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} />
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
}
