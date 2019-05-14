import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux';
import TaskItem from '../task-item/TaskItem';

class UndoneTasks extends Component {
  static navigationOptions = {
    tabBarLabel: "Undone"
  }

  render() {
    return (
      <FlatList
        data={this.props.undoneTasks}
        renderItem={({item})=> <TaskItem navigation={this.props.navigation} task={item}/>}>
      </FlatList>
    )
  }
}

mapStateToProps = state => {
  return{
    undoneTasks : state.undoneTasks
  }
}

export default connect(mapStateToProps)(UndoneTasks)
