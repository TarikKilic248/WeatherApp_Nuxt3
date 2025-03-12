<script setup>
const isMobile = ref(false);

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };
  
  checkMobile();
  window.addEventListener('resize', checkMobile);
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile);
  });
});
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#00b4db] to-[#0083b0]">
    <AppHeader />
    <div class="flex-1 container mx-auto px-4 py-6 overflow-hidden">
      <!-- Mobile Layout -->
      <div v-if="isMobile" class="flex flex-col gap-6 h-full">
        <div class="flex gap-4">
          <weatherCard class="flex-1" />
          <WeatherCardStack class="w-16" />
        </div>
        <WeatherSuggestions class="flex-1" />
      </div>
      
      <!-- Desktop Layout -->
      <div v-else class="flex gap-6 h-full">
        <WeatherSuggestions class="w-1/3" />
        <weatherCard class="w-1/3" />
        <div class="w-1/3 flex justify-end">
          <WeatherCardStack />
        </div>
      </div>
    </div>
  </div>
</template>