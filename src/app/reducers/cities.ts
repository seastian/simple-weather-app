import { ADD_CITY, SET_CURRENT_WEATHER } from "app/constants/actions";
import { AppAction } from "app/types/AppAction";
import { City } from "app/types/City";

interface CitiesState {
  [prop: string]: City;
}

const initialState: CitiesState = {};

export const citiesReducer = (
  state = initialState,
  action: AppAction
): CitiesState => {
  switch (action.type) {
    case ADD_CITY: {
      const city = action.city;
      return { ...state, [city.id]: city };
    }

    case SET_CURRENT_WEATHER: {
      const { cityId, weather } = action.payload;
      return {
        ...state,
        [cityId]: { ...state[cityId], currentWeather: weather },
      };
    }

    default:
      return state;
  }
};
