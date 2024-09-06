

export const AddToCounter = (data) => {
    console.log("action", data)
    return {
        type: 'ADD_TO_COUNTER',
        data
    }
}
export const RemoveToCounter = () => {
    return {
        type: 'REMOVE_TO_COUNTER',
    }
}