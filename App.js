import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import {
  fetchDataList,
  addDataItem,
  deleteDataItem,
} from "./utils/supabaseFunction";

export default function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataList = await fetchDataList();
    setDataList(dataList);
  };

  const onPressAdd = async () => {
    const data = {
      id: 2,
      classification: "食費",
      amount: 1000,
    };

    await addDataItem(data);
    fetchData();
  };

  return (
    <View style={styles.container}>
      {dataList.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.amount}</Text>
          </View>
        );
      })}
      <StatusBar style="auto" />
      <View>
        <Button title="追加" onPress={onPressAdd} />
      </View>
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
});
