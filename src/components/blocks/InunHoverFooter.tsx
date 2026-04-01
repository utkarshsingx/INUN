"use client";

import type { ReactNode } from "react";
import {
  Building2,
  Globe,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Share2,
} from "lucide-react";
import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "@/components/ui/hover-footer";
import { useAppPreferences } from "@/contexts/app-preferences-context";
import { INUN_LOGO_URL, INUN_SITE_URL, LMS_URL } from "@/constants";

export default function InunHoverFooter() {
  const { messages } = useAppPreferences();

  const footerSections: { title: string; links: { label: string; href: string; pulse?: boolean }[] }[] = [
    {
      title: messages.footerLearn,
      links: [
        { label: messages.footerLinkAbout, href: "#about" },
        { label: messages.footerLinkLms, href: "#lms" },
        { label: messages.footerLinkQuran, href: "#quran-arabic" },
        { label: messages.footerLinkAi, href: "#ai" },
      ],
    },
    {
      title: messages.footerResources,
      links: [
        { label: messages.footerLinkComing, href: "#coming-soon" },
        { label: messages.footerLinkOpenLms, href: LMS_URL, pulse: true },
        { label: messages.footerLinkSite, href: INUN_SITE_URL },
      ],
    },
  ];

  const contactInfo: { icon: ReactNode; text: string; href?: string }[] = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: messages.footerContactMail,
      href: INUN_SITE_URL,
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: messages.footerContactMap,
    },
  ];

  const socialMeta: { icon: ReactNode; label: string; href: string }[] = [
    { icon: <Globe size={20} />, label: messages.socialWebsite, href: INUN_SITE_URL },
    { icon: <Building2 size={20} />, label: messages.socialOrganization, href: INUN_SITE_URL },
    { icon: <MessageCircle size={20} />, label: messages.socialUpdates, href: INUN_SITE_URL },
    { icon: <Share2 size={20} />, label: messages.socialShare, href: INUN_SITE_URL },
    { icon: <Heart size={20} />, label: messages.socialCommunity, href: INUN_SITE_URL },
    { icon: <Send size={20} />, label: messages.socialContact, href: INUN_SITE_URL },
  ];

  return (
    <footer className="relative mx-auto mb-8 mt-6 h-fit w-full max-w-[min(100%,calc(100vw-1.25rem))] overflow-hidden rounded-3xl border border-emerald-950/35 bg-gradient-to-br from-[#0c1210] via-[#0f1513] to-[#0a0e0c] shadow-[0_24px_80px_-12px_rgba(6,78,59,0.35)] ring-1 ring-white/[0.06] sm:mb-10 sm:mt-8 sm:max-w-none sm:px-0 md:mx-8">
      <div className="relative z-40 mx-auto max-w-7xl px-5 py-10 sm:p-14">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-16">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <img
                src={INUN_LOGO_URL}
                alt=""
                width={120}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
              <span className="text-3xl font-bold tracking-tight text-white">
                Inun
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-300">
              {messages.footerTagline}
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-lg font-semibold text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="-mx-1 inline-flex min-h-11 items-center rounded-md px-1 py-2 text-neutral-300 transition-colors hover:text-[#3ca2fa] active:bg-white/5"
                      {...(link.href.startsWith("http")
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute -end-2.5 top-0 h-2 w-2 animate-pulse rounded-full bg-[#3ca2fa]" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              {messages.footerContact}
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center text-neutral-300 transition-colors hover:text-[#3ca2fa] active:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-neutral-300 transition-colors hover:text-[#3ca2fa]">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="relative z-10 -mx-4 hidden min-h-[14rem] select-none sm:-mx-8 lg:flex lg:min-h-[18rem]"
          aria-hidden
        >
          <TextHoverEffect text="Inun" className="h-full w-full max-w-none" />
        </div>

        <hr className="relative z-20 my-8 border-t border-emerald-900/35" />

        <div className="relative z-30 flex flex-col items-center justify-between gap-6 text-sm md:flex-row">
          <div className="flex flex-wrap justify-center gap-5 text-neutral-400">
            {socialMeta.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg p-2 text-neutral-400 transition-colors hover:text-[#3ca2fa] active:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3ca2fa]"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="max-w-md text-center text-neutral-400 md:text-end">
            &copy; {new Date().getFullYear()} Inun · {messages.footerCopyright}
          </p>
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
