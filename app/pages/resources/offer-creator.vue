<script setup lang="ts">
import { reactive, ref, computed } from "vue";

useSeoMeta({
  title: "B2B Offer Creator | TruMedia Creative",
  description:
    "Build a clearer B2B offer with this guided tool for defining buyer problems, outcomes, and deliverables.",
  ogTitle: "B2B Offer Creator | TruMedia Creative",
  ogDescription:
    "Build a clearer B2B offer with this guided tool for defining buyer problems, outcomes, and deliverables.",
});

const form = reactive({
  useWeLanguage: false,
  packageName: "Outbound Growth Engine",
  painPoint1: "Inconsistent lead generation",
  painPoint2: "Unpredictable sales pipeline",
  painPoint3: "Manual prospecting takes too much time",
  painPoint4: "Low response rates from cold outreach",
  painPoint5: "Difficulty identifying qualified prospects",
  symptom1: "Working 60+ hours but revenue stays flat",
  symptom2: "Feast or famine sales cycles",
  symptom3: "Most of your time spent chasing leads",
  symptom4: "Declining conversion rates from referrals",
  roleOverloadDetails: "sales, delivery, operations, and strategy all at once",
  coreProblem: "inconsistent, unpredictable pipeline and sales",
  primaryOutcome: "a consistent flow of qualified conversations",
  coreMechanism: "a simple, automated outbound system",
  buyerType: "B2B service businesses",
  niche: "industrial and professional services",
  toolsOrMethod: "smart data, targeted messaging, and light automation",
  simpleOutcome: "booked meetings with real buyers",
  bigObstacle: "spending all day chasing leads",
  onboardingFormName: "quick onboarding form",
  workshopLength: "60–90 minute",
  buildStyle: "live with you on the call",
  deliverable1: "Complete prospect database with contact details",
  deliverable2: "Automated email sequences for follow-up",
  deliverable3: "Custom CRM setup and training",
  optionalDeliverable4: "Monthly performance review calls",
  clientPreferredWork: "the creative and strategic work you actually enjoy",
  clientPainfulWork: "manual follow-ups and chasing cold leads",
  goal1: "Generate 5-10 qualified leads per month",
  goal2: "Reduce time spent on prospecting by 70%",
  goal3: "Increase conversion rates from outreach",
  goal4: "Build a predictable sales pipeline",
  deliverableBlock1Title: "Prospect Research & Database Setup",
  actionVerb1: "research and organize",
  component1: "target prospect database",
  outcome1: "focus your efforts on the right people",
  subItemA: "Industry-specific prospect list (500+ contacts)",
  subItemB: "Contact verification and enrichment",
  subItemC: "CRM setup with automated scoring",
  outcomeStatement1:
    "You'll have a qualified database of prospects ready to contact",
  deliverableBlock2Title: "Outreach System & Messaging",
  actionVerb2: "create and optimize",
  component2: "messaging and outreach sequences",
  outcome2: "your messages get opened and responded to",
  subItemD: "Email templates with high response rates",
  subItemE: "LinkedIn connection and follow-up sequences",
  subItemF: "A/B testing framework for optimization",
  outcomeStatement2:
    "You'll have proven messaging that consistently generates responses",
  deliverableBlock3Title: "Automation & Follow-up Systems",
  actionVerb3: "implement and configure",
  component3: "automated follow-up systems",
  toolsOrProcess: "email automation and CRM workflows",
  subItemG: "Automated email drip campaigns",
  subItemH: "Follow-up reminders and scheduling",
  subItemI: "Performance tracking and reporting",
  outcomeStatement3:
    "You'll have a system that works while you focus on closing deals",
  monthlyPrice: "2500",
  setupPrice: "3500",
  mgmtPrice: "1500",
  basePrice: "2000",
  commissionPercent: "5",
  commissionTrigger: "closed deals from booked meetings",
  timeFrame: "90 days",
  ctaUrl: "", // Add this
  theme: "light" as "light" | "dark",
});

const generated = ref("");
const errors = reactive<Record<string, string>>({});
const touched = reactive<Record<string, boolean>>({});
const formSubmitted = ref(false);

// Validation rules
const requiredFields = [
  "packageName",
  "primaryOutcome",
  "buyerType",
  "niche",
] as const;

