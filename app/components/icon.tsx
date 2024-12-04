import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  name: string;
  bgColor?: string;
  color?: string;
  size?: number;
};

const Icon = ({
  name,
  bgColor = "transparent",
  size = 24,
  color = "#FFF",
}: Props) => {
  const _size = bgColor === "transparent" ? size : size * 0.6;
  return (
    <View
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name={name} size={_size} color={color} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
