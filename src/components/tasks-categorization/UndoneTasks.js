import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux';
import TaskItem from '../task-item/TaskItem';
import NoTasksView from '../NoTasksView';
import { Container, Fab, Icon } from 'native-base';

class UndoneTasks extends Component {
  static navigationOptions = {
    tabBarLabel: "Undone"
  }

  initialRender = (tasks) => {
    if (tasks.length === 0) {
      return (<View style={{ flex: 1 }}>
        <NoTasksView condition={'UNDONE'} />
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
            data={this.props.undoneTasks}
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
