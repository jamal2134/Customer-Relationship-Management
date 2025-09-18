import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useResetForm, useNewCustomer } from "../../hooks";
import Form from "../Form";
import NewStyles from './styles'

const New = () => {
  useResetForm();
  const styles = StyleSheet.create(NewStyles())

  const { onSubmit } = useNewCustomer();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add New Customer</Text>
      <Form onSubmit={onSubmit} />
    </ScrollView>
  );
};



export default New;
