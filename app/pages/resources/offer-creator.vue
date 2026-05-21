<script setup lang="ts">
import { OFFER_FIELD_SECTIONS } from "~/constants/offerCreator";

const {
  form,
  generated,
  activeErrors,
  hasError,
  getErrorMessage,
  handleBlur,
  handleInput,
  generateOffer,
  resetForm,
} = useOfferCreatorForm();

const copyToClipboard = async () => {
  if (!generated.value) return;

  try {
    await navigator.clipboard.writeText(generated.value);
    alert("Offer copied to clipboard");
  } catch {
    alert("Unable to copy. Please select and copy manually.");
  }
};
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

    <section class="space-y-4 border-b pb-6">
      <h2 class="text-lg font-semibold">Options</h2>
      <label class="flex items-center gap-2 cursor-pointer">
        <input v-model="form.useWeLanguage" type="checkbox" class="rounded" />
        <span class="text-sm">Use "We" instead of "I" language</span>
      </label>
    </section>

    <form class="space-y-8" @submit.prevent="generateOffer">
      <OfferFormSection
        v-for="section in OFFER_FIELD_SECTIONS"
        :key="section.title"
        :section="section"
        :form="form"
        :has-error="hasError"
        :get-error-message="getErrorMessage"
        :handle-blur="handleBlur"
        :handle-input="handleInput"
      />

      <div
        v-if="activeErrors.length > 0"
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
        <LandingPreview :offer="form" />
      </section>
    </section>
  </div>
</template>
