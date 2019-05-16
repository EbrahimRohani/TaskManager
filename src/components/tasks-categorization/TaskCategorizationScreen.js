import React, { Component } from 'react'
import { View } from 'react-native'
import TaskTopTabNavigation from './TaskTopTabNavigation'
import { Container, Fab, Icon } from 'native-base';

export default class TaskCategorizationScreen extends Component {

    newTaskButtonHandler = () => {
        this.props.navigation.navigate('TaskDetailView')
    }

    render() {
        return (
            <Container>
                <View style={{ flex: 1 }}>
                    <TaskTopTabNavigation />
                </View>
            </Container>


        )
    }
}