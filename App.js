import { StatusBar } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import MealsScreen from "./screens/MealsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle={"default"} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealCategory"
            component={CategoryScreen}
          ></Stack.Screen>
          <Stack.Screen name="Meal" component={MealsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
