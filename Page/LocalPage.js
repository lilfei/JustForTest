import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import { styles } from '../Util/Styles';

const isANDROID = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

type Props = {};
class LocalPage extends Component<Props> {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'LocalPage'
        }
    }

    onLocalOCPage() {
        if (isIOS) {

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
