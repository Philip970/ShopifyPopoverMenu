import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { StyleSheet, Text } from "react-native";
import { useEffect } from "react";

import Icon from "./icon";

import { Colors } from "../config/design";

type Props = {
  title: string;
  icon: string;
  color?: string;
  delay: number;
  width: number;
  translateX?: number;
  exiting: boolean;
};

const MenuItem = ({
  icon,
  title,
  delay,
  width = 150,
  color = Colors.dark,
  translateX = -100,
  exiting,
}: Props) => {
  const _translateX = useSharedValue(translateX);
  const opacity = useSharedValue(0);
  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          translateX: _translateX.value,
        },
      ],
    };
  });

  useEffect(() => {
    if (exiting) {
      opacity.value = withSpring(0);
      _translateX.value = withSpring(translateX);
    } else {
      opacity.value = withDelay(
        delay,
        withSpring(1, {
          duration: 1000,
        })
      );
      _translateX.value = withDelay(
        delay,
        withSpring(0, {
          duration: 1000,
        })
      );
    }
  }, [exiting]);

  return (
    <Animated.View style={[styles.container, { width }, rStyle]}>
      <Icon name={icon} color={color} />
      <Text
        style={{
          color,
        }}
      >
        {title}
      </Text>
    </Animated.View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 8,
  },
});
