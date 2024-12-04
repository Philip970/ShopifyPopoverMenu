import { StyleSheet, View, ViewStyle } from "react-native";

import ListHeader from "./list-header";
import ListItem from "./list-item";

import { ItemData } from "../data";

type Props = {
  title: string;
  rating: number;
  numberOfRater: number;
  data: ItemData[];
  onItemSelected: (item: ItemData, index: number) => void;
};

const List = ({
  title,
  rating,
  numberOfRater,
  data,
  onItemSelected,
}: Props) => {
  return (
    <View style={styles.container}>
      <ListHeader title={title} rating={rating} numberOfRater={numberOfRater} />
      <View style={styles.itemsContainer}>
        {data.map((item, index) => {
          const style: ViewStyle =
            index % 2 === 0
              ? {
                  marginRight: 12,
                }
              : {};
          return (
            <ListItem
              style={style}
              key={index}
              {...item}
              onPress={() => onItemSelected(item, index)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {},
  itemsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    flexWrap: "wrap",
  },
});
