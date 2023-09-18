import {Stack } from "expo-router/stack"
import { color } from "../utils/designsystem/colors";

export default function RootLayout(){
    return <Stack screenOptions={{
        title: "Your Daily Weather",
        headerStyle: {
            backgroundColor: color.primary,
        }
    }
    } />;
}