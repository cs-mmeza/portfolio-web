# Mauricio Meza Portfolio — Astro Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the existing Next.js repo with a full Astro + Tailwind + MDX portfolio site targeting Phoenix mechanical design recruiters and ASU MRAS-EE faculty.

**Architecture:** Astro 4 static site with content collections for work, robotics, and blog. BaseLayout wraps all pages. ProjectLayout and BlogLayout extend it. All project/blog content lives in MDX files under src/content/.

**Tech Stack:** Astro 4, Tailwind CSS 3, @astrojs/mdx, @astrojs/tailwind, Inter + JetBrains Mono (Google Fonts), Cloudflare Pages deployment.

**Visual:** Engineering dark — bg #0f1b2d, surface #162236, accent #1F4E79, bright #2d7dd2, text-primary #f1f5f9, text-muted #94a3b8.

---

## Phase 1 — Foundation: Nuke Next.js, Init Astro

### Task 1.1: Remove all Next.js files

**Files to delete:**
- `package.json`, `package-lock.json`, `next.config.js`, `postcss.config.js`, `tailwind.config.js`, `jsconfig.json`
- `src/` (entire directory)
- `public/` (entire directory)
- `README.md`

**Step 1: Delete old project files**

```bash
rm -rf src public package.json package-lock.json next.config.js postcss.config.js tailwind.config.js jsconfig.json README.md .next node_modules
```

**Step 2: Verify only Claude.md and docs/ remain**

```bash
ls -la
```
Expected: only `Claude.md`, `docs/`, `.git/`

**Step 3: Commit clean slate**

```bash
git add -A
git commit -m "chore: remove Next.js project — rebuilding with Astro"
```

---

### Task 1.2: Initialize Astro project

**Step 1: Scaffold Astro with minimal template**

```bash
npm create astro@latest . -- --template minimal --typescript strict --no-install --no-git
```

**Step 2: Install dependencies**

```bash
npm install
```

**Step 3: Add integrations**

```bash
npx astro add tailwind mdx --yes
```

**Step 4: Verify dev server starts**

```bash
npm run dev
```
Expected: Astro dev server at http://localhost:4321

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: init Astro 4 with Tailwind and MDX integrations"
```

---

### Task 1.3: Configure project structure

**Files to create:**
- `src/content/config.ts`
- `src/content/work/.gitkeep`
- `src/content/robotics/.gitkeep`
- `src/content/blog/.gitkeep`
- `src/components/.gitkeep`
- `src/layouts/.gitkeep`
- `public/fonts/.gitkeep`
- `public/images/.gitkeep`

**Step 1: Create content collection schema at `src/content/config.ts`**

```typescript
import { defineCollection, z } from 'astro:content';

const projectSchema = z.object({
  title: z.string(),
  role: z.string(),
  year: z.number(),
  tools: z.array(z.string()),
  industry: z.string(),
  cover: z.string().optional(),
  order: z.number().default(99),
  draft: z.boolean().default(false),
});

const blogSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  draft: z.boolean().default(false),
});

export const collections = {
  work: defineCollection({ type: 'content', schema: projectSchema }),
  robotics: defineCollection({ type: 'content', schema: projectSchema }),
  blog: defineCollection({ type: 'content', schema: blogSchema }),
};
```

**Step 2: Configure Tailwind at `tailwind.config.mjs`**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: '#0f1b2d',
        surface: '#162236',
        accent: '#1F4E79',
        bright: '#2d7dd2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

**Step 3: Update `src/styles/global.css` (create if missing)**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0f1b2d;
  color: #f1f5f9;
}
```

**Step 4: Add Cloudflare Pages adapter config at `astro.config.mjs`**

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://mauriciomeza.com', // update when domain is confirmed
  integrations: [tailwind(), mdx()],
  output: 'static',
});
```

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: configure content collections, Tailwind tokens, global styles"
```

---

