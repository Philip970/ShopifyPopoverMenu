import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import Icon from "./icon";

import { Colors } from "../config/design";
import { ItemData } from "../data";

type Props = ItemData & {
  style?: ViewStyle;
  onPress: () => void;
};

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
  Dimensions.get("window");
export const IMAGE_SIZE = (WINDOW_WIDTH - 16 * 2 - 12) / 2;

const ListItem = ({ title, price, photo, style, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <ImageBackground borderRadius={16} source={photo} style={styles.image}>
        <Icon
          name="heart-outline"
          size={32}
          color={Colors.white}
          bgColor={Colors.medium}
        />
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <Text>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: IMAGE_SIZE,
    marginBottom: 12,
    gap: 8,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 12,
  },
  detailsContainer: {
    marginLeft: 8,
  },
  price: {
    fontWeight: "500",
  },
});
