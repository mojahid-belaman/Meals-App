import { Categories } from "../data/dummy-data";
import { FlatList } from "react-native";
import { CategoryItems } from "../components/organism/CategoryItems";

const CategoryScreen = () => {
  return (
    <FlatList
      data={Categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryItems title={item.title} color={item.color} />
      )}
    />
  );
};

export default CategoryScreen;
