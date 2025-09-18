import { View, Text, StyleSheet } from "react-native";

import Styles from './styles'
import { useClearStorage } from "../../hooks";

const Clear = () => {
    const styles = StyleSheet.create(Styles())
    useClearStorage(); // clears storage when component mounts

    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>Storage Cleared</Text>
            <Text style={styles.subtitle}>All local data has been removed successfully.</Text>
        </View>
    );
};



export default Clear;
