import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";

import MenuItem from "./menu-item";

import { Colors } from "../config/design";
import { IMAGE_SIZE } from "./list-item";
import { ItemData } from "../data";

export type SelectedItem = ItemData & {
  x: number;
  y: number;
  position: "LEFT" | "RIGHT";
};

type Props = {
  selectedItem?: SelectedItem;
  onCancel: () => void;
};

const Popover = ({ selectedItem, onCancel }: Props) => {
  if (!selectedItem) return <></>;
  const [exiting, setExiting] = useState(false);

  const scale = useSharedValue(1);

  const rImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  }, []);

  useEffect(() => {
    scale.value = withSpring(1.1);
  }, []);

  const handleCancel = () => {
    setExiting(true);
    scale.value = withSpring(1, {}, (isFinished) => {
      if (isFinished) runOnJS(onCancel)();
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handleCancel}>
      <BlurView style={styles.container} intensity={50} tint="dark">
        <View>
          <View
            style={[
              styles.menuContainer,
              {
                left: selectedItem.x,
                top: selectedItem.y,
                opacity: selectedItem.position === "LEFT" ? 1 : 0,
              },
            ]}
          >
            <View style={styles.imageContainer}>
              <Animated.Image
                borderRadius={16}
                source={selectedItem.photo}
                style={[styles.image, rImageStyle]}
              />
              <MenuItem
                exiting={exiting}
                width={100}
                delay={400}
                icon="alert-circle-outline"
                title="Report"
                color={Colors.danger}
              />
            </View>
            <View style={styles.menuItemsContainer}>
              <MenuItem
                exiting={exiting}
                width={115}
                delay={0}
                icon="bag-handle-outline"
                title="Visit shop"
              />
              <MenuItem
                exiting={exiting}
                width={140}
                delay={100}
                icon="scan-outline"
                title="Show number"
              />
              <MenuItem
                exiting={exiting}
                width={90}
                delay={200}
                icon="share-outline"
                title="Share"
              />
              <MenuItem
                exiting={exiting}
                width={145}
                delay={300}
                icon="thumbs-down-outline"
                title="Not interested"
              />
            </View>
          </View>
          <View
            style={[
              styles.menuContainer,
              {
                left: selectedItem.x,
                top: selectedItem.y,
                opacity: selectedItem.position === "RIGHT" ? 1 : 0,
              },
            ]}
          >
            <View
              style={[styles.menuItemsContainer, { alignItems: "flex-end" }]}
            >
              <MenuItem
                exiting={exiting}
                translateX={100}
                width={115}
                delay={0}
                icon="bag-handle-outline"
                title="Visit shop"
              />
              <MenuItem
                exiting={exiting}
                translateX={100}
                width={140}
                delay={100}
                icon="scan-outline"
                title="Show number"
              />
              <MenuItem
                exiting={exiting}
                translateX={100}
                width={90}
                delay={200}
                icon="share-outline"
                title="Share"
              />
              <MenuItem
                exiting={exiting}
                translateX={100}
                width={145}
                delay={300}
                icon="thumbs-down-outline"
                title="Not interested"
              />
            </View>
            <View style={[styles.imageContainer, { alignItems: "flex-start" }]}>
              <Animated.Image
                borderRadius={16}
                source={selectedItem.photo}
                style={[styles.image, rImageStyle]}
              />
              <MenuItem
                exiting={exiting}
                translateX={100}
                width={100}
                delay={400}
                icon="alert-circle-outline"
                title="Report"
                color={Colors.danger}
              />
            </View>
          </View>
        </View>
      </BlurView>
    </TouchableWithoutFeedback>
  );
};

export default Popover;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    alignItems: "flex-end",
    gap: IMAGE_SIZE * 0.1,
  },
  menuContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: IMAGE_SIZE * 0.1,
  },
  menuItemsContainer: {
    gap: 8,
    marginBottom: 48,
  },
  image: {
    // borderColor: "red",
    // borderWidth: 1,
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    backgroundColor: Colors.medium,
    zIndex: 10,
  },
});
