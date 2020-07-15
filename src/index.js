import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="black"/>
            <View style={styles.container} >
                <Text style={styles.title}>Hello GoStack</Text>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})