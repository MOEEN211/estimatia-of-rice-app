import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Pressable } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

const RiceScreen = () => {
    let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <View style = {styles.btnStyles}>
        <Button title="Share" onPress={sharePic} style = {styles.btn}/>
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} style = {styles.btn} /> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} style = {styles.btn} />
          
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={takePic} style = {styles.circleBtn}>
            <View></View>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
        position: "absolute",
        bottom: 40,
      backgroundColor: '#fff',
      borderRadius: 50,
    },
    preview: {
      alignSelf: 'stretch',
      flex: 1
    },
    circleBtn: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: "black",
        borderColor: "red",
        borderWidth: 5,

    },
    btnStyles:{
      width: "100%",
      backgroundColor: "#1df289",
      paddingHorizontal: 50,
      paddingVertical: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    Btn:{
    }
  });
  
  
  
  export default RiceScreen;