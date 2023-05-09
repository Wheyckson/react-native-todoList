import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    height: 64,
    borderRadius: 5,
    padding: 14,
    marginBottom: 8,
  },

  taskTodo: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 280,
  },

  taskName: {
    color: "#FFF",
    fontSize: 14,
  },

  stringTextLine: {
    color: "#808080",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
});
