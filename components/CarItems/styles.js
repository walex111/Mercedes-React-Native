import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "800",
    color: "#000000c5",
  },
  subTitle: {
    fontSize: 16,
    color: "#3a3a3a",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  subTitleCTA: {
    textDecorationLine: "underline",
  },
});

export default styles;