const priceFields = [
  "monthlyPrice",
  "setupPrice",
  "mgmtPrice",
  "basePrice",
  "commissionPercent",
] as const;

const validateField = (fieldName: string, value: string): string => {
  // Required field validation
  if (requiredFields.includes(fieldName as (typeof requiredFields)[number])) {
    if (!value || value.trim() === "") {
      return "This field is required";
    }
  }

  // Numeric price validation
  if (priceFields.includes(fieldName as (typeof priceFields)[number])) {
    if (value && value.trim() !== "") {
      const numValue = parseFloat(value);
      if (isNaN(numValue) || numValue < 0) {
        return "Please enter a valid positive number";
      }
    }
  }

  return "";
};

const validateForm = (): boolean => {
  let isValid = true;
  const newErrors: Record<string, string> = {};

  // Validate required fields
  requiredFields.forEach((field) => {
    const error = validateField(field, form[field] as string);
    if (error) {
      newErrors[field] = error;
      isValid = false;
    }
  });

  // Validate price fields
  priceFields.forEach((field) => {
    const value = form[field as keyof typeof form] as string;
    const error = validateField(field, value);
    if (error) {
      newErrors[field] = error;
      isValid = false;
    }
  });

  // Clear existing errors and set new ones
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });
  Object.assign(errors, newErrors);
  return isValid;
};

const handleBlur = (fieldName: string) => {
  touched[fieldName] = true;
  const value = form[fieldName as keyof typeof form] as string;
  const error = validateField(fieldName, value);

  if (error) {
    errors[fieldName] = error;
  } else {
    errors[fieldName] = "";
  }
};

const handleInput = (fieldName: string) => {
  if (touched[fieldName] || formSubmitted.value) {
    const value = form[fieldName as keyof typeof form] as string;
    const error = validateField(fieldName, value);

    if (error) {
      errors[fieldName] = error;
    } else {
      errors[fieldName] = "";
    }
  }
};

const hasError = (fieldName: string): boolean => {
  return (touched[fieldName] || formSubmitted.value) && !!errors[fieldName];
};

const getErrorMessage = (fieldName: string): string => {
  return hasError(fieldName) ? errors[fieldName] || "" : "";
};

const activeErrors = computed(() => {
  return Object.entries(errors).filter(([_, value]) => value);
});

const getArticle = (word: string) => {
  if (!word) return "a";
  const firstChar = word.toLowerCase().charAt(0);
  return ["a", "e", "i", "o", "u"].includes(firstChar) ? "an" : "a";
};

