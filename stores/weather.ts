<<<<<<< HEAD
import { defineStore } from "pinia";
import type { WeatherData } from "~/types";

export const useWeatherStore = defineStore("weather", () => {
  const weatherData = ref<WeatherData>({
    city: "",
    temperature: 0,
    condition: "",
    humidity: 0,
    windSpeed: 0,
=======
import { defineStore } from 'pinia';

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

export const useWeatherStore = defineStore('weather', () => {
  const weatherData = ref<WeatherData>({
    city: '',
    temperature: 0,
    condition: '',
    humidity: 0,
    windSpeed: 0
>>>>>>> bc6a15e8a7d9d351254486045a7acbeed5289e00
  });
  const isProcessing = ref(false);
  const errorMessage = ref<string | null>(null);

  const retrieveWeatherInformation = async (city: string) => {
    const config = useRuntimeConfig();
    const apiKey = config.public.weatherApiKey;

    try {
      isProcessing.value = true;
      errorMessage.value = null;

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=tr`
      );

      if (!response.ok) {
<<<<<<< HEAD
        throw new Error("Hava durumu bilgisi alınamadı");
=======
        throw new Error('Hava durumu bilgisi alınamadı');
>>>>>>> bc6a15e8a7d9d351254486045a7acbeed5289e00
      }

      const data = await response.json();

      weatherData.value = {
        city: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
      };
    } catch (error) {
<<<<<<< HEAD
      console.error("Weather API Error:", error);
      errorMessage.value =
        error instanceof Error ? error.message : "Bir hata oluştu";
      weatherData.value = {
        city: "",
        temperature: 0,
        condition: "",
        humidity: 0,
        windSpeed: 0,
=======
      console.error('Weather API Error:', error);
      errorMessage.value =
        error instanceof Error ? error.message : 'Bir hata oluştu';
      weatherData.value = {
        city: '',
        temperature: 0,
        condition: '',
        humidity: 0,
        windSpeed: 0
>>>>>>> bc6a15e8a7d9d351254486045a7acbeed5289e00
      };
    } finally {
      isProcessing.value = false;
    }
  };

  return {
    weatherData,
    retrieveWeatherInformation,
    isProcessing,
    errorMessage,
  };
<<<<<<< HEAD
});
=======
});
>>>>>>> bc6a15e8a7d9d351254486045a7acbeed5289e00
