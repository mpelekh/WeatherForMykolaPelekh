type WeatherIconData = {
  [key: string]: {
    day: string;
    night: string;
  };
};

const ICONS: WeatherIconData = {
  Rain: {
    day: 'day-rain',
    night: 'night-alt-rain',
  },
  Clear: {
    day: 'day-sunny',
    night: 'night-clear',
  },
  Thunderstorm: {
    day: 'day-lightning',
    night: 'night-alt-lightning',
  },
  Clouds: {
    day: 'day-cloudy',
    night: 'night-alt-cloudy',
  },
  Snow: {
    day: 'day-snow',
    night: 'night-alt-snow',
  },
  Drizzle: {
    day: 'fog',
    night: 'fog',
  },
  Fog: {
    day: 'fog',
    night: 'fog',
  },
};

export const DEFAULT_ICON = 'day-rain';

export default ICONS;
