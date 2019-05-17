import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux';
import TaskItem from '../task-item/TaskItem';
import NoTasksView from '../NoTasksView';
import { Fab, Icon, Button, Text } from 'native-base';
import * as actions from '../../actions'

class DoneTasks extends Component {
  static navigationOptions = {
    tabBarLabel: "Done"
  }

 

  doneTasksList = {
    doneTasks: this.props.tasks.filter(task => {
      if (task.isDone === true) {
        return task
      }
    })
  } 

  initialRender = (tasks) => {
    if (tasks.length === 0) {
      return (<View style={{ flex: 1 }}>
        <NoTasksView condition={'DONE'} />
        <Fab
          position='bottomRight'
          onPress={() => this.props.navigation.navigate('TaskDetailView')}>
          <Icon name='add' />
        </Fab>
      </View>)

    } else {
      return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.doneTasksList.doneTasks}
            renderItem={({ item }) => <TaskItem navigation={this.props.navigation} task={item} />}
            keyExtractor={item => item.id}>
          </FlatList>

          <Fab
            position='bottomRight'
            onPress={() => this.props.navigation.navigate('TaskDetailView')}>
            <Icon name='add' />
          </Fab>

          <Button>
            {console.log(this.doneTasksList.doneTasks)}
            <Text>TESTING</Text>
          </Button>

        </View>
      )
    }
  }

  render() {
    return (
      this.initialRender(this.doneTasksList.doneTasks)
    )
  }
}




mapStateToProps = state => {
  return {
    selectedTask: state.selectedTask,
    tasks: state.tasks,
    doneTasks: state.doneTasks //TODO: must be ommited
  }
}

export default connect(mapStateToProps, actions)(DoneTasks)

   //! Must consider updating list on component rendering