const generateOffer = () => {
  formSubmitted.value = true;

  // Validate form before generating
  if (!validateForm()) {
    // Scroll to first error
    const firstErrorEntry = Object.entries(errors).find(([_, value]) => value);
    if (firstErrorEntry) {
      const firstErrorField = firstErrorEntry[0];
      const element = document.querySelector(
        `[data-field="${firstErrorField}"]`,
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    return;
  }

  const f = form;

  generated.value = [
    `# ${f.packageName || "[Package Name]"}`,
    "",
    "",
    "If you’re struggling with:",
    "",
    f.painPoint1 ? `- ${f.painPoint1}` : "",
    f.painPoint2 ? `- ${f.painPoint2}` : "",
    f.painPoint3 ? `- ${f.painPoint3}` : "",
    f.painPoint4 ? `- ${f.painPoint4}` : "",
    f.painPoint5 ? `- ${f.painPoint5}` : "",
    "",
    " ",
    `…then buying **${f.packageName || "[Package Name]"}** will fix that.`,
    "",
    "## Does This Sound Like You?",
    "",
    f.symptom1 ? `- ${f.symptom1}` : "",
    f.symptom2 ? `- ${f.symptom2}` : "",
    f.symptom3 ? `- ${f.symptom3}` : "",
    f.symptom4 ? `- ${f.symptom4}` : "",
    " ",
    `If so, you’re exactly who **${f.packageName || "[Package Name]"}** was built for.`,
    "",
    f.roleOverloadDetails
      ? `You’re juggling ${f.roleOverloadDetails}, and it’s impossible to make real progress when everything depends on you.`
      : "",
    "",
    `That's why ${f.useWeLanguage ? "we" : "I"} created **${f.packageName || "[Package Name]"}** – to solve **${f.coreProblem || "[core problem]"}** once and for all.`,
    "",
    "## The Promise",
    "",
    `${f.useWeLanguage ? "We help" : "I help"} you achieve **${f.primaryOutcome || "[primary outcome]"}** by delivering **${f.coreMechanism || "[core mechanism]"}** for **${f.buyerType || "[buyer type]"}** in **${f.niche || "[niche]"}**, using **${f.toolsOrMethod || "[tools/method]"}**.`,
    " ",
    "In other words:",
    "",
    `**${f.useWeLanguage ? "We help" : "I help"} you get ${f.simpleOutcome || "[simple outcome]"} without ${f.bigObstacle || "[big obstacle]"}.**`,
    "",
    "## How It Works",
    "",
    `1. You complete ${getArticle(f.onboardingFormName)} ${f.onboardingFormName || "[onboarding form]"} `,
    `2. ${f.useWeLanguage ? "We meet" : "I meet"} with you for a ${f.workshopLength || "[workshop length]"} workshop`,
    `3. ${f.useWeLanguage ? "We" : "I"} build your **${f.packageName || "[Package Name]"}** ${f.buildStyle || "[build style]"} `,
    "",
    "## You Walk Away With",
    "",
    f.deliverable1 ? `1. ${f.deliverable1}` : "",
    f.deliverable2 ? `2. ${f.deliverable2}` : "",
    f.deliverable3 ? `3. ${f.deliverable3}` : "",
    f.optionalDeliverable4 ? `4. ${f.optionalDeliverable4}` : "",
    " ",
    f.clientPreferredWork || f.clientPainfulWork
      ? `In the end, you get to focus on **${f.clientPreferredWork || "[the work you enjoy]"}**, instead of **${f.clientPainfulWork || "[the work you hate]"}**.`
      : "",
    "",
    "## Who It’s For",
    "",
    `This is for **${f.buyerType || "[buyer type]"}** who want to:`,
    "",
    f.goal1 ? `- ${f.goal1}` : "",
    f.goal2 ? `- ${f.goal2}` : "",
    f.goal3 ? `- ${f.goal3}` : "",
    f.goal4 ? `- ${f.goal4}` : "",
    "",
    "## What’s Included",
    "",
    `### 1. ${f.deliverableBlock1Title || "[Block 1 Title]"}`,
    "",
    `${f.useWeLanguage ? "We" : "I"} ${f.actionVerb1 || "[action verb]"} your ${f.component1 || "[component]"} so you can ${f.outcome1 || "[outcome]"}.`,
    "",
    "Includes:",
    "",
    f.subItemA ? `- ${f.subItemA}` : "",
    f.subItemB ? `- ${f.subItemB}` : "",
    f.subItemC ? `- ${f.subItemC}` : "",
    " ",
    f.outcomeStatement1 ? `Outcome: ${f.outcomeStatement1}` : "",
    "",
    `### 2. ${f.deliverableBlock2Title || "[Block 2 Title]"}`,
    "",
    `${f.useWeLanguage ? "We" : "I"} ${f.actionVerb2 || "[action verb]"} your ${f.component2 || "[component]"} so ${f.outcome2 || "[outcome]"}.`,
    "",
    "Includes:",
    "",
    f.subItemD ? `- ${f.subItemD}` : "",
    f.subItemE ? `- ${f.subItemE}` : "",
    f.subItemF ? `- ${f.subItemF}` : "",
    " ",
    f.outcomeStatement2 ? `Outcome: ${f.outcomeStatement2}` : "",
    "",
    `### 3. ${f.deliverableBlock3Title || "[Block 3 Title]"}`,
    "",
    `${f.useWeLanguage ? "We" : "I"} ${f.actionVerb3 || "[action verb]"} your ${f.component3 || "[component]"} using ${f.toolsOrProcess || "[tools/process]"}.`,
    "",
    "Includes:",
    "",
    f.subItemG ? `- ${f.subItemG}` : "",
    f.subItemH ? `- ${f.subItemH}` : "",
    f.subItemI ? `- ${f.subItemI}` : "",
    " ",
    f.outcomeStatement3 ? `Outcome: ${f.outcomeStatement3}` : "",
    "",
    "## Pricing Options",
    "",
    f.monthlyPrice
      ? `**Option A – Monthly Retainer**  
$${f.monthlyPrice}/month`
      : "",
    " ",
    f.setupPrice || f.mgmtPrice
      ? `**Option B – Setup + Management**  
Setup: $${f.setupPrice || "[setup price]"}  
Management: $${f.mgmtPrice || "[management price]"}/month`
      : "",
    " ",
    f.basePrice || f.commissionPercent
      ? `**Option C – Retainer + Performance**  
$${f.basePrice || "[base price]"}/month + ${f.commissionPercent || "[%]"}% of ${f.commissionTrigger || "[commission trigger]"}`
      : "",
    "",
    "## Are You Ready?",
    "",
    `Ready to get **${f.primaryOutcome || "[primary outcome]"}** for **${f.niche || "[niche]"}** without **${f.bigObstacle || "[big obstacle]"}**?`,
    `Let’s schedule your discovery call and map out your first ${f.timeFrame || "[time frame]"}.`,
  ]
    .filter(Boolean)
    .join("\n");
};

const copyToClipboard = async () => {
  if (!generated.value) return;
  try {
    await navigator.clipboard.writeText(generated.value);
    // simple UX; you can swap alerts for a toast if you plug into a UI library
    alert("Offer copied to clipboard");
  } catch {
    alert("Unable to copy. Please select and copy manually.");
  }
};

const resetForm = () => {
  // Reset to default values instead of empty strings
  form.useWeLanguage = false;
  form.packageName = "Outbound Growth Engine";
  form.painPoint1 = "Inconsistent lead generation";
  form.painPoint2 = "Unpredictable sales pipeline";
  form.painPoint3 = "Manual prospecting takes too much time";
  form.painPoint4 = "Low response rates from cold outreach";
  form.painPoint5 = "Difficulty identifying qualified prospects";
  form.symptom1 = "Working 60+ hours but revenue stays flat";
  form.symptom2 = "Feast or famine sales cycles";
  form.symptom3 = "Most of your time spent chasing leads";
  form.symptom4 = "Declining conversion rates from referrals";
  form.roleOverloadDetails =
    "sales, delivery, operations, and strategy all at once";
  form.coreProblem = "inconsistent, unpredictable pipeline and sales";
  form.primaryOutcome = "a consistent flow of qualified conversations";
  form.coreMechanism = "a simple, automated outbound system";
  form.buyerType = "B2B service businesses";
  form.niche = "industrial and professional services";
  form.toolsOrMethod = "smart data, targeted messaging, and light automation";
  form.simpleOutcome = "booked meetings with real buyers";
  form.bigObstacle = "spending all day chasing leads";
  form.onboardingFormName = "quick onboarding form";
  form.workshopLength = "60–90 minute";
  form.buildStyle = "live with you on the call";
  form.deliverable1 = "Complete prospect database with contact details";
  form.deliverable2 = "Automated email sequences for follow-up";
  form.deliverable3 = "Custom CRM setup and training";
  form.optionalDeliverable4 = "Monthly performance review calls";
  form.clientPreferredWork =
    "the creative and strategic work you actually enjoy";
  form.clientPainfulWork = "manual follow-ups and chasing cold leads";
  form.goal1 = "Generate 5-10 qualified leads per month";
  form.goal2 = "Reduce time spent on prospecting by 70%";
  form.goal3 = "Increase conversion rates from outreach";
  form.goal4 = "Build a predictable sales pipeline";
  form.deliverableBlock1Title = "Prospect Research & Database Setup";
  form.actionVerb1 = "research and organize";
  form.component1 = "target prospect database";
  form.outcome1 = "focus your efforts on the right people";
  form.subItemA = "Industry-specific prospect list (500+ contacts)";
  form.subItemB = "Contact verification and enrichment";
  form.subItemC = "CRM setup with automated scoring";
  form.outcomeStatement1 =
    "You'll have a qualified database of prospects ready to contact";
  form.deliverableBlock2Title = "Outreach System & Messaging";
  form.actionVerb2 = "create and optimize";
  form.component2 = "messaging and outreach sequences";
  form.outcome2 = "your messages get opened and responded to";
  form.subItemD = "Email templates with high response rates";
  form.subItemE = "LinkedIn connection and follow-up sequences";
  form.subItemF = "A/B testing framework for optimization";
  form.outcomeStatement2 =
    "You'll have proven messaging that consistently generates responses";
  form.deliverableBlock3Title = "Automation & Follow-up Systems";
  form.actionVerb3 = "implement and configure";
  form.component3 = "automated follow-up systems";
  form.toolsOrProcess = "email automation and CRM workflows";
  form.subItemG = "Automated email drip campaigns";
  form.subItemH = "Follow-up reminders and scheduling";
  form.subItemI = "Performance tracking and reporting";
  form.outcomeStatement3 =
    "You'll have a system that works while you focus on closing deals";
  form.monthlyPrice = "2500";
  form.setupPrice = "3500";
  form.mgmtPrice = "1500";
  form.basePrice = "2000";
  form.commissionPercent = "5";
  form.commissionTrigger = "closed deals from booked meetings";
  form.timeFrame = "90 days";
  form.ctaUrl = "";
  form.theme = "light";

  generated.value = "";
  formSubmitted.value = false;
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });
  Object.keys(touched).forEach((key) => {
    touched[key] = false;
  });
};

