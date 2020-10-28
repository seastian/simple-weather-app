import React, { useState, ChangeEvent, useEffect } from "react";
import {
  TextField,
  List,
  ListItem,
  makeStyles,
  InputAdornment,
} from "@material-ui/core";
import { CityDto, fetchDependencies } from "./fetchDependencies";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { addCity } from "app/actions/cities";
import { addCityWindowClose } from "app/actions/ui";

const useStyles = makeStyles(() => ({
  root: {
    height: "60vh",
  },
}));

interface Props {
  addCity: typeof addCity;
  addCityWindowClose: typeof addCityWindowClose;
}

const Body = ({ addCity, addCityWindowClose }: Props) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const [cities, setCities] = useState<CityDto[]>([]);

  const handleOnChange = (
    evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearch(evt.target.value);
  };

  useEffect(() => {
    fetchDependencies().then(setCities);
  }, []);

  const maxNumberDisplayed = 25;
  const list = cities
    .filter((c) => c.name.toUpperCase().includes(search.toUpperCase()))
    .slice(0, maxNumberDisplayed);

  const lastItemText =
    list.length === 0
      ? "Not found"
      : list.length < maxNumberDisplayed
      ? ""
      : "...";

  const handleAdd = (id: number) => () => {
    const city = cities[id];
    addCity(city.name, city.lat, city.lng);
    addCityWindowClose();
  };

  return (
    <div className={classes.root}>
      <TextField
        value={search}
        onChange={handleOnChange}
        fullWidth
        autoFocus
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <List>
        {list.map((c) => (
          <ListItem
            key={c.id}
            onClick={handleAdd(c.id)}
            button
          >{`${c.name}, ${c.country}`}</ListItem>
        ))}
        <ListItem>{lastItemText}</ListItem>
      </List>
    </div>
  );
};

const mapDisptachToProps = {
  addCity,
  addCityWindowClose,
};

export default connect(undefined, mapDisptachToProps)(Body);
