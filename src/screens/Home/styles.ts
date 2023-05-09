import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 16,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -45,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFF",
    fontSize: 16,
    padding: 16,
    marginRight: 12,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },

  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
  },

  separator: {
    marginVertical: 20,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  infoChecked: {
    alignItems: "center",
    flexDirection: "row",
  },

  checkCreated: {
    fontSize: 14,
    color: "#4EA8DE",
  },

  checkFinished: {
    fontSize: 14,
    color: "#8284FA",
  },

  counterCheck: {
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "#333333",
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
});
