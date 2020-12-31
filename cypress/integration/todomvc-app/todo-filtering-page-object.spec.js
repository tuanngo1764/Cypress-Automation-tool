/// <reference types="cypress" />
import { TodoPageObject } from '../../page-objects/todomvc-app/todo-page-object'

describe('filtering', function () {
    const todoPage = new TodoPageObject()

    beforeEach(() => {
        todoPage.navigate()

        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn JavaScript')
        todoPage.addTodo('Use Cypress')

        todoPage.toggleTodo(1)
    })

    it('should filter "Active" correctly', () => {
        todoPage.showOnlyActiveTodos()

        todoPage.validateNumberOfTodosShown(2)
    })

    it('should filter "Completed" correctly', () => {
        todoPage.showOnlyCompletedTodos()

        todoPage.validateNumberOfTodosShown(1)
    })

    it('should filter "All" correctly', () => {
        todoPage.showAllTodos()

        todoPage.validateNumberOfTodosShown(3)
    })
})