# Portfolio Website & Personal Blog — Project Plan

**Owner:** Mauricio Meza
**Date:** May 2026
**Build tool:** Claude Code
**Target launch:** Before agency outreach in Phoenix begins

---

## Career Context (drives every design decision)

I'm not pivoting away from mechanical engineering — I'm trying to break out of the technical/drafter ceiling that's keeping me classified below my actual capability. My current pay and the trust I'm given at work don't reflect the engineering-level work I'm already doing.

**The career arc the website needs to communicate:**

- B.S. Electrical Engineering (Mechatronics specialization) — ITESCA, 2013
- Started as a Mechatronics Engineer (PLC programming, automation, fixture design)
- Pivoted into U.S. mechanical design / drafting market
- 7+ years building deep CAD, fixture design, structural analysis, and manufacturing skills
- Considered leveling up via SolidWorks FEA cert or pure mechanical/aerospace robotics MS
- Decided instead to return to my electrical engineering / mechatronics roots and merge them with robotics
- Current weak spots I want to upgrade: coding, control theory, advanced electrical systems
- Past coding experience: Java apps and APIs at junior level (Zurich Insurance, Revature)
- Applying to ASU MS Robotics & Autonomous Systems (EE concentration), Spring 2027

**The problem the website solves:**

I'm currently being read as a "technical contributor" rather than an engineer. The site needs to position me as a **mid-career engineer with hybrid mechanical + electrical + software depth**, who's actively investing in graduate-level credentials. Not a drafter. Not a junior. A bridge engineer.

---

## Strategic Decisions (locked)

| Decision | Choice |
|---|---|
| Site architecture | Single site, two clear sections (Option A) |
| Domain | Custom domain via Cloudflare Registrar (~$10–15/yr) |
| Stack | Astro + Tailwind CSS + MDX |
| Hosting | Cloudflare Pages (free, GitHub-deployed) |
| Repo | New private GitHub repo, public the deployed site |
| Audience priority | Phoenix recruiters first, ASU professors second |

### Why one site, not two

My career story is one narrative: mechanical designer with EE roots, leveling up via robotics master's. Two sites split SEO, double maintenance, and confuse anyone who finds one but not the other. One site with smart navigation lets each audience self-route.

### Why Astro + Tailwind + MDX

- Static HTML output → fast, no server needed, free hosting
- Built-in content collections for blog posts and project pages
- MDX lets me embed interactive components (3D viewers, diagrams) inside Markdown later
- Tailwind keeps styling in the editor — no design system to maintain
- Easy for Claude Code to work with (well-known stack, lots of patterns)

### Why Cloudflare Pages over Netlify/Vercel

- Free tier with no build minute caps
- Faster global CDN
- Free contact form handling (Cloudflare Workers / Pages Functions)
- Same vendor as the domain registrar = simpler DNS

---

## Current Site Audit (mmeza-cv.wixsite.com/myportfolio)

**Strengths:**
- LinkedIn and GitHub links present
- Skills categorized into three buckets (Manufacturing, Mechanical Design, Robotics)
- GitHub-linked robotics projects with descriptions
- Working contact form

**Issues to fix:**
1. Wix subdomain URL signals "free trial" — undermines professionalism
2. "Este sitio web fue creado con Wix" Spanish banner across the top
3. Identity confusion (Mechatronics Engineer vs. Mechanical Designer in same paragraph)
4. Project pages are thumbnails without write-ups (no problem/approach/result/lesson)
5. No CSWP badge visible
6. Robotics and mechanical compete for attention equally — no audience routing
7. Pre-2018 work only — Kinetics, Boss Display, COVID face shield project all missing
8. No blog infrastructure
9. Footer says "Mechanical Designer 2024" — undersells the engineering identity

---

## Site Map

```
mauriciomeza.com (or chosen domain)
│
├── /                    → Homepage / hero with audience routing
├── /work                → Mechanical design index (recruiter-facing)
│   ├── /work/kinetics-isolation
│   ├── /work/boss-display-parametric
│   ├── /work/radiall-fixtures
│   ├── /work/lifeline-trailers
│   ├── /work/adb-impact-fixture
│   ├── /work/te-connectivity-tray-former
│   └── /work/covid-face-shields
├── /robotics            → Robotics projects index (academic-facing)
│   ├── /robotics/rover-navigation
│   ├── /robotics/arm-kinematics
│   ├── /robotics/3d-perception
│   └── /robotics/drone-deep-learning
├── /blog                → Blog index
│   └── /blog/[post-slug]
├── /about               → My story, education, certifications
├── /resume              → Direct PDF link or embedded view
└── /contact             → Contact form + email + LinkedIn
```

---

## Homepage Audience-Routing Strategy

The hero needs to do three things in five seconds:

