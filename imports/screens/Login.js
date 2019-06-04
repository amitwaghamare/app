import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
 } from "react-native";
 
 import { Item, Input, Label, Button } from "native-base";
import { connect } from "react-redux";
import { onIsLogin, getUser } from "../actions/login_actions";

class Login extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  state = {
    username: "",
    password: "",
    showLoginFailed: false
  };
  onLogin = () => {
    const { navigate } = this.props.navigation;
    this.props.isLogin(this.state.username, this.state.password);
    // navigate("Home");
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user != this.props.user) {
      const { navigate } = this.props.navigation;
      const { user } = this.props;
      if (user && user.status == "SUCCESS") {
        navigate("Home");
      }
      if (user && user.status == "FAILED") {
        this.setState({ showLoginFailed: true });
      }
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{ marginTop: "20%" }}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 25 }}>Welcome To Bhoomi Classes</Text>

            <Image
              style={{ width: 80, marginTop: 10, height: 80 }}
              source={require("../../assets/logo.png")}
            />
            <Text style={{ fontSize: 20 }}>Bhoomi Classes</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            {this.state.showLoginFailed ? (
              <Text style={{ color: "red", marginTop: 10, fontSize: 20 }}>
                Login Failed
              </Text>
            ) : (
              <Text />
            )}
          </View>

          <View style={{ marginTop: 30, marginHorizontal: "5%" }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={value => {
                  this.setState({ username: value });
                }}
              />
            </Item>

            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Password</Label>
              <Input
                onChangeText={value => {
                  this.setState({ password: value });
                }}
              />
            </Item>

            <Button onPress={this.onLogin} block style={{ marginTop: 40 }}>
              <Text style={{ color: "white" }}>LOGIN</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});

const mapStateToProps = state => {
  return { user: state.login.user };
};
const mapDispatchToProps = dispatch => {
  return {
    isLogin: (username, password) => {
      dispatch(onIsLogin(username, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
