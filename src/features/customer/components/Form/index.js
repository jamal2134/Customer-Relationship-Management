import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useUpdateFields } from "../../hooks";
import { useNavigation } from "@react-navigation/native";
import formStyles from "./styles";

const Form = ({ onSubmit, customerID }) => {
  const styles = StyleSheet.create(formStyles());
  const { fields, setFormField } = useUpdateFields(customerID);
  const { navigate } = useNavigation();

  const { first_name, last_name, active_type, region_type } = fields;

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!first_name || !last_name || !active_type || !region_type) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [first_name, last_name, active_type, region_type]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* First Name */}
      <Text style={styles.label}>First Name</Text>
      <TextInput
        placeholder="Enter first name"
        value={first_name || ""}
        style={styles.input}
        onChangeText={(v) => setFormField("first_name", v)}
      />

      {/* Last Name */}
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        placeholder="Enter last name"
        value={last_name || ""}
        style={styles.input}
        onChangeText={(v) => setFormField("last_name", v)}
      />

      {/* Active Status */}
      <Text style={styles.label}>Status</Text>
      <View style={styles.row}>
        {["Active", "in-active"].map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.option,
              active_type === status && styles.optionActive,
            ]}
            onPress={() => setFormField("active_type", status)}
          >
            <Text
              style={[
                styles.optionText,
                active_type === status && styles.optionTextActive,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Region */}
      <Text style={styles.label}>Region</Text>
      <View style={styles.rowWrap}>
        {["South West", "North West", "North East", "South East", "Mid West"].map(
          (region) => (
            <TouchableOpacity
              key={region}
              style={[
                styles.option,
                region_type === region && styles.optionActive,
              ]}
              onPress={() => setFormField("region_type", region)}
            >
              <Text
                style={[
                  styles.optionText,
                  region_type === region && styles.optionTextActive,
                ]}
              >
                {region}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        disabled={isDisabled}
        style={[styles.submit, isDisabled ? styles.submitDisabled : styles.submitEnabled]}
        onPress={() => {
          onSubmit();       // save
          navigate("Regions"); // go back
        }}
      >
        <Text style={isDisabled ? styles.submitTextDisabled : styles.submitTextEnabled}>
          Save Customer
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Form;
