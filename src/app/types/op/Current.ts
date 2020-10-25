interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
}

export interface OpCurrentWeather {
  weather: Weather[];
  main: Main;
  name: string;
  dt: number;
}
