import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    footer: {
        backgroundColor: "#F9F4F1",
        width: wp("100%"),
        height: hp("13%"),
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
      },
      contanier: {
        backgroundColor: "#F9F4F1",
        flex: 1
      },
      content: {
        backgroundColor: "#F9F4F1",
        flex: 1
      },
      deleteButton: {
        backgroundColor: "#F9F4F1",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center"
      },
      delete: {
        backgroundColor: "#F9F4F1",
        alignItems: "center",
        width: wp("10%"),
        justifyContent: "center",
        height: hp("5%"),
        alignSelf: "center",
        borderRadius: 100
      },
      image: {
        resizeMode: "contain",
        height: hp("6%"),
        width: wp("10%"),
        borderRadius: 1000,
        borderWidth: 1,
        borderColor: "#392518"
      }
})