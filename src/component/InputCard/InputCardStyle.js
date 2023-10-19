import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    inputView: {
        backgroundColor: "#F9F4F1",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
      },
    input: {
        backgroundColor: "white",
        width: wp("97%"),
        height: hp("6%"),
        borderRadius: 10,
        justifyContent: "space-evenly",
        borderColor: "#8F5C3D",
        borderWidth: 1
    },
    textinput: {
        color: "black",
        fontSize: 15,
        fontWeight: "normal",
        padding: 10
    },
    button: {
        backgroundColor: "#8F5C3D",
        width: wp("97%"),
        height: hp("4%"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
      },
      buttontext: {
        fontSize: 20,
        fontWeight: "bold"
      }
})