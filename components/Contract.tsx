import * as React from "react";
import { Button } from "@rneui/themed";
import { StyleSheet } from "react-native";

const Contract = () => {
  return (
    <Button
      title="9:41"
      radius={5}
      iconPosition="left"
      type="solid"
      color="#f5f5f5"
      titleStyle={styles.contractBtn}
      containerStyle={styles.contractBtn1}
      buttonStyle={styles.contractBtn2}
    />
  );
};

const styles = StyleSheet.create({
  contractBtn: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  contractBtn1: {
    position: "relative",
  },
  contractBtn2: {
    borderRadius: 55,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Contract;
