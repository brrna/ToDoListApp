import { View, Text } from "react-native";
import styles from "./TaskCardStyle";

const TaskCard = (props) => {
    return(
        <View style={styles.contanier}>
            <View style={styles.card}>
                <Text style={styles.task}>{props.task}</Text>
            </View>
        </View>
    )
}

export default TaskCard;
