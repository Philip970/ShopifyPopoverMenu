import { Image, StyleSheet, Text, View } from "react-native";

import Button from "./button";
import Icon from "./icon";

import { Colors } from "../config/design";

type Props = {
  title: string;
  rating: number;
  numberOfRater: number;
};

const ListHeader = ({ title, rating, numberOfRater }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <Image style={styles.brandImage} />
        <View>
          <Text style={styles.brandTitle}>{title}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{rating}</Text>
            <Icon name="star" size={12} color={Colors.dark} />
            <Text style={styles.ratingText}>({numberOfRater})</Text>
          </View>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <Button title="Follow" onPress={() => {}} />
        <Icon name="ellipsis-horizontal-sharp" size={24} color={Colors.dark} />
      </View>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  ratingText: {
    color: Colors.medium,
  },
  brandTitle: {
    fontWeight: "500",
  },
  brandImage: {
    width: 48,
    height: 48,
    backgroundColor: Colors.light,
    borderRadius: 28,
  },
  brandContainer: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
