import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRef, useState } from "react";

import Popover, { SelectedItem } from "../components/popover";
import BottomNav from "../components/bottom-nav";
import Toolbar from "../components/toolbar";
import List from "../components/list";

import { groupByVendor, ItemData, SampleItems } from "../data";
import { IMAGE_SIZE } from "../components/list-item";

const MARGIN = 16;
const LIST_GAP = 12;
const LIST_HEADER_HEIGHT = 48 + 2 * MARGIN;
const ITEM_HEIGHT = IMAGE_SIZE + 2 * 15 + LIST_GAP;

export default function Home() {
  const catalog = groupByVendor(SampleItems);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | undefined>();
  const itemRefs = useRef<Array<Text | null>>([]);

  const insets = useSafeAreaInsets();

  const handleItemSelected = (item: ItemData, tabX: number, tabY: number) => {
    if (itemRefs.current[tabX]) {
      itemRefs.current[tabX]?.measureInWindow((x, y, width, height) => {
        if (tabY % 2 === 0) {
          const itemPositionY =
            y + LIST_HEADER_HEIGHT + (tabY / 2) * (ITEM_HEIGHT + LIST_GAP);
          const itemPositionX = MARGIN;

          setSelectedItem({
            ...item,
            x: itemPositionX,
            y: itemPositionY,
            position: "LEFT",
          });
        } else {
          const itemPositionY =
            y +
            LIST_HEADER_HEIGHT +
            ((tabY - 1) / 2) * (ITEM_HEIGHT + LIST_GAP);
          const itemPositionX =
            IMAGE_SIZE + MARGIN + LIST_GAP - (145 + IMAGE_SIZE * 0.1);

          setSelectedItem({
            ...item,
            x: itemPositionX,
            y: itemPositionY,
            position: "RIGHT",
          });
        }
      });
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Toolbar />
        {catalog.map((value, index) => (
          <View key={index}>
            <Text
              style={{ height: 0 }}
              ref={(el) => (itemRefs.current[index] = el)}
            />
            <List
              title={value[0].vendor}
              rating={4.8}
              numberOfRater={306}
              data={value}
              onItemSelected={(item: ItemData, y: number) =>
                handleItemSelected(item, index, y)
              }
            />
          </View>
        ))}
      </ScrollView>
      <BottomNav />
      <Popover
        selectedItem={selectedItem}
        onCancel={() => setSelectedItem(undefined)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
