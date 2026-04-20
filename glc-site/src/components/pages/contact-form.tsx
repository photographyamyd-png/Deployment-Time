"use client";

import { useCallback, useState } from "react";
import type { SiteConfig } from "@/content/types";

type Props = {
  site: SiteConfig;
};

export function ContactForm({ site }: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const lines = [
        `Name: ${name}`,
        `Company: ${company}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        "",
        "Project description:",
        project,
      ];
      const body = encodeURIComponent(lines.join("\n"));
      const subject = encodeURIComponent(`Project inquiry — ${company || name || "GLC web form"}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    },
    [name, company, phone, email, project, site.email],
  );

  return (
    <form className="contact-pg__form" onSubmit={onSubmit}>
      <div>
        <label className="contact-pg__label" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          className="contact-pg__input"
          autoComplete="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          required
        />
      </div>
      <div>
        <label className="contact-pg__label" htmlFor="contact-company">
          Company
        </label>
        <input
          id="contact-company"
          name="company"
          className="contact-pg__input"
          autoComplete="organization"
          value={company}
          onChange={(ev) => setCompany(ev.target.value)}
        />
      </div>
      <div>
        <label className="contact-pg__label" htmlFor="contact-phone">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          className="contact-pg__input"
          autoComplete="tel"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
          required
        />
      </div>
      <div>
        <label className="contact-pg__label" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className="contact-pg__input"
          autoComplete="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          required
        />
      </div>
      <div>
        <label className="contact-pg__label" htmlFor="contact-project">
          Project description
        </label>
        <textarea
          id="contact-project"
          name="project"
          className="contact-pg__textarea"
          value={project}
          onChange={(ev) => setProject(ev.target.value)}
          required
        />
      </div>
      <button type="submit" className="contact-pg__submit">
        Send inquiry
      </button>
    </form>
  );
}
