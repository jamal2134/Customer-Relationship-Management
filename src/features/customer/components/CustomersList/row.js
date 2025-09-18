import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Liststyles from "./styles";

const Row = ({ item }) => {
  const styles = StyleSheet.create(Liststyles());
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigate("Edit Customer", { customerID: item.id })}
    >
      <View style={styles.card}>
        <Text style={styles.id}>#{item.id}</Text>
        <Text style={styles.name}>
          {item.first_name} {item.last_name}
        </Text>
        <View style={styles.details}>
          <Text style={styles.label}>Active Type:</Text>
          <Text style={[styles.value, { flexShrink: 1 }]}>{item.active_type}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.label}>Region:</Text>
          <Text style={[styles.value, { flexShrink: 1 }]}>{item.region_type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
