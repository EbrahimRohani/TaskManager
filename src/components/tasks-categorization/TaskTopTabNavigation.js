import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import AllTasks from './AllTasks';
import DoneTasks from './DoneTasks'
import UndoneTasks from './UndoneTasks'

export default createAppContainer(createMaterialTopTabNavigator({
    AllTasks,
    DoneTasks,
    UndoneTasks
},
    {
        initialRouteName: 'AllTasks',
        backBehavior: 'initialRoute',
        swipeEnabled: true,
        tabBarPosition: 'top',
        animationEnabled: true,
        bounces: true
    }))