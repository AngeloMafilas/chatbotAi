<template>
  <form @submit.prevent="handleSubmit" class="relative">
    <textarea
      v-model.trim="newMessage"
      @keydown.enter.exact.prevent="handleSubmit"
      class="transition p-4 w-full text-sm border border-slate-300/60 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 pr-16 rounded-xl resize-none"
      placeholder="Enter your message..."
      :disabled="isLoading"
    ></textarea>
    <button
      type="submit"
      :disabled="isLoading"
      class="absolute top-2 right-2 h-10 w-10 flex items-center justify-center bg-gradient-to-t from-sky-500 to-emerald-500 rounded-full text-white disabled:opacity-50"
    >
      <svg v-if="isLoading" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-send"
        viewBox="0 0 16 16"
      >
        <path
          d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
        />
      </svg>
    </button>
  </form>
</template>

<script setup lang="ts">
import { marked } from "marked";
import DOMPurify from "dompurify";

const newMessage = ref("");
const isLoading = ref(false);
const messages = useMessages();
const { customerInitials } = useCustomer();

async function handleSubmit() {
  if (!newMessage.value || isLoading.value) return;

  const text = newMessage.value;
  const timestamp = new Date().toLocaleTimeString([], { timeStyle: "short" });

  messages.value.push({
    name: customerInitials.value,
    message: text,
    isBruno: false,
    timestamp,
  });

  newMessage.value = "";
  isLoading.value = true;

  try {
    const response = await $fetch<{ message: string }>("/api/message", {
      method: "POST",
      body: { message: text },
    });

    const parsedMessage = await marked.parse(DOMPurify.sanitize(response.message));

    messages.value.push({
      name: "Bruno",
      message: parsedMessage,
      isBruno: true,
      timestamp: new Date().toLocaleTimeString([], { timeStyle: "short" }),
    });
  } catch (error) {
    messages.value.push({
      name: "Bruno",
      message: "Sorry, I'm having trouble responding right now. Please try again.",
      isBruno: true,
      timestamp: new Date().toLocaleTimeString([], { timeStyle: "short" }),
    });
  } finally {
    isLoading.value = false;
  }
}
</script>