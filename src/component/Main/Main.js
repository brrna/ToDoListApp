import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import InputCard from "../InputCard/InputCard";
import styles from "./MainStyle"
import TaskCard from "../TaskCard/TaskCard";
import { useState } from "react";

const Main = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const renderTasks = ({item, index}) => (
    <View   
      style={styles.deleteButton}>
      <TaskCard task={item} />
      <TouchableOpacity 
        style={styles.delete}
        onPress={() => handleDeleteTaskPress(index)}>
        <Image 
          style={styles.image}
          source={require("../images/bin.png")} />
      </TouchableOpacity>
    </View>
  );

  const keyTasks = (item) => item + Date.now() + Math.random();

  return (
    <View style={styles.contanier}>
      <View style={styles.content}>
        <FlatList
          data={tasks}
          renderItem={renderTasks}
          keyExtractor={keyTasks}
        />
      </View>
      <View style={styles.footer}>
        <InputCard onAddTask={handleAddTask} />
      </View>
    </View>
  )
}

export default Main;