1. **State who I am clearly:** "Mauricio Meza — Mechanical Designer & Mechatronics Engineer"
2. **Show the credentials that matter:** CSWP badge, 7+ years experience, MS Robotics in progress
3. **Route the visitor:** Two clear paths — "View Mechanical Design Work" / "View Robotics Projects"

A Phoenix recruiter searching for a mechanical designer should see someone qualified within seconds. An ASU professor should see someone serious within seconds. Neither should have to dig.

---

## Project Page Template (CRITICAL — write before building)

Every project page answers four questions in 200–400 words:

```markdown
# [Project Name]

**Role:** [my title and scope]
**Year:** [when]
**Tools:** [SolidWorks, AutoCAD, etc.]
**Industry:** [HVAC, aerospace, optical mfg, etc.]

## The problem
What was the constraint, gap, or challenge?
What did the business or stakeholder need?

## My approach
What did I design or analyze?
What methodology did I apply (vibration theory, FEA, design tables, etc.)?
What trade-offs did I navigate?

## The result
What shipped or got delivered?
Quantified impact when possible (% efficiency, units delivered, cost savings).

## What I'd do differently
A brief, honest reflection. Shows engineering maturity.

[Image gallery: renders, drawings, photos — sanitized of any client IP]
```

**Critical:** Do NOT show proprietary client work. Use:
- Generic concept renders
- Methodology diagrams (process, not specific designs)
- Public-domain reference photos
- Sanitized drawings (logos and client names removed)

The COVID face shield project is fully mine — show the most detail there.

---

## Blog Strategy

The blog is not for daily posts. It's for substantive technical writing that signals engineering depth. Target: one strong post per month, not a diary.

### Initial post ideas (pick 2 to launch with)

1. **"Why I'm going back to school after 7 years in industry"** — personal narrative tying mechanical design to robotics master's. Makes you human and shows direction.
2. **"Vibration isolation design for HVAC equipment: the analytical approach"** — generic methodology piece based on Kinetics work, no client info.
3. **"From PLC ladder logic to ROS: what changes and what stays the same"** — bridges your mechatronics past to your robotics future.
4. **"Parametric design tables in SolidWorks: lessons from a year of complex assemblies"** — practical, useful to other designers.
5. **"Building 700 face shields in two weeks: lessons in rapid prototyping under pressure"** — the COVID project as a story.

### Why a blog matters for your career
- Demonstrates writing ability (engineers who write well get promoted)
- Creates SEO surface for your name
- Gives recruiters and PIs something to read besides a resume
- Forces you to articulate what you actually know — strengthens interview performance

---

## Build Phases

### Phase 1 — Foundation (1 evening)
- [ ] Buy domain through Cloudflare Registrar
- [ ] Create new GitHub repo (private)
- [ ] Initialize Astro project with Tailwind and MDX integrations
- [ ] Connect repo to Cloudflare Pages
- [ ] Verify a "Hello World" page deploys to the custom domain over HTTPS

### Phase 2 — Site Structure (1 evening)
- [ ] Homepage with hero, identity tagline, CSWP badge, audience-routing buttons
- [ ] /work — mechanical design index page with project cards
- [ ] /robotics — robotics projects index page
- [ ] /about — bio, education, certifications, career arc
- [ ] /blog — blog index
- [ ] Reusable project detail layout (single template, all projects use it)
- [ ] Reusable blog post layout (Markdown content + frontmatter)
- [ ] Site-wide nav and footer
- [ ] Mobile responsive layout

### Phase 3 — Content Migration (1–2 evenings)
- [ ] Migrate 5 existing mechanical projects with proper write-ups
- [ ] Migrate 4 robotics projects with descriptions
- [ ] Add Kinetics methodology page (sanitized)
- [ ] Add Boss Display parametric work page (sanitized)
- [ ] Add COVID face shield project (full detail — fully my IP)
- [ ] Write 2 starter blog posts
- [ ] Add resume PDF to /resume

### Phase 4 — Polish (1 evening)
- [ ] CSWP badge prominently in header / about page
- [ ] SEO metadata on every page (title, description, Open Graph image)
- [ ] Sitemap.xml and robots.txt
- [ ] Working contact form (Cloudflare Pages Function)
- [ ] Favicon and Open Graph social-share image
- [ ] Mobile responsiveness final pass
- [ ] Lighthouse audit (target 95+ on all metrics)
- [ ] Update LinkedIn and resume with new domain

---

## Content I Need to Write Before Coding Starts

This is the work Claude Code can't do. Without it, the site is empty.

### Project write-ups (7 mechanical + 4 robotics = 11 total)
For each project, draft answers to:
1. The problem
2. My approach
3. The result
4. What I'd do differently

### Bio for /about page (300–500 words)
The full career arc: ITESCA → mechatronics engineer → U.S. mechanical design → 7 years deep CAD work → realization that I want to merge it all with robotics → ASU master's plan.

