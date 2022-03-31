import React from "react";
import { View, Text } from "react-native";
type Props = {
  title: String;
};
export default function ItemTask({ title }: Props) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
