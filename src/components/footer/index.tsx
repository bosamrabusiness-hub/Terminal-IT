// src/components/footer/index.tsx
'use client';

import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import TerminalIcon from '../common/TerminalIcon';
import { useRef, useState } from 'react';
import AnimatedButton from '../common/AnimatedButton';
import CustomSelect from '../common/CustomSelect';

interface FooterProps {
  id?: string;
}

const contactInfo = [
  {
    icon: 'mail',
    title: 'Email Us',
    value: 'hello@terminal.dev',
    subtitle: 'Send us an email anytime',
    href: 'mailto:hello@terminal.dev',
  },
  {
    icon: 'call',
    title: 'Call Us',
    value: '+201551891422',
    subtitle: 'Sun\u2013Thu, 9am\u20136pm',
    href: 'tel:+201551891422',
  },
  {
    icon: 'location_on',
    title: 'Visit Us',
    value: 'Cairo, Egypt',
    subtitle: 'Schedule a meeting at our office',
  },
  {
    icon: 'schedule',
    title: 'Response Time',
    value: '24\u201348 hours',
    subtitle: "We'll get back as soon as possible",
  },
];

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'ui-ux', label: 'UI/UX Design' },
  { value: 'web-dev', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile App' },
  { value: 'fullstack', label: 'Full Stack Solution' },
  { value: 'consultation', label: 'Consultation' },
];

const timelineOptions = [
  { value: '', label: 'Select timeline' },
  { value: '2-4weeks', label: '2\u20134 weeks' },
  { value: '1-2months', label: '1\u20132 months' },
  { value: '3-6months', label: '3\u20136 months' },
  { value: 'flexible', label: 'Flexible' },
];

const Footer: React.FC<FooterProps> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [service, setService] = useState('');
  const [timeline, setTimeline] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const inputClasses =
    'w-full rounded-lg bg-white/[0.03] border border-white/10 text-mainbody-weg px-3 py-2.5 outline-none placeholder:text-white/20 font-jetbrains-mono text-sm transition-all duration-300 ease-out hover:border-white/20 hover:bg-white/[0.05] focus:border-details-red/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-details-red/20 shadow-inner-glow';

  const labelClasses =
    'text-xs font-jetbrains-mono uppercase tracking-wider text-white/50 mb-2 block transition-colors duration-300';

  return (
    <footer
      id={id}
      className="relative z-1 -mt-[100vh] h-[200vh] w-full bg-hero-dark noise-overlay"
      ref={ref}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] lg:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-details-red/20 to-transparent z-10" />

      <div className="sticky top-0 flex h-svh flex-col text-mainbody-weg ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem] mr-[0.63rem] md:mr-[1.25rem] lg:mr-[1.25rem] pt-[1.25rem] pb-[1.25rem] [clip-path:_inset(0_0_0_0)] font-inter z-5 overflow-y-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-[1rem] items-stretch">
          {/* Left Column */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative shrink-0"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-jetbrains-mono text-xs text-details-red tracking-wider">
                  // CONTACT
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-details-red/30 to-transparent max-w-[100px]" />
              </div>
              <h1 className="display-heading">
                <span className="inline-block mr-[1.875rem] md:mr-[2.19rem] lg:mr-[2.19rem] text-details-red">
                  <TerminalIcon />
                </span>
                <span>Let&apos;s talk</span>
              </h1>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-4 lg:gap-5 mt-6 lg:mt-8 flex-1"
            >
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={cardVariants}
                  className={`group relative rounded-xl glass-card p-5 lg:p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-card-dark flex flex-col overflow-hidden ${info.href ? 'cursor-pointer' : ''}`}
                  onClick={() => info.href && window.open(info.href, '_self')}
                >
                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(228, 64, 33, 0.06), transparent 60%)' }}
                  />

                  <div className="relative mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-details-red/10 border border-details-red/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-details-red group-hover:border-details-red group-hover:shadow-glow-sm transition-all duration-500">
                      <span className="material-icons-outlined text-xl lg:text-2xl text-details-red group-hover:text-white transition-colors duration-300">
                        {info.icon}
                      </span>
                    </div>
                  </div>

                  <div className="relative flex-1 flex flex-col justify-end">
                    <h3 className="font-jetbrains-mono text-[11px] lg:text-xs uppercase tracking-wider text-white/40 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-base lg:text-lg font-medium text-white/90 mb-1 group-hover:text-white transition-colors duration-300">
                      {info.value}
                    </p>
                    <p className="text-xs lg:text-sm text-white/35 leading-relaxed">
                      {info.subtitle}
                    </p>
                  </div>
                  {info.href && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-details-red">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="rounded-xl glass-card p-5 md:p-6 h-fit"
          >
              {/* Terminal-style header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.3)]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.3)]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.3)]" />
                </div>
                <div className="flex-1" />
                <span className="font-jetbrains-mono text-[10px] text-white/25 uppercase tracking-wider">
                  new_message.tsx
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-medium mb-2">
                Send us a Message
              </h2>
              <p className="text-sm text-white/40 mb-6 leading-relaxed">
                Tell us about your project and we&apos;ll get back to you within 24-48
                hours.
              </p>

              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label
                    className={`${labelClasses} ${focusedField === 'name' ? 'text-details-red' : ''}`}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Ahmed Samir"
                    className={inputClasses}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                <div>
                  <label
                    className={`${labelClasses} ${focusedField === 'email' ? 'text-details-red' : ''}`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="ahmed@example.com"
                    className={inputClasses}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                <div>
                  <label
                    className={`${labelClasses} ${focusedField === 'company' ? 'text-details-red' : ''}`}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your company"
                    className={inputClasses}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div>
                  <label
                    className={`${labelClasses} ${focusedField === 'phone' ? 'text-details-red' : ''}`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+20 123 456 7890"
                    className={inputClasses}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <CustomSelect
                  label="Service Needed"
                  labelClassName={labelClasses}
                  options={serviceOptions}
                  value={service}
                  onChange={setService}
                  placeholder="Select a service"
                />

                <CustomSelect
                  label="Timeline"
                  labelClassName={labelClasses}
                  options={timelineOptions}
                  value={timeline}
                  onChange={setTimeline}
                  placeholder="Select timeline"
                />

                <div className="md:col-span-2">
                  <label
                    className={`${labelClasses} ${focusedField === 'message' ? 'text-details-red' : ''}`}
                  >
                    Project Description *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className={`${inputClasses} resize-none`}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                <div className="md:col-span-2 mt-3">
                  <button
                    type="submit"
                    className="group relative w-full md:w-auto rounded-full border-2 border-details-red bg-details-red/10 px-8 py-3 font-jetbrains-mono text-sm text-details-red tracking-wider transition-all duration-300 hover:bg-details-red hover:text-white hover:shadow-[0_0_30px_rgba(228,64,33,0.3)] cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 transition-transform duration-300 group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>
        </div>

        {/* Footer bottom bar */}
        <div className="mt-auto pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-jetbrains-mono text-[11px] text-white/25 tracking-wider">
            &copy; {new Date().getFullYear()} Terminal IT. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
              <span key={social} className="font-jetbrains-mono text-[11px] text-white/25 hover:text-details-red cursor-pointer transition-colors duration-300 tracking-wider">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
