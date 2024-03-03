import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const HomeEmptyState = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeEmptyState}>
      <View style={styles.homeEmptyStateChild} />
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/frame-1190.png")}
        />
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={styles.groupParent}>
            <View style={styles.groupItemLayout}>
              <View style={[styles.groupItem, styles.groupBorder]} />
              <Text style={[styles.all, styles.allTypo]}>All</Text>
            </View>
            <View style={[styles.rectangleGroup, styles.groupLayout1]}>
              <View style={[styles.groupInner, styles.groupLayout1]} />
              <Text style={[styles.dailyRoutine, styles.allPosition]}>
                Daily Routine
              </Text>
            </View>
            <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
              <View style={[styles.rectangleView, styles.groupViewLayout]} />
              <Text style={[styles.studyRoutine, styles.studyRoutinePosition]}>
                Study Routine
              </Text>
            </View>
            <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
              <View style={[styles.groupView, styles.groupViewLayout]}>
                <View style={[styles.groupChild1, styles.groupViewLayout]} />
                <Text
                  style={[styles.healthHabits, styles.studyRoutinePosition]}
                >
                  Health Habits
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text style={[styles.sun, styles.sunTypo]}>Sun</Text>
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-10.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>10</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupChildLayout]}>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Text style={[styles.mon, styles.monPosition]}>Mon</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text1, styles.allTypo]}>11</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent3, styles.groupChildLayout]}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text style={[styles.tue, styles.sunTypo]}>Tue</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>12</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent4, styles.groupChildLayout]}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text style={[styles.wed, styles.monPosition]}>Wed</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>13</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent5, styles.groupChildLayout]}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text style={[styles.sun, styles.sunTypo]}>Thu</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>14</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent6, styles.groupChildLayout]}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text style={[styles.fri, styles.sunTypo]}>Fri</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>15</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent7, styles.groupChildLayout]}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text style={[styles.sat, styles.sunTypo]}>Sat</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>16</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.childGroupLayout]}
        onPress={() => navigation.navigate("Suggestions")}
      >
        <Image
          style={[styles.groupChild15, styles.childGroupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={styles.text7}>+</Text>
      </Pressable>
      <View style={[styles.groupParent1, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild16, styles.groupLayout]} />
        </View>
        <View style={styles.frameView}>
          <Pressable
            style={styles.childGroupLayout}
            onPress={() => navigation.navigate("Calendar")}
          >
            <Image
              style={[styles.groupChild15, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.calendarMonth, styles.personTypo]}>
              calendar_month
            </Text>
          </Pressable>
          <Pressable
            style={[styles.ellipseParent5, styles.childGroupLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.groupChild15, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.checklist, styles.personTypo]}>checklist</Text>
          </Pressable>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={[styles.frameChild, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.person, styles.personTypo]}>person</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.homeEmptyStateItem, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1195.png")}
      />
      <Image
        style={[styles.homeEmptyStateInner, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1196.png")}
      />
      <View style={styles.groupParent2}>
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-27.png")}
        />
        <Image
          style={[styles.freepikDeskInject12Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/freepikdeskinject12.png")}
        />
        <Text style={[styles.nothingHereYet, styles.todayTypo]}>
          Nothing here yet...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todayTypo: {
    textAlign: "left",
    color: Color.lightLabelPrimary,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameLayout: {
    height: 32,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  allTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupLayout1: {
    width: 91,
    height: 32,
  },
  allPosition: {
    fontSize: FontSize.size_xs,
    top: 7,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  groupViewLayout: {
    width: 97,
    height: 32,
  },
  studyRoutinePosition: {
    marginLeft: -41.5,
    fontSize: FontSize.size_xs,
    top: 7,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    width: 48,
    height: 68,
    top: 0,
    position: "absolute",
  },
  sunTypo: {
    top: 4,
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 32,
    height: 32,
    position: "absolute",
  },
  textTypo: {
    marginLeft: -6,
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  monPosition: {
    marginLeft: -14,
    top: 4,
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  childGroupLayout: {
    height: 56,
    width: 56,
  },
  groupLayout: {
    height: 88,
    width: 430,
    left: 0,
    position: "absolute",
  },
  personTypo: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.materialIconsRegular,
    lineHeight: 20,
    letterSpacing: 0,
    left: 16,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  homePosition: {
    opacity: 0.45,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeEmptyStateChild: {
    backgroundColor: Color.colorPlum_100,
    height: 178,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  today: {
    marginLeft: -26,
    top: 58,
    left: "50%",
  },
  groupChild: {
    top: 5,
    left: 314,
    width: 6,
    height: 22,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorOrchid,
    width: 68,
    height: 32,
  },
  all: {
    marginLeft: -8,
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    top: 7,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  groupItemLayout: {
    width: 68,
    height: 32,
  },
  groupInner: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  dailyRoutine: {
    marginLeft: -39.5,
    color: Color.colorGray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  rectangleView: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  studyRoutine: {
    color: Color.colorGray_500,
  },
  rectangleContainer: {
    marginLeft: 8,
  },
  groupChild1: {
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  healthHabits: {
    color: Color.colorGray_600,
  },
  groupView: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameWrapper: {
    marginLeft: -160,
    width: 276,
    left: "50%",
    top: 0,
  },
  frameParent: {
    top: 194,
    left: 77,
    width: 320,
  },
  groupChild2: {
    backgroundColor: Color.colorPlum_200,
    borderRadius: Border.br_xs,
    left: 0,
  },
  sun: {
    marginLeft: -12,
  },
  ellipseIcon: {
    top: 28,
    left: 8,
  },
  text: {
    top: 35,
  },
  rectangleParent1: {
    left: 0,
  },
  groupChild3: {
    backgroundColor: Color.colorOrchid,
    borderRadius: Border.br_xs,
    left: 0,
  },
  mon: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupChild4: {
    left: 0,
    top: 0,
  },
  text1: {
    marginLeft: -5,
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    top: 7,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  rectangleParent2: {
    left: 56,
  },
  tue: {
    marginLeft: -11,
  },
  text2: {
    top: 7,
    marginLeft: -6,
  },
  rectangleParent3: {
    left: 112,
  },
  wed: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rectangleParent4: {
    left: 168,
  },
  rectangleParent5: {
    left: 224,
  },
  fri: {
    marginLeft: -7,
  },
  rectangleParent6: {
    left: 280,
  },
  sat: {
    marginLeft: -10,
  },
  rectangleParent7: {
    left: 336,
  },
  groupContainer: {
    top: 90,
    left: 23,
    width: 384,
    height: 68,
    position: "absolute",
  },
  groupChild15: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text7: {
    top: 10,
    left: 19,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupPressable: {
    top: 770,
    left: 342,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    position: "absolute",
  },
  groupChild16: {
    borderRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  rectangleWrapper: {
    top: 0,
  },
  calendarMonth: {
    top: 18,
  },
  checklist: {
    top: 16,
  },
  ellipseParent5: {
    marginLeft: 56,
  },
  frameChild: {
    zIndex: 0,
  },
  person: {
    zIndex: 1,
    top: 16,
  },
  framePressable: {
    marginLeft: 56,
    flexDirection: "row",
  },
  frameView: {
    marginLeft: -140,
    top: 16,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  groupParent1: {
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
  homeEmptyStateItem: {
    top: 269,
    left: -14,
    width: 399,
    height: 421,
  },
  homeEmptyStateInner: {
    top: 237,
    left: -53,
    width: 504,
    height: 535,
  },
  groupIcon: {
    height: "84.65%",
    width: "87.93%",
    top: "0%",
    right: "5.94%",
    bottom: "15.35%",
    left: "6.13%",
  },
  freepikDeskInject12Icon: {
    height: "0.13%",
    top: "87.5%",
    right: "0%",
    bottom: "12.37%",
    left: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  nothingHereYet: {
    top: "92.31%",
    left: "26.47%",
  },
  groupParent2: {
    height: "33.55%",
    width: "72.05%",
    top: "36.34%",
    right: "14%",
    bottom: "30.11%",
    left: "13.95%",
    position: "absolute",
  },
  homeEmptyState: {
    borderRadius: Border.br_36xl,
    flex: 1,
    height: 930,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default HomeEmptyState;
