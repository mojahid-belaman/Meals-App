import { StyleSheet, Text, View } from "react-native";

function MealsScreen() {
  return (
    <View style={styles.container}>
      <Text>Meal Over View Screen.</Text>
    </View>
  );
}

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
