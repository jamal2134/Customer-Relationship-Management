import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import formStyles from "./styles";

const Region = () => {
    const styles = StyleSheet.create(formStyles());
    const { navigate } = useNavigation();

    const regions = ["South West", "North West", "North East", "South East", "Mid West"];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Create Customer Button */}
            <TouchableOpacity
                style={[styles.buttonInactive, styles.mainButton]}
                onPress={() => navigate("Add Customer")}
            >
                <Text style={styles.textInactive}>Create Customer</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>List of Regions</Text>
            <Text style={styles.subtitle}>Select a region to view customers:</Text>

            {/* Region Buttons */}
            <View style={styles.regionContainer}>
                {regions.map((region) => (
                    <TouchableOpacity
                        key={region}
                        style={styles.buttonInactive}
                        onPress={() => navigate("List Customers", { region })}
                    >
                        <Text style={styles.textInactive}>{region}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default Region;
