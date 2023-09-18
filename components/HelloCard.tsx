import { Pressable, Text, StyleSheet } from "react-native";
import { dimen } from "../utils/designsystem/dimens";
import { color } from "../utils/designsystem/colors";
import { memo } from "react";
import { ScaledSheet } from "react-native-size-matters";

type HelloCardProps = {
  city: {
    name: string;
    bgImage: string;
  };
  setSelected: (selectedCity: string) => void;
  style: any;
};

const HelloCard = ({ city, setSelected, style }: HelloCardProps) => {
  return (
    <Pressable
      style={style}
      onPress={() => {
        setSelected(city.name);
      }}
    >
      <Text style={styles.text}>{city.name}</Text>
    </Pressable>
  );
};

export default memo(HelloCard);

const styles = ScaledSheet.create({
  text: {
    color: "green",
  },
  selectedText: {
    color: color.secondary,
  },
  button: {
    color: color.secondary,
    backgroundColor: color.secondary,
    margin: dimen.dimen10Dp,
    borderRadius: dimen.dimen10Dp,
    maxHeight: dimen.dimen10Dp,
    minWidth: dimen.dimen50Dp,

  },
  clickedButton: {
    backgroundColor: color.primary,
    paddingHorizontal: dimen.dimen10Dp,
    paddingVertical: dimen.dimen10Dp,
    margin: dimen.dimen10Dp,
    borderRadius: dimen.dimen10Dp,
  },
});
