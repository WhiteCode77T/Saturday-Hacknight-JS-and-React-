import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View style={styles.profileChild} />
      <Text style={styles.profile1}>Profile</Text>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.account, styles.textTypo]}>Account</Text>
          <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.account, styles.textTypo]}>Notifications</Text>
          <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.account, styles.textTypo]}>Help</Text>
          <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.account, styles.textTypo]}>
            Storage and Data
          </Text>
          <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.account, styles.textTypo]}>Invite a friend</Text>
          <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.account, styles.textTypo]}>Logout</Text>
          <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild8, styles.groupLayout]} />
        </View>
        <View style={styles.frameView}>
          <Pressable
            style={styles.ellipseLayout}
            onPress={() => navigation.navigate("Calendar")}
          >
            <Image
              style={[styles.ellipseIcon, styles.ellipseLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.calendarMonth, styles.personTypo]}>
              calendar_month
            </Text>
          </Pressable>
          <Pressable
            style={[styles.ellipseGroup, styles.ellipseLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.ellipseIcon, styles.ellipseLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.checklist, styles.personTypo]}>checklist</Text>
          </Pressable>
          <Pressable
            style={styles.ellipseContainer}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={[styles.frameChild, styles.ellipseLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.person, styles.personTypo]}>person</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 60,
    width: 394,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 88,
    width: 430,
    left: 0,
    position: "absolute",
  },
  ellipseLayout: {
    height: 56,
    width: 56,
  },
  personTypo: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.materialIconsRegular,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  profileChild: {
    top: 54,
    backgroundColor: "#f4d8f9",
    height: 878,
    width: 430,
    left: 0,
    position: "absolute",
  },
  profile1: {
    marginLeft: -19,
    top: 70,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_100,
    top: 0,
  },
  account: {
    top: 19,
    left: 21,
    fontSize: FontSize.size_sm,
  },
  text: {
    left: 367,
    fontSize: FontSize.size_lg,
    top: 16,
  },
  rectangleParent: {
    top: 0,
  },
  rectangleGroup: {
    top: 76,
  },
  rectangleContainer: {
    top: 152,
  },
  groupView: {
    top: 228,
  },
  rectangleParent1: {
    top: 304,
  },
  rectangleParent2: {
    top: 380,
  },
  groupParent: {
    top: 104,
    left: 12,
    height: 440,
    width: 394,
    position: "absolute",
  },
  groupChild8: {
    borderRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  rectangleWrapper: {
    top: 0,
  },
  ellipseIcon: {
    top: 0,
    left: 0,
    position: "absolute",
    width: 56,
  },
  calendarMonth: {
    top: 18,
  },
  checklist: {
    top: 16,
  },
  ellipseGroup: {
    marginLeft: 56,
  },
  frameChild: {
    zIndex: 0,
  },
  person: {
    zIndex: 1,
    top: 16,
  },
  ellipseContainer: {
    marginLeft: 56,
    flexDirection: "row",
  },
  frameView: {
    marginLeft: -140,
    flexDirection: "row",
    top: 16,
    left: "50%",
    position: "absolute",
  },
  groupContainer: {
    top: 842,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffset: {
      width: 0,
      height: -27,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
  },
  profile: {
    borderRadius: Border.br_36xl,
    flex: 1,
    width: "100%",
    height: 930,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default Profile;
