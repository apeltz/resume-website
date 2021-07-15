import { createTheme } from "@material-ui/core";

export const color1 = "#1a5db7";
export const color2 = "#1f9fd5";
export const color3 = "#20dbd8";
export const color4 = "#f2c88b";
export const color5 = "#f6ad9f";
export const colorGray1 = "#5d6578";

export const theme = createTheme({
  typography: {
    h3: {
      color: color1,
      fontSize: 20,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 18,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 16,
    },
  },
});
