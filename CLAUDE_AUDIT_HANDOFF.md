# Claude Audit Handoff

Use this file as the entrypoint for auditing the current Ground Level Contracting site.

## Current State

- Repo root: `c:\Users\hutch\dev\htnl-attempts`
- App root: `glc-site/`
- Current branch: `repair/homepage-recovery-2026-04-14`
- Exact restored backup ref: `backup/pre-next16-7feb2f3`
- Commit: `7feb2f3` (`ai-hub-rebuild`)
- Local dev URL: `http://localhost:3040/`

## What To Audit

Please audit the entire site:

- content strategy and copy quality
- homepage information architecture
- page layout and visual hierarchy
- component consistency
- service page structure
- navigation and footer clarity
- design system consistency
- SEO surfaces and schema coverage
- code organization and maintainability

Focus on identifying:

- confusing or redundant copy
- missing or inconsistent page sections
- weak CTAs or content gaps
- navigation issues
- layout repetition or poor rhythm
- style drift from the design system
- SEO/schema gaps
- components or content sources that are too coupled

## Main App Structure

- `glc-site/src/app` - Next.js App Router routes
- `glc-site/src/components/layout` - header, footer, navigation
- `glc-site/src/components/sections` - homepage and shared sections
- `glc-site/src/components/services` - service-specific page components
- `glc-site/src/components/pages` - inner-page compositions
- `glc-site/src/components/seo` - JSON-LD and SEO components
- `glc-site/src/content` - JSON and TS content sources
- `glc-site/src/lib` - route, metadata, service, and schema helpers
- `glc-site/src/styles/glc-base.css` - primary design system CSS

## Key Routes

- `glc-site/src/app/page.tsx` - homepage
- `glc-site/src/app/about/page.tsx` - about
- `glc-site/src/app/contact/page.tsx` - contact
- `glc-site/src/app/services/page.tsx` - services hub
- `glc-site/src/app/services/excavation-site-preparation/page.tsx`
- `glc-site/src/app/services/foundations-civil-infrastructure/page.tsx`
- `glc-site/src/app/services/drainage-hardscaping/page.tsx`
- `glc-site/src/app/services/hauling-site-clearing-logistics/page.tsx`
- `glc-site/src/app/services/snow-removal/page.tsx`
- `glc-site/src/app/services/[slug]/page.tsx` - dynamic service landing pages
- `glc-site/src/app/locations/[slug]/page.tsx` - location landing pages
- `glc-site/src/app/sitemap.ts`
- `glc-site/src/app/robots.ts`

## Core Content Sources

- `glc-site/src/content/pages/home.json` - homepage source of truth; reused by multiple routes
- `glc-site/src/content/pages/services-index.json` - services hub content
- `glc-site/src/content/services-registry.json` - canonical service registry
- `glc-site/src/content/navigation.json` - header, mega menu, footer
- `glc-site/src/content/site.json` - business info and base SEO data
- `glc-site/src/content/pages/excavation-hub-seo.json`
- `glc-site/src/content/commercial-snow-page-data.ts`
- `glc-site/src/content/commercial-snow-faqs.ts`
- `glc-site/src/content/drainage-hardscaping-page.ts`
- `glc-site/src/content/drainage-hub-capability-tabs.ts`

## Key Homepage / Shared Sections

- `glc-site/src/components/sections/section-renderer.tsx`
- `glc-site/src/components/sections/hero-section.tsx`
- `glc-site/src/components/sections/about-section.tsx`
- `glc-site/src/components/sections/services-grid-section.tsx`
- `glc-site/src/components/sections/stats-section.tsx`
- `glc-site/src/components/sections/why-section.tsx`
- `glc-site/src/components/sections/process-section.tsx`
- `glc-site/src/components/sections/coverage-section.tsx`
- `glc-site/src/components/sections/testimonials-section.tsx`
- `glc-site/src/components/sections/parallax-type-band.tsx`
- `glc-site/src/components/sections/parallax-white-frame-band.tsx`
- `glc-site/src/components/sections/contact-strip-section.tsx`
- `glc-site/src/components/sections/cta-band-section.tsx`

## Key Layout / Navigation Files

- `glc-site/src/app/layout.tsx`
- `glc-site/src/components/layout/site-header.tsx`
- `glc-site/src/components/layout/mega-menu-services.tsx`
- `glc-site/src/components/layout/mega-menu-company.tsx`
- `glc-site/src/components/layout/mobile-drawer.tsx`
- `glc-site/src/components/layout/Footer.tsx`

## Key Service Components

- `glc-site/src/components/services/service-page-view.tsx`
- `glc-site/src/components/services/service-page-hero.tsx`
- `glc-site/src/components/services/service-hub-overview.tsx`
- `glc-site/src/components/services/service-field-capabilities.tsx`
- `glc-site/src/components/services/service-faq-section.tsx`
- `glc-site/src/components/services/service-related-services.tsx`
- `glc-site/src/components/services/commercial-snow-page-main.tsx`
- `glc-site/src/components/services/drainage-hardscaping/drainage-hub-view.tsx`

## SEO / Schema Files

- `glc-site/src/lib/seo.ts`
- `glc-site/src/lib/metadata-site.ts`
- `glc-site/src/lib/routes.ts`
- `glc-site/src/lib/service-pages.ts`
- `glc-site/src/components/seo/json-ld-local-business.tsx`
- `glc-site/src/components/seo/json-ld-service.tsx`
- `glc-site/src/components/seo/json-ld-excavation-hub.tsx`
- `glc-site/src/components/seo/json-ld-commercial-snow.tsx`
- `glc-site/src/lib/drainage-hardscaping-jsonld.ts`

## Design System / Rules

- `.cursorrules` - main project rule source
- `CLAUDE.md` - architecture and workflow notes
- `.cursor/rules/design-compliance-preflight.mdc`
- `.cursor/rules/dse-column-failure-reference.mdc`
- `.cursor/rules/service-hub-section-rhythm.mdc`
- `DESIGN-SYSTEM.md`
- `glc-site/src/styles/glc-base.css`
- `assets/glc-base.css`

## Recommended Audit Prompt

Use this repo handoff to audit the full site. Start with:

1. homepage content and layout
2. navigation / IA
3. service pages and consistency
4. design system alignment
5. SEO/schema coverage

Please return:

- critical issues first
- then medium-priority issues
- then quick wins
- include file paths for each finding
- call out duplicated content, layout drift, and weak UX patterns

## Optional Extra Context

- `_archive/` contains legacy/static reference material and older design artifacts
- the live Next app is `glc-site/`
- this handoff is meant for audit/review, not implementation
