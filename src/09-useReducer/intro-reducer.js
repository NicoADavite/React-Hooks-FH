const initialState = [{
    id: 1,
    title: "Comprar Fernet",
    done: false
}]

const todoReducer = (state = initialState, action) => {

    if(action?.type === "[TODO] add todo"){
        return [
            ...state,
            action.payload
        ]
    }

    return state
}

let todos = todoReducer();

console.log(todos);

const newTodo = {
    id: 2,
    title: "Comprar Coca",
    done: false
}

const addTodoAction = {
    type: "[TODO] add todo",
    payload: newTodo
} 

todos = todoReducer(todos, addTodoAction)

console.log(todos);
