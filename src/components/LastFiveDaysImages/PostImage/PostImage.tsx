import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { PostImage as PostImagesTypes, RootStackParams } from "../../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {useNavigation} from '@react-navigation/native';

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>


const PostImage: React.FC<PostImagesTypes> = ({title, date, url, explanation}) => {
    const {navigate} = useNavigation<PostImageNavigationProps>()

    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title='View' onPress={handleViewPress} />
            </View>
        </View>
    )
}
export default PostImage;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0b3d91',
        borderRadius: 20,
        width: 250,
        marginBottom: 12,
        marginRight: 10,
        padding: 16,
    },
    title:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12
    },
    date:{
        color: '#fff',
    },
    buttonContainer:{
        alignItems: 'flex-end'
    }
})