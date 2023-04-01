import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryItems({ title, color }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable android_ripple={{ color: "#eee" }} style={styles.button}>
        <View style={styles.item}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  item: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.3,
  },
});
