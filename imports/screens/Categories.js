//import liraries
import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Image, Text } from "react-native";
import { Button, Input, Grid, Row, Col } from "native-base";
import CategoriesRow from "../components/CategoriesRow";
import { connect } from "react-redux";
import { selectCategory, getVideos } from "../actions/category_actions";
import CategoryContainer from "../components/CategoryContainer";

// create a component
class Categories extends Component {
  onMenuClicked = () => {
    this.props.navigation.toggleDrawer();
  };
  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    const { bgColor,videosForCategory } = this.props.category;

    return (
      <View>
        <StatusBar backgroundColor={bgColor} barStyle="light-content" />
        <Grid style={{ backgroundColor: bgColor, minHeight: 60 }}>
          <Row style={{ marginLeft: 10, marginTop: 20 }}>
            <Button transparent onPress={this.onMenuClicked}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/menu.png")}
              />
            </Button>
            <View
              style={{
                borderRadius: 20,
                minWidth: 250,
                minHeight: 40,
                backgroundColor: "white",
                marginLeft: 20
              }}
            >
              <Input style={{ color: "black" }} placeholder="Search" />
            </View>
          </Row>
        </Grid>
        <CategoriesRow bgColor={bgColor} />

        <View style={{ minHeight: 500 }}>
          {videosForCategory ? (
            <CategoryContainer   {...this.props}  />
          ) : (
            <Text>Loading Videos</Text>
          )}
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

const mapStateToProps = state => {
   
  
  return {
    category: state.category,
     
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: category => {
      dispatch(selectCategory(category));
    },
    getVideos: () => {
      dispatch(getVideos());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
