import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Container, Form, Input, Item, ListItem, Label, Content, Header, Body, Text, CheckBox, Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'

export class TaskDetailView extends Component {

  addNewTask = () => {
    const { title, description, isDone } = this.props;
    this.props.createNewTask(title, description, isDone)
    this.props.navigation.navigate('TaskCategorizationScreen')
  }

  handleChange=()=>{
    const isChecked = this.props.isDone
    console.log(isChecked)
    this.props.onCheckBoxUpdate(isChecked)
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
              <CheckBox checked={this.props.isDone} onPress={this.handleChange} />
              <Body>
                <Text>Done</Text>
              </Body>
            </ListItem>

            <Button style={styles.submitButton} onPress={this.addNewTask}>
              <Text>Submit</Text>
            </Button>

          </Form>
        </Content>
      </Container>
    )
  }
}


const { width} = Dimensions.get('window')

const styles = StyleSheet.create({
  submitButton: {
    width: width * 0.9,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  }
})

const mapStateToProps = state => {
  return {
    title: state.title,
    description: state.description,
    isDone: state.isDone,
  }
}

export default connect(mapStateToProps, actions)(TaskDetailView)