import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    PixelRatio
} from 'react-native';
import * as Color from "./Color";

let { width: WIN_WIDTH, height: WIN_HEIGHT } = Dimensions.get('window');
export const WINDOW_WIDTH = WIN_WIDTH;
export const WINDOW_HEIGHT = WIN_HEIGHT;
export const RATIO = PixelRatio.get();

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        fontSize: 28,
        color: '#0f06',
    },
    buttonStyle: {
        width: 300,
        height: 50,
        borderRadius: 8,
        borderWidth: 1 / RATIO,
        borderColor: Color.borderColor,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default {
    styles,
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    RATIO
}