import React, { useRef, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Episode } from "../../types";
import { Video } from "expo-av";
import { Playback } from "expo-av/build/AV";
import styles from '../VideoPlayer/styles'

interface VideoPlayerProps {
    episode: Episode;
}

export default function VideoPlayer (props: VideoPlayerProps) {
    const {episode} = props;
    const video = useRef<Playback>(null)
    const [status, setStatus] = useState({});

    useEffect(() => {
        if(!video){
            return;
        }
       (async () => {
           await video?.current?.unloadAsync();
           await video?.current?.loadAsync(
              { uri: episode.video }, {}, false
           );

       })();
    }, [episode])

    return (
        <View>
             <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: episode.video,
                }}
                posterStyle={{width: '100%', height: 230, }}
                posterSource={{ uri: episode.poster,}}
                usePoster={true}
                useNativeControls
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    )
} 
