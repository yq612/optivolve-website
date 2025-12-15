<script setup lang="ts">
import Post1 from "@/assets/images/home/post-ambition-1.webp";
import Post2 from "@/assets/images/home/post-ambition-2.webp";

const list = [
  {
    name: "Purpose",
    desc:
      "To accelerate the global expansion of high-potential digital businesses through technology, financial infrastructure, and ecosystem resources.",
    image: Post1,
  },
  {
    name: "Ambition",
    desc:
      "To become a leading global force driving the digital transformation of emerging markets.",
    image: Post2,
  },
];
</script>

<template>
  <div class="ambition-wrapper md:h-700 h-1000 scroll-mt-50" id="purpose-ambition">
    <div class="area flex h-full items-center flex-col gap-40 text-center justify-center">
      <div class="md:text-48 text-60 font-bold">Purpose & Ambition</div>
      <div class="flex md:items-center items-start justify-around w-full px-60">
        <div
          v-for="item in list"
          :key="item.name"
          class="flex flex-col items-center gap-15 text-center"
        >
          <img :src="item.image" alt="image" class="w-auto md:h-266 h-400" />
          <div class="md:text-25 text-50 font-semibold mt-15">{{ item.name }}</div>
          <div class="md:text-16 text-35 md:lh-24 lh-40 text-[rgba(13,27,42,0.65)] w-523">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ambition-wrapper {
  background: linear-gradient(
    to bottom,
    white 0%,
    white 360px,
    rgba(237, 27, 52, 0.1) 360px,
    rgba(237, 27, 52, 0.1) 100%
  );
}
</style>
