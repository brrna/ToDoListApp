import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    contanier: {
        backgroundColor: "#F9F4F1",
        height: hp("10%"),
        width: wp("89%"),
        justifyContent: "center"
    },
    card: {
        backgroundColor: "#F9F4F1",
        width: wp("89%"),
        height: hp("7"),
        justifyContent: "center",
        borderEndColor: "#392518",
        borderBottomWidth: 1
    },
    task: {
        fontSize: 21,
        fontWeight: "normal",
        color: "#392518",
        marginLeft: 10
    }
})