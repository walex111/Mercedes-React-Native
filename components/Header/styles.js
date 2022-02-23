import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    width: "90%",
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 60,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
  },
});

export default styles;
