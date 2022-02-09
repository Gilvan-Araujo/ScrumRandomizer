import { lightGreen, cyan, green, red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: cyan,
    secondary: lightGreen,
    success: green,
    error: red,
  },
});

export default theme;
