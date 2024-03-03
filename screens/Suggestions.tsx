import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Suggestions = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.suggestions}>
      <View style={styles.learnAndStudyMoreParent}>
        <Text style={[styles.learnAndStudy, styles.learnFlexBox]}>
          Learn and study more
        </Text>
        <Text style={[styles.stayHungryFor, styles.stayTypo]}>
          Stay hungry for knowledge
        </Text>
        <Text style={styles.text}>🧠</Text>
      </View>
      <View style={[styles.groupParent, styles.groupLayout2]}>
        <View style={[styles.ellipseParent, styles.ellipseParentLayout]}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-111.png")}
          />
          <Text style={[styles.text1, styles.learnFlexBox]}>+</Text>
        </View>
        <View style={[styles.ellipseGroup, styles.ellipseParentLayout]}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-111.png")}
          />
          <Text style={[styles.text1, styles.learnFlexBox]}>+</Text>
        </View>
        <Text style={[styles.learnAndStudy1, styles.exerciseTypo]}>
          Learn and study more
        </Text>
        <Text style={[styles.stayHungryFor1, styles.stayTypo]}>
          Stay hungry for knowledge
        </Text>
        <Text style={[styles.seeAll, styles.seeTypo]}>{`See all >`}</Text>
        <Text style={styles.text}>🧠</Text>
        <View style={[styles.groupInner, styles.groupChildLayout1]} />
        <View style={[styles.rectangleView, styles.groupChild7Layout]} />
      </View>
      <Text style={[styles.exercise, styles.text17Position]}>Exercise</Text>
      <Text style={[styles.becomeYourBest, styles.stayTypo]}>
        Become your best version
      </Text>
      <Text style={[styles.seeAll1, styles.seeTypo]}>{`See all >`}</Text>
      <View style={[styles.suggestionsInner, styles.groupLayout2]}>
        <View style={[styles.groupContainer, styles.groupLayout2]}>
          <View style={[styles.ellipseGroup, styles.ellipseParentLayout]}>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/ellipse-111.png")}
            />
            <Text style={[styles.text1, styles.learnFlexBox]}>+</Text>
          </View>
          <Text style={[styles.learnAndStudy1, styles.exerciseTypo]}>
            Clean and Organize
          </Text>
          <Text style={[styles.stayHungryFor1, styles.stayTypo]}>
            Get you life togheter
          </Text>
          <Text style={[styles.seeAll, styles.seeTypo]}>{`See all >`}</Text>
          <Text style={styles.text}>🧹</Text>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChild2Position]} />
        </View>
      </View>
      <Text style={[styles.suggestions1, styles.learnFlexBox]}>
        Suggestions
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChild3Position]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.groupChild3, styles.groupChild3Position]} />
        <Text style={[styles.addMore, styles.learnFlexBox]}>Add more</Text>
      </Pressable>
      <View style={[styles.suggestionsChild, styles.groupParentLayout]}>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.ellipseParent1, styles.ellipseParentLayout]}>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/ellipse-111.png")}
            />
            <Text style={[styles.text1, styles.learnFlexBox]}>+</Text>
          </View>
          <View style={[styles.groupChild5, styles.groupChildLayout1]} />
          <Text style={[styles.read, styles.theTypo]}>Read</Text>
          <Text style={[styles.text7, styles.textTypo]}>📖</Text>
        </View>
      </View>
      <View style={[styles.groupParent1, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent1, styles.ellipseParentLayout]}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-111.png")}
          />
          <Text style={[styles.text1, styles.learnFlexBox]}>+</Text>
        </View>
        <View style={[styles.groupChild7, styles.groupChild7Layout]} />
        <View style={[styles.studyParent, styles.parentPosition]}>
          <Text style={[styles.study, styles.theTypo]}>Study</Text>
          <Text style={[styles.text9, styles.textTypo]}>✏️</Text>
        </View>
      </View>
      <View style={[styles.groupParent2, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent1, styles.ellipseParentLayout]}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-111.png")}
          />
          <Text style={[styles.text1, styles.learnFlexBox]}>+</Text>
        </View>
        <View style={[styles.groupChild9, styles.groupChildLayout1]} />
        <View style={[styles.runningParent, styles.parentPosition]}>
          <Text style={[styles.running, styles.theTypo]}>Running</Text>
          <Text style={[styles.text9, styles.textTypo]}>🏃‍️</Text>
        </View>
      </View>
      <View style={[styles.groupParent3, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent1, styles.ellipseParentLayout]}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-111.png")}
          />
          <Text style={[styles.text1, styles.learnFlexBox]}>+</Text>
        </View>
        <View style={[styles.groupChild11, styles.groupChildLayout1]} />
        <View style={[styles.cyclingParent, styles.parentPosition]}>
          <Text style={[styles.cycling, styles.theTypo]}>Cycling</Text>
          <Text style={[styles.text9, styles.textTypo]}>🚴‍</Text>
        </View>
      </View>
      <View style={[styles.groupParent4, styles.groupParentLayout]}>
        <View style={[styles.ellipseParent1, styles.ellipseParentLayout]}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-111.png")}
          />
          <Text style={[styles.text1, styles.learnFlexBox]}>+</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupChildLayout1]}>
          <View style={[styles.groupChild13, styles.groupChildLayout]} />
          <View style={[styles.mopTheHouseParent, styles.parentPosition]}>
            <Text style={[styles.mopTheHouse, styles.theTypo]}>
              Mop the house
            </Text>
            <Text style={[styles.text9, styles.textTypo]}>🪣</Text>
          </View>
        </View>
      </View>
      <View style={[styles.cleanTheBathroomParent, styles.parentPosition]}>
        <Text style={[styles.cleanTheBathroom, styles.theTypo]}>
          Clean the bathroom
        </Text>
        <Text style={[styles.text9, styles.textTypo]}>🚽</Text>
      </View>
      <Text style={[styles.text17, styles.text17Position]}>🏋️‍♂️</Text>
      <View style={[styles.groupParent5, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild14, styles.groupLayout]} />
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
            style={[styles.ellipseParent6, styles.childGroupLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  learnFlexBox: {
    textAlign: "left",
    color: Color.lightLabelPrimary,
    position: "absolute",
  },
  stayTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    left: "50%",
    position: "absolute",
  },
  groupLayout2: {
    height: 191,
    width: 390,
    position: "absolute",
  },
  ellipseParentLayout: {
    height: 36,
    width: 32,
    position: "absolute",
  },
  exerciseTypo: {
    marginLeft: -162,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: "50%",
  },
  seeTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    marginLeft: 154,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 60,
    width: 348,
    position: "absolute",
  },
  groupChild7Layout: {
    backgroundColor: Color.colorLightgreen,
    height: 60,
    width: 348,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  text17Position: {
    top: 353,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    position: "absolute",
  },
  groupChildLayout: {
    backgroundColor: Color.colorLemonchiffon,
    height: 60,
    width: 348,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  groupChild2Position: {
    top: 131,
    left: 1,
  },
  groupChild3Position: {
    width: 144,
    height: 60,
    marginLeft: -72,
    left: "50%",
    position: "absolute",
  },
  groupParentLayout: {
    width: 389,
    height: 60,
    position: "absolute",
  },
  theTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.materialIconsRegular,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    position: "absolute",
  },
  parentPosition: {
    height: 21,
    left: "50%",
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
    left: 16,
    fontFamily: FontFamily.materialIconsRegular,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  learnAndStudy: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightLabelPrimary,
    fontSize: FontSize.size_base,
    left: "50%",
    top: 0,
    marginLeft: -72,
  },
  stayHungryFor: {
    marginLeft: -105,
    fontFamily: FontFamily.poppinsRegular,
    top: 24,
    fontSize: FontSize.size_3xs,
  },
  text: {
    fontSize: FontSize.size_5xl,
    left: 1,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    top: 0,
    position: "absolute",
  },
  learnAndStudyMoreParent: {
    width: 210,
    height: 39,
    left: "50%",
    top: 130,
    marginLeft: -195,
    position: "absolute",
  },
  groupChild: {
    top: 2,
    height: 32,
    left: 0,
    width: 32,
    position: "absolute",
  },
  text1: {
    left: 7,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightLabelPrimary,
    top: 0,
  },
  ellipseParent: {
    top: 67,
    left: 358,
    height: 36,
  },
  ellipseGroup: {
    top: 143,
    left: 358,
    height: 36,
  },
  learnAndStudy1: {
    textAlign: "left",
    color: Color.lightLabelPrimary,
    position: "absolute",
    top: 0,
  },
  stayHungryFor1: {
    fontFamily: FontFamily.poppinsRegular,
    top: 24,
    fontSize: FontSize.size_3xs,
    marginLeft: -195,
  },
  seeAll: {
    top: 4,
  },
  groupInner: {
    backgroundColor: Color.colorKhaki,
    height: 60,
    width: 348,
    borderRadius: Border.br_xs,
    top: 55,
    left: 1,
  },
  rectangleView: {
    top: 131,
    left: 1,
  },
  groupParent: {
    left: 20,
    width: 390,
    top: 130,
  },
  exercise: {
    marginLeft: -162,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: "50%",
  },
  becomeYourBest: {
    top: 377,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: -195,
  },
  seeAll1: {
    top: 357,
  },
  groupChild1: {
    top: 55,
    left: 1,
  },
  groupChild2: {
    backgroundColor: Color.colorPlum_100,
    height: 60,
    width: 348,
    position: "absolute",
    borderRadius: Border.br_xs,
  },
  groupContainer: {
    left: 0,
    top: 0,
  },
  suggestionsInner: {
    top: 576,
    left: 20,
    width: 390,
  },
  suggestions1: {
    marginLeft: -38,
    top: 70,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightLabelPrimary,
    left: "50%",
  },
  groupChild3: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    top: 0,
  },
  addMore: {
    marginLeft: -40,
    top: 18,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightLabelPrimary,
    fontSize: FontSize.size_base,
    left: "50%",
  },
  rectangleParent: {
    top: 767,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  ellipseParent1: {
    top: 12,
    left: 357,
  },
  groupChild5: {
    backgroundColor: Color.colorKhaki,
    height: 60,
    width: 348,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  read: {
    marginLeft: -147.5,
    top: 20,
  },
  text7: {
    left: 15,
    top: 20,
  },
  groupView: {
    left: 0,
    top: 0,
  },
  suggestionsChild: {
    top: 185,
    left: 21,
  },
  groupChild7: {
    left: 0,
    top: 0,
  },
  study: {
    marginLeft: -4,
    top: 0,
  },
  text9: {
    top: 1,
    left: 0,
  },
  studyParent: {
    width: 72,
    marginLeft: -179.5,
    height: 21,
    top: 20,
  },
  groupParent1: {
    top: 261,
    left: 21,
  },
  groupChild9: {
    backgroundColor: "rgba(189, 224, 254, 0.6)",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  running: {
    marginLeft: -14.5,
    top: 0,
  },
  runningParent: {
    width: 87,
    marginLeft: -179.5,
    height: 21,
    top: 20,
  },
  groupParent2: {
    top: 408,
    left: 21,
  },
  groupChild11: {
    backgroundColor: "rgba(255, 192, 159, 0.6)",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  cycling: {
    marginLeft: -12,
    top: 0,
  },
  cyclingParent: {
    width: 82,
    marginLeft: -179.5,
    height: 21,
    top: 18,
  },
  groupParent3: {
    top: 484,
    left: 21,
  },
  groupChild13: {
    left: 0,
    top: 0,
  },
  mopTheHouse: {
    marginLeft: -37.5,
    top: 0,
  },
  mopTheHouseParent: {
    marginLeft: -159,
    top: 19,
    width: 133,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  groupParent4: {
    top: 631,
    left: 21,
  },
  cleanTheBathroom: {
    marginLeft: -57,
    top: 0,
  },
  cleanTheBathroomParent: {
    marginLeft: -179,
    top: 726,
    width: 172,
  },
  text17: {
    left: 21,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsRegular,
  },
  groupChild14: {
    borderRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  rectangleWrapper: {
    top: 0,
  },
  groupChild15: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  calendarMonth: {
    top: 18,
  },
  checklist: {
    top: 16,
  },
  ellipseParent6: {
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
    flexDirection: "row",
    top: 16,
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
      height: 6,
    },
  },
  suggestions: {
    borderRadius: Border.br_36xl,
    flex: 1,
    width: "100%",
    height: 930,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default Suggestions;
