import * as actions from '../actions';



const initialState = {
    tasks: [],
    selectedTask: '',
    id: '',
    title: '',
    description: '',
    isDone: false,
    toUpdate: false,

}

export default (state = initialState, action) => {
    switch (action.type) {

        case actions.RESET_STATES:
            return {
                ...state,
                selectedTask: '',
                id: '',
                title: '',
                description: '',
                isDone: false,
                toUpdate: false,
            }

        case actions.ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, newTask(action)],
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

            return {
                ...state,
                tasks: onTaskUpdate(state, action),
                id: '',
                title: '',
                description: '',
                isDone: false,
                selectedTask: '',
                toUpdate: false,
            }

        case actions.DELETE_TASK:
            return {
                ...state,
                tasks: onTaskDelete(state, action),
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



const onTaskUpdate = (state, action) => {

    const updatedItem = (action) => {
        const { title, description, isDone } = action.payload;
        return { title, description, isDone }
    }

    return state.tasks.map(task => {
        if (task.id === action.payload.task.id) {
            return { ...task, ...updatedItem(action) }
        }
        return task
    })
}

const onTaskDelete = (state, action) => {
    return state.tasks.filter(task => {
        if (task.id !== action.payload.id) {
            return task;
        }
    })
}