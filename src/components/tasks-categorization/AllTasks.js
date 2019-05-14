import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
import TaskItem from '../task-item/TaskItem';
import { NavigationActions, StackActions } from 'react-navigation';

class AllTasks extends Component {

    static navigationOptions = {
        tabBarLabel: "All"
    }

    handlePress=()=>{
        this.props.navigation.popToTop();
        this.props.navigation.goBack(null)
        this.props.navigation.navigate('TaskDetailView')
    }
    render() {
        return (



            <View>

                <Text onPress={()=>this.handlePress()}>LOLERRRRRRRRRRRRRRRRRRRRRRRRR</Text>
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

mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(AllTasks)


