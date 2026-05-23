<script setup lang="ts">
import type { OfferCreatorData, OfferFieldSection } from "~/types/offer";

type OfferTextFieldKey = Exclude<keyof OfferCreatorData, "useWeLanguage" | "theme">;

const props = defineProps<{
  section: OfferFieldSection;
  formValues: OfferCreatorData;
  hasError: (fieldName: OfferTextFieldKey) => boolean;
  getErrorMessage: (fieldName: OfferTextFieldKey) => string;
  handleBlur: (fieldName: OfferTextFieldKey) => void;
  handleInput: (fieldName: OfferTextFieldKey) => void;
}>();

const emit = defineEmits<{
  updateField: [fieldName: OfferTextFieldKey, value: string];
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
          :value="formValues[field.key]"
          :type="field.type || 'text'"
          :placeholder="field.placeholder"
          :class="[
            'border rounded px-3 py-2 text-sm bg-white dark:bg-gray-900',
            hasError(field.key)
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-700',
          ]"
          @input="
            ($event) => {
              emit(
                'updateField',
                field.key,
                ($event.target as HTMLInputElement).value,
              );
              handleInput(field.key);
            }
          "
          @blur="handleBlur(field.key)"
        />
        <span v-if="hasError(field.key)" class="text-xs text-red-600 mt-1">
          {{ getErrorMessage(field.key) }}
        </span>
      </label>
    </div>
  </section>
</template>
