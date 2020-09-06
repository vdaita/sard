import React, { Component } from 'react'
import { StatusBar, StyleSheet, FlatList, TouchableOpacity, View, Alert, Image } from 'react-native'
import { Container, Header, Title, Content, Text, Icon, Card, CardItem, Item, Body, Right, Button, Input, Form, Textarea, Left } from 'native-base'
import ImagePicker from 'react-native-image-picker'


export default class ComplaintForm extends Component {


  constructor(props) {
    super(props);
    this.state = {
        complaints: []
    };
    fetch("https://religious-discrimination-app.firebaseio.com/complaints.json").then(res => {
        console.log(res.json());
        
    })
  }
  


   render() {
      return (
        <View>
            <FlatList data="">

            </FlatList>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  loading:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    backgroundColor: '#1C97F7',
  },
  alertText: {
    fontSize:12,
    color: '#ffffff',
  },
  conCard: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  conCardItem: {
    marginLeft: 5,
    marginTop:5,
  },
  conDetails: {
    fontSize: 15,
    color: 'black',
    marginLeft: 5,
  },
  postCard: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,     
  }
});