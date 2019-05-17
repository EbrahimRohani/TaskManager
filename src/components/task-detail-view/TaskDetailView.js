import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Container, Form, Input, Item, ListItem, Label, Content, Header, Body, Text, CheckBox, Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'

export class TaskDetailView extends Component {

  addNewTask = () => {
    const { title, description, isDone } = this.props;
    this.props.createNewTask(title, description, isDone)
    this.props.navigation.navigate('AllTasks')
  }

  updateTask = (task) => {
    const { id, title, description, isDone } = this.props
    this.props.updateTask(id, task, title, description, isDone)
    this.props.navigation.navigate('AllTasks')
  }

  deleteTask = (task) =>{
    this.props.deleteTask(task)
    this.props.navigation.navigate('AllTasks')
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input value={this.props.title} onChangeText={value => this.props.onFormUpdate({ prop: 'title', value })} />
            </Item>

            <Item floatingLabel>
              <Label>Description</Label>
              <Input value={this.props.description} onChangeText={value => this.props.onFormUpdate({ prop: 'description', value })} />
            </Item>

            <ListItem last >
              <CheckBox checked={this.props.isDone} onPress={() => this.props.onCheckBoxUpdate(this.props.isDone)} />
              <Body>
                <Text>Done</Text>
              </Body>
            </ListItem>

            <Button style={styles.submitButton} onPress={this.props.toUpdate ? () => this.updateTask(this.props.selectedTask) : () => this.addNewTask()}>
              <Text>{this.props.toUpdate ? "Apply Edit" : "Submit"}</Text>
            </Button>

            {this.props.toUpdate && 
            <Button style={styles.deleteButton} danger={true} onPress={() => this.deleteTask(this.props.selectedTask)} >
              <Text>Delete</Text>
            </Button>
            }

          </Form>
        </Content>
      </Container>
    )
  }
}


const mapStateToProps = state => {
  return {
    title: state.title,
    description: state.description,
    isDone: state.isDone,
    toUpdate: state.toUpdate,
    selectedTask: state.selectedTask,
    id: state.id
  }
}
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  submitButton: {
    width: width * 0.9,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    marginTop: 10,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center'
  }
})


export default connect(mapStateToProps, actions)(TaskDetailView)