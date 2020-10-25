import { ADD_CITY, SET_CITY } from "app/constants/actions";
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
      const id = action.id;
      return { ...state, [id]: { id } };
    }

    case SET_CITY: {
      const city = action.city;
      return { ...state, [city.id]: city };
    }

    default:
      return state;
  }
};
