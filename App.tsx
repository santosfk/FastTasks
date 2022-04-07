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
import { ThemeProvider } from "styled-components";
import TaskItem from "./src/components/TaskItem";
import theme from "./src/theme";
import Header from "./src/components/Header";

export default function App() {
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
  const changeTheme = () => {
    setThemeToggle(!themeToggle);
  };
  return (
    <PaperProvider>
      <ThemeProvider theme={themeToggle ? theme.light : theme.dark}>
        <StatusBar style={themeToggle ? "light" : "dark"} />
        <Container>
          <Header changeTheme={changeTheme} />
          <ListWrap>
            <List.Section>
              <ScrollView>
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
      </ThemeProvider>
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
