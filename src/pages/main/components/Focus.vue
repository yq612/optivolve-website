<script setup lang="ts">
import Focus1 from "@/assets/images/home/icon-focus-1.svg";
import Focus2 from "@/assets/images/home/icon-focus-2.svg";
import Focus3 from "@/assets/images/home/icon-focus-3.svg";
import Focus4 from "@/assets/images/home/icon-focus-4.svg";
import Focus5 from "@/assets/images/home/icon-focus-5.svg";
import Focus6 from "@/assets/images/home/icon-focus-6.svg";
const list = [
  {
    title: "Fintech & Payments",
    icon: Focus1,
  },
  {
    title: "Mobile Internet Services",
    icon: Focus2,
  },
  {
    title: "Digital Commerce & Platforms",
    icon: Focus3,
  },
  {
    title: "Consumer Applications",
    icon: Focus4,
  },
  {
    title: "Digital Financial Services",
    icon: Focus5,
  },
  {
    title: "Online Media & Traffic\n Ecosystems",
    icon: Focus6,
  },
];
</script>

<template>
  <div class="md:py-100 py-200 scroll-mt-50" id="business-focus">
    <div
      class="area flex flex-col items-center justify-center gap-20 md:px-0 px-100 text-center"
    >
      <div class="md:text-48 text-60 font-bold">Business Focus</div>
      <div class="md:text-20 text-45 md:lh-30 lh-65 text-[ rgba(13,27,42,0.5)] mb-30">
        We support and invest in high-growth digital segments including:
      </div>
      <div class="grid grid-cols-3">
        <div
          v-for="item in list"
          :key="item.title"
          class="card md:h-180 h-400 flex flex-col items-center justify-center px-40"
        >
          <img :src="item.icon" alt="icon" class="w-auto md:h-31 h-70 mb-30" />
          <div class="md:text-20 text-40 whitespace-pre-wrap text-center">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card {
  &:nth-child(1) {
    border-bottom: 0.5px solid #dedede;
  }
  &:nth-child(3) {
    border-bottom: 0.5px solid #dedede;
  }
  &:nth-child(2) {
    border: 0.5px solid #dedede;
    border-top: none;
  }
  &:nth-child(5) {
    border-left: 0.5px solid #dedede;
    border-right: 0.5px solid #dedede;
  }
}
</style>
