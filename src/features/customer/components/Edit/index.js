import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import Form from "../Form";
import EditStyles from './styles'
import { useResetForm, useEditCustomer } from "../../hooks";

const Edit = () => {
  useResetForm();
  const styles = StyleSheet.create(EditStyles())

  const { params } = useRoute();
  const { customerID } = params;

  const { onSubmit } = useEditCustomer(customerID);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Customer</Text>
      <Form onSubmit={onSubmit} customerID={customerID} />
    </ScrollView>
  );
};



export default Edit;
