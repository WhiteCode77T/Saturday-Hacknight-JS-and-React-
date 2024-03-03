const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Contract from "./components/Contract";
import Transition from "./screens/Transition";
import HomeEmptyState from "./screens/HomeEmptyState";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Calendar from "./screens/Calendar";
import NewTask from "./screens/NewTask";
import Home1 from "./screens/Home1";
import Home2 from "./screens/Home2";
import Suggestions from "./screens/Suggestions";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "MaterialIcons-Regular": require("./assets/fonts/MaterialIcons-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Contract"
              component={Contract}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Transition"
              component={Transition}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeEmptyState"
              component={HomeEmptyState}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Calendar"
              component={Calendar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewTask"
              component={NewTask}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home2"
              component={Home2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Suggestions"
              component={Suggestions}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
