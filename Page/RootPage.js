import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { connect } from 'react-redux';

import { styles } from "../Util/Styles";

import { countAction } from "../Redux/Action";

type Props = {};
class RootPage extends Component<Props> {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'RootPage'
        }
    }

    dispatchTest() {
        const count = ++this.props.count;
        this.props.dispatch(countAction(count));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>count: {this.props.count}</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.dispatchTest()} >
                    <Text>dispatchTest count+1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStoreToProps = (store) => ({
    count: store.countReducer.count
})

export default connect(mapStoreToProps)(RootPage);
