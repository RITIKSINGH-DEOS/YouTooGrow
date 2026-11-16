export type ServiceCategory = "youtube" | "instagram";

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDescription: string;
  deliverables: string[];
  iconName: string;
}

export interface WorkflowStep {
  stepNumber: string;
  phase: string;
  headline: string;
  description: string;
  keyOutputs: string[];
}

export interface ProofItem {
  id: string;
  platform: "youtube" | "instagram";
  metricLabel: string;
  metricValue: string;
  context: string;
  imagePlaceholderText: string;
  imageSrc?: string;
  aspectRatio: "video" | "square" | "story";
}

export interface CaseStudy {
  id: string;
  title: string;
  platform: "YouTube" | "Instagram";
  projectType: "Client Channel" | "Internal Growth Lab";
  startingMetric: string;
  resultMetric: string;
  timeframe: string;
  strategySummary: string;
  scopeOfWork: string[];
}

export interface AdvantageItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  channelOrRole: string;
  feedback: string;
  metricBadge: string;
  isPlaceholder: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
