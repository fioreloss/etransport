import { createBox } from "@shopify/restyle";
import React from "react";
import { SafeAreaView as RSafeAreaView } from "react-native-safe-area-context";

import { Theme } from "./theme";
export const SafeAreaView = createBox<Theme, React.ComponentProps<typeof RSafeAreaView> & { children?: React.ReactNode }>(RSafeAreaView);