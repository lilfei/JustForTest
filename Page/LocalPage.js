import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';

type Props = {};
class LocalPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>LocalPage</Text>
                <Text style={styles.instructions}>{this.props.count}</Text>
            </View>
        );
    }
}

const mapStoreToProps = (store) => ({
    count: store.countReducer.count
})

export default connect(mapStoreToProps)(LocalPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
