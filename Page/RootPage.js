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

    onCountPlus() {
        const count = ++this.props.count;
        this.props.dispatch(countAction(count));
    }

    onLocalPage() {
        this.props.navigation.navigate('LocalPage');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>count: {this.props.count}</Text>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => this.onCountPlus()} >
                    <Text>count++</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => this.onLocalPage()} >
                    <Text>go to LocalPage</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStoreToProps = (store) => ({
    count: store.countReducer.count
})

export default connect(mapStoreToProps)(RootPage);
