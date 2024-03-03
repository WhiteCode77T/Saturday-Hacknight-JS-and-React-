import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const NewTask = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.newTask}>
      <View style={styles.newTaskChild} />
      <View style={styles.cardColorParent}>
        <Text style={[styles.cardColor, styles.repeatFlexBox]}>Card Color</Text>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-16.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-17.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-18.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-19.png")}
          />
        </View>
      </View>
      <View style={styles.repeatWrapper}>
        <Text style={[styles.repeat, styles.repeatFlexBox]}>Repeat</Text>
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout1]}>
        <View style={[styles.rectangleParent, styles.groupChildPosition2]}>
          <View style={[styles.groupChild, styles.groupChildBg]} />
          <Text style={styles.setATag}>Set a tag for your task</Text>
          <View style={[styles.groupItem, styles.groupPosition1]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout3]}>
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.dailyRoutine, styles.routineTypo]}>
            Daily Routine
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Text style={[styles.studyRoutine, styles.routineTypo]}>
            Study Routine
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout2]}>
          <View style={[styles.groupChild1, styles.groupLayout2]} />
          <Text style={[styles.addMore, styles.routineTypo]}>Add More +</Text>
        </View>
      </View>
      <View style={styles.rectangleParent1}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Image
          style={[styles.rectangleIcon, styles.groupChild2Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-14.png")}
        />
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupContainer, styles.groupLayout1]}>
            <View style={[styles.groupContainer, styles.groupLayout1]}>
              <Text style={[styles.describeIt, styles.repeatFlexBox]}>
                Describe it
              </Text>
              <View style={[styles.lineView, styles.groupChildPosition1]} />
            </View>
          </View>
        </View>
        <Text style={[styles.nameYourNew, styles.addPosition]}>
          Name your new task
        </Text>
        <View style={[styles.groupChild3, styles.groupPosition1]} />
      </View>
      <View style={[styles.toggleOnParent, styles.groupParentLayout]}>
        <Text style={[styles.toggleOn, styles.text1Clr]}>toggle_on</Text>
        <View style={[styles.groupParent1, styles.groupParentLayout]}>
          <View style={[styles.groupParent1, styles.groupParentLayout]}>
            <View style={[styles.groupParent1, styles.groupParentLayout]}>
              <View style={[styles.groupChild4, styles.groupParentLayout]} />
              <View style={styles.setACycleForYourTaskParent}>
                <Text style={[styles.describeIt, styles.repeatFlexBox]}>
                  Set a cycle for your task
                </Text>
                <Text style={[styles.repeat1, styles.repeat1Position]}>
                  Repeat
                </Text>
                <View style={[styles.everyWeekParent, styles.repeat1Position]}>
                  <Text style={[styles.describeIt, styles.repeatFlexBox]}>
                    Every week
                  </Text>
                  <Text style={[styles.text, styles.repeatFlexBox]}>{`>`}</Text>
                </View>
                <View style={[styles.lineView, styles.groupChildPosition1]} />
                <View
                  style={[styles.groupChild6, styles.groupChildPosition1]}
                />
                <View
                  style={[styles.groupChild7, styles.groupChildPosition1]}
                />
                <View
                  style={[styles.groupChild8, styles.groupChildPosition1]}
                />
              </View>
              <Image
                style={[styles.groupChild9, styles.groupChildPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-121.png")}
              />
              <Image
                style={[styles.groupChild10, styles.groupChildPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-121.png")}
              />
              <Image
                style={[styles.groupChild11, styles.groupChildPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-121.png")}
              />
              <Image
                style={[styles.groupChild12, styles.groupChildPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-121.png")}
              />
              <Image
                style={[styles.groupChild13, styles.groupChildPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-121.png")}
              />
              <Image
                style={[styles.groupChild14, styles.groupChildPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-171.png")}
              />
              <Image
                style={[styles.groupChild15, styles.groupChildPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-171.png")}
              />
            </View>
          </View>
          <View style={[styles.groupChild16, styles.groupChildLayout]} />
          <Text style={[styles.daily, styles.dailyPosition]}>Daily</Text>
          <View style={[styles.groupChild17, styles.groupChildLayout]} />
          <Text style={[styles.weekly, styles.dailyPosition]}>Weekly</Text>
          <Text style={[styles.monthly, styles.dailyPosition]}>Monthly</Text>
        </View>
        <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
        <Text style={[styles.tue, styles.monTypo]}>Tue</Text>
        <Text style={[styles.wed, styles.monTypo]}>Wed</Text>
        <Text style={[styles.thu, styles.monTypo]}>Thu</Text>
        <Text style={[styles.fri, styles.monTypo]}>Fri</Text>
        <Text style={[styles.sat, styles.monTypo]}>Sat</Text>
        <Text style={[styles.sun, styles.monTypo]}>Sun</Text>
      </View>
      <View style={[styles.newTaskParent, styles.ellipseGroupPosition]}>
        <Text style={[styles.newTask1, styles.text1Clr]}>New Task</Text>
        <Text style={[styles.clickToChange, styles.repeatFlexBox]}>
          Click to change the emoji
        </Text>
        <Text style={[styles.text1, styles.text1Clr]}>⭐</Text>
      </View>
      <Pressable
        style={[styles.ellipseGroup, styles.childGroupLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.groupChild18, styles.childGroupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Text style={[styles.close, styles.closeTypo]}>close</Text>
      </Pressable>
      <View style={[styles.rectangleParent3, styles.groupChild19Layout]}>
        <View style={[styles.groupChild19, styles.groupChild19Layout]} />
        <Text style={[styles.add, styles.addPosition]}>Add</Text>
      </View>
      <View style={[styles.groupParent2, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild20, styles.groupLayout]} />
        </View>
        <View style={[styles.frameView, styles.personPosition]}>
          <Pressable
            style={styles.childGroupLayout}
            onPress={() => navigation.navigate("Calendar")}
          >
            <Image
              style={[styles.groupChild18, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.close, styles.closeTypo]}>calendar_month</Text>
          </Pressable>
          <Pressable
            style={[styles.groupPressable, styles.childGroupLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.groupChild18, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.checklist, styles.personPosition]}>
              checklist
            </Text>
          </Pressable>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={[styles.frameChild5, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.person, styles.personPosition]}>person</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  repeatFlexBox: {
    textAlign: "left",
    color: Color.colorGray_600,
  },
  frameLayout: {
    height: 32,
    width: 32,
  },
  groupParentLayout1: {
    height: 97,
    width: 394,
    position: "absolute",
  },
  groupChildPosition2: {
    marginLeft: -197,
    left: "50%",
  },
  groupChildBg: {
    backgroundColor: Color.colorGray_100,
    top: 0,
  },
  groupPosition1: {
    height: 1,
    width: 356,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    marginLeft: -176.2,
    left: "50%",
    position: "absolute",
  },
  groupLayout3: {
    width: 91,
    height: 32,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorLightblue_200,
    borderRadius: Border.br_xs,
    top: 0,
    left: 0,
  },
  routineTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rectangleLayout: {
    width: 97,
    height: 32,
    position: "absolute",
  },
  groupLayout2: {
    width: 82,
    height: 32,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 60,
    borderRadius: Border.br_xs,
    width: 394,
    left: 0,
    position: "absolute",
  },
  groupLayout1: {
    height: 25,
    width: 355,
    position: "absolute",
  },
  groupChildPosition1: {
    marginLeft: -177.7,
    height: 1,
    width: 356,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  addPosition: {
    top: 18,
    position: "absolute",
  },
  groupParentLayout: {
    height: 190,
    width: 394,
    position: "absolute",
  },
  text1Clr: {
    color: Color.lightLabelPrimary,
    textAlign: "left",
    position: "absolute",
  },
  repeat1Position: {
    top: 125,
    position: "absolute",
  },
  groupChildPosition: {
    top: 98,
    height: 32,
    width: 32,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_base,
    top: 49,
    height: 32,
    position: "absolute",
  },
  dailyPosition: {
    top: 55,
    textAlign: "left",
    color: Color.colorGray_600,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  monTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    top: 107,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  ellipseGroupPosition: {
    top: 84,
    position: "absolute",
  },
  childGroupLayout: {
    height: 56,
    width: 56,
  },
  closeTypo: {
    color: Color.colorGray_700,
    lineHeight: 20,
    letterSpacing: 0,
    left: 16,
    fontFamily: FontFamily.materialIconsRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  groupChild19Layout: {
    width: 197,
    height: 60,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 88,
    width: 430,
    left: 0,
    position: "absolute",
  },
  personPosition: {
    top: 16,
    position: "absolute",
  },
  newTaskChild: {
    top: 54,
    backgroundColor: Color.colorLightblue_100,
    height: 944,
    width: 430,
    left: 0,
    position: "absolute",
  },
  cardColor: {
    marginLeft: -176,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorGray_600,
    left: "50%",
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  frameItem: {
    marginLeft: 16,
  },
  ellipseParent: {
    marginLeft: -184,
    top: 33,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  cardColorParent: {
    marginLeft: -185,
    top: 392,
    width: 368,
    height: 65,
    left: "50%",
    position: "absolute",
  },
  repeat: {
    marginLeft: -26,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorGray_600,
    left: "50%",
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  repeatWrapper: {
    marginLeft: -198,
    top: 498,
    width: 52,
    height: 21,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xs,
    marginLeft: -197,
    left: "50%",
    height: 97,
    width: 394,
    position: "absolute",
  },
  setATag: {
    fontFamily: FontFamily.poppinsRegular,
    left: 21,
    top: 17,
    textAlign: "left",
    color: Color.colorGray_600,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupItem: {
    top: 42,
  },
  rectangleParent: {
    height: 97,
    width: 394,
    position: "absolute",
    top: 0,
  },
  groupInner: {
    width: 91,
    height: 32,
    position: "absolute",
  },
  dailyRoutine: {
    marginLeft: -39.5,
    fontSize: FontSize.size_xs,
    top: 7,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray_600,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 50,
    left: 21,
  },
  rectangleView: {
    backgroundColor: Color.colorLightblue_200,
    borderRadius: Border.br_xs,
    top: 0,
    left: 0,
  },
  studyRoutine: {
    marginLeft: -41.5,
    fontSize: FontSize.size_xs,
    top: 7,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray_600,
    left: "50%",
    position: "absolute",
  },
  rectangleContainer: {
    left: 120,
    top: 50,
  },
  groupChild1: {
    backgroundColor: Color.colorLightblue_200,
    borderRadius: Border.br_xs,
    top: 0,
    left: 0,
  },
  addMore: {
    marginLeft: -35,
    fontSize: FontSize.size_xs,
    top: 7,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray_600,
    left: "50%",
    position: "absolute",
  },
  groupView: {
    left: 225,
    top: 50,
  },
  groupParent: {
    marginLeft: -196,
    top: 733,
    left: "50%",
  },
  groupChild2: {
    backgroundColor: Color.colorGray_100,
    top: 0,
  },
  rectangleIcon: {
    top: 76,
  },
  describeIt: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    top: 0,
    left: 0,
    position: "absolute",
  },
  lineView: {
    top: 25,
  },
  groupContainer: {
    top: 0,
    left: 0,
  },
  groupWrapper: {
    top: 93,
    left: 21,
  },
  nameYourNew: {
    fontFamily: FontFamily.poppinsRegular,
    left: 21,
    textAlign: "left",
    color: Color.colorGray_600,
    fontSize: FontSize.size_sm,
  },
  groupChild3: {
    top: 43,
  },
  rectangleParent1: {
    top: 224,
    left: 18,
    height: 136,
    width: 394,
    position: "absolute",
  },
  toggleOn: {
    top: 11,
    left: 352,
    fontFamily: FontFamily.materialIconsRegular,
    color: Color.lightLabelPrimary,
    fontSize: FontSize.size_5xl,
  },
  groupChild4: {
    backgroundColor: Color.colorGray_100,
    top: 0,
    borderRadius: Border.br_xs,
    marginLeft: -197,
    left: "50%",
  },
  repeat1: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorGray_600,
    fontSize: FontSize.size_sm,
    left: 0,
  },
  text: {
    left: 81,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  everyWeekParent: {
    left: 262,
    width: 89,
    height: 21,
  },
  groupChild6: {
    top: 121,
  },
  groupChild7: {
    top: 150,
  },
  groupChild8: {
    top: 72,
  },
  setACycleForYourTaskParent: {
    height: 150,
    width: 355,
    left: 21,
    top: 17,
    position: "absolute",
  },
  groupChild9: {
    left: 37,
  },
  groupChild10: {
    left: 85,
  },
  groupChild11: {
    left: 133,
  },
  groupChild12: {
    left: 181,
  },
  groupChild13: {
    left: 229,
  },
  groupChild14: {
    left: 277,
  },
  groupChild15: {
    left: 325,
  },
  groupParent1: {
    marginLeft: -197,
    left: "50%",
    top: 0,
  },
  groupChild16: {
    left: 20,
    backgroundColor: "#edeaea",
    width: 353,
  },
  daily: {
    left: 62,
    fontFamily: FontFamily.poppinsRegular,
  },
  groupChild17: {
    backgroundColor: "#ffc09f",
    width: 137,
    left: 133,
  },
  weekly: {
    left: 174,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  monthly: {
    left: 293,
    fontFamily: FontFamily.poppinsRegular,
  },
  mon: {
    marginLeft: -155,
  },
  tue: {
    marginLeft: -105,
  },
  wed: {
    marginLeft: -60,
  },
  thu: {
    marginLeft: -9,
  },
  fri: {
    marginLeft: 42,
  },
  sat: {
    marginLeft: 87,
  },
  sun: {
    marginLeft: 134,
  },
  toggleOnParent: {
    top: 527,
    left: 17,
  },
  newTask1: {
    marginLeft: -57.5,
    top: 65,
    fontSize: FontSize.size_5xl,
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
  },
  clickToChange: {
    marginLeft: -51.5,
    top: 96,
    fontSize: 8,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  text1: {
    marginLeft: -32.5,
    fontSize: 65,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    left: "50%",
  },
  newTaskParent: {
    marginLeft: -57,
    width: 115,
    height: 108,
    left: "50%",
  },
  groupChild18: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  close: {
    top: 18,
    position: "absolute",
  },
  ellipseGroup: {
    left: 355,
    top: 84,
    position: "absolute",
  },
  groupChild19: {
    marginLeft: -98.5,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    top: 0,
  },
  add: {
    marginLeft: -16.5,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
  },
  rectangleParent3: {
    marginLeft: -99,
    top: 776,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  groupChild20: {
    borderRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  rectangleWrapper: {
    top: 0,
  },
  checklist: {
    color: Color.colorGray_700,
    lineHeight: 20,
    letterSpacing: 0,
    left: 16,
    fontFamily: FontFamily.materialIconsRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  groupPressable: {
    marginLeft: 56,
  },
  frameChild5: {
    zIndex: 0,
  },
  person: {
    zIndex: 1,
    color: Color.colorGray_700,
    lineHeight: 20,
    letterSpacing: 0,
    left: 16,
    fontFamily: FontFamily.materialIconsRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  framePressable: {
    marginLeft: 56,
    flexDirection: "row",
  },
  frameView: {
    marginLeft: -140,
    flexDirection: "row",
    left: "50%",
  },
  groupParent2: {
    top: 842,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  newTask: {
    borderRadius: Border.br_36xl,
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default NewTask;