### Two starter blog posts (500–800 words each)
Pick from the list above. The "Why I'm going back to school" post is the easiest first one because it requires no research.

### Headshot photo
A single professional photo for the homepage and /about. Phone camera is fine if the lighting is good and the background is clean.

---

## Specific Claude Code Prompts (use these in order)

### Prompt 1: Project initialization
```
Create a new Astro project in the current directory using:
- TypeScript
- Tailwind CSS
- MDX integration
- Astro's built-in content collections for blog posts and projects

Set up the folder structure for a personal portfolio site with sections
for /work (mechanical projects), /robotics (robotics projects), /blog,
/about, and /contact. Use src/content/ collections for projects and blog
posts. Configure the site for deployment to Cloudflare Pages.
```

### Prompt 2: Layout and navigation
```
Create the base layout for the site at src/layouts/BaseLayout.astro with:
- A clean header containing the name "Mauricio Meza", a Mechanical Designer
  / Mechatronics Engineer tagline, and a CSWP badge
- Site nav with links to /work, /robotics, /blog, /about, /contact
- A minimal footer with copyright, LinkedIn, and GitHub links
- SEO metadata slots for title, description, and Open Graph image
- Tailwind styling, responsive on mobile, clean and professional
- Color palette: navy primary (#1F4E79), with neutral grays — no dark mode
  for v1
```

### Prompt 3: Homepage
```
Create src/pages/index.astro as the homepage with:
- A hero section with my name, tagline, location ("Relocating to Tempe, AZ"),
  and CSWP badge
- A short paragraph describing my background (mechanical designer with EE
  roots, 7+ years industry, MS Robotics at ASU starting Spring 2027)
- Two prominent CTAs: "View Mechanical Design Work" → /work and
  "View Robotics Projects" → /robotics
- A "Recent Posts" section pulling the latest 3 blog entries
- A short "Currently" section listing my current focus
```

### Prompt 4: Project detail template
```
Create a project detail layout at src/layouts/ProjectLayout.astro that:
- Pulls frontmatter from the MDX file (title, role, year, tools, industry,
  cover image)
- Renders the four-section structure: Problem, Approach, Result, Lessons
- Has an image gallery section that supports multiple images
- Links to the parent index (/work or /robotics) at the top and bottom
- Shows "Previous / Next project" navigation
```

### Prompt 5: Blog layout
```
Create a blog post layout at src/layouts/BlogLayout.astro:
- Pulls frontmatter (title, date, tags, cover image, description)
- Renders the post body with proper typography (Tailwind Typography plugin)
- Shows reading time estimate
- Has prev/next post navigation
- Has a subtle "back to blog" link
```

### Prompt 6+: Polish (one prompt per concern)
- Contact form via Cloudflare Pages Function
- SEO and Open Graph metadata
- Sitemap and robots.txt
- 404 page

---

## Things to Decide Later (not blocking)

- Should I add a /now page (a Derek Sivers-style "what I'm currently working on")?
- Newsletter signup? (Probably not in v1 — adds complexity, low ROI)
- Comment system on blog posts? (Probably not — use LinkedIn for engagement)
- Analytics? (Plausible or Cloudflare Web Analytics — both are privacy-friendly)
- Spanish version of key pages for the Sonora/Mexico audience?

---

## Reference Links

| Resource | URL |
|---|---|
| Astro docs | https://docs.astro.build |
| Tailwind docs | https://tailwindcss.com/docs |
| Cloudflare Pages | https://pages.cloudflare.com |
| Cloudflare Registrar | https://www.cloudflare.com/products/registrar/ |
| MDX in Astro | https://docs.astro.build/en/guides/integrations-guide/mdx/ |
| Tailwind Typography | https://github.com/tailwindlabs/tailwindcss-typography |
| Astro content collections | https://docs.astro.build/en/guides/content-collections/ |

---

## Success Criteria (how I'll know the site is doing its job)

- [ ] A Phoenix recruiter who finds the site can identify me as a qualified mechanical designer in under 10 seconds
- [ ] An ASU professor who finds the site can see my robotics work in under 10 seconds
- [ ] The homepage URL fits cleanly on a resume header
- [ ] At least one project page tells a complete problem→approach→result→lesson story
- [ ] The blog has at least 2 posts at launch
- [ ] Lighthouse scores 95+ on Performance, Accessibility, Best Practices, SEO
- [ ] Site loads in under 1 second on mobile
- [ ] My LinkedIn featured section links to the new site

---

## Linked Documents and Context

- Mechanical Designer resume: `Mauricio_Meza_Mechanical_Designer_Resume.docx`
- Academic resume: `ACADEMICS_Mauricio_Meza_Resume_April_2026.pdf`
- Statement of Purpose: submitted to ASU Spring 2027 application
- Existing GitHub: github.com/csilver2

---

*This plan was developed in conversation with Claude. Update it as decisions evolve.*
