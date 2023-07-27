import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components//Header";
import getData from "../../utils/fetch";
import TodaysImage from "../../components/TodaysImage";
import { PostImage } from "../../types";

const Home = () => {

    const [todaysImage, setTodaysImage] = useState<PostImage>({})

    useEffect(() => {
        const loadTodayImage = async () => {
            try {
                const todayImageResponse = await getData()
                setTodaysImage(todayImageResponse)
            } catch (error) {
                console.error(error)
                setTodaysImage({})
            }
        }
        loadTodayImage().catch(null)
    },[])

    return(
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage} />
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 16,
    }
})