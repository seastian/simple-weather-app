type DataTuple = [string, string, number, number];

export interface CityDto {
  id: number;
  name: string;
  country: string;
  lat: number;
  lng: number;
}

export const fetchDependencies = () => {
  return fetch("cities.json")
    .then((response) => response.json())
    .then((cities_data: DataTuple[]) => {
      const cities: CityDto[] = (cities_data as DataTuple[]).map(
        (c, index) => ({
          id: index,
          name: c[0],
          country: c[1],
          lat: c[2],
          lng: c[3],
        })
      );
      return cities;
    });
};
