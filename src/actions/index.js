export const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const ON_FORM_UPDATE = 'ON_FORM_UPDATE'
export const ON_CHECKBOX_UPDATE = 'ON_CHECKBOX_UPDATE'
export const SELECT_TASK = 'SELECT_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const INITIAL_READING = 'INITIAL_READING'
export const DELETE_TASK = 'DELETE_TASK'

const uuidv4 = require('uuid/v4')

export const createNewTask = (title, description, isDone) => {
    return {
        type: ADD_NEW_TASK,
        payload: {
            id: uuidv4(),
            title,
            description,
            isDone,
        }
    }
}

export const onFormUpdate = ({ prop, value }) => {
    return {
        type: ON_FORM_UPDATE,
        payload: { prop, value }
    }
}

export const onCheckBoxUpdate = (value) => {
    return {
        type: ON_CHECKBOX_UPDATE,
        payload: value
    }
}

export const selectTask = (task) => {
    return {
        type: SELECT_TASK,
        payload: task
    }
}

export const updateTask = (id, task, title, description, isDone) => {
    return {
        type: UPDATE_TASK,
        payload: {id, task, title, description, isDone}
    }
}

export const deleteTask = (task)=>{
    return {
        type: DELETE_TASK,
        payload: task
    }
}