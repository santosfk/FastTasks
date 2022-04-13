import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import database from "../../config/firebase";
import { Container, TextTask, InputContent, ListWrap } from "./style";
import {
  doc,
  collection,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { List, Button } from "react-native-paper";
import TaskItem from "../../components/TaskItem";
import Header from "../../components/Header";

type Props = {
  changeTheme: () => void;
};
export default function Home({ changeTheme }:Props) {
  const [data, setData] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [sendData, setSendData] = useState(false);
  const [themeToggle, setThemeToggle] = useState(false);

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

  return (
    <Container>
      <Header changeTheme={changeTheme} />
      <ListWrap>
        <List.Section>
          <ScrollView>
            {data.map((item) => {
              return (
                <TaskItem title={item.title} key={item.id} delData={delData} />
              );
            })}
          </ScrollView>
        </List.Section>
      </ListWrap>

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
