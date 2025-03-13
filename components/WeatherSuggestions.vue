<script setup lang="ts">
import type { Suggestion } from '~/types';

const weatherStore = useWeatherStore();



const suggestions = computed(() => {
  const city = weatherStore.weatherData.city;
  const temperature = weatherStore.weatherData.temperature;
  const condition = weatherStore.weatherData.condition.toLowerCase();

  const suggestions: Suggestion[] = [];

  if (city === 'Istanbul' || city === 'Bursa') {
    if (temperature > 20 && !condition.includes('yağmur')) {
      suggestions.push(
        {
          type: 'park',
          title: 'Emirgan Korusu',
          description: 'Boğaz manzaralı, geniş yeşil alanları olan tarihi bir park. Lale mevsiminde özellikle güzel.',
          icon: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
        },
        {
          type: 'cafe',
          title: 'Pierre Loti Kahvesi',
          description: 'Haliç manzaralı tarihi bir kafe. Gün batımı için ideal.',
          icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        }
      );
    } else if (temperature <= 20 || condition.includes('yağmur')) {
      suggestions.push(
        {
          type: 'museum',
          title: 'Topkapı Sarayı',
          description: 'Osmanlı tarihini keşfedebileceğiniz muhteşem bir saray müzesi.',
          icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
        },
        {
          type: 'shopping',
          title: 'Kapalı Çarşı',
          description: 'Dünyanın en büyük kapalı çarşılarından biri. Alışveriş ve tarih bir arada.',
          icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
        }
      );
    }
  }

  return suggestions;
});
</script>

<template>
  <div v-if="suggestions.length > 0" class="h-full">
    <div class="bg-white/90 rounded-2xl shadow-lg p-6 h-full">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Bugün İçin Öneriler</h2>
      <div class="space-y-4">
        <div
          v-for="(suggestion, index) in suggestions"
          :key="index"
          class="bg-white/50 p-4 rounded-xl hover:bg-white/80 transition-colors duration-200"
        >
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg
                class="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="suggestion.icon"
                />
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-800">
                {{ suggestion.title }}
              </h3>
              <p class="text-gray-600 mt-1">{{ suggestion.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>