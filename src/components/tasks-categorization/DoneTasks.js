import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux';
import TaskItem from '../task-item/TaskItem';
import NoTasksView from '../NoTasksView';
import { Fab, Icon } from 'native-base';


class DoneTasks extends Component {
  static navigationOptions = {
    tabBarLabel: "Done"
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
            data={this.props.doneTasks}
            renderItem={({ item }) => <TaskItem navigation={this.props.navigation} task={item} />}
            keyExtractor={item => item.id}>
          </FlatList>

          <Fab
            position='bottomRight'
            onPress={() => this.props.navigation.navigate('TaskDetailView')}>
            <Icon name='add' />
          </Fab>

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