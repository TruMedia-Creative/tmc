<script setup lang="ts">
import type { OfferCreatorData } from "~/types/offer";
import { getArticle } from "~/utils/offerGenerator";

const props = defineProps<{
  offer: OfferCreatorData;
}>();

const numbered = (values: string[]) =>
  values.map((value, index) => ({ id: `${index + 1}`, value })).filter((entry) => entry.value);

const painPoints = computed(() =>
  [
    props.offer.painPoint1,
    props.offer.painPoint2,
    props.offer.painPoint3,
    props.offer.painPoint4,
    props.offer.painPoint5,
  ].filter(Boolean),
);

const symptoms = computed(() =>
  [
    props.offer.symptom1,
    props.offer.symptom2,
    props.offer.symptom3,
    props.offer.symptom4,
  ].filter(Boolean),
);

const deliverables = computed(() =>
  numbered([
    props.offer.deliverable1,
    props.offer.deliverable2,
    props.offer.deliverable3,
    props.offer.optionalDeliverable4,
  ]),
);

const goals = computed(() =>
  [props.offer.goal1, props.offer.goal2, props.offer.goal3, props.offer.goal4].filter(Boolean),
);

const processSteps = computed(() =>
  numbered([
    `You complete ${getArticle(props.offer.onboardingFormName)} ${props.offer.onboardingFormName || "quick onboarding form"}`,
    `${props.offer.useWeLanguage ? "We meet" : "I meet"} with you for a ${props.offer.workshopLength || "60-90 minute"} workshop`,
    `${props.offer.useWeLanguage ? "We" : "I"} build your ${props.offer.packageName || "system"} ${props.offer.buildStyle || "live with you on the call"}`,
  ]),
);

const includedBlocks = computed(() => [
  {
    title: props.offer.deliverableBlock1Title,
    intro: `${props.offer.useWeLanguage ? "We" : "I"} ${props.offer.actionVerb1} your ${props.offer.component1} so you can ${props.offer.outcome1}.`,
    items: [props.offer.subItemA, props.offer.subItemB, props.offer.subItemC].filter(Boolean),
    outcome: props.offer.outcomeStatement1,
  },
  {
    title: props.offer.deliverableBlock2Title,
    intro: `${props.offer.useWeLanguage ? "We" : "I"} ${props.offer.actionVerb2} your ${props.offer.component2} so ${props.offer.outcome2}.`,
    items: [props.offer.subItemD, props.offer.subItemE, props.offer.subItemF].filter(Boolean),
    outcome: props.offer.outcomeStatement2,
  },
  {
    title: props.offer.deliverableBlock3Title,
    intro: `${props.offer.useWeLanguage ? "We" : "I"} ${props.offer.actionVerb3} your ${props.offer.component3} using ${props.offer.toolsOrProcess}.`,
    items: [props.offer.subItemG, props.offer.subItemH, props.offer.subItemI].filter(Boolean),
    outcome: props.offer.outcomeStatement3,
  },
]);

const pricingOptions = computed(() =>
  [
    props.offer.monthlyPrice
      ? { title: "Option A – Monthly Retainer", body: `$${props.offer.monthlyPrice}/month` }
      : null,
    props.offer.setupPrice || props.offer.mgmtPrice
      ? {
          title: "Option B – Setup + Management",
          body: `Setup: $${props.offer.setupPrice}\nManagement: $${props.offer.mgmtPrice}/month`,
        }
      : null,
    props.offer.basePrice || props.offer.commissionPercent
      ? {
          title: "Option C – Retainer + Performance",
          body: `$${props.offer.basePrice}/month + ${props.offer.commissionPercent}% of ${props.offer.commissionTrigger}`,
        }
      : null,
  ].filter(Boolean) as { title: string; body: string }[],
);
</script>

