import type { ReactNode } from "react";
import { FaUsers, FaCalendarAlt, FaChartLine, FaUniversity, FaBullhorn, FaUserTie, FaPaintBrush, FaStar } from "react-icons/fa";

export type Department = {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
};

export const departments: Department[] = [
  {
    id: "executive",
    name: "Executive Leadership",
    icon: <FaUserTie />,
    description: "The visionary leaders who guide BYEN's mission, strategy, and overall direction.",
  },
  {
    id: "finance",
    name: "Finance & Development",
    icon: <FaChartLine />,
    description:
      "Oversees financial planning, fundraising efforts, and resource development to sustain and grow BYEN.",
  },
  {
    id: "marketing",
    name: "Marketing & Branding",
    icon: <FaBullhorn />,
    description:
      "Creates and maintains BYEN's brand identity, manages communications, and promotes our mission and initiatives.",
  },
  {
    id: "communication",
    name: "Communication",
    icon: <FaPaintBrush />,
    description: "Drives visual strategy, design, and brand communication across all platforms.",
  },
  {
    id: "memberRelations",
    name: "Membership & Engagement",
    icon: <FaUsers />,
    description:
      "Responsible for member engagement, recruitment, and ensuring a positive experience for all BYEN members.",
  },
  {
    id: "programming",
    name: "Programming & Events",
    icon: <FaCalendarAlt />,
    description:
      "Plans and executes all BYEN events, workshops, and initiatives to fulfill our mission and engage our community.",
  },
  {
    id: "policy",
    name: "Policy & Advocacy",
    icon: <FaUniversity />,
    description:
      "Develops initiatives that empower youth through violence prevention, policy formulation, and strategic advocacy.",
  },
  {
    id: "chapter",
    name: "Chapter Development",
    icon: <FaStar />,
    description: "Supports local chapter growth, operational guidance, and leadership development.",
  },
];
