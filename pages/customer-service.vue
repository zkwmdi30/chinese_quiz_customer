<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">고객 서비스</h1>
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">문의하기</h2>
        <p class="text-gray-600 mb-4">
          고객님의 문의사항이나 불편사항을 접수해 주시면 신속하게 답변 드리도록
          하겠습니다.
        </p>
        <form @submit.prevent="sendEmail" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >이메일</label
            >
            <input
              v-model="email"
              type="email"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >문의내용</label
            >
            <textarea
              v-model="message"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="문의하실 내용을 입력해주세요."
            ></textarea>
          </div>
          <button
            type="submit"
            :disabled="isLoading"
            class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
          >
            {{ isLoading ? "전송 중..." : "문의하기" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const email = ref("");
const message = ref("");
const isLoading = ref(false);

async function sendEmail() {
  try {
    isLoading.value = true;
    const response = await $fetch("/api/send-email", {
      method: "POST",
      body: {
        email: email.value,
        message: message.value,
      },
    });

    alert("문의사항이 성공적으로 전송되었습니다.");
    email.value = "";
    message.value = "";
  } catch (error) {
    alert("문의사항 전송에 실패했습니다. 다시 시도해주세요.");
    console.error("Error:", error);
  } finally {
    isLoading.value = false;
  }
}
</script>
