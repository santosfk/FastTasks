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
import { Container } from "./app.styles";
import {
  doc,
  getDoc,
  collection,
  setDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { Provider as PaperProvider, List } from "react-native-paper";

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
    <PaperProvider>
      <Container>
        <List.Section>
          <List.Subheader>Tasks</List.Subheader>
          <View>
            {data.map((item) => {
              return (
                <List.Item
                  title={item.title}
                  key={item.id}
                  left={(props) => <List.Icon {...props} icon="equal" />}
                />
              );
            })}
          </View>
        </List.Section>
        <StatusBar style="auto" />
        <TextInput
          value={taskTitle}
          onChangeText={setTaskTitle}
          placeholder="digite a sua tarefa"
        />
        <TouchableOpacity onPress={pullData}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </Container>
    </PaperProvider>
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
