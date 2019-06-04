//import liraries
import React, { Component } from "react";
import { View, StatusBar, Dimensions } from "react-native";
import WebView from "react-native-android-fullscreen-webview-video";

// create a component
class VideoScreen extends Component {
  render() {
    const { height, width } = Dimensions.get("window");
    const video=this.props.navigation.getParam('video')

    return (
      <View>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <WebView
          source={{ uri: "http://bhoomi.pe.hu/entei/"+video.videos_url }}
          style={{ minHeight: height, backgroundColor: "black" }}
        />
      </View>
    );
  }
}

export default VideoScreen;
