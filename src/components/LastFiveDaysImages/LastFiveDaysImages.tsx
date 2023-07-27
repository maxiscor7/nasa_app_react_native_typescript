import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { PostImage as PostImageTypes } from "../../types";
import PostImage from "./PostImage";

const LastFiveDaysImages: React.FC<{postImages? : PostImageTypes[]}> = ({postImages}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 days</Text>
            <ScrollView horizontal={true} style={styles.content}>
                {postImages?.map(postImages => (
                    <PostImage key={`post-image-${postImages.title}`} {...postImages} />
                ))}
            </ScrollView>
        </View>
    )
}
export default LastFiveDaysImages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title:{
        color: '#fff',
        fontSize: 16,
        marginBottom: 18,

    },
    content:{
        
        flex: 1
    }
})