import { gql } from "@apollo/client";

export const CREATE_TODO_MUTATION = gql`
    mutation AddTodo($title: String!) {
        addTodo(title: $title) {
            id
            title
            completed
        }
    }
`;

export const DELETE_TODO_MUTATION = gql`
    mutation DeleteTodo($id: String!) {
        deleteTodo(id: $id) {
            id
            title
            completed
        }
    }
`;

export const EDIT_TODO_MUTATION = gql`
    mutation UpdateTodo($id: ID!, $title: String!, $completed: Boolean!) {
        updateTodo(id: $id, title: $title, completed: $completed) {
            id
            title
            completed
        }
    }
`;