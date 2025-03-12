<script setup lang="ts">
const isMenuOpen = ref(false);
const searchQuery = ref("");
const selectedLanguage = ref("TR");
const activeTab = ref("current");

const languages = [
  { code: "TR", label: "Türkçe" },
  { code: "EN", label: "English" },
];

const menuItems = [
  { id: "current", label: "Anlık" },
  { id: "daily", label: "Günlük" },
  { id: "weekly", label: "7 Günlük" },
  { id: "biweekly", label: "14 Günlük" },
  { id: "history", label: "Geçmiş" },
];

const navigationItems = [
  {
    id: "home",
    label: "Ana Sayfa",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    id: "locations",
    label: "Kayıtlı Konumlar",
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
  },
  {
    id: "settings",
    label: "Ayarlar",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
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
          <svg
            class="w-8 h-8 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
          <span class="ml-2 text-xl font-bold text-gray-800 md:block hidden"
            >Weather App</span
          >
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
              <svg
                class="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <template>
          <div>
            <button @click="toggleColorMode">Toggle Color Mode</button>
          </div>
        </template>

        <!-- Navigation Buttons (Desktop) and Language Selector -->
        <div class="hidden md:flex items-center space-x-4">
          <nav class="flex items-center space-x-2">
            <button
              v-for="item in navigationItems"
              :key="item.id"
              class="px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100 rounded-lg flex items-center"
            >
              <svg
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="item.icon"
                />
              </svg>
              <span>{{ item.label }}</span>
            </button>
          </nav>

          <div class="relative">
            <select
              v-model="selectedLanguage"
              class="appearance-none bg-transparent border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option
                v-for="lang in languages"
                :key="lang.code"
                :value="lang.code"
              >
                {{ lang.label }}
              </option>
            </select>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
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

      <!-- Horizontal Menu -->
      <nav class="mt-4 border-t border-gray-200">
        <ul class="flex justify-center space-x-1 overflow-x-auto py-2">
          <li v-for="item in menuItems" :key="item.id">
            <button
              @click="setActiveTab(item.id)"
              :class="[
                'px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap',
                activeTab === item.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100',
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
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Dil Seçimi</label
            >
            <select
              v-model="selectedLanguage"
              class="w-full appearance-none bg-transparent border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option
                v-for="lang in languages"
                :key="lang.code"
                :value="lang.code"
              >
                {{ lang.label }}
              </option>
            </select>
          </div>

          <!-- Navigation Items -->
          <button
            v-for="item in navigationItems"
            :key="item.id"
            class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded flex items-center"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="item.icon"
              />
            </svg>
            {{ item.label }}
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>
