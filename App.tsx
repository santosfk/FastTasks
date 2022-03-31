import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import database from "./src/config/firebase";
import { Item } from "./app.styles";
import {
  doc,
  getDoc,
  collection,
  setDoc,
  getDocs,
  query,
} from "firebase/firestore";
import ItemTask from "./src/components/ItemTask";

export default function App() {
  const [data, setData] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [sendData, setSendData] = useState(false);

  const taskRef = collection(database, "tasks");
  const pullData = async () => {
    await setDoc(doc(taskRef, taskTitle), {
      title: taskTitle,
    });
    setSendData(true);
  };
  useEffect(() => {
    getData();
  }, [sendData]);

  const getData = async () => {
    const data = await getDocs(taskRef);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(data);
  return (
    <View style={styles.container}>
      {data.map((item) => {
        return <ItemTask key={item.id} title={item.title} />;
      })}

      <StatusBar style="auto" />
      <TextInput
        value={taskTitle}
        onChangeText={setTaskTitle}
        placeholder="digite a sua tarefa"
      />
      <TouchableOpacity onPress={pullData}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "column",
  },
});
