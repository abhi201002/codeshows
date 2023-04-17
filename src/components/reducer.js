export const initialState= {
    rating: [],
    name : [],
    problem_name: [],
    id: [],
    solved: [],
} 

export const reducer = (state,action) => {
    switch (action.type) {
        case "SET_F":
            return{
                ...state,
                rating: [...state.rating,action.rating],
                name: [...state.name,action.name],
            }
            case "SET_P":
                return{
                    ...state,
                    id: [...state.id,action.id],
                    problem_name: [...state.name,action.name],
                    solved: [...state.solved,action.solved],
            }
        default:
            return {state}
    }
}