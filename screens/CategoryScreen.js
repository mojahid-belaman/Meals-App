import { FlatList } from "react-native";
import CategoryItems from "../components/CategoryItems";
import { Categories } from "../data/dummy-data";

const CategoryScreen = ({navigation}) => {
  function handlePress() {
    navigation.navigate('Meal')
  }
  return (
    <FlatList
      data={Categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryItems title={item.title} color={item.color} onPress={handlePress} />
      )}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
