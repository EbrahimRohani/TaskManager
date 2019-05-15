import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux';
import TaskItem from '../task-item/TaskItem';
import NoTasksView from '../NoTasksView';

class UndoneTasks extends Component {
  static navigationOptions = {
    tabBarLabel: "Undone"
  }

  initialRender = (tasks) => {
    if (tasks.length === 0) {
      return <NoTasksView condition={'UNDONE'} />
    } else {
      return (
        <View>
          <FlatList
            data={this.props.undoneTasks}
            renderItem={({ item }) => <TaskItem navigation={this.props.navigation} task={item} />}
            keyExtractor={item => item.id}>
          </FlatList>
        </View>
      )
    }
  }

  render() {
    return (
      this.initialRender(this.props.undoneTasks)
    )
  }
}

mapStateToProps = state => {
  return {
    undoneTasks: state.undoneTasks
  }
}

export default connect(mapStateToProps)(UndoneTasks)
