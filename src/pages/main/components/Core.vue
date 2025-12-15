<script setup lang="ts">
const list = [
  {
    name: "Technology Innovation",
    desc:
      "We provide cutting-edge payment technologies, mobile solutions, and digital platforms that enable seamless and secure financial transactions for businesses and consumers worldwide.",
  },
  {
    name: "Financial Infrastructure",
    desc:
      "We integrate banking partnerships, digital wallets, and compliance frameworks to ensure efficient, transparent, and scalable financial operations across multiple regions.",
  },
  {
    name: "Strategic Market Access",
    desc:
      "Through our global presence, we connect businesses with high-potential markets, leveraging traffic, distribution channels, and local insights to maximize adoption and growth.",
  },
  {
    name: "Operational Expertise",
    desc:
      "From investment to deep operational involvement, we support portfolio companies with business development, regulatory guidance, and scalable solutions to achieve rapid market traction.",
  },
];
const current = ref(0);
</script>

<template>
  <div class="md:h-515 h-950 core-wrapper mt-50 scroll-mt-150" id="core-capabilities">
    <div class="area pt-60 md:px-0 px-50">
      <div
        v-for="(item, index) in list"
        :key="item.name"
        class="flex items-start md:mb-30 mb-70 cursor-pointer"
        @click="current = index"
      >
        <div
          class="md:text-36 text-60 font-semibold text-[rgba(13,27,42,0.4)] mr-40 md:w-50 w-100"
          :class="{ 'text-#BA1819': current === index }"
        >
          {{ `0${index + 1}` }}
        </div>
        <div>
          <div
            class="md:text-24 text-50 font-semibold text-[rgba(13,27,42,0.4)] md:pt-8 pt-5 pb-12"
            :class="{ 'text-#0D1B2A': current === index }"
          >
            {{ item.name }}
          </div>
          <div
            class="desc-box relative md:text-16 text-40 md:lh-24 lh-50 text-[rgba(13,27,42,0.75)] md:w-510 w-full h-0 transition-all duration-250 opacity-0"
            :class="{ 'md:h-72 h-200 opacity-100': current === index }"
          >
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.core-wrapper {
  background: url("@/assets/images/home/bg-core.webp") no-repeat center top / 100% auto;
  .desc-box {
    &::after {
      content: "";
      position: absolute;
      top: 10px;
      left: -62px;
      height: 73px;
      width: 2px;
      background: #ba1819;
    }
  }
}
@media (max-width: 768px) {
  .core-wrapper {
    background-size: cover;
    background-position-x: -200px;
    .desc-box {
      &::after {
        display: none;
      }
    }
  }
}
</style>
