/// <reference types="cypress" />
import { TodoPageObject } from '../../page-objects/todo-page-object'

describe('todo actions', () => {
    const todoPage = new TodoPageObject()

    beforeEach(() => {
        todoPage.navigate()

        todoPage.addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {
        todoPage.validateTodoText(0, 'Clean room')

        todoPage.validateToggleState(0, false)
    })

    describe('toggling todos', () => {
        it('should toggle test correctly', () => {
            todoPage.toggleTodo(0)
            todoPage.validateTodoCompletedState(0, true)
        })

        it('should clear completed', () => {
            todoPage.toggleTodo(0)

            todoPage.clearCompleted()

            todoPage.validateNumberOfTodosShown(0)
        })
    })
})