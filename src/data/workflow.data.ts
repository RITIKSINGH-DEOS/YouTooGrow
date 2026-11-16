import { WorkflowStep } from "@/types/agency.types";

export const workflowSteps: WorkflowStep[] = [
  {
    stepNumber: "01",
    phase: "Research",
    headline: "Uncovering Deep Market & Viewer Intent",
    description: "We deconstruct your niche, audit existing competitors, identify content vacuums, and profile high-affinity viewers before committing resources.",
    keyOutputs: ["Competitor outlier matrix", "Underserved keyword clusters", "Ideal viewer avatar profile"],
  },
  {
    stepNumber: "02",
    phase: "Strategy",
    headline: "Formulating the Growth Blueprint",
    description: "We map out high-CTR video concepts, channel positioning, and distribution mechanics tailored to turn algorithmic impressions into committed followers.",
    keyOutputs: ["Content pillars & ratios", "Channel aesthetic guidelines", "Conversion & monetization funnel"],
  },
  {
    stepNumber: "03",
    phase: "Planning",
    headline: "Topic Selection & Script Architecture",
    description: "Every topic is tested against historical click data. We write retention-engineered scripts with ruthless first-30-second hook hooks.",
    keyOutputs: ["Tested title & concept batches", "Beat-by-beat retention scripts", "Visual B-roll & graphic cues"],
  },
  {
    stepNumber: "04",
    phase: "Production",
    headline: "High-Retention Visual & Audio Engineering",
    description: "Our editors assemble pacing-optimized timelines with custom sound design, motion graphics, color grading, and A/B thumbnail variations.",
    keyOutputs: ["Polished long-form cut & vertical reels", "Custom motion overlays & SFX", "High-contrast thumbnail pairs"],
  },
  {
    stepNumber: "05",
    phase: "Publishing",
    headline: "Algorithmic Ingestion & Timing",
    description: "We index your video metadata for search, format chapters, schedule releases during peak viewer activity, and configure cards.",
    keyOutputs: ["Search-indexed description & tags", "Timestamped chapter markers", "Community tab announcement"],
  },
  {
    stepNumber: "06",
    phase: "Optimization",
    headline: "Iterative Analytics & Retention Auditing",
    description: "We inspect retention drop-offs, click-through rates, and viewer return curves within 48 hours to inform the next creative sprint.",
    keyOutputs: ["48-hour CTR & APV teardown", "Thumbnail packaging pivots if needed", "Next-cycle creative feedback"],
  },
];
