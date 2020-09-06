import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
// 
// import { Container, Header, Title, Content, Text, Icon, Card, CardItem, Item, Body, Right, Button, Input, Form, Textarea, Left } from 'native-base'
import ImagePicker from 'react-native-image-picker'

export default class HeatMap extends Component {
    render() {
        return (
            <WebView source={{ uri: 'https://jsfiddle.net/kt7cv45n/show' }} />
        );
    }
}