<template>
  <div
    class="h-full max-h-[1200px] overflow-y-auto rounded-2xl border border-slate-300 bg-sky-100 text-slate-900 shadow-2xl"
  >
    <section class="px-8 py-16 text-center space-y-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <h1 class="text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {{ offer.packageName || "Your Package Name" }}
      </h1>
      <p class="text-2xl font-medium max-w-4xl mx-auto text-slate-700">
        Get <span class="font-bold text-emerald-600">{{ offer.simpleOutcome || "your desired outcome" }}</span>
        without <span class="font-bold text-red-500">{{ offer.bigObstacle || "the usual obstacles" }}</span>
      </p>
      <a
        :href="offer.ctaUrl || '#'"
        class="inline-flex items-center justify-center rounded-full px-10 py-5 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        {{ offer.primaryOutcome || "Get Started Today" }}
      </a>
    </section>

    <section class="px-8 py-16 space-y-10">
      <h2 class="text-4xl font-black text-center text-red-600">Are You Struggling With...</h2>
      <ul class="space-y-4 max-w-3xl mx-auto">
        <li v-for="point in painPoints" :key="point" class="flex items-start gap-4 p-4 rounded-xl bg-red-50">
          <div class="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">✗</div>
          <span class="text-lg">{{ point }}</span>
        </li>
      </ul>
    </section>

    <section class="px-8 py-16 space-y-10 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <h2 class="text-4xl font-black text-center text-amber-600">Does This Sound Like You?</h2>
      <div class="grid gap-6 max-w-4xl mx-auto md:grid-cols-2">
        <div v-for="symptom in symptoms" :key="symptom" class="p-6 rounded-2xl border bg-white/95 border-amber-200">
          <span class="text-lg leading-relaxed">{{ symptom }}</span>
        </div>
      </div>
      <p v-if="offer.roleOverloadDetails" class="text-lg text-center max-w-4xl mx-auto text-slate-600">
        You're juggling <strong>{{ offer.roleOverloadDetails }}</strong>, and it's impossible to make real progress when everything depends on you.
      </p>
    </section>

    <section class="px-8 py-16 space-y-10">
      <h2 class="text-4xl font-black text-center text-blue-600">How It Works</h2>
      <div class="max-w-4xl mx-auto space-y-8">
        <div v-for="step in processSteps" :key="step.id" class="flex items-start gap-6 p-6 rounded-2xl bg-blue-50">
          <div class="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">{{ step.id }}</div>
          <p class="text-xl leading-relaxed">{{ step.value }}</p>
        </div>
      </div>
    </section>

    <section class="px-8 py-16 space-y-10 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50">
      <h2 class="text-4xl font-black text-center text-emerald-600">You Walk Away With</h2>
      <div class="grid gap-8 max-w-4xl mx-auto">
        <div v-for="deliverable in deliverables" :key="deliverable.id" class="flex items-start gap-6 p-8 rounded-3xl border bg-white/95 border-emerald-200">
          <div class="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-black">{{ deliverable.id }}</div>
          <span class="text-xl leading-relaxed font-medium">{{ deliverable.value }}</span>
        </div>
      </div>
    </section>

    <section class="px-8 py-16 space-y-10">
      <h2 class="text-4xl font-black text-center text-purple-600">What's Included</h2>
      <div class="max-w-4xl mx-auto space-y-8">
        <div v-for="block in includedBlocks" :key="block.title" class="p-8 rounded-2xl border bg-white">
          <h3 class="text-2xl font-bold mb-3">{{ block.title }}</h3>
          <p class="mb-4 text-slate-700">{{ block.intro }}</p>
          <ul class="list-disc list-inside space-y-1">
            <li v-for="item in block.items" :key="item">{{ item }}</li>
          </ul>
          <p v-if="block.outcome" class="mt-4 font-semibold text-emerald-600">Outcome: {{ block.outcome }}</p>
        </div>
      </div>
    </section>

    <section class="px-8 py-16 space-y-10 bg-slate-900 text-white">
      <h2 class="text-4xl font-black text-center">Pricing Options</h2>
      <div class="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
        <div v-for="option in pricingOptions" :key="option.title" class="p-6 rounded-xl bg-slate-800 border border-slate-700">
          <h3 class="font-bold mb-2">{{ option.title }}</h3>
          <p class="whitespace-pre-line text-slate-200">{{ option.body }}</p>
        </div>
      </div>
    </section>

    <section class="px-8 py-16 space-y-6 text-center">
      <h2 class="text-4xl font-black">Are You Ready?</h2>
      <p class="text-xl max-w-4xl mx-auto">
        Ready to get <strong>{{ offer.primaryOutcome }}</strong> for
        <strong>{{ offer.niche }}</strong> without <strong>{{ offer.bigObstacle }}</strong>?
      </p>
      <p class="text-lg text-slate-600">Let's schedule your discovery call and map out your first {{ offer.timeFrame }}.</p>
      <p v-if="goals.length" class="text-sm text-slate-500">Top goals: {{ goals.join(" • ") }}</p>
    </section>
  </div>
</template>
