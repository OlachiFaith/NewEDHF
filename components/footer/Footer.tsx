"use client";

import React from "react"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Header Section */}
        <div className={styles.footerHeader}>
          <div className={styles.footerLogoSection}>
            <div className={styles.footerLogoWrapper}>
              <Image
                src="/logo.png"
                alt="EDHF Logo"
                width={60}
                height={60}
                className={styles.footerLogo}
              />
            </div>
            <h2 className={styles.footerOrgName}>
              Elisha Development And
              <br />
              Humanitarian Foundation
            </h2>
          </div>
          <div className={styles.footerSocialIcons}>
            <Link href="#" aria-label="Facebook" className={styles.footerSocialLink}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram" className={styles.footerSocialLink}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </Link>
            <Link href="#" aria-label="X (Twitter)" className={styles.footerSocialLink}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="#" aria-label="YouTube" className={styles.footerSocialLink}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.footerDivider}></div>

        {/* Main Content */}
        <div className={styles.footerMainContent}>
          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Quick Link</h3>
            <nav className={styles.footerLinkList}>
              <Link href="#" className={styles.footerLink}>Home</Link>
              <Link href="#" className={styles.footerLink}>About us</Link>
              <Link href="#" className={styles.footerLink}>Contact us</Link>
              <Link href="#" className={styles.footerLink}>Blog</Link>
              <Link href="#" className={styles.footerLink}>Donate</Link>
            </nav>
          </div>

          {/* Get In Touch */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Get In Touch</h3>
            <div className={styles.footerContactInfo}>
              <div className={styles.footerContactItem}>
                <svg className={styles.footerContactIcon} viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div className={styles.footerContactText}>
                  <span className={styles.footerGreenText}>+2349044038755</span>
                  <span className={styles.footerGreenText}>+2347033959010</span>
                </div>
              </div>
              <div className={styles.footerContactItem}>
                <svg className={styles.footerContactIcon} viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div className={styles.footerContactText}>
                  <span className={styles.footerGreenText}>infoedhf@gmail.com</span>
                  <span className={styles.footerGreenText}>info@edhfnigeria.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Get Latest Update</h3>
            <form onSubmit={handleSubmit} className={styles.footerNewsletterForm}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.footerEmailInput}
                required
              />
              <button type="submit" className={styles.footerSubmitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footerDivider}></div>

        {/* Copyright */}
        <div className={styles.footerCopyright}>
          <p>
            Developed by <Link href="#" className={styles.footerCurveLink}>The Curve</Link> 🚀 | © 2026 All rights reserved, EDHF
          </p>
        </div>
      </div>
    </footer>
  );
}