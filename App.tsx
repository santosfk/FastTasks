import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import database from "./src/config/firebase";
import { Container, TextTask, InputContent, ListWrap } from "./app.styles";
import {
  doc,
  getDoc,
  collection,
  setDoc,
  getDocs,
  query,
  deleteDoc,
} from "firebase/firestore";
import { Provider as PaperProvider, List, Button } from "react-native-paper";
import TaskItem from "./src/components/TaskItem";
export default function App() {
  const [data, setData] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [sendData, setSendData] = useState(false);

  const taskRef = collection(database, "tasks");
  const pullData = async () => {
    await setDoc(doc(taskRef, taskTitle), {
      title: taskTitle,
    });
    setSendData(!sendData);
  };
  useEffect(() => {
    getData();
  }, [sendData]);

  const getData = async () => {
    const data = await getDocs(taskRef);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const delData = async (title: string) => {
    await deleteDoc(doc(database, "tasks", title));
    setSendData(!sendData);
  };
  console.log(data);
  return (
    <PaperProvider>
      <Container>
        <ListWrap>
          <List.Section>
            <ScrollView>
              <List.Subheader>Tasks</List.Subheader>

              {data.map((item) => {
                return (
                  <TaskItem
                    title={item.title}
                    key={item.id}
                    delData={delData}
                  />
                );
              })}
            </ScrollView>
          </List.Section>
        </ListWrap>
        <StatusBar style="auto" />
        <InputContent>
          <TextTask
            value={taskTitle}
            onChangeText={setTaskTitle}
            placeholder="digite a sua tarefa"
          />
          <TouchableOpacity>
            <Button icon="send" onPress={pullData}>
              Enviar
            </Button>
          </TouchableOpacity>
        </InputContent>
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
