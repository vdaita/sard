import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Title, CardItem, Item, Input } from 'native-base';
import {View} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { useLinking } from '@react-navigation/native';

export default class Learning extends Component {

   constructor(props){
       super(props);
       this.state = {
           query: null,
           answer: null
       }
   }

   requestWolfram = () => {
        fetch("http://api.wolframalpha.com/v1/result?appid=P6R272-W9EUQYV27J&i=" + encodeURI(this.state.query)).then((response) => response.text())
        .then((res) => {
            console.log(res);
            this.setState({answer: res})
        })
   };

  render() {
    return (
      <Container>
          <Header androidStatusBarColor="#1362af" style={{ backgroundColor: '#1976D2' }}>
          <Body style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Title>Learning</Title>
          </Body>
        </Header>
        <Content>
            <Text style={{textAlignVertical: "center",textAlign: "center",fontWeight: 'bold', padding:20}}> Petitions</Text>
          <List>
            <ListItem thumbnail>
              <Body>
                <Text>Get Counseling</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.talkspace.com/')}>
                  <Text>Talkspace</Text>
                </Button>
              </Right>
            </ListItem>  
            <ListItem thumbnail>
              <Body>
                <Text>Get Legal Counseling</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.rocketlawyer.com/legal-advice.rl')}>
                  <Text>Rocket Lawyer</Text>
                </Button>
              </Right>
            </ListItem>    
          </List>

          <Text style={{textAlignVertical: "center",textAlign: "center",fontWeight: 'bold', padding:10}}> Ask Questions</Text>
          <List style={{padding:10}}>
            <ListItem thumbnail>
              <Body>
              <Input placeholder='Query' onChangeText={(query) => this.setState({query})}/>

              </Body>
              <Right>
              <Button onPress={() => this.requestWolfram()}>
                <Text>Get Answer</Text>
            </Button>
              </Right>
            </ListItem> 
            <ListItem>
            <Text>{this.state.answer}</Text>

            </ListItem>  
          </List>
        </Content>
      </Container>
    );
  }
}