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
            당사는 다음과 같은 목적을 위해 최소한의 정보를 수집하고 이용합니다:
          </p>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>서비스 제공 및 개선</li>
            <li>서비스 이용 통계 분석</li>
            <li>기술적 문제 해결</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">
            2. 수집하는 정보 항목
          </h2>
          <p class="text-gray-600 mb-4">
            당사는 서비스 제공을 위해 다음과 같은 정보를 수집할 수 있습니다:
          </p>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>기기 정보 (기기 모델명, 운영체제 버전)</li>
            <li>IP 주소</li>
            <li>서비스 이용 기록</li>
            <li>앱 사용 통계</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">
            3. 정보의 보유 및 이용 기간
          </h2>
          <p class="text-gray-600">
            수집된 정보는 서비스 제공 목적이 달성되면 즉시 파기됩니다. 단, 통계
            목적으로 수집된 정보는 익명화 처리되어 일정 기간 보관될 수 있습니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">
            4. 쿠키 및 로컬 스토리지 사용
          </h2>
          <p class="text-gray-600">
            본 앱은 서비스 이용 경험을 개선하기 위해 로컬 스토리지를 사용할 수
            있습니다. 이는 사용자의 기기에 저장되며, 앱 삭제 시 함께 삭제됩니다.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-700 mb-4">
            5. 개인정보 보호책임자
          </h2>
          <div class="text-gray-600">
            <p>이름: 이명필</p>
            <p>직위: 개인정보 보호책임자</p>
            <p>연락처: zkwmdi30@gmail.com</p>
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
