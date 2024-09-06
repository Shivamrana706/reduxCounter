

export const counterData = (data = [], action) => {
    switch (action.type) {
        case 'ADD_TO_COUNTER':
            console.log('ADDTO CONUNTER reducer', action.data)

            // console.log('Data', data)
            return [action.data, ...data]
        case 'REMOVE_TO_COUNTER':
            // console.log('Data', data)
            data.length = data.length ? data.length - 1 : null
            return [...data]

        default:
            return []
    }
}