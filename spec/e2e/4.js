describe("My ToDo app", function() {
  var page = require('../support/todo-page')

  beforeEach(function() {
    jasmine.addMatchers(require('../support/e2e-matchers'))
    page.load()
  })

  it("should have a title", function() {
    expect(page.title).toBe('Todo')
  })

  it("should have the first todo checked", function() {
    expect(page.firstCheckbox).toBeChecked()
    expect(page.secondCheckbox).not.toBeChecked()
  })

  it("should let me complete a todo", function() {
    page.secondCheckbox.click()

    expect(page.firstCheckbox).toBeChecked()
    expect(page.secondCheckbox).toBeChecked()
  })
})


