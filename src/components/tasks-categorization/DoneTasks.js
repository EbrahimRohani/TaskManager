import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux';
import TaskItem from '../task-item/TaskItem';


class DoneTasks extends Component {
  static navigationOptions = {
    tabBarLabel: "Done"
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.doneTasks}
          renderItem={({ item }) => <TaskItem navigation={this.props.navigation} task={item} />}>

        </FlatList>
      </View>
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
