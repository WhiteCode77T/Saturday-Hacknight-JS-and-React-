import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Calendar = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.calendar}>
      <View style={styles.calendarChild} />
      <Text style={[styles.calendar1, styles.text40Typo]}>Calendar</Text>
      <View style={styles.calendarInner}>
        <View style={[styles.groupParent, styles.parentPosition]}>
          <View style={styles.februaryParent}>
            <Text style={styles.february}>February</Text>
            <Text style={styles.text}>2024</Text>
          </View>
          <View style={styles.groupContainer}>
            <View style={[styles.frameParent, styles.parentPosition]}>
              <View style={[styles.frameView, styles.groupParentPosition]}>
                <View style={styles.groupLayout1}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text1, styles.textTypo]}>29</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text1, styles.textTypo]}>30</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text3, styles.textPosition2]}>31</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text4, styles.textPosition1]}>1</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text5, styles.textPosition]}>2</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text5, styles.textPosition]}>3</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>4</Text>
                </View>
              </View>
              <View style={[styles.groupParent1, styles.groupParentPosition]}>
                <View style={styles.groupLayout1}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>5</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>6</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text5, styles.textPosition]}>7</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>8</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text5, styles.textPosition]}>9</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text13, styles.textPosition2]}>10</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>11</Text>
                </View>
              </View>
              <View style={[styles.groupParent2, styles.groupParentPosition]}>
                <View style={styles.groupLayout1}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>12</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text13, styles.textPosition2]}>13</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text13, styles.textPosition2]}>14</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-11.png")}
                  />
                  <Text style={[styles.text13, styles.textPosition2]}>15</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text13, styles.textPosition2]}>16</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text13, styles.textPosition2]}>17</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text13, styles.textPosition2]}>18</Text>
                </View>
              </View>
              <View style={[styles.groupParent3, styles.groupParentPosition]}>
                <View style={styles.groupLayout1}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>19</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text23, styles.textTypo]}>20</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text13, styles.textPosition2]}>21</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text23, styles.textTypo]}>22</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text23, styles.textTypo]}>23</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text23, styles.textTypo]}>24</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text23, styles.textTypo]}>25</Text>
                </View>
              </View>
              <View style={[styles.groupParent4, styles.groupParentPosition]}>
                <View style={styles.groupLayout1}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>26</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text23, styles.textTypo]}>27</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text13, styles.textPosition2]}>28</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text23, styles.textTypo]}>29</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text33, styles.textPosition1]}>1</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text34, styles.textPosition]}>2</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout1]}
                    contentFit="cover"
                    source={require("../assets/ellipse-101.png")}
                  />
                  <Text style={[styles.text34, styles.textPosition]}>3</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
            <Text style={[styles.tue, styles.monTypo]}>Tue</Text>
            <Text style={[styles.wed, styles.monTypo]}>Wed</Text>
            <Text style={[styles.thu, styles.monTypo]}>Thu</Text>
            <Text style={[styles.fri, styles.monTypo]}>Fri</Text>
            <Text style={[styles.sat, styles.monTypo]}>Sat</Text>
            <Text style={[styles.sun, styles.monTypo]}>Sun</Text>
            <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
            <Text style={[styles.tue, styles.monTypo]}>Tue</Text>
            <Text style={[styles.wed, styles.monTypo]}>Wed</Text>
            <Text style={[styles.thu, styles.monTypo]}>Thu</Text>
            <Text style={[styles.fri, styles.monTypo]}>Fri</Text>
            <Text style={[styles.sat, styles.monTypo]}>Sat</Text>
            <Text style={[styles.sun, styles.monTypo]}>Sun</Text>
          </View>
        </View>
      </View>
      <View style={styles.february15thThuParent}>
        <Text style={[styles.february15thThu, styles.readTypo]}>
          February, 15th, Thu
        </Text>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.february16thFri, styles.readTypo]}>
          February, 16th, Fri
        </Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.thisWeek, styles.readTypo]}>This week</Text>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameLayout]} />
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={[styles.rectangleParent, styles.groupWrapperLayout]}>
            <View style={[styles.groupChild32, styles.groupWrapperLayout]} />
            <Text style={[styles.read, styles.readPosition]}>Read</Text>
            <Text style={styles.text36}>📖</Text>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-71.png")}
            />
            <Image
              style={[styles.groupChild33, styles.readPosition]}
              contentFit="cover"
              source={require("../assets/group-72.png")}
            />
          </View>
        </View>
        <View style={[styles.groupFrame, styles.groupWrapperLayout]}>
          <View style={[styles.rectangleParent, styles.groupWrapperLayout]}>
            <View style={[styles.groupChild32, styles.groupWrapperLayout]} />
            <Text style={[styles.read, styles.readPosition]}>Read</Text>
            <Text style={styles.text36}>📖</Text>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-71.png")}
            />
            <Image
              style={[styles.groupChild33, styles.readPosition]}
              contentFit="cover"
              source={require("../assets/group-72.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper1, styles.groupWrapperLayout]}>
          <View style={[styles.rectangleParent, styles.groupWrapperLayout]}>
            <View style={[styles.groupChild32, styles.groupWrapperLayout]} />
            <Text style={[styles.read, styles.readPosition]}>Read</Text>
            <Text style={styles.text36}>📖</Text>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-71.png")}
            />
            <Image
              style={[styles.groupChild33, styles.readPosition]}
              contentFit="cover"
              source={require("../assets/group-72.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper2, styles.groupWrapperLayout]}>
          <View style={[styles.rectangleParent, styles.groupWrapperLayout]}>
            <View style={[styles.groupChild32, styles.groupWrapperLayout]} />
            <Text style={[styles.read, styles.readPosition]}>Read</Text>
            <Text style={styles.text36}>📖</Text>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-71.png")}
            />
            <Image
              style={[styles.groupChild33, styles.readPosition]}
              contentFit="cover"
              source={require("../assets/group-72.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupParent5, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild43, styles.groupLayout]} />
        </View>
        <View style={styles.groupParent6}>
          <Pressable
            style={styles.childGroupLayout}
            onPress={() => navigation.navigate("Calendar")}
          >
            <Image
              style={[styles.groupChild44, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.calendarMonth, styles.personTypo]}>
              calendar_month
            </Text>
          </Pressable>
          <Pressable
            style={[styles.ellipseParent32, styles.childGroupLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.groupChild44, styles.childGroupLayout]}
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
              style={[styles.frameChild1, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.person, styles.personTypo]}>person</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={[styles.ellipseParent33, styles.childGroupLayout]}
        onPress={() => navigation.navigate("NewTask")}
      >
        <Image
          style={[styles.groupChild44, styles.childGroupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.text40, styles.text40Typo]}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text40Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    color: Color.lightLabelPrimary,
    position: "absolute",
  },
  parentPosition: {
    top: 26,
    marginLeft: -184,
    left: "50%",
    position: "absolute",
  },
  groupParentPosition: {
    marginLeft: -184,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  groupLayout1: {
    height: 32,
    width: 32,
  },
  textTypo: {
    top: 4,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  textPosition2: {
    marginLeft: -8,
    top: 4,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  textPosition1: {
    marginLeft: -3,
    top: 4,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    marginLeft: -5,
    top: 4,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  monTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    top: 0,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    left: "50%",
    position: "absolute",
  },
  readTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  frameLayout: {
    height: 60,
    backgroundColor: Color.colorGainsboro,
    width: 394,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
  },
  groupWrapperLayout: {
    width: 393,
    height: 60,
    position: "absolute",
  },
  readPosition: {
    top: 20,
    position: "absolute",
  },
  groupLayout: {
    height: 88,
    width: 430,
    left: 0,
    position: "absolute",
  },
  childGroupLayout: {
    height: 56,
    width: 56,
  },
  personTypo: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.materialIconsRegular,
    lineHeight: 20,
    letterSpacing: 0,
    left: 16,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  calendarChild: {
    top: 54,
    backgroundColor: Color.colorLightblue_100,
    height: 878,
    width: 430,
    left: 0,
    position: "absolute",
  },
  calendar1: {
    marginLeft: -57,
    top: 70,
    left: "50%",
  },
  february: {
    marginLeft: -110,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    top: 0,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: 81,
    top: 6,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    left: "50%",
    position: "absolute",
  },
  februaryParent: {
    width: 220,
    height: 24,
  },
  groupChild: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  text1: {
    color: Color.colorGray_400,
    marginLeft: -10,
    top: 4,
  },
  ellipseGroup: {
    marginLeft: 24,
  },
  text3: {
    color: Color.colorGray_400,
  },
  text4: {
    color: Color.colorGray_600,
  },
  text5: {
    color: Color.colorGray_600,
  },
  text7: {
    marginLeft: -6,
    color: Color.colorGray_600,
  },
  frameView: {
    flexDirection: "row",
    top: 0,
  },
  text13: {
    color: Color.colorGray_600,
  },
  groupParent1: {
    top: 46,
    flexDirection: "row",
  },
  groupParent2: {
    top: 92,
    flexDirection: "row",
  },
  text23: {
    color: Color.colorGray_600,
    marginLeft: -10,
    top: 4,
  },
  groupParent3: {
    top: 138,
    flexDirection: "row",
  },
  text33: {
    color: Color.colorGray_400,
  },
  text34: {
    color: Color.colorGray_400,
  },
  groupParent4: {
    top: 184,
    flexDirection: "row",
  },
  frameParent: {
    height: 216,
    width: 368,
  },
  mon: {
    marginLeft: -181,
  },
  tue: {
    marginLeft: -123,
  },
  wed: {
    marginLeft: -70,
  },
  thu: {
    marginLeft: -11,
  },
  fri: {
    marginLeft: 49,
  },
  sat: {
    marginLeft: 102,
  },
  sun: {
    marginLeft: 156,
  },
  groupContainer: {
    height: 242,
    marginTop: 16,
    width: 368,
  },
  groupParent: {
    alignItems: "flex-end",
  },
  calendarInner: {
    top: 122,
    backgroundColor: Color.colorGray_100,
    width: 398,
    height: 333,
    borderRadius: Border.br_xs,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  february15thThu: {
    color: Color.colorGray_600,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 29,
  },
  february16thFri: {
    top: 97,
    color: Color.colorGray_600,
    left: 0,
    position: "absolute",
  },
  frameItem: {
    top: 126,
  },
  thisWeek: {
    top: 194,
    color: Color.colorGray_600,
    left: 0,
    position: "absolute",
  },
  frameInner: {
    top: 223,
  },
  rectangleView: {
    top: 291,
  },
  groupChild32: {
    backgroundColor: Color.colorLavender,
    top: 0,
    borderRadius: Border.br_xs,
    left: 0,
  },
  read: {
    marginLeft: -149.5,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    top: 20,
    left: "50%",
  },
  text36: {
    left: 15,
    fontFamily: FontFamily.materialIconsRegular,
    lineHeight: 20,
    letterSpacing: 0,
    top: 20,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupIcon: {
    left: 353,
    width: 24,
    top: 18,
    height: 24,
    position: "absolute",
  },
  groupChild33: {
    left: 355,
    width: 20,
    height: 20,
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  groupWrapper: {
    left: 1,
    width: 393,
    top: 29,
  },
  groupFrame: {
    left: 1,
    width: 393,
    top: 126,
  },
  groupWrapper1: {
    left: 1,
    width: 393,
    top: 223,
  },
  groupWrapper2: {
    left: 1,
    width: 393,
    top: 291,
  },
  february15thThuParent: {
    top: 471,
    height: 351,
    width: 394,
    left: 16,
    position: "absolute",
  },
  groupChild43: {
    borderRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 88,
  },
  rectangleWrapper: {
    top: 0,
  },
  groupChild44: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  calendarMonth: {
    top: 18,
  },
  checklist: {
    top: 16,
  },
  ellipseParent32: {
    marginLeft: 56,
  },
  frameChild1: {
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
  groupParent6: {
    marginLeft: -140,
    top: 16,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  groupParent5: {
    top: 842,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -27,
    },
  },
  text40: {
    top: 10,
    left: 19,
  },
  ellipseParent33: {
    top: 770,
    left: 342,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -27,
    },
    position: "absolute",
  },
  calendar: {
    borderRadius: Border.br_36xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default Calendar;
