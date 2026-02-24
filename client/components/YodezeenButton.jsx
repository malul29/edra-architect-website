"use client";

import { useRouter, usePathname } from "next/navigation";

export default function YodezeenButton({ to = "/contact", children = "LET'S TALK" }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();

    if (pathname === '/contact') {
      // Already on contact page, just scroll
      const contactMain = document.querySelector('.contact-main');
      if (contactMain) {
        contactMain.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to contact page with hash
      router.push('/contact#main');
    }
  };

  return (
    <a href={to} onClick={handleClick} className="yodezeen-hover-btn">
      <div className="btn-inner">
        <span className="btn-text letstalk-text">{children}</span>
        <span className="btn-text sayhi-text">SAY HI</span>

        <div className="btn-circle">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </a>
  );
}
