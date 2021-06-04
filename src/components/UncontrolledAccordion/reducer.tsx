type ActionType = {
    type: string
}
export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';

type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            throw new Error('Bad action type')
    }
//     тоже самое
// if(action.type === TOGGLE_CONSTAN) {
//     return !state
// }
//     return state;
}
