<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">개인정보 처리방침</h1>
      <div class="bg-white rounded-lg shadow-md p-6">
        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">
            1. 개인정보의 수집 및 이용 목적
          </h2>
          <p class="text-gray-600 mb-4">
            당사는 다음과 같은 목적을 위해 개인정보를 수집하고 이용합니다:
          </p>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>서비스 제공 및 계약의 이행</li>
            <li>회원 관리</li>
            <li>고객 문의 및 불만 처리</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">
            2. 수집하는 개인정보 항목
          </h2>
          <p class="text-gray-600 mb-4">
            당사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
          </p>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>이름</li>
            <li>이메일 주소</li>
            <li>연락처</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">
            3. 개인정보의 보유 및 이용 기간
          </h2>
          <p class="text-gray-600">
            수집된 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성되면
            지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가
            있는 경우 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-700 mb-4">
            4. 개인정보 보호책임자
          </h2>
          <div class="text-gray-600">
            <p>이름: 홍길동</p>
            <p>직위: 개인정보 보호책임자</p>
            <p>연락처: privacy@example.com</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>
