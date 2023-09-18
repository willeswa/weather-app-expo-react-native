export type City = {
    name: string;
    country: string;
    lat: number;
    lon: number;
    weather: Weather;
}

export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
}