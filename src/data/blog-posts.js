export const blogPosts = [
  {
    slug: "why-im-going-back-to-school",
    title: "Why I'm Going Back to School After 7 Years in Industry",
    date: "2026-04-15",
    tags: ["Career", "Robotics", "Personal"],
    readingTime: "6 min read",
    description:
      "A candid look at why a mechanical designer with 7 years of industry experience is pursuing a master's in robotics — and what that decision actually cost to make.",
    content: `
Seven years ago I was debugging a PLC ladder logic program in a machine shop in Sonora, México. Last month I was reading a paper on model predictive control for autonomous vehicles. The arc between those two points is what this post is about.

## The comfortable ceiling

Mechanical design work in the U.S. is genuinely satisfying. There's something deeply concrete about delivering a drawing package that turns into a physical thing — a fixture, a trailer, an isolation assembly — that works exactly as you intended. I'm good at it. I've built skills in SolidWorks, GD&T, FEA, and manufacturing process design that I'm proud of.

But I hit a ceiling about two years in that I kept pretending wasn't there. The ceiling isn't capability — it's classification. When a recruiter looks at a resume with "mechanical designer" and CAD skills, they slot you. The path forward in that lane is more of the same, maybe with a CSWP or a P.E. exam in a decade.

That's not the wrong choice for everyone. It was starting to feel like the wrong choice for me.

## What I actually want to build

My undergraduate degree is in Electrical Engineering with a mechatronics specialization. I spent the first part of my career doing PLC programming and automation work — the intersection of hardware, software, and control systems. When I pivoted into mechanical design in the U.S., I brought that systems-thinking with me. But I left the actual control engineering behind.

Robotics is where those worlds converge. A robot arm is a mechanism problem, a kinematics problem, a controls problem, a software problem, and a manufacturing problem — simultaneously. That's the intersection I've been wanting to work in since I graduated.

The decision to pursue an MS in Robotics & Autonomous Systems at ASU isn't a restart. It's a reconnection with the full scope of what I'm actually interested in.

## What the seven years gave me

Every robotics PhD student I've talked to who came straight from undergrad has a gap: they understand the math but haven't designed something that has to survive a machine shop, get assembled by a technician, or hold a tolerance through 10,000 cycles.

I have that. I know what a weld symbol means. I know what spring-back does to a sheet metal form. I know why a tolerance stack-up analysis isn't optional when you're building precision fixturing. I know what it's like to have a drawing rejected and to figure out why.

That context is going to shape how I approach robotics problems — especially in manipulation, where the physical system matters as much as the algorithm.

## The plan

ASU's MS RAS program with an EE concentration covers control theory, machine learning, perception, and dynamics. I'm targeting Spring 2027 admission. Between now and then I'm building the foundations I need: filling gaps in control theory, getting reps with ROS2, and completing hands-on projects that demonstrate I can do the work.

This portfolio is part of that — both a record of what I've built and a way to force myself to articulate it clearly. Engineers who can write well get further. I'm working on that too.

If you're a recruiter in Phoenix or an ASU faculty member looking at this: I'm available for mechanical design contract work through my master's start date, and I'm interested in research discussions related to robotic manipulation and human-robot interaction.
    `,
  },
  {
    slug: "vibration-isolation-analytical-approach",
    title: "Vibration Isolation for HVAC Equipment: The Analytical Approach",
    date: "2026-05-01",
    tags: ["Mechanical Engineering", "HVAC", "Vibration", "Technical"],
    readingTime: "8 min read",
    description:
      "A practical walkthrough of the vibration isolation selection process for commercial HVAC equipment — the math that drives isolator selection and the field mistakes that happen when you skip it.",
    content: `
Most mechanical designers treat vibration isolation selection as a catalog lookup: find the equipment weight, divide by four (or however many isolators), find the load rating in the catalog, pick the part. That works often enough that nobody questions it — until it doesn't, and then there's a noise complaint from a tenant below the mechanical room.

This post covers the analytical approach. It's not complicated, but it requires understanding three concepts: static deflection, natural frequency, and transmissibility.

## Why vibration matters in buildings

HVAC equipment — fans, compressors, pumps — runs at defined RPM. Those rotational forces become vibration. If the equipment mounts rigidly to the structure, that vibration propagates through the building as structure-borne sound: the hum you hear in a conference room, the rattling in the ceiling tiles.

Isolation systems put a spring (or elastomeric pad, or air mount) between the equipment and the structure. The spring decouples the equipment mass from the floor, so most of the vibration energy stays in the equipment and doesn't enter the building.

## The three numbers you need

**Disturbing frequency (f_d):** This is the equipment's operating speed in Hz. A 1200 RPM fan runs at 20 Hz. A 3600 RPM motor runs at 60 Hz. Convert from RPM: f_d = RPM / 60.

**Natural frequency of the isolation system (f_n):** This is determined by the stiffness of your isolators and the equipment mass. For a spring-mass system:

f_n = (1 / 2π) × √(k / m)

Where k is the combined isolator stiffness (N/m) and m is the equipment mass (kg). In practice, manufacturers relate this to static deflection (δ_st in inches):

f_n ≈ 3.13 / √δ_st  (with δ_st in inches, f_n in Hz)

A 1-inch static deflection gives a natural frequency of about 3.1 Hz. A 2-inch deflection gives about 2.2 Hz.

**Transmissibility (T):** This is the fraction of disturbing force that gets through the isolation system to the structure:

T = 1 / |1 - (f_d / f_n)²|

(ignoring damping for simplicity — real isolators have some, which helps near resonance)

For effective isolation you need T well below 1. At f_d = 3 × f_n, T ≈ 0.125 (87.5% isolation). At f_d = 4 × f_n, T ≈ 0.067 (93% isolation).

The rule of thumb: design for f_d / f_n ≥ 3 for reasonable isolation. For quiet spaces (recording studios, hospital ORs, executive boardrooms), target ≥ 4.

## Worked example

**Equipment:** Rooftop AHU, 2400 lbs, centrifugal fan at 900 RPM.
**Disturbing frequency:** 900 / 60 = 15 Hz
**Isolation target:** f_d / f_n ≥ 3.5 → f_n ≤ 15 / 3.5 = 4.3 Hz
**Required static deflection:** δ_st ≥ (3.13 / 4.3)² ≈ 0.53 inches → specify 1-inch spring isolators

With four isolators: 2400 / 4 = 600 lbs per isolator. Select spring mounts rated for 600 lb load at 1-inch static deflection. Verify with manufacturer's load-deflection curve.

Transmissibility check: T = 1 / |1 - (15/3.1)²| ≈ 0.045 → ~95% isolation. That's a 26 dB vibration reduction. Good for a typical office building.

## What goes wrong in practice

**Underloading isolators:** Spring isolators have a designed operating range. Running a spring at 20% of its rated load gives you a much higher natural frequency than the catalog value — possibly near the disturbing frequency, which causes resonance amplification, not isolation.

**Ignoring the first mode:** Every isolation system has a natural frequency. If that frequency coincides with a startup transient or a VFD ramp speed, you'll see momentary resonance. VFD-driven equipment deserves a critical speed analysis or a fast-ramp profile that skips through the resonance band.

**Concrete inertia bases:** Heavy inertia bases lower the system's center of gravity and reduce the ratio of equipment mass to isolator stiffness, effectively lowering f_n. They're not magic — they're a practical tool for equipment with high dynamic forces (reciprocating compressors) where you need the base mass to keep the amplitude of motion small.

## The bottom line

Vibration isolation selection takes about 20 minutes when you do it analytically. The catalog-lookup approach occasionally produces the same answer, but you won't know which situations it doesn't until you have a complaint. The math isn't hard — it's one formula. The hard part is getting the actual operating frequency of the equipment, which sometimes requires calling the manufacturer because the nameplate only shows motor RPM, not fan RPM through the drive ratio.

Do the calculation. Write it in your submittal package. Your MEP consultant will appreciate it, and you'll have a defensible basis if the tenant calls later.
    `,
  },
];
