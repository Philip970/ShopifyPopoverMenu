import { Image, StyleSheet, Text, View } from "react-native";

import { Colors } from "../config/design";
import Icon from "./icon";

const Toolbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Shop</Text>
      <View style={styles.actionsContainer}>
        <Icon
          name="logo-usd"
          size={32}
          color={Colors.dark}
          bgColor={Colors.light}
        />
        <Icon
          name="notifications"
          size={32}
          color={Colors.dark}
          bgColor={Colors.light}
        />
        <Image
          source={require("../assets/images/profile.jpg")}
          style={styles.profilePic}
        />
      </View>
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
  },
  appName: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 22,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.light,
  },
});
