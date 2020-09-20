import * as actions from './index'

describe('todo actions', () => {
    it('add todo should create ADD_TODO action', () => {
        expect(actions.addTodo('Eat')).toEqual({
            type: 'ADD_TODO',
            id: 0,
            text: 'Eat'
        })
    })

    it('delete todo should delete DELETE_TODO action', () => {
        expect(actions.deleteTodo(1)).toEqual({
            type: 'DELETE_TODO',
            id: 1
        })
    })

    it('toggle todo should create TOGGLE_TODO action', () => {
        expect(actions.toggleTodo(5)).toEqual({
            type: 'TOGGLE_TODO',
            id: 5
        })
    })

    it('set visibility filter should create SET_VISIBILITY_FILTER', () => {
        expect(actions.setVisibilityFilter('all')).toEqual({
            type: 'SET_VISIBILITY_FILTER',
            filter: 'all'
        })
    })
})

