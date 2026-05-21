<script setup lang="ts">
import type { OfferCreatorData, OfferFieldSection } from "~/types/offer";

const props = defineProps<{
  section: OfferFieldSection;
  form: OfferCreatorData;
  hasError: (fieldName: keyof OfferCreatorData) => boolean;
  getErrorMessage: (fieldName: keyof OfferCreatorData) => string;
  handleBlur: (fieldName: keyof OfferCreatorData) => void;
  handleInput: (fieldName: keyof OfferCreatorData) => void;
}>();

const sectionClass = computed(() =>
  props.section.columns === 1 ? "grid gap-4" : "grid gap-4 md:grid-cols-2",
);
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-xl font-semibold">{{ section.title }}</h2>

    <div :class="sectionClass">
      <label
        v-for="field in section.fields"
        :key="field.key"
        class="flex flex-col gap-1 text-sm"
        :data-field="field.key"
      >
        <span class="font-bold">
          {{ field.label }}
          <span v-if="field.required" class="text-red-600">*</span>
        </span>
        <input
          v-model="form[field.key]"
          :type="field.type || 'text'"
          :placeholder="field.placeholder"
          :class="[
            'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
            hasError(field.key)
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-700',
          ]"
          @blur="handleBlur(field.key)"
          @input="handleInput(field.key)"
        />
        <span v-if="hasError(field.key)" class="text-xs text-red-600 mt-1">
          {{ getErrorMessage(field.key) }}
        </span>
      </label>
    </div>
  </section>
</template>
