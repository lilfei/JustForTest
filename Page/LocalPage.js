import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules,
} from 'react-native';
import { connect } from 'react-redux';

import { styles } from '../Util/Styles';

const isANDROID = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';
const LocalOCPageManager = NativeModules.RNBridgeManager;

type Props = {};
class LocalPage extends Component<Props> {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'LocalPage'
        }
    }

    onLocalOCPage() {
        if (isIOS) {
            // let date = new Date();
            // LocalOCPageManager.addEvent('Test', '哈哈');
            // LocalOCPageManager.addEvent1('Test1', '哈哈1', date.getTime());
            // LocalOCPageManager.addEvent2('Test2', '哈哈2', date.toISOString());
            // LocalOCPageManager.addEvent3('Test3', '哈哈3', date.getTime());
            // LocalOCPageManager.addEvent4('Test4', {
            //     location: 'location',
            //     time: date.getTime(),
            //     description: 'haha description',
            // });
            // LocalOCPageManager.findEvents((result) => {
            //     console.log('result: ', result);
            // })
            LocalOCPageManager.jumpLocalOCPage();
        } else {
            alert('该功能用于iOS系统!');
        }
    }

    onLocalSwiftPage() {
        if (isIOS) {

        } else {
            alert('该功能用于iOS系统!');
        }
    }

    onLocalAndroidPage() {
        if (isANDROID) {

        } else {
            alert('该功能用于Android系统!');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => this.onLocalOCPage()} >
                    <Text>go to OC View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => this.onLocalSwiftPage()} >
                    <Text>go to Swift View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => this.onLocalAndroidPage()} >
                    <Text>go to Android View</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStoreToProps = (store) => ({
    count: store.countReducer.count
})

export default connect(mapStoreToProps)(LocalPage);
