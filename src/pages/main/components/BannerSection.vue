<template>
  <div class="banner-section relative overflow-hidden pt-[var(--nav-bar-height)] pb-50">
    <div
      class="area md:h-512 h-1000 flex flex-col justify-center px-40 md:gap-15 gap-50 mobile-px-100"
    >
      <div class="md:w-650 w-900 font-bold md:text-48 text-75 text-white md:lh-60 lh-90">
        <span class="text-#BA1819">Accelerating</span> Digital Growth Across Emerging
        Markets
      </div>
      <div
        class="md:text-20 text-45 md:lh-30 lh-50 text-[rgba(255,255,255,0.75)] md:w-780 w-1100"
      >
        Building the next generation of global digital businesses with technology,
        financial infrastructure, and scalable distribution.
      </div>
      <div
        class="md:w-760 w-1200 md:h-170 h-300 bg-[rgba(255,255,255,0.25)] border-rd-0 md:text-16 text-35 text-white md:lh-24 lh-40 px-28 flex items-center backdrop-blur-6 font-light"
      >
        Future Harvest HK Limited is a global investment and operations group built to
        unlock the next wave of growth across high-potential digital economies. By
        integrating technology capability, financial infrastructure, and large-scale
        distribution, we empower mobile-internet ventures to scale with speed, efficiency,
        and global ambition.
      </div>
    </div>
    <div class="md:h-64 h-120 w-full bg-#BA1819 md:mt-45 mt-80"></div>
  </div>
</template>

<style lang="less" scoped>
.banner-section {
  .area {
    background: url("@/assets/images/home/bg-banner.webp") no-repeat center top / 100%
      auto;
  }
}
@media (max-width: 768px) {
  .banner-section {
    .area {
      background-size: cover;
    }
  }
}
</style>
