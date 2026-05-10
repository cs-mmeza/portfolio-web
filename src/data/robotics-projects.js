export const roboticsProjects = [
  {
    slug: "rover-navigation",
    title: "Autonomous Rover Navigation",
    role: "Robotics Engineer (Personal Project)",
    year: "2023",
    tools: ["ROS2", "Python", "LiDAR", "SLAM", "Nav2"],
    domain: "Mobile Robotics / Autonomous Navigation",
    githubUrl: "https://github.com/cs-mmeza",
    coverImage: null,
    summary:
      "Built an autonomous ground rover capable of mapping an unknown indoor environment and navigating to goal poses using ROS2, a 2D LiDAR, and the Nav2 stack with SLAM Toolbox.",
    problem:
      "Demonstrate end-to-end autonomous navigation on real hardware — from sensor-to-map construction through goal-reaching — using only open-source tools. The goal was to build practical intuition for the ROS2 navigation stack before graduate coursework.",
    approach:
      "Assembled a differential-drive platform using off-the-shelf motors and a Raspberry Pi 4. Integrated an RPLidar A1 for 2D ranging. Implemented SLAM Toolbox for simultaneous localization and mapping, then handed the occupancy grid to Nav2's planner and controller stack. Tuned cost-map inflation radius and controller velocity limits for the platform's dynamics. Added a simple Python goal sequencer to run a multi-waypoint mission.",
    result:
      "Rover successfully mapped a 300 sq ft indoor space and executed 5-waypoint missions with obstacle avoidance at 0.3 m/s. Localization stayed within ±3 cm of ground truth measured by tape. Entire software stack runs on a $75 compute board with no GPU.",
    lessons:
      "The Nav2 stack is powerful but its default parameters assume a specific scale of robot and environment. Spending time understanding what each cost-map layer does — rather than tuning blindly — cut debugging time in half.",
    tags: ["ROS2", "SLAM", "Navigation", "Python", "LiDAR"],
  },
  {
    slug: "arm-kinematics",
    title: "6-DOF Arm Forward & Inverse Kinematics",
    role: "Robotics Engineer (Personal Project)",
    year: "2023",
    tools: ["Python", "NumPy", "Matplotlib", "DH Parameters", "Jacobian"],
    domain: "Robot Arms / Motion Planning",
    githubUrl: "https://github.com/cs-mmeza",
    coverImage: null,
    summary:
      "Implemented forward and inverse kinematics from scratch for a 6-DOF manipulator using Denavit-Hartenberg parameters and Jacobian-based iterative IK, visualized in 3D with Matplotlib.",
    problem:
      "Graduate robotics programs expect fluency in manipulator kinematics. Rather than relying on a library, the goal was to build FK and IK from first principles to develop genuine understanding of workspace geometry and singularity behavior.",
    approach:
      "Parameterized a UR5-like arm using DH conventions. Implemented forward kinematics via homogeneous transformation matrix chain. For IK, used the Jacobian pseudo-inverse method with damped least-squares to handle near-singular configurations. Added a workspace visualization showing reachable end-effector positions across joint-space samples. Validated against known UR5 FK outputs.",
    result:
      "IK solver converged to within 0.1 mm of target positions in under 20 iterations for in-workspace goals. Damped least-squares stabilized behavior at singularities without divergence. Visualization revealed the wrist-singularity zone clearly, which was valuable for understanding motion-planning constraints.",
    lessons:
      "Damped least-squares regularization feels like a hack until you understand it geometrically — it trades position accuracy for stability near singularities in a principled way. Building the visualization before completing the solver made debugging dramatically faster.",
    tags: ["Python", "Kinematics", "Jacobian", "Manipulator", "Math"],
  },
  {
    slug: "3d-perception",
    title: "3D Perception — Point Cloud Object Detection",
    role: "Robotics Engineer (Personal Project)",
    year: "2024",
    tools: ["Python", "Open3D", "PCL", "ROS2", "Depth Camera"],
    domain: "3D Perception / Computer Vision",
    githubUrl: "https://github.com/cs-mmeza",
    coverImage: null,
    summary:
      "Developed a 3D perception pipeline to detect and segment tabletop objects from depth-camera point clouds using RANSAC plane fitting, Euclidean cluster extraction, and bounding-box estimation.",
    problem:
      "Robotic manipulation requires knowing where objects are in 3D space, not just 2D image coordinates. The goal was to build a complete perception pipeline — from raw depth frames to labeled object poses — that a pick-and-place system could consume.",
    approach:
      "Captured point clouds with an Intel RealSense D435 camera. Applied voxel-grid downsampling to reduce density for real-time performance. Used RANSAC to fit and remove the dominant plane (table surface), leaving candidate object clusters. Ran Euclidean cluster extraction with tuned distance thresholds to separate individual objects. Estimated oriented bounding boxes for each cluster and published object pose estimates as ROS2 messages.",
    result:
      "Pipeline reliably detected and segmented 3–8 objects on a tabletop at 10 Hz on a laptop CPU. Bounding-box center positions were within ±5 mm of manual measurements. Cluster extraction remained stable across variable lighting conditions in a typical office environment.",
    lessons:
      "Voxel downsampling is the single biggest speed win in point cloud processing — 10× faster processing with minimal accuracy loss. The hardest parameter to tune was cluster extraction distance threshold: too tight and objects split; too loose and adjacent objects merge.",
    tags: ["Point Cloud", "Open3D", "ROS2", "RANSAC", "Perception"],
  },
  {
    slug: "drone-deep-learning",
    title: "Drone Target Tracking with Deep Learning",
    role: "Robotics Engineer (Personal Project)",
    year: "2024",
    tools: ["Python", "PyTorch", "YOLOv8", "OpenCV", "PID Control"],
    domain: "UAV / Computer Vision / Control",
    githubUrl: "https://github.com/cs-mmeza",
    coverImage: null,
    summary:
      "Built a visual target-tracking system for a quadrotor using YOLOv8 for object detection and a PID controller that drives the drone to keep the detected target centered in the frame.",
    problem:
      "Autonomous drone tracking of a moving ground target requires tight integration between perception latency and control bandwidth. The goal was to close the perception-to-actuation loop fast enough to track a walking person without oscillation or target loss.",
    approach:
      "Fine-tuned YOLOv8n on a small custom dataset of aerial-perspective pedestrian images. Ran inference at 30 fps on the drone's companion computer (Jetson Nano). Computed target pixel-offset from frame center and fed the error into a cascade PID controller (yaw rate, altitude hold) implemented in Python. Tested in a simulator (Gazebo + ArduPilot SITL) before hardware flights.",
    result:
      "System tracked a walking target at 5 m altitude with average pixel error under 20 px at 30 fps. Yaw response was stable with no sustained oscillation. Sim-to-real transfer required only PID gain re-tuning — the detection model generalized without retraining.",
    lessons:
      "Separating the PID tuning problem into two independent loops (yaw and altitude) made the system tractable. A coupled MIMO controller would have been more optimal but far harder to tune on limited flight time. Starting in simulation prevented several crashes that would have occurred tuning blind on hardware.",
    tags: ["YOLOv8", "PyTorch", "PID Control", "Drone", "Computer Vision"],
  },
];
