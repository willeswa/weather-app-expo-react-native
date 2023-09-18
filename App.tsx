import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import { color } from "./utils/designsystem/colors";
import { dimen } from "./utils/designsystem/dimens";
import HelloCard from "./components/HelloCard";
import cities  from "./data/dumy-cities";
import { ScaledSheet } from "react-native-size-matters";


export default function App() {
  

  const [selectedCity, setSelectedCity] = useState<string>("");
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        initialNumToRender={6}
        keyExtractor={selectedCity => selectedCity.name}
        renderItem={({ item }) => {
          const style = selectedCity === item.name ? styles.clickedButton : styles.button;
          return <HelloCard city={item} setSelected={(item) => setSelectedCity(item)} style={style}/>
        }}
        data={cities}
      />
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: color.secondary,
    backgroundColor: color.secondary,
    margin: dimen.dimen14Dp,
    borderRadius: dimen.dimen10Dp,
    maxHeight: dimen.dimen42Dp,
    minWidth: dimen.dimen50Dp,
    paddingHorizontal: dimen.dimen10Dp,
    paddingVertical: dimen.dimen10Dp,
  },
  clickedButton: {
    backgroundColor: color.primary,
    paddingHorizontal: dimen.dimen10Dp,
    paddingVertical: dimen.dimen10Dp,    
    margin: dimen.dimen14Dp,
    borderRadius: dimen.dimen10Dp,
    maxHeight: dimen.dimen40Dp,
    minWidth: dimen.dimen50Dp,
  },
});
