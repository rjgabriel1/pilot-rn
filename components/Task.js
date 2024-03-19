import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task({ name }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.sqaure}></View>
        <Text style={styles.itemName}>{name}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  sqaure: {
    width: 24,
    height: 24,
    backgroundColor: "#6d66e4",
    borderRadius: 5,
    opacity: 0.4,
    marginRight: 15,
  },
  itemName: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#6d66e4",
    borderWidth: 2,
    borderRadius: 5,
  },
});
