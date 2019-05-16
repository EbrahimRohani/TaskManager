import { createStackNavigator, createAppContainer } from 'react-navigation'
import TaskCategorizationScreen from './tasks-categorization/TaskCategorizationScreen';
import TaskDetailView from './task-detail-view/TaskDetailView'
import TaskTopTabNavigation from './tasks-categorization/TaskTopTabNavigation';
const MainStackNavigation = createStackNavigator({
    TaskTopTabNavigation,
    TaskDetailView,
},
    {
        headerMode: 'none'
    }
)

export default createAppContainer(MainStackNavigation)