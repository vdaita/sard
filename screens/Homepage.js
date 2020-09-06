import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Title } from 'native-base';
import {View} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { useLinking } from '@react-navigation/native';

export default class Homepage extends Component {
  render() {
    return (
      <Container>
          <Header androidStatusBarColor="#1362af" style={{ backgroundColor: '#1976D2' }}>
          <Body style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Title>Homepage</Title>
          </Body>
        </Header>
        <Content>
            <Text style={{textAlignVertical: "center",textAlign: "center",fontWeight: 'bold'}}> Petitions</Text>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/7/jt/ui/zUjTuIgbZOSJMSS-800x450-noPad.jpg?1553486558' }} />
              </Left>
              <Body>
                <Text>End The Tax on Necessary Menstrual Products in The US
</Text>
                <Text note numberOfLines={3}>We need to work together to end the tampon tax nationwide. Affordable sanitary products are not a luxury and need to be treated as what they are— a necessity. </Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/donald-j-trump-end-the-tax-on-necessary-menstrual-products-in-the-us?source_location=topic_page')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/4/qp/ez/fpqPEZrqaQbxqCc-800x450-noPad.jpg?1492574013' }} />
              </Left>
              <Body>
                <Text>Eliminate The Gender Question On Instagram for good</Text>
                <Text note numberOfLines={3}>Instagram is misusing the term gender and confusing it with sex. The current question that Instagram is asking is, "What is your gender," and providing the options male, female, and not specified. First of all this is the wrong question, the question that they should be asking is," What is your sex." </Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/instagram-eliminate-the-gender-question-on-instagram?source_location=topic_page/')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
          
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/2/jy/yf/KWjyYfUkKmHavpW-800x450-noPad.jpg?1554069371' }} />
              </Left>
              <Body>
                <Text>Eradicate Sexual Harassment in the Workplace</Text>
                <Text note numberOfLines={3}>  The Title VII of the Civil Rights Act of 1964 is designed to protect people from discrimination, but sexual harassment in the workplace continues to be a problem.Reports suggest that somewhere between 25 and 50% of working women experience sexual harassment (EEOC, 2016). Out of the men and women who have faced sexual harassment at work, 50% of women and 64% of men have said that the harassment hurt their career in some way, and most had to resort to changing jobs (Edison Research,  2018).</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.change.org/p/eradicate-sexual-harassment-in-the-workplace')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            
          </List>


          <Text style={{textAlignVertical: "center",textAlign: "center",fontWeight: 'bold'}}>News</Text>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://storage.googleapis.com/afs-prod/media/00d1a6fc757345f4baa9ece74dd27757/800.jpeg' }} />
              </Left>
              <Body>
                <Text>US Soccer president quits after gender discrimination suit</Text>
                <Text note numberOfLines={3}>Carlos Cordeiro resigned as U.S. Soccer Federation president on Thursday night, three days after the organization sparked a backlash when its legal papers in a gender discrimination lawsuit claimed the women’s national team players had less physical ability and responsibility than their male counterparts.</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>AP</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://apnews.com/a4a68b6be7f34adeee12469426cd2216')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://apnews.com/5fa8aaf40a80f981dd43ef8b51eba3f9' }} />
              </Left>
              <Body>
                <Text>Female firefighter files gender discrimination lawsuit</Text>
                <Text note numberOfLines={3}>A woman who fought fires for Atira Systems GST of Oregon is suing for gender discrimination, saying she was forced to share a hotel room with male colleagues, according to court documents.</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>AP</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://apnews.com/5fa8aaf40a80f981dd43ef8b51eba3f9')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://assets.change.org/photos/5/tg/gk/uNtGGkZoxgRnuuz-800x450-noPad.jpg' }} />
              </Left>
              <Body>
                <Text>Pinterest Accused of Gender Bias by Former No. 2 Executive</Text>
                <Text note numberOfLines={3}>Françoise Brougher, Pinterest’s former chief operating officer, said she was fired after speaking up about mistreatment.</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>Change.org</Text>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => WebBrowser.openBrowserAsync('https://www.nytimes.com/2020/08/11/technology/pinterest-francoise-brougher-gender-discrimination-lawsuit.html')}>
                  <Text>Read</Text>
                </Button>
              </Right>
              
            </ListItem>      
          </List>
        </Content>
      </Container>
    );
  }
}