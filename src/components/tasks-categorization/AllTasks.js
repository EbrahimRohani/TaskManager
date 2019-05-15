import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
import TaskItem from '../task-item/TaskItem';
import { NavigationActions, StackActions } from 'react-navigation';
import NoTasksView from '../NoTasksView';

class AllTasks extends Component {

    static navigationOptions = {
        tabBarLabel: "All"
    }

    handlePress = () => {
        console.log("Clicked!");
        this.props.navigation.navigate('TaskDetailView')
    }

    initialRender = (tasks) => {
        if (tasks.length === 0) {
            return (
                <NoTasksView condition={'ALL'} />
            )

        } else {

            return (
                <View>

                    <Text onPress={() => this.handlePress()}>Testing Navigation...</Text>
                    <FlatList
                        keyExtractor={item => item.id}
                        data={this.props.tasks}
                        extraData={this.props}
                        renderItem={({ item }) => <TaskItem navigation={this.props.navigation} task={item} />}>

                    </FlatList>

                </View>
            )
        }
    }


    render() {
        return (
            this.initialRender(this.props.tasks)
        )
    }
}

mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(AllTasks)


