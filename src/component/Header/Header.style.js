import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create ({
    header: {
        backgroundColor: "#F9F4F1",
        height: hp("8%"),
        alignContent: "center",
        marginHorizontal: 1,
        marginStart: 15
      },
      header_text: {
        color: "#392518",
        fontWeight: "bold",
        fontSize: 27,
        marginTop: 15,
        marginRight: 25
      }
})