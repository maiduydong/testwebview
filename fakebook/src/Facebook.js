import React, { Component } from 'react';
import { View, TouchableOpacity, Text, WebView, StyleSheet, NativeModules } from 'react-native';
import Buttonss from './Buttonss.js';


export default class Facebook extends Component {

    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 1 }}>

                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Buttonss />
                </View>

                <View style={{ flexDirection: 'column', flex: 6 }} >

                    <WebView
                        source={{ uri: 'https://www.facebook.com/' }}

                    />
                </View>


            </View>
        );
    }
}