## Phase 2 — Layout Shell

### Task 2.1: BaseLayout

**File:** `src/layouts/BaseLayout.astro`

```astro
---
export interface Props {
  title: string;
  description?: string;
  ogImage?: string;
}

const {
  title,
  description = 'Mauricio Meza — Mechanical Designer & Mechatronics Engineer based in Phoenix, AZ. 7+ years CAD/design, CSWP certified, MS Robotics candidate at ASU.',
  ogImage = '/images/og-default.png',
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={canonicalURL} />
    <link rel="canonical" href={canonicalURL} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title} — Mauricio Meza</title>
  </head>
  <body class="bg-base text-primary font-sans min-h-screen flex flex-col">
    <slot name="nav" />
    <main class="flex-1">
      <slot />
    </main>
    <slot name="footer" />
  </body>
</html>
```

**Step: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: add BaseLayout with SEO meta slots"
```

---

### Task 2.2: Nav component

**File:** `src/components/Nav.astro`

```astro
---
const navLinks = [
  { href: '/work', label: 'Design Work' },
  { href: '/robotics', label: 'Robotics' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const currentPath = Astro.url.pathname;
---

<header class="bg-surface border-b border-accent/30 sticky top-0 z-50">
  <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" class="flex flex-col leading-tight">
      <span class="font-bold text-lg text-primary tracking-tight">Mauricio Meza</span>
      <span class="text-xs text-muted font-mono">Mechanical Designer · Mechatronics Engineer</span>
    </a>
    <ul class="hidden md:flex items-center gap-6">
      {navLinks.map(({ href, label }) => (
        <li>
          <a
            href={href}
            class={`text-sm font-medium transition-colors hover:text-bright ${
              currentPath.startsWith(href) ? 'text-bright border-b border-bright pb-0.5' : 'text-muted'
            }`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
    <!-- Mobile menu button (toggle handled with minimal JS) -->
    <button
      id="mobile-menu-toggle"
      class="md:hidden text-muted hover:text-primary"
      aria-label="Toggle menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </nav>
  <!-- Mobile dropdown -->
  <div id="mobile-menu" class="hidden md:hidden bg-surface border-t border-accent/20 px-6 py-4">
    <ul class="flex flex-col gap-4">
      {navLinks.map(({ href, label }) => (
        <li><a href={href} class="text-sm text-muted hover:text-primary">{label}</a></li>
      ))}
    </ul>
  </div>
</header>

<script>
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  toggle?.addEventListener('click', () => menu?.classList.toggle('hidden'));
</script>
```

**Step: Commit**

```bash
git add src/components/Nav.astro
git commit -m "feat: add sticky nav with mobile menu"
```

---

### Task 2.3: Footer component

**File:** `src/components/Footer.astro`

```astro
---
const year = new Date().getFullYear();
---

<footer class="bg-surface border-t border-accent/30 mt-16">
  <div class="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
    <p class="text-muted text-sm">
      © {year} Mauricio Meza · Phoenix, AZ
    </p>
    <div class="flex items-center gap-6">
      <a
        href="https://linkedin.com/in/mauriciomeza"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted hover:text-bright text-sm transition-colors"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/cs-mmeza"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted hover:text-bright text-sm transition-colors"
      >
        GitHub
      </a>
      <a href="/contact" class="text-muted hover:text-bright text-sm transition-colors">
        Contact
      </a>
    </div>
  </div>
</footer>
```

**Step: Update BaseLayout to use Nav + Footer, commit**

Update `src/layouts/BaseLayout.astro` to import and render `Nav` and `Footer` directly (remove named slots, simpler):

```astro
---
import Nav from '../components/Nav.astro';
import Footer from '../components/Footer.astro';
// ... same Props interface and destructuring
---
<!DOCTYPE html>
<html lang="en">
  <head><!-- same head --></head>
  <body class="bg-base text-primary font-sans min-h-screen flex flex-col">
    <Nav />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

```bash
git add src/components/Footer.astro src/layouts/BaseLayout.astro
git commit -m "feat: add Footer, wire Nav + Footer into BaseLayout"
```

---

## Phase 3 — Homepage

### Task 3.1: Hero section + audience routing

**File:** `src/pages/index.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const recentPosts = (await getCollection('blog', ({ data }) => !data.draft))
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
  .slice(0, 3);

const recentWork = (await getCollection('work', ({ data }) => !data.draft))
  .sort((a, b) => a.data.order - b.data.order)
  .slice(0, 3);

const recentRobotics = (await getCollection('robotics', ({ data }) => !data.draft))
  .sort((a, b) => a.data.order - b.data.order)
  .slice(0, 3);
---

<BaseLayout title="Home" description="Mauricio Meza — Mechanical Designer & Mechatronics Engineer, CSWP certified, Phoenix AZ.">

  <!-- Hero -->
  <section class="max-w-6xl mx-auto px-6 pt-20 pb-16">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div class="flex-1">
        <!-- CSWP Badge -->
        <div class="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded px-3 py-1 mb-6">
          <img src="/images/cswp-badge.png" alt="CSWP Certified" class="h-5 w-5 object-contain" />
          <span class="text-xs font-mono text-bright">CSWP Certified</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold text-primary leading-tight mb-3">
          Mauricio Meza
        </h1>
        <p class="text-xl text-muted font-mono mb-2">
          Mechanical Designer · Mechatronics Engineer
        </p>
        <p class="text-sm text-muted mb-6">
          Phoenix, AZ · MS Robotics candidate, ASU Spring 2027
        </p>
        <p class="text-base text-muted max-w-xl leading-relaxed mb-8">
          7+ years designing fixtures, structural assemblies, and manufacturing tooling.
          BSEE in Mechatronics with a decade of automation and controls background.
          Bridging precision mechanical design with robotics and autonomous systems.
        </p>

        <!-- Dual CTAs -->
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="/work"
            class="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-bright text-white font-semibold rounded transition-colors"
          >
            View Mechanical Design Work
          </a>
          <a
            href="/robotics"
            class="inline-flex items-center justify-center px-6 py-3 border border-accent/60 hover:border-bright text-primary hover:text-bright font-semibold rounded transition-colors"
          >
            View Robotics Projects
          </a>
        </div>
      </div>

      <!-- Avatar placeholder -->
      <div class="w-40 h-40 md:w-48 md:h-48 rounded-full bg-surface border-2 border-accent/40 flex items-center justify-center flex-shrink-0">
        <span class="text-4xl font-bold text-accent">MM</span>
      </div>
    </div>
  </section>

  <!-- Currently -->
  <section class="max-w-6xl mx-auto px-6 py-10 border-t border-accent/20">
    <h2 class="text-xs font-mono text-muted uppercase tracking-widest mb-4">Currently</h2>
    <ul class="flex flex-col gap-2 text-sm text-muted">
      <li class="flex gap-2"><span class="text-bright">→</span> Mechanical Designer at [Current Employer] — Phoenix, AZ</li>
      <li class="flex gap-2"><span class="text-bright">→</span> Preparing ASU MS Robotics & Autonomous Systems application (EE concentration) — Spring 2027</li>
      <li class="flex gap-2"><span class="text-bright">→</span> Deepening ROS 2, control theory, and Python robotics stack</li>
    </ul>
  </section>

  <!-- Recent work teasers -->
  <section class="max-w-6xl mx-auto px-6 py-10 border-t border-accent/20">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xs font-mono text-muted uppercase tracking-widest">Recent Design Work</h2>
      <a href="/work" class="text-xs text-bright hover:underline">View all →</a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recentWork.map(project => (
        <a
          href={`/work/${project.slug}`}
          class="bg-surface border border-accent/20 rounded-lg p-5 hover:border-bright/40 transition-colors group"
        >
          <p class="text-xs font-mono text-muted mb-2">{project.data.industry} · {project.data.year}</p>
          <h3 class="text-sm font-semibold text-primary group-hover:text-bright transition-colors mb-2">{project.data.title}</h3>
          <p class="text-xs text-muted">{project.data.tools.slice(0, 3).join(' · ')}</p>
        </a>
      ))}
    </div>
  </section>

  <!-- Recent blog posts -->
  {recentPosts.length > 0 && (
    <section class="max-w-6xl mx-auto px-6 py-10 border-t border-accent/20">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xs font-mono text-muted uppercase tracking-widest">Recent Writing</h2>
        <a href="/blog" class="text-xs text-bright hover:underline">View all →</a>
      </div>
      <div class="flex flex-col gap-4">
        {recentPosts.map(post => (
          <a
            href={`/blog/${post.slug}`}
            class="flex items-start gap-4 group"
          >
            <span class="text-xs font-mono text-muted mt-0.5 w-24 flex-shrink-0">
              {post.data.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
            <span class="text-sm text-primary group-hover:text-bright transition-colors">{post.data.title}</span>
          </a>
        ))}
      </div>
    </section>
  )}

</BaseLayout>
```

**Step: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: homepage with hero, dual CTAs, currently section, work/blog strips"
```

---

## Phase 4 — Project System

### Task 4.1: ProjectLayout

**File:** `src/layouts/ProjectLayout.astro`

```astro
---
import BaseLayout from './BaseLayout.astro';
import { getCollection } from 'astro:content';

export interface Props {
  title: string;
  role: string;
  year: number;
  tools: string[];
  industry: string;
  collection: 'work' | 'robotics';
  slug: string;
}

const { title, role, year, tools, industry, collection, slug } = Astro.props;
const indexHref = `/${collection}`;
const indexLabel = collection === 'work' ? 'Design Work' : 'Robotics';

const allProjects = (await getCollection(collection))
  .sort((a, b) => a.data.order - b.data.order);
const currentIndex = allProjects.findIndex(p => p.slug === slug);
const prev = allProjects[currentIndex - 1] ?? null;
const next = allProjects[currentIndex + 1] ?? null;
---

<BaseLayout title={title}>
  <article class="max-w-3xl mx-auto px-6 py-12">
    <!-- Breadcrumb -->
    <a href={indexHref} class="text-xs font-mono text-muted hover:text-bright transition-colors">
      ← Back to {indexLabel}
    </a>

    <!-- Header -->
    <div class="mt-6 mb-10 pb-8 border-b border-accent/20">
      <h1 class="text-3xl font-bold text-primary mb-4">{title}</h1>
      <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <dt class="text-xs font-mono text-muted uppercase mb-1">Role</dt>
          <dd class="text-sm text-primary">{role}</dd>
        </div>
        <div>
          <dt class="text-xs font-mono text-muted uppercase mb-1">Year</dt>
          <dd class="text-sm text-primary">{year}</dd>
        </div>
        <div>
          <dt class="text-xs font-mono text-muted uppercase mb-1">Industry</dt>
          <dd class="text-sm text-primary">{industry}</dd>
        </div>
        <div>
          <dt class="text-xs font-mono text-muted uppercase mb-1">Tools</dt>
          <dd class="text-sm text-primary">{tools.join(', ')}</dd>
        </div>
      </dl>
    </div>

    <!-- MDX content -->
    <div class="prose prose-invert prose-sm max-w-none
      prose-headings:font-bold prose-headings:text-primary
      prose-p:text-muted prose-p:leading-relaxed
      prose-strong:text-primary prose-a:text-bright">
      <slot />
    </div>

    <!-- Prev / Next -->
    <div class="mt-16 pt-8 border-t border-accent/20 flex justify-between gap-4">
      {prev ? (
        <a href={`/${collection}/${prev.slug}`} class="text-sm text-muted hover:text-bright transition-colors">
          ← {prev.data.title}
        </a>
      ) : <span />}
      {next ? (
        <a href={`/${collection}/${next.slug}`} class="text-sm text-muted hover:text-bright transition-colors text-right">
          {next.data.title} →
        </a>
      ) : <span />}
    </div>
  </article>
</BaseLayout>
```

**Step: Commit**

```bash
git add src/layouts/ProjectLayout.astro
git commit -m "feat: ProjectLayout with metadata header, prose body, prev/next nav"
```

---

### Task 4.2: Work index page + project route

**Files:**
- `src/pages/work/index.astro`
- `src/pages/work/[...slug].astro`

**`src/pages/work/index.astro`:**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const projects = (await getCollection('work', ({ data }) => !data.draft))
  .sort((a, b) => a.data.order - b.data.order);
---

<BaseLayout
  title="Mechanical Design Work"
  description="7+ years of fixture design, structural assemblies, and manufacturing tooling. CSWP certified."
>
  <section class="max-w-6xl mx-auto px-6 py-12">
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-primary mb-3">Mechanical Design Work</h1>
      <p class="text-muted max-w-xl">
        Seven years of industrial fixture design, structural analysis, and precision manufacturing
        tooling across HVAC, aerospace, optical, and display industries.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map(project => (
        <a
          href={`/work/${project.slug}`}
          class="bg-surface border border-accent/20 rounded-lg p-6 hover:border-bright/40 transition-colors group"
        >
          <div class="flex items-start justify-between mb-3">
            <p class="text-xs font-mono text-muted">{project.data.industry}</p>
            <p class="text-xs font-mono text-muted">{project.data.year}</p>
          </div>
          <h2 class="text-lg font-semibold text-primary group-hover:text-bright transition-colors mb-2">
            {project.data.title}
          </h2>
          <p class="text-sm text-muted mb-4">{project.data.role}</p>
          <div class="flex flex-wrap gap-2">
            {project.data.tools.map(tool => (
              <span class="text-xs font-mono bg-accent/10 border border-accent/20 px-2 py-0.5 rounded text-muted">
                {tool}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </section>
</BaseLayout>
```

**`src/pages/work/[...slug].astro`:**

```astro
---
import { getCollection } from 'astro:content';
import ProjectLayout from '../../layouts/ProjectLayout.astro';

export async function getStaticPaths() {
  const projects = await getCollection('work');
  return projects.map(project => ({
    params: { slug: project.slug },
    props: { project },
  }));
}

const { project } = Astro.props;
const { Content } = await project.render();
---

<ProjectLayout
  title={project.data.title}
  role={project.data.role}
  year={project.data.year}
  tools={project.data.tools}
  industry={project.data.industry}
  collection="work"
  slug={project.slug}
>
  <Content />
</ProjectLayout>
```

**Step: Commit**

```bash
git add src/pages/work/
git commit -m "feat: /work index page and dynamic project route"
```

---

### Task 4.3: Robotics index page + project route

Same pattern as Task 4.2, using `robotics` collection.

**Files:**
- `src/pages/robotics/index.astro` (copy work/index.astro, update title, description, collection)
- `src/pages/robotics/[...slug].astro` (copy work/[...slug].astro, update collection to 'robotics')

**Step: Commit**

```bash
git add src/pages/robotics/
git commit -m "feat: /robotics index page and dynamic project route"
```

---

### Task 4.4: Mechanical project MDX stubs (7 projects)

Create each file at `src/content/work/<slug>.mdx`. Template for all:

```mdx
---
title: "Project Title"
role: "Mechanical Designer"
year: 2023
tools: ["SolidWorks", "AutoCAD"]
industry: "HVAC"
order: 1
draft: false
---

## The Problem

TODO: Describe the constraint, gap, or challenge. What did the business or stakeholder need?

## My Approach

TODO: What did you design or analyze? What methodology did you apply (vibration theory, FEA, design tables, etc.)? What trade-offs did you navigate?

## The Result

TODO: What shipped or got delivered? Quantified impact when possible.

## What I'd Do Differently

TODO: A brief, honest reflection. Shows engineering maturity.
```

**Files to create:**

| slug | title | industry | year | tools | order |
|---|---|---|---|---|---|
| `kinetics-isolation` | Kinetics HVAC Vibration Isolation | HVAC | 2022 | SolidWorks, AutoCAD, Excel | 1 |
| `boss-display-parametric` | Boss Display Parametric Assembly System | Retail Display | 2021 | SolidWorks, Design Tables | 2 |
| `radiall-fixtures` | Radiall RF Connector Assembly Fixtures | Aerospace / RF | 2023 | SolidWorks, GD&T | 3 |
| `lifeline-trailers` | Lifeline Emergency Trailer Structural Design | Emergency Response | 2020 | SolidWorks, FEA | 4 |
| `adb-impact-fixture` | ADB Impact Test Fixture | Automotive / Testing | 2022 | SolidWorks, AutoCAD | 5 |
| `te-connectivity-tray-former` | TE Connectivity Tray Former Tooling | Electrical Manufacturing | 2021 | SolidWorks, AutoCAD | 6 |
| `covid-face-shields` | COVID-19 Face Shield Rapid Production | Healthcare | 2020 | SolidWorks, 3D Printing | 7 |

**Step: Commit**

```bash
git add src/content/work/
git commit -m "feat: add 7 mechanical project MDX stubs with TODO placeholders"
```

---

### Task 4.5: Robotics project MDX stubs (4 projects)

**Files at `src/content/robotics/<slug>.mdx`:**

| slug | title | industry | year | tools | order |
|---|---|---|---|---|---|
| `rover-navigation` | Autonomous Rover Navigation | Robotics Research | 2024 | ROS 2, Python, LiDAR | 1 |
| `arm-kinematics` | 6-DOF Arm Inverse Kinematics Solver | Robotics Research | 2024 | Python, NumPy, ROS 2 | 2 |
| `3d-perception` | 3D Point Cloud Object Perception | Computer Vision | 2025 | ROS 2, PCL, Python | 3 |
| `drone-deep-learning` | Drone Target Detection (Deep Learning) | UAV / CV | 2025 | Python, PyTorch, OpenCV | 4 |

Same MDX template as mechanical stubs.

**Step: Commit**

```bash
git add src/content/robotics/
git commit -m "feat: add 4 robotics project MDX stubs with TODO placeholders"
```

---

## Phase 5 — Blog System

### Task 5.1: BlogLayout

**File:** `src/layouts/BlogLayout.astro`

```astro
---
import BaseLayout from './BaseLayout.astro';
import { getCollection } from 'astro:content';

export interface Props {
  title: string;
  date: Date;
  description: string;
  tags: string[];
  slug: string;
}

const { title, date, description, tags, slug } = Astro.props;

const allPosts = (await getCollection('blog', ({ data }) => !data.draft))
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
const currentIndex = allPosts.findIndex(p => p.slug === slug);
const prev = allPosts[currentIndex + 1] ?? null;
const next = allPosts[currentIndex - 1] ?? null;

const readingTime = Math.ceil(200 / 200); // placeholder — updated when content fills in
---

<BaseLayout title={title} description={description}>
  <article class="max-w-3xl mx-auto px-6 py-12">
    <a href="/blog" class="text-xs font-mono text-muted hover:text-bright transition-colors">
      ← Back to Blog
    </a>

    <header class="mt-6 mb-10 pb-8 border-b border-accent/20">
      <div class="flex items-center gap-3 mb-4">
        {tags.map(tag => (
          <span class="text-xs font-mono bg-accent/10 border border-accent/20 px-2 py-0.5 rounded text-muted">
            {tag}
          </span>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary mb-3">{title}</h1>
      <p class="text-sm text-muted font-mono">
        {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        · {readingTime} min read
      </p>
    </header>

    <div class="prose prose-invert prose-sm max-w-none
      prose-headings:font-bold prose-headings:text-primary
      prose-p:text-muted prose-p:leading-relaxed
      prose-strong:text-primary prose-a:text-bright">
      <slot />
    </div>

    <div class="mt-16 pt-8 border-t border-accent/20 flex justify-between gap-4">
      {prev ? (
        <a href={`/blog/${prev.slug}`} class="text-sm text-muted hover:text-bright transition-colors">
          ← {prev.data.title}
        </a>
      ) : <span />}
      {next ? (
        <a href={`/blog/${next.slug}`} class="text-sm text-muted hover:text-bright transition-colors text-right">
          {next.data.title} →
        </a>
      ) : <span />}
    </div>
  </article>
</BaseLayout>
```

**Step: Commit**

```bash
git add src/layouts/BlogLayout.astro
git commit -m "feat: BlogLayout with reading time, tags, prev/next"
```

---

### Task 5.2: Blog index + post route + 2 starter stubs

**`src/pages/blog/index.astro`:** List all posts sorted by date descending, show title + date + description + tags.

**`src/pages/blog/[...slug].astro`:** Same pattern as project routes.

**2 blog stub files at `src/content/blog/`:**

`why-im-going-back-to-school.mdx`:
```mdx
---
title: "Why I'm Going Back to School After 7 Years in Industry"
date: 2026-06-01
description: "How seven years of mechanical design led me back to my electrical engineering roots — and toward a robotics master's at ASU."
tags: ["career", "robotics", "ASU"]
draft: false
---

TODO: Write the full post. Tie together your ITESCA BSEE → mechatronics engineer → U.S. mechanical design → robotics master's arc. Make it personal and direct.
```

`vibration-isolation-hvac.mdx`:
```mdx
---
title: "Vibration Isolation Design for HVAC Equipment: The Analytical Approach"
date: 2026-07-01
description: "A methodology walkthrough for selecting and validating vibration isolation mounts — no client data, just the engineering."
tags: ["mechanical design", "HVAC", "FEA"]
draft: false
---

TODO: Write the full post. Generic methodology based on Kinetics work. No client-specific data.
```

**Step: Commit**

```bash
git add src/pages/blog/ src/content/blog/
git commit -m "feat: blog system — index, route, 2 starter post stubs"
```

---

## Phase 6 — About, Contact, Resume

### Task 6.1: About page

**File:** `src/pages/about.astro`

Sections (all using career arc from Claude.md):
1. Photo placeholder (initials circle, same as hero)
2. Career arc narrative (~3 paragraphs)
3. Education table (ITESCA BSEE Mechatronics 2013, ASU MRAS-EE planned 2027)
4. Certifications: CSWP badge + name + year
5. Skills grid: Mechanical Design / Electrical / Software / Robotics

**Step: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat: about page with career arc, education, certs, skills"
```

---

### Task 6.2: Contact page

**File:** `src/pages/contact.astro`

Simple layout:
- Heading + short paragraph
- Email link: `mauriciomeza0110@gmail.com`
- LinkedIn link: `cs-mmeza` profile
- GitHub link: `cs-mmeza`
- `mailto:` form (name, email, message) — no server needed for v1, opens mail client

**Step: Commit**

```bash
git add src/pages/contact.astro
git commit -m "feat: contact page with mailto form, email, and social links"
```

---

### Task 6.3: Resume page

**File:** `src/pages/resume.astro`

- Note: "PDF available on request" until resume.pdf is added to `public/`
- Button: `href="/resume.pdf" download` (disabled/greyed until file exists)
- Inline note: "Upload `resume.pdf` to `public/` to enable direct download"

**Step: Commit**

```bash
git add src/pages/resume.astro
git commit -m "feat: resume page — PDF download stub"
```

---

## Phase 7 — Polish

### Task 7.1: Favicon

**File:** `public/favicon.svg`

Simple "MM" monogram in navy on dark background:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#162236"/>
  <text x="16" y="22" font-family="Inter,sans-serif" font-size="13" font-weight="700"
    fill="#2d7dd2" text-anchor="middle">MM</text>
</svg>
```

**Step: Commit**

```bash
git add public/favicon.svg
git commit -m "feat: MM monogram favicon"
```

---

### Task 7.2: CSWP badge placeholder

**File:** `public/images/cswp-badge.png`

Download the official DS SolidWorks CSWP badge PNG. If not available, create a minimal SVG placeholder at `public/images/cswp-badge.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <circle cx="20" cy="20" r="19" fill="#1F4E79" stroke="#2d7dd2" stroke-width="1"/>
  <text x="20" y="25" font-family="Inter" font-size="8" font-weight="700"
    fill="white" text-anchor="middle">CSWP</text>
</svg>
```

**Step: Commit**

```bash
git add public/images/
git commit -m "feat: CSWP badge placeholder image"
```

---

### Task 7.3: 404 page

**File:** `src/pages/404.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="404 — Not Found">
  <div class="max-w-6xl mx-auto px-6 py-32 text-center">
    <p class="text-xs font-mono text-muted mb-4">404</p>
    <h1 class="text-3xl font-bold text-primary mb-4">Page not found</h1>
    <p class="text-muted mb-8">This URL doesn't exist. Check the nav above.</p>
    <a href="/" class="text-bright hover:underline text-sm font-mono">← Back to home</a>
  </div>
</BaseLayout>
```

**Step: Commit**

```bash
git add src/pages/404.astro
git commit -m "feat: 404 page"
```

---

### Task 7.4: Sitemap + robots.txt

**Step 1: Add sitemap integration**

```bash
npx astro add sitemap --yes
```

**Step 2: Update `astro.config.mjs`** to import and add `sitemap()` to integrations array.

**Step 3: Create `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://mauriciomeza.com/sitemap-index.xml
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: sitemap integration and robots.txt"
```

---

### Task 7.5: Install Tailwind Typography for prose

```bash
npm install @tailwindcss/typography
```

Update `tailwind.config.mjs` plugins:

```javascript
plugins: [require('@tailwindcss/typography')],
```

**Step: Commit**

```bash
git add tailwind.config.mjs package.json package-lock.json
git commit -m "feat: add Tailwind Typography plugin for MDX prose styling"
```

---

### Task 7.6: Final build verification

```bash
npm run build
```

Expected: build completes with no errors, `dist/` directory created.

```bash
npx astro preview
```

Verify all routes load: `/`, `/work`, `/robotics`, `/blog`, `/about`, `/contact`, `/resume`

**Step: Commit any fixes, then final commit**

```bash
git add -A
git commit -m "chore: final build verification pass"
```

---

## What's Left for You (Content Swaps)

After the build is live, replace these placeholders:

| Item | Where | What to do |
|---|---|---|
| Project write-ups | `src/content/work/*.mdx` + `src/content/robotics/*.mdx` | Replace TODO sections |
| Blog posts | `src/content/blog/*.mdx` | Write full posts |
| Headshot | `public/images/headshot.jpg` | Add photo, update `index.astro` + `about.astro` |
| CSWP badge | `public/images/cswp-badge.png` | Replace SVG with official PNG |
| Resume PDF | `public/resume.pdf` | Upload and enable download link |
| LinkedIn URL | `src/components/Footer.astro` + `src/pages/contact.astro` | Set real LinkedIn profile URL |
| Domain | `astro.config.mjs` + `public/robots.txt` | Update site URL |
| Employer name | `src/pages/index.astro` Currently section | Update placeholder |
