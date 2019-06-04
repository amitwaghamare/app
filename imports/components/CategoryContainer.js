import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
 
class CategoryContainer extends Component {
  onOpenVideo = () => {
    this.props.navigation.navigate("VideoScreen");
  };
  _keyExtractor = (item, index) => item.videos_id;

  constructor() {
    super();
    this.player = {};
  }

  onVideoSelect = video => {
    this.props.navigation.navigate("VideoScreen", { video });
  };

  render() {
    const { videosForCategory, bgColor } = this.props.category;
    let videos = videosForCategory;
    return (
      <View style={{flex:1}}>
        <FlatList
           data={videos}
          keyExtractor={this._keyExtractor}
          contentContainerStyle={{ paddingBottom: 20 }}
           renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.onVideoSelect(item);
              }}
              style={[styles.itemContainer, { backgroundColor: bgColor }]}
            >
              <Text style={styles.itemName}>{item.videos_title}</Text>
              <Text style={styles.itemCode}>{item.videos_desc}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    height: 150
  },
  item: { width: 100, height: 100 },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff"
  }
});
export default CategoryContainer;
