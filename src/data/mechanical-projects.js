export const mechanicalProjects = [
  {
    slug: "kinetics-isolation",
    title: "Kinetics Vibration Isolation System",
    role: "Mechanical Design Engineer",
    year: "2021–2023",
    tools: ["SolidWorks", "AutoCAD", "FEA (Simulation)", "Design Tables"],
    industry: "HVAC / Commercial Construction",
    coverImage: null,
    summary:
      "Designed and analyzed vibration isolation assemblies for commercial HVAC equipment across multiple building projects, applying analytical vibration theory to meet strict noise and deflection specs.",
    problem:
      "Rooftop and mechanical-room HVAC units generate significant vibration that travels through building structure, causing noise complaints and premature wear on adjacent systems. Each project presented unique constraints: variable equipment weight, floor-to-floor stiffness differences, and acoustic performance targets set by MEP engineers.",
    approach:
      "Applied vibration isolation theory (natural frequency, transmissibility curves, static deflection) to select and configure Kinetics spring and pad isolators for each unit. Built parametric SolidWorks models with design tables to rapidly iterate across equipment SKUs. Coordinated with MEP drawings to verify clearance, pipe flexibility, and seismic restraint requirements per IBC and ASHRAE guidelines.",
    result:
      "Delivered isolation packages for 15+ commercial projects including office towers, hospitals, and university buildings. Achieved specified static deflections (1\"–2.5\" spring isolators) with transmissibility below 5% at operating frequencies. Zero field rejection on isolator selections during project tenure.",
    lessons:
      "Early coordination with the structural engineer on floor stiffness assumptions prevents late-stage redesigns. A well-structured design table in SolidWorks can compress what used to be a half-day selection exercise into under an hour.",
    tags: ["Vibration Analysis", "HVAC", "SolidWorks", "FEA", "Structural"],
  },
  {
    slug: "boss-display-parametric",
    title: "Boss Display — Parametric Retail Fixture Design",
    role: "Mechanical Design Engineer",
    year: "2020–2021",
    tools: ["SolidWorks", "Design Tables", "AutoCAD", "GD&T"],
    industry: "Retail / Point-of-Purchase Display",
    coverImage: null,
    summary:
      "Led parametric SolidWorks modeling for a family of configurable retail display systems, enabling rapid product customization across dozens of client SKUs without rebuilding geometry from scratch.",
    problem:
      "Retail fixture clients demanded fast turnarounds on custom display configurations — different shelf counts, widths, finishes, and branding zones. The legacy approach of building each variant as a separate model was unsustainable as order volume grew.",
    approach:
      "Restructured the fixture model family around SolidWorks design tables, linking critical dimensions (width, height, shelf pitch, material thickness) to a master spreadsheet. Created configurations for every standard variant. Wrote internal documentation so production team could generate new configs without CAD expertise. Applied GD&T to drawings to reduce shop floor ambiguity.",
    result:
      "Reduced new-variant drawing time from ~6 hours to under 45 minutes. The parametric library handled 30+ unique client configurations within the first quarter of deployment. Revision cycles dropped because drawing intent was explicit via GD&T callouts.",
    lessons:
      "Parametric modeling pays off only when the model architecture is disciplined from the start — driving child features from a skeleton sketch rather than direct dimensions. Retrofitting an undisciplined model is often slower than rebuilding clean.",
    tags: ["Parametric Design", "SolidWorks", "GD&T", "Retail", "Manufacturing"],
  },
  {
    slug: "radiall-fixtures",
    title: "Radiall — Precision Fiber Optic Test Fixtures",
    role: "Mechanical Design Engineer",
    year: "2022–2023",
    tools: ["SolidWorks", "AutoCAD", "GD&T", "Tolerance Analysis"],
    industry: "Optical Manufacturing / Aerospace",
    coverImage: null,
    summary:
      "Designed precision fixturing for fiber optic connector assembly and test operations, where tolerances in the tenths of a thousandth of an inch directly determine optical insertion loss.",
    problem:
      "Fiber optic connectors require sub-micron alignment during assembly and test. Off-the-shelf fixturing couldn't hold the positional tolerances needed for repeatable ferrule insertion force measurements. Manual setups were introducing operator-to-operator variation in test results.",
    approach:
      "Designed dedicated fixtures using precision dowel pin locating schemes with tolerance stack-up analysis to ensure ±0.0002\" positioning repeatability. Selected materials (hardened tool steel, aluminum with hard-anodize) appropriate for wear life under production volume. Worked directly with machinists to validate surface finish and hole location capabilities before releasing drawings.",
    result:
      "Fixtures achieved test repeatability within specification after first-article inspection — no rework required. Operator variation in insertion loss measurements was reduced by approximately 60% compared to manual setup. Fixtures remained in production service without modification for 18+ months.",
    lessons:
      "Tolerance stack-up analysis is non-negotiable at this precision level — gut feel will fail. Having the machinist review the drawings before release catches manufacturability issues that look fine on screen but are difficult or expensive to hold on the shop floor.",
    tags: ["Precision Fixturing", "GD&T", "Tolerance Analysis", "Optical", "Aerospace"],
  },
  {
    slug: "lifeline-trailers",
    title: "Lifeline Trailers — Emergency Response Trailer Structure",
    role: "Mechanical Design Engineer",
    year: "2021",
    tools: ["SolidWorks", "FEA (Simulation)", "AutoCAD", "Weld Symbols"],
    industry: "Emergency Response / Transportation",
    coverImage: null,
    summary:
      "Designed and structurally validated the frame and body structure for emergency response utility trailers, ensuring compliance with DOT load requirements and weld specifications for field-serviceable fabrication.",
    problem:
      "The trailers needed to carry varied and often unknown payload combinations in harsh field conditions — unpaved roads, rapid loading, and temperature extremes. The design had to be DOT-compliant, weld-fabricatable by a small metal shop, and maintainable in the field without specialized tools.",
    approach:
      "Built the full weldment assembly in SolidWorks using structural member library profiles (square HSS tubing). Ran FEA static load cases for worst-case payload distribution and dynamic road loads. Designed modular body panels for tool-free removal and field repair. Specified weld joint types and fillet sizes on drawings compatible with the fabricator's certified welder qualifications.",
    result:
      "Trailers passed DOT inspection on first submission. The modular panel design reduced field repair time by eliminating the need to cut or grind to access internal structure. FEA results confirmed safety factors exceeding 2.5× across all critical weld joints under maximum load.",
    lessons:
      "Designing for the fabricator matters as much as designing for the application. A perfectly valid engineering detail that the shop can't execute repeatable is a design failure. Regular communication with the fabricator during the drawing phase prevented several would-have-been rework cycles.",
    tags: ["Structural Design", "FEA", "Weldments", "DOT Compliance", "SolidWorks"],
  },
  {
    slug: "adb-impact-fixture",
    title: "ADB — Aerospace Impact Test Fixture",
    role: "Mechanical Design Engineer",
    year: "2022",
    tools: ["SolidWorks", "FEA", "AutoCAD", "GD&T"],
    industry: "Aerospace / Test & Measurement",
    coverImage: null,
    summary:
      "Designed a reusable impact test fixture for aerospace structural components, enabling repeatable drop-weight and pendulum impact tests at defined energy levels while safely arresting the test article.",
    problem:
      "Impact testing aerospace components requires the test article to be held in a precise, repeatable orientation relative to the impactor while also allowing post-impact inspection without disturbing the fracture state. Existing fixtures were single-use or required lengthy setup between runs.",
    approach:
      "Designed a quick-release clamping system with two-point kinematic location for consistent article positioning. FEA validated that fixture members would remain in the elastic range under worst-case impact reaction forces. Specified surface treatments to prevent galling on frequently mated interfaces. Drew up detailed assembly procedure to ensure repeatable setup by test technicians.",
    result:
      "Fixture achieved sub-±0.5° article orientation repeatability across 50+ test runs without adjustment. Post-impact article removal time dropped from ~15 minutes to under 3 minutes. The fixture design was adapted for a second component geometry with only a locating-plate swap.",
    lessons:
      "Kinematic design principles (three points define a plane, two a line, one a point) are underused in fixture design and dramatically simplify repeatability problems. The modular locating-plate approach turned a one-off fixture into a platform.",
    tags: ["Test Fixturing", "Aerospace", "FEA", "Kinematic Design", "SolidWorks"],
  },
  {
    slug: "te-connectivity-tray-former",
    title: "TE Connectivity — Automated Tray Former Tooling",
    role: "Mechanical Design Engineer",
    year: "2023",
    tools: ["SolidWorks", "AutoCAD", "GD&T", "Design for Manufacturability"],
    industry: "Electronics / Connector Manufacturing",
    coverImage: null,
    summary:
      "Designed forming tooling for an automated connector carrier-tray production line, reducing manual forming operations and improving tray dimensional consistency for downstream automated assembly equipment.",
    problem:
      "Carrier trays for TE Connectivity connectors were being formed manually, creating dimensional variation that caused misfeeds in automated assembly machines downstream. Tray flatness and slot-depth consistency were the critical dimensions.",
    approach:
      "Analyzed the root-cause dimensional variation using measurement data from rejected trays. Designed a progressive forming tool set — blanking, pilot, and form stations — using hardened D2 tool steel with TiN coating for wear life. Applied DFM principles to keep tooling serviceable in-house without specialized grinder access. Validated spring-back compensation angles empirically using initial prototype runs.",
    result:
      "Post-tooling tray flatness improved from ±0.012\" to ±0.003\". Downstream automated assembly misfeed rate dropped by over 80% within the first production month. Tooling design allowed worn form inserts to be swapped in under 30 minutes.",
    lessons:
      "Spring-back in sheet metal forming is material-batch dependent. Building empirical correction into the process (adjustable form angle via shim pack) is more robust than trying to calculate it precisely from material certificates alone.",
    tags: ["Tooling Design", "Sheet Metal", "Manufacturing", "Electronics", "DFM"],
  },
  {
    slug: "covid-face-shields",
    title: "COVID-19 Face Shield Rapid Production",
    role: "Design Lead & Production Coordinator",
    year: "2020",
    tools: ["Laser Cutting", "SolidWorks", "3D Printing", "Rapid Prototyping"],
    industry: "Medical / Emergency Manufacturing",
    coverImage: null,
    summary:
      "Designed and coordinated production of 700 face shields in two weeks during the PPE shortage of Spring 2020, adapting an open-source design for local materials and scaling from prototype to batch production.",
    problem:
      "Local healthcare workers lacked face shields at the outset of the COVID-19 pandemic. Commercial supply chains were depleted. A local response required a design that could be manufactured from materials immediately available — laser-cut acrylic, foam strip, and elastic — with zero specialized tooling and minimal per-unit labor.",
    approach:
      "Started from the Prusa RC3 open-source shield design as a reference. Re-engineered the headband for laser cutting (eliminating 3D printing bottleneck) and specified foam and elastic sourced from local fabric suppliers. Iterated three prototypes in 48 hours to dial in comfort, optical clarity, and ease of donning/doffing. Set up a small assembly line with volunteer labor, writing a one-page illustrated assembly guide to train non-technical assemblers in under 10 minutes.",
    result:
      "700 shields delivered to three local healthcare facilities in 14 days. Unit cost held under $3.50 using locally sourced materials. Design files and sourcing guide were shared publicly for replication. Zero fit or clarity complaints from end users.",
    lessons:
      "Constraints are creative forcing functions. Eliminating 3D printing from the critical path — by redesigning for laser cutting — was the single decision that made the scale and timeline possible. Documenting assembly as a simple illustrated guide reduced training time from 30 minutes to 8.",
    tags: ["Rapid Prototyping", "Laser Cutting", "Medical", "Open Source", "Manufacturing"],
  },
];
