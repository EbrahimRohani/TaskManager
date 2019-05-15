import {createStackNavigator, createAppContainer} from 'react-navigation'
import TaskCategorizationScreen from './tasks-categorization/TaskCategorizationScreen';
import TaskDetailView from './task-detail-view/TaskDetailView'

const MainStackNavigation = createStackNavigator({
    TaskCategorizationScreen,
    TaskDetailView,
    
    
},
{
    headerMode:'none'
}
)

export default createAppContainer(MainStackNavigation)