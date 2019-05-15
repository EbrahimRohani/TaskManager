import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'
import {connect} from 'react-redux'


handleTextMessage = (textCondition) => {
    switch (textCondition) {
        case 'ALL':
            return <Text>You don't have any tasks</Text>

        case 'DONE':
            return <Text>You don't have any done tasks</Text>

        case 'UNDONE':
            return <Text>You don't have any undone tasks</Text>
    }
}

const NoTasksView = (props) => {
    return (
        <View style={styles.imageStyle}>
            <Icon name='exclamation' size={80} color='red' />
            <Text>{this.handleTextMessage(props.condition)}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    imageStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },

    textStyle: {
        alignItems: 'center'
    },
})


export default connect(null)(NoTasksView);
