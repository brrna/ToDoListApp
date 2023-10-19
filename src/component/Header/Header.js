import { View, Text } from "react-native";
import styles from "../Header/Header.style"

const Header = ({tasks}) => {

    return (
        <View
            style={styles.header}>
                <Text
                    style={styles.header_text}>YAPILACAKLAR</Text>

        </View>
    )
}

export default Header;