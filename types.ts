export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

export interface Suggestion {
    type: string;
    title: string;
    description: string;
    icon: string;
}

