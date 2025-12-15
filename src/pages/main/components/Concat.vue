<script setup lang="ts">
import { EMAIL } from "@/config";
const source = ref(EMAIL);
const { copy } = useClipboard({ source });
</script>

<template>
  <div class="concat-wrapper scroll-mt-100" id="contact-us">
    <div
      class="area md:h-899 h-1100 flex h-full items-center justify-between flex-col py-60"
    >
      <div class="md:text-48 text-60 font-semibold text-white">Contact Us</div>
      <div class="md:text-64 text-60 lh-96 font-semibold text-white text-center mt-80">
        Share yourdetails and we'll arrange a call-back from our team
      </div>
      <div
        class="md:w-380 w-80% md:h-48 h-100 bg-white md:text-16 text-45 flex items-center justify-center mb-80 cursor-pointer hover:scale-105 transition-all duration-300"
        @click="() => copy()"
      >
        {{ EMAIL }}
      </div>
      <div class="md:text-20 text-50 text-white text-center">
        Partner with Future Harvest HK Limited to unlock growthinemergingdigital
        economies.
      </div>
    </div>
    <div class="md:h-108 h-250 bg-#BA1819 md:px-0 px-50">
      <div
        class="area flex items-center justify-between md:text-20 text-40 md:lh-30 lh-50 text-white h-full"
      >
        <img
          src="@/assets/images/home/icon-safe.svg"
          alt="icon"
          class="w-auto md:h-50 h-120 md:mr-20 mr-50"
        />
        <div>
          Partner with Future Harvest HK Limited to unlock growthinemergingdigital
          economies. Share yourdetails and we'll arrange a call-back from our team
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.concat-wrapper {
  background: url("@/assets/images/home/bg-concat.webp") no-repeat center top / 100% auto;
}
@media (max-width: 768px) {
  .concat-wrapper {
    background-size: cover;
  }
}
</style>
