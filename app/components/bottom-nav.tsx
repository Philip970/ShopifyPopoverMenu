import { StyleSheet, View } from "react-native";

import Icon from "./icon";

import { Colors } from "../config/design";

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <Icon name="home-sharp" color={Colors.dark} size={24} />
      <Icon name="search-outline" color={Colors.dark} size={24} />
      <Icon name="file-tray-full-outline" color={Colors.dark} size={24} />
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    gap: 24,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 32,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
