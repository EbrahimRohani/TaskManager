import * as actions from '../actions';



const initialState = {
    tasks: [],
    doneTasks: [],
    undoneTasks: [],
    selectedTask: '',
    id: '',
    title: '',
    description: '',
    isDone: false,
    toUpdate: false,

}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, newTask(action)],
                doneTasks: action.payload.isDone ? [...state.doneTasks, newTask(action)] : [...state.doneTasks],
                undoneTasks: action.payload.isDone ? [...state.undoneTasks] : [...state.undoneTasks, newTask(action)],
                id: '',
                title: '',
                description: '',
                isDone: false,
                selectedTask: '',
                toUpdate: false
            }

        case actions.ON_FORM_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }

        case actions.ON_CHECKBOX_UPDATE:
            return {
                ...state,
                isDone: !action.payload
            }

        case actions.SELECT_TASK:
            return {
                ...state,
                selectedTask: action.payload,
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                isDone: action.payload.isDone,
                toUpdate: true,
            }

        case actions.UPDATE_TASK:
            const updateItem = state.tasks.map(item => {
                if (item === action.payload.task) {
                    console.log('Reached');
                    return {
                        ...item, ...updatedItem(action)
                    }
                }
                return item
            })
            
            return {
                ...state,
                tasks: updateItem,
                id: '',
                title: '',
                description: '',
                isDone: false,
                selectedTask: '',
                toUpdate: false,
            }

        default:
            return state
    }
}

const newTask = (action) => {
    const { id, title, description, isDone } = action.payload;
    return { id, title, description, isDone }
}

const updatedItem = (action) => {
    const {title, description, isDone} = action.payload;
    return{title, description, isDone}
}