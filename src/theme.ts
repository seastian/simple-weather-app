import { createMuiTheme } from "@material-ui/core/styles";
import { Theme } from "app/types/Theme";

export const themeGenerator = (theme: Theme) =>
  createMuiTheme({
    palette: {
      type: theme,
    },
  });
