import { defineStore } from "pinia";
import type { WeatherData } from "~/types";

export const useWeatherStore = defineStore("weather", () => {
  const weatherData = ref<WeatherData>({
    city: "",
    temperature: 0,
    condition: "",
    humidity: 0,
    windSpeed: 0,
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
        throw new Error("Hava durumu bilgisi alınamadı");
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
      console.error("Weather API Error:", error);
      errorMessage.value =
        error instanceof Error ? error.message : "Bir hata oluştu";
      weatherData.value = {
        city: "",
        temperature: 0,
        condition: "",
        humidity: 0,
        windSpeed: 0,
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
});
