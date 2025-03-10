<script setup lang="ts">
const isMenuOpen = ref(false);
const searchQuery = ref('');
const selectedLanguage = ref('TR');
const activeTab = ref('current');

const languages = [
  { code: 'TR', label: 'Türkçe' },
  { code: 'EN', label: 'English' },
];

const menuItems = [
  { id: 'current', label: 'Anlık' },
  { id: 'daily', label: 'Günlük' },
  { id: 'weekly', label: '7 Günlük' },
  { id: 'biweekly', label: '14 Günlük' },
  { id: 'history', label: 'Geçmiş' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
};
</script>

<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <span class="ml-2 text-xl font-bold text-gray-800 md:block hidden">Weather App</span>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 max-w-md mx-4">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Şehir ara..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button class="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Language Selector (Desktop) and Menu Button -->
        <div class="flex items-center space-x-4">
          <div class="relative hidden md:block">
            <select
              v-model="selectedLanguage"
              class="appearance-none bg-transparent border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option v-for="lang in languages" :key="lang.code" :value="lang.code">
                {{ lang.label }}
              </option>
            </select>
          </div>

          <!-- Hamburger Menu -->
          <button
            @click="toggleMenu"
            class="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Horizontal Menu -->
      <nav class="mt-4 border-t border-gray-200">
        <ul class="flex space-x-1 overflow-x-auto py-2">
          <li v-for="item in menuItems" :key="item.id">
            <button
              @click="setActiveTab(item.id)"
              :class="[
                'px-4 py-2 rounded-lg transition-colors duration-200',
                activeTab === item.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              ]"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu -->
      <div
        v-if="isMenuOpen"
        class="md:hidden mt-4 py-2 border-t border-gray-200"
      >
        <nav class="flex flex-col space-y-2">
          <!-- Language Selector (Mobile) -->
          <div class="px-4 py-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Dil Seçimi</label>
            <select
              v-model="selectedLanguage"
              class="w-full appearance-none bg-transparent border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option v-for="lang in languages" :key="lang.code" :value="lang.code">
                {{ lang.label }}
              </option>
            </select>
          </div>
          <a href="#" class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Ana Sayfa</a>
          <a href="#" class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Favoriler</a>
          <a href="#" class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Ayarlar</a>
        </nav>
      </div>
    </div>
  </header>
</template>