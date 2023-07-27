import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image source={require('../../assets/nasaLogo.png')} style={styles.image} />
            </View>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    container:{
        
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer:{
        flex: 1,
        alignItems: 'flex-start',
    },
    title:{
        fontSize: 20,
        color: '#fff'
    },
    rightContainer:{
        flex: 1,
        alignItems: 'flex-end',
    },
    image:{
        width: 60,
        height: 60,
    }
})