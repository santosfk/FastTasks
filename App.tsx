import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ListViewBase, StyleSheet, Text, View } from "react-native";
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

export default function App() {
  const [data, setData] = useState([]);

  const taskTitle = "comprar um sorvetao";
  const taskRef = collection(database, "tasks");
  const pullData = async () => {
    await setDoc(doc(taskRef, taskTitle), {
      title: taskTitle,
    });

    console.log("data enviada");
  };
  useEffect(() => {
    pullData();
  }, []);

  const showData = async () => {
    const data = await getDocs(taskRef);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.content} onPress={showData}>
        Open up App.js to start working on your app!
      </Text>
      {data.map((item) => {
        return <Item key={item.id}>{item.title} </Item>;
      })}

      <StatusBar style="auto" />
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
