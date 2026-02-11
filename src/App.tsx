import { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Twitter, 
  Calendar, 
  ChevronDown,
  ExternalLink,
  Send,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Custom hook for intersection observer animations
function useIntersectionObserver(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Resources', href: '#resources' },
    { label: 'Speaking', href: '#speaking' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#070A12]/90 backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-[7vw] flex items-center justify-between">
          <a href="#" className="font-mono-label text-[#F2F5FA] tracking-wider">AV</a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-sm text-[#A7B1C8] hover:text-[#F2F5FA] transition-colors link-underline"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="https://spii.cy/demo-notion-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Get a demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#F2F5FA]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-[#070A12]/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-[#F2F5FA] hover:text-[#FF6A3D] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://spii.cy/demo-notion-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            Get a demo
          </a>
        </div>
      </div>
    </>
  );
}

// Hero Section
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-all duration-[1.1s] ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
      >
        <img 
          src="/hero_city.jpg" 
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 vignette-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-[7vw]">
        {/* Micro-label */}
        <div 
          className={`absolute top-[10vh] right-[7vw] transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="font-mono-label text-[#A7B1C8]">
            Co-Founder & Co-CEO / Chili Piper
          </span>
        </div>

        {/* Main Content */}
        <div className="max-w-[62vw]">
          <h1 
            className={`text-[clamp(44px,5vw,76px)] text-[#F2F5FA] leading-[0.95] mb-6 transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Build products that move markets.
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-[#A7B1C8] max-w-[44vw] mb-8 transition-all duration-700 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Entrepreneur, product leader, and co-founder of Chili Piper.
          </p>

          <div 
            className={`flex items-center gap-6 transition-all duration-700 delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a 
              href="https://spii.cy/demo-notion-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              Get a demo
              <ArrowRight size={18} />
            </a>
            <a 
              href="https://spii.cy/substack_notion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2F5FA] hover:text-[#FF6A3D] transition-colors flex items-center gap-2"
            >
              Read the latest
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Scroll Cue */}
        <div 
          className={`absolute bottom-[6vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1100 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="font-mono-label text-[#A7B1C8] text-[10px]">Scroll</span>
          <ChevronDown size={20} className="text-[#A7B1C8] animate-float" />
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="work" className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/founder_portrait.jpg" 
          alt="Alina Vandenberghe"
          className="w-full h-full object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 vignette-right" />
      </div>

      {/* Content */}
      <div 
        ref={ref}
        className="relative z-10 h-full min-h-screen flex flex-col justify-center items-end px-[7vw] py-24"
      >
        {/* Micro-label */}
        <div 
          className={`absolute top-[10vh] left-[7vw] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="font-mono-label text-[#A7B1C8]">About</span>
        </div>

        {/* Main Content - Right Aligned */}
        <div className="max-w-[46vw] text-right">
          <h2 
            className={`text-[clamp(34px,3.6vw,56px)] text-[#F2F5FA] mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            From intern to SVP—then founder.
          </h2>
          
          <p 
            className={`text-lg text-[#A7B1C8] mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            I started before high school, sold lipstick and code to pay for school, then shipped products used by millions. Some were keynoted by Steve Jobs.
          </p>

          <p 
            className={`text-lg text-[#A7B1C8] mb-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            Chili Piper is the result: a demand conversion platform that helps GTM teams turn interest into pipeline.
          </p>

          <a 
            href="https://www.chilipiper.com/post/alina-vandenberghe-bio-and-recordings"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-[#F2F5FA] hover:text-[#FF6A3D] transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            More about me
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// Product Section
function ProductSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/product_ui.jpg" 
          alt="Chili Piper Product"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#070A12]/50" />
      </div>

      {/* Content */}
      <div 
        ref={ref}
        className="relative z-10 h-full min-h-screen flex flex-col justify-center px-[7vw] py-24"
      >
        {/* Micro-label */}
        <div 
          className={`absolute top-[10vh] right-[7vw] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="font-mono-label text-[#A7B1C8]">Product</span>
        </div>

        {/* Main Content - Left Aligned */}
        <div className="max-w-[52vw]">
          <h2 
            className={`text-[clamp(34px,3.6vw,56px)] text-[#F2F5FA] mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            Turn inbound interest into booked meetings—instantly.
          </h2>
          
          <p 
            className={`text-lg text-[#A7B1C8] mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            Chili Piper routes leads, removes scheduling friction, and doubles conversion rates for teams like Spotify, Airbnb, Shopify, and thousands more.
          </p>

          {/* Stats */}
          <div 
            className={`flex flex-wrap gap-8 mb-10 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              { value: '2×', label: 'conversion' },
              { value: '10K+', label: 'teams' },
              { value: 'Near-$1B', label: 'valuation' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FF6A3D] mb-1">
                  {stat.value}
                </div>
                <div className="font-mono-label text-[#A7B1C8] text-[10px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <a 
            href="https://spii.cy/demo-notion-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary inline-flex items-center gap-2 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Get a Chili Piper demo
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// Mission Section
function MissionSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/mission_portrait.jpg" 
          alt="Alina Vandenberghe"
          className="w-full h-full object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 vignette-left" />
      </div>

      {/* Content */}
      <div 
        ref={ref}
        className="relative z-10 h-full min-h-screen flex flex-col justify-center items-end px-[7vw] py-24"
      >
        {/* Micro-label */}
        <div 
          className={`absolute top-[10vh] left-[7vw] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="font-mono-label text-[#A7B1C8]">Mission</span>
        </div>

        {/* Main Content - Right Aligned */}
        <div className="max-w-[46vw] text-right">
          <h2 
            className={`text-[clamp(34px,3.6vw,56px)] text-[#F2F5FA] mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            Conscious capitalism starts with people.
          </h2>
          
          <p 
            className={`text-lg text-[#A7B1C8] mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            I imagine working until I'm 150—because the puzzle never ends. I'm building a company where humans are the center of the system, and where secondaries aren't just for founders.
          </p>

          <a 
            href="https://www.notion.so/1dcdd5c9203580c1819cd1b9baca0bb2?pvs=21"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-[#F2F5FA] hover:text-[#FF6A3D] transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Read our decision-making principles
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// Resources Section
function ResourcesSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const resources = [
    {
      image: '/thumb_newsletter.jpg',
      title: 'Newsletter',
      description: 'Marketing, ops, AI, and becoming a better human—delivered weekly.',
      cta: 'Subscribe',
      link: 'https://spii.cy/substack_notion',
    },
    {
      image: '/thumb_course.jpg',
      title: 'B2B Social Media Course',
      description: 'A practical system for building authority without losing your voice.',
      cta: 'Start the course',
      link: 'https://www.chilipiper.com/b2b-social-media-guide?utm_campaign=alina-notion&utm_content=alina-profile-notion',
    },
    {
      image: '/thumb_benchmark.jpg',
      title: '2025 Demand Conversion Benchmark',
      description: 'Data and tactics from thousands of inbound funnels.',
      cta: 'Download the report',
      link: 'https://app.bitly.com/Bg6oe02vMXV/links/spii.cy/2025/details',
    },
  ];

  return (
    <section id="resources" className="relative w-full bg-[#0B1022] py-24">
      <div 
        ref={ref}
        className="w-[min(1100px,88vw)] mx-auto"
      >
        {/* Header */}
        <div 
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-mono-label text-[#A7B1C8] block mb-4">Resources</span>
          <h2 className="text-[clamp(34px,3.6vw,56px)] text-[#F2F5FA]">
            Tools to move faster
          </h2>
        </div>

        {/* Resource Cards */}
        <div className="space-y-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block bg-[#070A12] rounded-[22px] overflow-hidden transition-all duration-700 card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100 + 200}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl text-[#F2F5FA] mb-3 group-hover:text-[#FF6A3D] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-[#A7B1C8] mb-4">
                    {resource.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#FF6A3D] font-medium">
                    {resource.cta}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Speaking Section
function SpeakingSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const events = [
    { date: 'MAR 18', name: 'SaaStr Annual', location: 'San Francisco, CA' },
    { date: 'APR 09', name: 'GTM Summit', location: 'Austin, TX' },
    { date: 'MAY 14', name: 'Revenue Collective Meetup', location: 'New York, NY' },
  ];

  return (
    <section id="speaking" className="relative w-full bg-[#070A12] py-24">
      <div 
        ref={ref}
        className="w-[min(1100px,88vw)] mx-auto"
      >
        {/* Header */}
        <div 
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-mono-label text-[#A7B1C8] block mb-4">Speaking</span>
          <h2 className="text-[clamp(34px,3.6vw,56px)] text-[#F2F5FA]">
            Where you'll find me next
          </h2>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#0B1022] rounded-[18px] border border-transparent hover:border-[#FF6A3D]/30 transition-all duration-500 card-hover ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-6vw]'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100 + 200}ms` }}
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <span className="font-mono-label text-[#FF6A3D] text-sm">
                  {event.date}
                </span>
                <span className="text-xl text-[#F2F5FA]">{event.name}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[#A7B1C8] flex items-center gap-2">
                  <Calendar size={16} />
                  {event.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`mt-10 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a 
            href="mailto:hello@alinavandenberghe.com"
            className="inline-flex items-center gap-2 text-[#F2F5FA] hover:text-[#FF6A3D] transition-colors"
          >
            Invite me to speak
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// Culture Section
function CultureSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const cards = [
    {
      title: 'Culture @ Chili Piper',
      description: 'Remote-first, high-autonomy, and built for builders.',
      cta: 'Read the culture doc',
      link: 'https://www.notion.so/1ecdd5c9203580a79509eb60895c06ec?pvs=21',
    },
    {
      title: 'Our unusual decision-making process',
      description: 'Clear owners, fast feedback, and no meetings by default.',
      cta: 'See the process',
      link: 'https://www.notion.so/1dcdd5c9203580c1819cd1b9baca0bb2?pvs=21',
    },
  ];

  return (
    <section className="relative w-full bg-[#070A12] py-24">
      <div 
        ref={ref}
        className="w-[min(1100px,88vw)] mx-auto"
      >
        {/* Header */}
        <div 
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-mono-label text-[#A7B1C8] block mb-4">Culture</span>
          <h2 className="text-[clamp(34px,3.6vw,56px)] text-[#F2F5FA]">
            How we work
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-8 bg-[#0B1022] rounded-[22px] transition-all duration-700 card-hover ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.98]'
              }`}
              style={{ transitionDelay: `${(index + 1) * 120 + 200}ms` }}
            >
              <h3 className="text-2xl text-[#F2F5FA] mb-3 group-hover:text-[#FF6A3D] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#A7B1C8] mb-6">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[#FF6A3D] font-medium">
                {card.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0B1022] py-24">
      <div 
        ref={ref}
        className="w-[min(980px,88vw)] mx-auto"
      >
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-[clamp(34px,3.6vw,56px)] text-[#F2F5FA] mb-4">
            Let's build something that lasts.
          </h2>
          <p className="text-lg text-[#A7B1C8]">
            If you want to collaborate, invite me to speak, or just say hello—my inbox is open.
          </p>
        </div>

        {/* Contact Links */}
        <div 
          className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a 
            href="mailto:hello@alinavandenberghe.com"
            className="flex items-center gap-2 text-[#F2F5FA] hover:text-[#FF6A3D] transition-colors"
          >
            <Mail size={18} />
            hello@alinavandenberghe.com
          </a>
          <a 
            href="https://www.linkedin.com/in/alinavandenberghe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#F2F5FA] hover:text-[#FF6A3D] transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a 
            href="https://twitter.com/alinavandenberghe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#F2F5FA] hover:text-[#FF6A3D] transition-colors"
          >
            <Twitter size={18} />
            Twitter / X
          </a>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className={`max-w-xl mx-auto space-y-6 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#070A12] border-[#1a2035] text-[#F2F5FA] placeholder:text-[#A7B1C8]/50 h-12"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#070A12] border-[#1a2035] text-[#F2F5FA] placeholder:text-[#A7B1C8]/50 h-12"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#070A12] border-[#1a2035] text-[#F2F5FA] placeholder:text-[#A7B1C8]/50 min-h-[120px]"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || submitted}
            className="w-full btn-primary h-12"
          >
            {submitted ? (
              'Message sent!'
            ) : isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send message
                <Send size={18} />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative w-full bg-[#070A12] py-12 border-t border-[#1a2035]">
      <div className="w-[min(1100px,88vw)] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono-label text-[#A7B1C8]">
          © Alina Vandenberghe
        </div>
        <a 
          href="https://www.chilipiper.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F2F5FA] hover:text-[#FF6A3D] transition-colors"
        >
          Chili Piper
        </a>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <MissionSection />
        <ResourcesSection />
        <SpeakingSection />
        <CultureSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
