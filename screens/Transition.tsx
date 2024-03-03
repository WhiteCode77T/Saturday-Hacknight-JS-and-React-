import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border } from "../GlobalStyles";

const Transition = () => {
  return (
    <View style={styles.transition}>
      <View style={styles.transitionChild} />
      <Image
        style={styles.designSemNome1}
        contentFit="cover"
        source={require("../assets/design-sem-nome-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transitionChild: {
    top: 2,
    left: 0,
    width: 430,
    height: 930,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  designSemNome1: {
    top: 304,
    left: 54,
    width: 321,
    height: 327,
    position: "absolute",
  },
  transition: {
    borderRadius: Border.br_36xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default Transition;
