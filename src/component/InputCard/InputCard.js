import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "../InputCard/InputCardStyle"
import { useState } from "react";

const InputCard = (props) => {
    const [text, setText] = useState("");

    const handleAddTaskPress = () => {
        props.onAddTask(text);
        setText("");
    };

    return (
        <View style={styles.inputView}>
            <View style={styles.input}>
                <TextInput
                    style={styles.textinput}
                    placeholder="Yapılacak..." 
                    value={text}
                    onChangeText={setText}/>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleAddTaskPress} >
                <Text style={styles.buttontext}>Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputCard;