// Note: Future enhancements needed:
// - Add comprehensive validation and error handling for form inputs
// - Format generated offer text for better readability
// - Create downloadable PDF output functionality
// - Research better form system/library options
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-10 space-y-8">
    <header class="space-y-2">
      <h1 class="text-3xl font-bold">Offer Creator</h1>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Fill in the fields below and click “Generate Offer” to create a
        formatted document you can paste into proposals, SOWs, or landing pages.
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        <span class="text-red-600">*</span> indicates required fields
      </p>
    </header>
    <!-- Toggle Options -->
    <section class="space-y-4 border-b pb-6">
      <h2 class="text-lg font-semibold">Options</h2>
      <div class="flex items-center gap-3">
        <label class="flex items-center gap-2 cursor-pointer">
          <input v-model="form.useWeLanguage" type="checkbox" class="rounded" />
          <span class="text-sm">Use "We" instead of "I" language</span>
        </label>
      </div>
    </section>
    <form class="space-y-8" @submit.prevent="generateOffer">
      <!-- Basic Info -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Basics</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm" data-field="packageName">
            <span class="font-bold"
              >Package Name <span class="text-red-600">*</span></span
            >
            <input
              v-model="form.packageName"
              type="text"
              :class="[
                'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
                hasError('packageName')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-700',
              ]"
              placeholder="Outbound Growth Engine"
              @blur="handleBlur('packageName')"
              @input="handleInput('packageName')"
            />
            <span
              v-if="hasError('packageName')"
              class="text-xs text-red-600 mt-1"
            >
              {{ getErrorMessage("packageName") }}
            </span>
          </label>

          <label
            class="flex flex-col gap-1 text-sm"
            data-field="primaryOutcome"
          >
            <span class="font-bold"
              >Primary Outcome <span class="text-red-600">*</span></span
            >
            <input
              v-model="form.primaryOutcome"
              type="text"
              :class="[
                'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
                hasError('primaryOutcome')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-700',
              ]"
              placeholder="a consistent flow of qualified conversations"
              @blur="handleBlur('primaryOutcome')"
              @input="handleInput('primaryOutcome')"
            />
            <span
              v-if="hasError('primaryOutcome')"
              class="text-xs text-red-600 mt-1"
            >
              {{ getErrorMessage("primaryOutcome") }}
            </span>
          </label>

          <label class="flex flex-col gap-1 text-sm" data-field="buyerType">
            <span class="font-bold"
              >Buyer Type <span class="text-red-600">*</span></span
            >
            <input
              v-model="form.buyerType"
              type="text"
              :class="[
                'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
                hasError('buyerType')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-700',
              ]"
              placeholder="B2B service businesses"
              @blur="handleBlur('buyerType')"
              @input="handleInput('buyerType')"
            />
            <span
              v-if="hasError('buyerType')"
              class="text-xs text-red-600 mt-1"
            >
              {{ getErrorMessage("buyerType") }}
            </span>
          </label>

          <label class="flex flex-col gap-1 text-sm" data-field="niche">
            <span class="font-bold"
              >Niche <span class="text-red-600">*</span></span
            >
            <input
              v-model="form.niche"
              type="text"
              :class="[
                'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
                hasError('niche')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-700',
              ]"
              placeholder="industrial and professional services"
              @blur="handleBlur('niche')"
              @input="handleInput('niche')"
            />
            <span v-if="hasError('niche')" class="text-xs text-red-600 mt-1">
              {{ getErrorMessage("niche") }}
            </span>
          </label>
        </div>
      </section>

      <!-- Pain Points & Symptoms -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Pain Points &amp; Symptoms</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Pain Point 1</span>
            <input
              v-model="form.painPoint1"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Pain Point 2</span>
            <input
              v-model="form.painPoint2"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Pain Point 3</span>
            <input
              v-model="form.painPoint3"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Pain Point 4</span>
            <input
              v-model="form.painPoint4"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Pain Point 5</span>
            <input
              v-model="form.painPoint5"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Symptom 1</span>
            <input
              v-model="form.symptom1"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Symptom 2</span>
            <input
              v-model="form.symptom2"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Symptom 3</span>
            <input
              v-model="form.symptom3"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Symptom 4</span>
            <input
              v-model="form.symptom4"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm md:col-span-2">
            <span class="font-bold">Role Overload Details</span>
            <input
              v-model="form.roleOverloadDetails"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="sales, delivery, operations, and strategy all at once"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm md:col-span-2">
            <span class="font-bold">Core Problem</span>
            <input
              v-model="form.coreProblem"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="inconsistent, unpredictable pipeline and sales"
            />
          </label>
        </div>
      </section>

      <!-- Promise & Mechanism -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Promise &amp; Mechanism</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Core Mechanism</span>
            <input
              v-model="form.coreMechanism"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="a simple, automated outbound system"
            />
          </label>

          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Tools / Method</span>
            <input
              v-model="form.toolsOrMethod"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="smart data, targeted messaging, and light automation"
            />
          </label>

          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Simple Outcome (Plain English)</span>
            <input
              v-model="form.simpleOutcome"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="booked meetings with real buyers"
            />
          </label>

          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Big Obstacle</span>
            <input
              v-model="form.bigObstacle"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="spending all day chasing leads"
            />
          </label>
        </div>
      </section>

      <!-- Process -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Process</h2>
        <div class="grid gap-4 md:grid-cols-3">
          <label class="flex flex-col gap-1 text-sm md:col-span-1">
            <span class="font-bold">Onboarding Form Name</span>
            <input
              v-model="form.onboardingFormName"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="quick onboarding form"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm md:col-span-1">
            <span class="font-bold">Workshop Length</span>
            <input
              v-model="form.workshopLength"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="60–90 minute"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm md:col-span-1">
            <span class="font-bold">Build Style</span>
            <input
              v-model="form.buildStyle"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="live with you on the call"
            />
          </label>
        </div>
      </section>

      <!-- Outcomes & Deliverables -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Outcomes &amp; Deliverables</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Deliverable 1</span>
            <input
              v-model="form.deliverable1"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Deliverable 2</span>
            <input
              v-model="form.deliverable2"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Deliverable 3</span>
            <input
              v-model="form.deliverable3"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Deliverable 4 (Optional)</span>
            <input
              v-model="form.optionalDeliverable4"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Client Preferred Work</span>
            <input
              v-model="form.clientPreferredWork"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="the creative and strategic work you actually enjoy"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Client Painful Work</span>
            <input
              v-model="form.clientPainfulWork"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="manual follow-ups and chasing cold leads"
            />
          </label>
        </div>
      </section>

      <!-- Goals -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Goals</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Goal 1</span>
            <input
              v-model="form.goal1"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Goal 2</span>
            <input
              v-model="form.goal2"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Goal 3</span>
            <input
              v-model="form.goal3"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Goal 4</span>
            <input
              v-model="form.goal4"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
        </div>
      </section>

      <!-- Block 1 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Deliverable Block 1</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Block 1 Title</span>
            <input
              v-model="form.deliverableBlock1Title"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Action Verb 1</span>
            <input
              v-model="form.actionVerb1"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Component 1</span>
            <input
              v-model="form.component1"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Outcome 1</span>
            <input
              v-model="form.outcome1"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Sub Item A</span>
            <input
              v-model="form.subItemA"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Sub Item B</span>
            <input
              v-model="form.subItemB"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Sub Item C</span>
            <input
              v-model="form.subItemC"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
        </div>
        <label class="flex flex-col gap-1 text-sm">
          <span class="font-bold">Outcome Statement 1</span>
          <input
            v-model="form.outcomeStatement1"
            type="text"
            class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
          />
        </label>
      </section>

      <!-- Block 2 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Deliverable Block 2</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Block 2 Title</span>
            <input
              v-model="form.deliverableBlock2Title"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Action Verb 2</span>
            <input
              v-model="form.actionVerb2"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Component 2</span>
            <input
              v-model="form.component2"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Outcome 2</span>
            <input
              v-model="form.outcome2"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Sub Item D</span>
            <input
              v-model="form.subItemD"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Sub Item E</span>
            <input
              v-model="form.subItemE"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Sub Item F</span>
            <input
              v-model="form.subItemF"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
        </div>
        <label class="flex flex-col gap-1 text-sm">
          <span class="font-bold">Outcome Statement 2</span>
          <input
            v-model="form.outcomeStatement2"
            type="text"
            class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
          />
        </label>
      </section>

      <!-- Block 3 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Deliverable Block 3</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Block 3 Title</span>
            <input
              v-model="form.deliverableBlock3Title"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Action Verb 3</span>
            <input
              v-model="form.actionVerb3"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Component 3</span>
            <input
              v-model="form.component3"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Tools / Process</span>
            <input
              v-model="form.toolsOrProcess"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Sub Item G</span>
            <input
              v-model="form.subItemG"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Sub Item H</span>
            <input
              v-model="form.subItemH"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Sub Item I</span>
            <input
              v-model="form.subItemI"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            />
          </label>
        </div>
        <label class="flex flex-col gap-1 text-sm">
          <span class="font-bold">Outcome Statement 3</span>
          <input
            v-model="form.outcomeStatement3"
            type="text"
            class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
          />
        </label>
      </section>

      <!-- Pricing -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Pricing &amp; CTA</h2>
        <div class="grid gap-4 md:grid-cols-3">
          <label class="flex flex-col gap-1 text-sm" data-field="monthlyPrice">
            <span class="font-bold">Monthly Price</span>
            <input
              v-model="form.monthlyPrice"
              type="text"
              :class="[
                'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
                hasError('monthlyPrice')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-700',
              ]"
              placeholder="2500"
              @blur="handleBlur('monthlyPrice')"
              @input="handleInput('monthlyPrice')"
            />
            <span
              v-if="hasError('monthlyPrice')"
              class="text-xs text-red-600 mt-1"
            >
              {{ getErrorMessage("monthlyPrice") }}
            </span>
          </label>
          <label class="flex flex-col gap-1 text-sm" data-field="setupPrice">
            <span class="font-bold">Setup Price</span>
            <input
              v-model="form.setupPrice"
              type="text"
              :class="[
                'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
                hasError('setupPrice')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-700',
              ]"
              placeholder="3500"
              @blur="handleBlur('setupPrice')"
              @input="handleInput('setupPrice')"
            />
            <span
              v-if="hasError('setupPrice')"
              class="text-xs text-red-600 mt-1"
            >
              {{ getErrorMessage("setupPrice") }}
            </span>
          </label>
          <label class="flex flex-col gap-1 text-sm" data-field="mgmtPrice">
            <span class="font-bold">Management Price</span>
            <input
              v-model="form.mgmtPrice"
              type="text"
              :class="[
                'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
                hasError('mgmtPrice')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-700',
              ]"
              placeholder="1500"
              @blur="handleBlur('mgmtPrice')"
              @input="handleInput('mgmtPrice')"
            />
            <span
              v-if="hasError('mgmtPrice')"
              class="text-xs text-red-600 mt-1"
            >
              {{ getErrorMessage("mgmtPrice") }}
            </span>
          </label>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <label class="flex flex-col gap-1 text-sm" data-field="basePrice">
            <span class="font-bold">Base Price</span>
            <input
              v-model="form.basePrice"
              type="text"
              :class="[
                'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
                hasError('basePrice')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-700',
              ]"
              placeholder="2000"
              @blur="handleBlur('basePrice')"
              @input="handleInput('basePrice')"
            />
            <span
              v-if="hasError('basePrice')"
              class="text-xs text-red-600 mt-1"
            >
              {{ getErrorMessage("basePrice") }}
            </span>
          </label>
          <label
            class="flex flex-col gap-1 text-sm"
            data-field="commissionPercent"
          >
            <span class="font-bold">Commission %</span>
            <input
              v-model="form.commissionPercent"
              type="text"
              :class="[
                'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
                hasError('commissionPercent')
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-700',
              ]"
              placeholder="5"
              @blur="handleBlur('commissionPercent')"
              @input="handleInput('commissionPercent')"
            />
            <span
              v-if="hasError('commissionPercent')"
              class="text-xs text-red-600 mt-1"
            >
              {{ getErrorMessage("commissionPercent") }}
            </span>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-bold">Commission Trigger</span>
            <input
              v-model="form.commissionTrigger"
              type="text"
              class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
              placeholder="closed deals from booked meetings"
            />
          </label>
        </div>
        <label class="flex flex-col gap-1 text-sm max-w-xs">
          <span class="font-bold">Time Frame</span>
          <input
            v-model="form.timeFrame"
            type="text"
            class="border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900"
            placeholder="90 days"
          />
        </label>
      </section>

      <!-- Form Validation Error Alert -->
      <div
        v-if="formSubmitted && activeErrors.length > 0"
        class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
      >
        <div class="flex items-start gap-3">
          <Icon
            name="lucide:alert-circle"
            class="text-red-600 text-xl mt-0.5"
          />
          <div>
            <h3 class="font-semibold text-red-800 dark:text-red-200">
              Please fix the following errors:
            </h3>
            <ul
              class="mt-2 text-sm text-red-700 dark:text-red-300 list-disc list-inside"
            >
              <li v-for="[field, error] in activeErrors" :key="field">
                {{ field }}: {{ error }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex gap-4 items-center">
        <button
          type="submit"
          class="px-4 py-2 text-sm font-medium rounded bg-primary text-white dark:bg-white dark:text-black"
        >
          Generate Offer
        </button>
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium rounded border"
          @click="resetForm"
        >
          Reset
        </button>
      </div>
    </form>

    <section v-if="generated" class="space-y-4">
      <!-- Rendered markdown preview -->
      <header class="flex items-center gap-4">
        <h1 class="text-4xl font-semibold">
          TruMedia Creative Offer Generator Live Preview
        </h1>
        <button
          type="button"
          class="p-2 text-lg hover:bg-gray-100 rounded"
          @click="copyToClipboard"
        >
          <Icon name="lucide:copy" />
        </button>
      </header>
      <section>
        <LandingPreview v-bind="form" />
      </section>

      <!-- NOTE: Original markdown display - keeping for reference
      <div class="border rounded px-4 py-4 bg-white dark:bg-gray-900">

    <div
      v-html="renderedMarkdown"
      class="markdown-content"
      rows="24"
    />
    </div>
    --></section>
  </div>
</template>

<style>
.markdown-content h1 {
  font-size: 2rem;
  font-weight: bold;
  margin: 1.5rem 0 1rem 0;
  line-height: 1.2;
}

.markdown-content h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1.25rem 0 0.75rem 0;
  line-height: 1.3;
}

.markdown-content h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem 0;
  line-height: 1.4;
}

.markdown-content p {
  margin: 0.75rem 0;
  line-height: 1.6;
}

.markdown-content ul {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.markdown-content ol {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
  list-style-type: decimal;
}

.markdown-content li {
  margin: 0.25rem 0;
  line-height: 1.5;
}

.markdown-content strong {
  font-weight: bold;
}

.markdown-content em {
  font-style: italic;
}

.markdown-content hr {
  margin: 1.5rem 0;
  border: none;
  border-top: 1px solid #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  .markdown-content hr {
    border-top-color: #374151;
  }
}
</style>
