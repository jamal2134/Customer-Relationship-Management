import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useListCustomers } from "../../hooks";
import Row from "./row";
import Liststyles from "./styles";


const List = ({ region }) => {
    const styles = StyleSheet.create(Liststyles())
    const { navigate } = useNavigation();
    const customers = useListCustomers(region);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Customers List</Text>

            {customers && customers.length > 0 ? (
                <FlatList
                    data={customers}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContent}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No Customers found in {region}</Text>
                    <Button
                        title="Add Customer"
                        onPress={() => navigate("Add Customer")}
                        color="#2563EB"
                    />
                </View>
            )}
        </View>
    );
};



export default List;
