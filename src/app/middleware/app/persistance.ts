import { addCity } from "app/actions/cities";
import { multi } from "app/actions/multi";
import { ADD_CITY, INIT_APP } from "app/constants/actions";
import { City } from "app/types/City";
import { Middleware } from "../Middleware";

export const persistanceMdl: Middleware = ({ dispatch, getState }) => (
  next
) => (action) => {
  next(action);

  if (action.type === INIT_APP) {
    const cities = JSON.parse(localStorage.getItem("cities") as string) as
      | City[]
      | null;
    if (cities) {
      dispatch(
        multi(cities.map((city) => addCity(city.name, city.lat, city.lng)))
      );
    }
  }

  if (action.type === ADD_CITY) {
    const cities = Object.values(getState().cities);
    const persistableCities = cities.filter((city) => city.name !== "Current");
    localStorage.setItem("cities", JSON.stringify(persistableCities));
  }
};
