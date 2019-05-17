import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
import TaskItem from '../task-item/TaskItem';
import { NavigationActions, StackActions } from 'react-navigation';
import NoTasksView from '../NoTasksView';
import { Container, Fab, Icon } from 'native-base'

class AllTasks extends Component {

    static navigationOptions = {
        tabBarLabel: "All"
    }



    initialRender = (tasks) => {
        if (tasks.length === 0) {
            return (
                <View style={{ flex: 1 }}>
                    <NoTasksView condition={'ALL'} />
                    <Fab
                        position='bottomRight'
                        onPress={() => this.props.navigation.navigate('TaskDetailView')}>
                        <Icon name='add' />
                    </Fab>
                </View>
            )

        } else {

            return (
                <Container>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            keyExtractor={item => item.id}
                            data={this.props.tasks}
                            extraData={this.props}
                            renderItem={({ item }) => <TaskItem navigation={this.props.navigation} task={item} />}>

                        </FlatList>
                        <Fab
                            position='bottomRight'
                            onPress={() => this.props.navigation.navigate('TaskDetailView')}>
                            <Icon name='add' />
                        </Fab>

                    </View>
                </Container>
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


