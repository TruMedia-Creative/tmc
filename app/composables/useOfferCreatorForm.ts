import { reactive, ref, computed } from "vue";
import {
  DEFAULT_OFFER_FORM,
  PRICE_OFFER_FIELDS,
  REQUIRED_OFFER_FIELDS,
} from "~/constants/offerCreator";
import type { OfferCreatorData, OfferFieldKey } from "~/types/offer";
import { generateOfferText } from "~/utils/offerGenerator";

export function useOfferCreatorForm() {
  const form = reactive<OfferCreatorData>({ ...DEFAULT_OFFER_FORM });
  const generated = ref("");
  const errors = reactive<Record<string, string>>({});
  const touched = reactive<Record<string, boolean>>({});
  const formSubmitted = ref(false);

  const validateField = (fieldName: OfferFieldKey, value: string): string => {
    if (REQUIRED_OFFER_FIELDS.includes(fieldName as (typeof REQUIRED_OFFER_FIELDS)[number]) && !value.trim()) {
      return "This field is required";
    }

    if (PRICE_OFFER_FIELDS.includes(fieldName as (typeof PRICE_OFFER_FIELDS)[number]) && value.trim()) {
      const numValue = Number.parseFloat(value);
      if (Number.isNaN(numValue) || numValue < 0) {
        return "Please enter a valid positive number";
      }
    }

    return "";
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const nextErrors: Record<string, string> = {};

    for (const field of REQUIRED_OFFER_FIELDS) {
      const error = validateField(field, form[field]);
      if (error) {
        nextErrors[field] = error;
        isValid = false;
      }
    }

    for (const field of PRICE_OFFER_FIELDS) {
      const error = validateField(field, form[field]);
      if (error) {
        nextErrors[field] = error;
        isValid = false;
      }
    }

    for (const key of Object.keys(errors)) {
      errors[key] = "";
    }
    Object.assign(errors, nextErrors);

    return isValid;
  };

  const hasError = (fieldName: OfferFieldKey) =>
    (touched[fieldName] || formSubmitted.value) && Boolean(errors[fieldName]);

  const getErrorMessage = (fieldName: OfferFieldKey) =>
    hasError(fieldName) ? errors[fieldName] || "" : "";

  const handleBlur = (fieldName: OfferFieldKey) => {
    touched[fieldName] = true;
    errors[fieldName] = validateField(fieldName, form[fieldName] as string);
  };

  const handleInput = (fieldName: OfferFieldKey) => {
    if (touched[fieldName] || formSubmitted.value) {
      errors[fieldName] = validateField(fieldName, form[fieldName] as string);
    }
  };

  const activeErrors = computed(() =>
    Object.entries(errors).filter(([, value]) => value),
  );

  const generateOffer = () => {
    formSubmitted.value = true;

    if (!validateForm()) {
      const firstErrorEntry = Object.entries(errors).find(([, value]) => value);
      if (firstErrorEntry) {
        const [firstErrorField] = firstErrorEntry;
        const element = document.querySelector(`[data-field="${firstErrorField}"]`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      return false;
    }

    generated.value = generateOfferText(form);
    return true;
  };

  const resetForm = () => {
    Object.assign(form, DEFAULT_OFFER_FORM);
    generated.value = "";
    formSubmitted.value = false;

    for (const key of Object.keys(errors)) {
      errors[key] = "";
    }
    for (const key of Object.keys(touched)) {
      touched[key] = false;
    }
  };

  return {
    form,
    generated,
    errors,
    touched,
    formSubmitted,
    activeErrors,
    hasError,
    getErrorMessage,
    handleBlur,
    handleInput,
    generateOffer,
    resetForm,
  };
}
