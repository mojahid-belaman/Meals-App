import { StatusBar } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";

export default function App() {
  return (
    <>
      <StatusBar barStyle={'default'}/>
      <CategoryScreen />
    </>
  );
}
