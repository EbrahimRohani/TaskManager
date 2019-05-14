import * as actions from '../actions';

const initialState = {
    tasks: [],
    doneTasks:[],
    undoneTasks:[],
    id: '',
    title: '',
    description: '',
    isDone: false

}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, newTask(action)],
                doneTasks: action.payload.isDone ? [...state.doneTasks, newTask(action)] : [...state.doneTasks],
                undoneTasks: action.payload.isDone ? [...state.undoneTasks] : [...state.undoneTasks, newTask(action)],
                id:'',
                title:'',
                description:'',
                isDone: false
            }

        case actions.ON_FORM_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }

        case actions.ON_CHECKBOX_UPDATE:
            return {
                ...state,
                isDone: !action.payload.value
            }

        default:
            return state
    }
}

const newTask = (action) => {
    const { id, title, description, isDone } = action.payload;

    return { id, title, description, isDone }
}