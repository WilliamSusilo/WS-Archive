import { Award, Cloud, Shield, Server, Database, Users } from "lucide-react";
import type { Certification } from "@/types/certification";

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2025",
    icon: Cloud,
    featured: true,
    description:
      "Validated skills in deploying applications, managing cloud infrastructure, monitoring services, and operating workloads on Google Cloud Platform.",
    credentialUrl:
      "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.credly.com%2Fearner%2Fearned%2Fbadge%2F46931796-4ce2-4913-a75d-108b6e9e24d3&urlhash=Xykp&mt=kjCdO-z8-uZNiNCDQZ3utDOpvqJIw9Wvlc0qIg8rin51fJOXHa366KG7ppYn1W9z7Ds0nJXuri7fpJ4RdYpug4rPAdnx&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJw%2ByHmi5QIORpccz4lZ7UQ%3D%3Dhttps://www.credly.com/badges/46931796-4ce2-4913-a75d-108b6e9e24d3/public_url",
  },

  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    year: "2025",
    icon: Shield,
    description:
      "Built foundational knowledge in cybersecurity operations, risk management, incident response, and security best practices.",
    credentialUrl:
      "https://www.credly.com/badges/a44b8619-d24f-49f9-81ba-d4c09da5ece8/linked_in_profile",
  },

  {
    name: "Become a Google Cloud Architect",
    issuer: "Dicoding",
    year: "2025",
    icon: Cloud,
    description:
      "Focused on cloud architecture, infrastructure design, scalability, and modern cloud deployment strategies.",
    credentialUrl: "https://www.dicoding.com/certificates/GRX5W09N3Z0M",
  },

  {
    name: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    year: "2024",
    icon: Cloud,
    description:
      "Learned core cloud computing concepts, infrastructure fundamentals, and Google Cloud services.",
    credentialUrl: "https://www.credly.com/badges/4a5f06d5-f812-4a8f-98be-994ba9c225d7",
  },

  {
    name: "Learn to Implement Machine Learning with Google Cloud",
    issuer: "Dicoding",
    year: "2024",
    icon: Database,
    description:
      "Applied machine learning concepts and cloud-based ML services using Google Cloud technologies.",
    credentialUrl: "https://www.dicoding.com/certificates/MRZMY33QRZYQ",
  },

  {
    name: "Become a Google Cloud Engineer",
    issuer: "Dicoding",
    year: "2024",
    icon: Cloud,
    description:
      "Demonstrated practical knowledge of Google Cloud services, infrastructure deployment, networking, security, and operations.",
    credentialUrl: "https://www.dicoding.com/certificates/6RPNY073QZ2M",
  },

  {
    name: "Learn to Build Back-End Applications for Beginners with Google Cloud",
    issuer: "Dicoding",
    year: "2024",
    icon: Server,
    description:
      "Learned the fundamentals of back-end development, including RESTful APIs, server-side architecture, data handling, and Google Cloud integration.",
    credentialUrl: "https://www.dicoding.com/certificates/4EXG7JY1QPRL",
  },

  {
    name: "Employability Skills",
    issuer: "Wadhwani Foundation",
    year: "2024",
    icon: Users,
    description:
      "Enhanced professional readiness through communication, collaboration, critical thinking, customer-centricity, and workplace productivity skills.",
    credentialUrl:
      "https://web.certificate.wfglobal.org/en/certificate?certificateId=66c978293475dc0e04b62a4b",
  },
];

export { Award };
