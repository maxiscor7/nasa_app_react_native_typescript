import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../../components//Header";
import getData from "../../utils/fetch";
import TodaysImage from "../../components/TodaysImage";
import { PostImage } from "../../types";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";

const Home = () => {

    const [todaysImage, setTodaysImage] = useState<PostImage>({})
    const [lastFiveDaysImage, setLastFiveDaysImage] = useState<PostImage[]>([])

    useEffect(() => {

        const loadTodayImage = async () => {
            try {
                const todayImageResponse = await getData()
                setTodaysImage(todayImageResponse)
            } catch (error) {
                console.error(error)
                setTodaysImage({})
            }
        };

        const loadLast5DaysImages = async () => {
            try {
                const lastFiveDaysImagesResponse = await getData(`&start_date=2023-07-23&end_date=2023-07-27`)
                setLastFiveDaysImage(lastFiveDaysImagesResponse)
            } catch (error) {
                console.error(error)
            }
        }
      
        loadTodayImage().catch(null);
        loadLast5DaysImages().catch(null)
    },[])

    

    return(
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage} />
            <LastFiveDaysImages postImages={lastFiveDaysImage} />
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)'
    }
})