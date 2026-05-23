export type OfferTheme = "light" | "dark";

export interface OfferCreatorData {
  useWeLanguage: boolean;
  packageName: string;
  painPoint1: string;
  painPoint2: string;
  painPoint3: string;
  painPoint4: string;
  painPoint5: string;
  symptom1: string;
  symptom2: string;
  symptom3: string;
  symptom4: string;
  roleOverloadDetails: string;
  coreProblem: string;
  primaryOutcome: string;
  coreMechanism: string;
  buyerType: string;
  niche: string;
  toolsOrMethod: string;
  simpleOutcome: string;
  bigObstacle: string;
  onboardingFormName: string;
  workshopLength: string;
  buildStyle: string;
  deliverable1: string;
  deliverable2: string;
  deliverable3: string;
  optionalDeliverable4: string;
  clientPreferredWork: string;
  clientPainfulWork: string;
  goal1: string;
  goal2: string;
  goal3: string;
  goal4: string;
  deliverableBlock1Title: string;
  actionVerb1: string;
  component1: string;
  outcome1: string;
  subItemA: string;
  subItemB: string;
  subItemC: string;
  outcomeStatement1: string;
  deliverableBlock2Title: string;
  actionVerb2: string;
  component2: string;
  outcome2: string;
  subItemD: string;
  subItemE: string;
  subItemF: string;
  outcomeStatement2: string;
  deliverableBlock3Title: string;
  actionVerb3: string;
  component3: string;
  toolsOrProcess: string;
  subItemG: string;
  subItemH: string;
  subItemI: string;
  outcomeStatement3: string;
  monthlyPrice: string;
  setupPrice: string;
  mgmtPrice: string;
  basePrice: string;
  commissionPercent: string;
  commissionTrigger: string;
  timeFrame: string;
  ctaUrl: string;
  theme: OfferTheme;
}

export type OfferFieldKey = keyof OfferCreatorData;

export interface OfferFieldConfig {
  key: Exclude<OfferFieldKey, "useWeLanguage" | "theme">;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "number";
}

export interface OfferFieldSection {
  title: string;
  fields: OfferFieldConfig[];
  columns?: 1 | 2;
}
