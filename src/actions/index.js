export const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const ON_FORM_UPDATE = 'ON_FORM_UPDATE'
export const ON_CHECKBOX_UPDATE = 'ON_CHECKBOX_UPDATE'

const uuidv4 = require('uuid/v4')

export const createNewTask = (title, description, isDone) => {
    return {
        type: ADD_NEW_TASK,
        payload: {
            id: uuidv4(),
            title,
            description,
            'isDone' : isDone
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
    return{
        type: ON_CHECKBOX_UPDATE,
        payload: {value}
    }
} 