import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardItem, Content, Body, Container, Button } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons'
import { Dimensions } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';
import MainStackNavigation from '../StackNavigator';

const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height

const style = StyleSheet.create({
    viewStyle: {
        width: windowsWidth * 0.9,
        height: windowsHeight * 0.27,
        alignSelf: 'center'
    }

})

const TaskItem = (props) => {
    return (
        <View style={style.viewStyle}>
            <Container>
                <Content padder>
                    <TouchableOpacity onPress={() => props.navigation.navigate('TaskDetailView')}>
                        <Card>
                            <CardItem header bordered>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'blue' }}>Title: </Text>
                                    <Text>{props.task.title}</Text>
                                </View>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: 'blue' }}>Description: </Text>
                                        <Text>{props.task.description}</Text>
                                    </View>
                                </Body>
                            </CardItem>

                            <CardItem footer bordered>
                                <Icon name={props.task.isDone ? 'check' : 'close'} color={props.task.isDone ? 'green' : 'red'} size={20} />
                                <Text>{props.task.isDone ? 'Done' : 'Undone'}</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </Content>
            </Container>
        </View>



    )
}

export default connect(null)(TaskItem)

//onPress={() => props.navigation.navigate('TaskDetailView')}