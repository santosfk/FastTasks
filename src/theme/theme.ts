import "styled-components/native";

import { dark as darkTheme } from "./dark";
import { light as lightTheme } from "./light";

const theme = {
    dark: darkTheme,
    light: lightTheme,
};

type Itype = typeof theme.dark;

declare module "styled-components" {
    export interface DefaultTheme extends Itype { }
}

export default theme;
