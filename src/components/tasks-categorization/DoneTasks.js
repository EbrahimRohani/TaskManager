import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux';
import TaskItem from '../task-item/TaskItem';
import NoTasksView from '../NoTasksView';


class DoneTasks extends Component {
  static navigationOptions = {
    tabBarLabel: "Done"
  }

  initialRender = (tasks) => {
    if (tasks.length === 0) {
      return <NoTasksView condition={'DONE'} />

    } else {
      return (
        <View>
          <FlatList
            data={this.props.doneTasks}
            renderItem={({ item }) => <TaskItem navigation={this.props.navigation} task={item} />}
            keyExtractor={item => item.id}>
          </FlatList>
        </View>
      )
    }
  }

  render() {
    return (
      this.initialRender(this.props.doneTasks)
    )
  }
}

mapStateToProps = state => {
  return {
    tasks: state.tasks,
    doneTasks: state.doneTasks
  }
}

export default connect(mapStateToProps)(DoneTasks)