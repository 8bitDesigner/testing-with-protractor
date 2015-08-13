describe("My ToDo app", function() {
  beforeEach(function() {
    browser.get('http://localhost:3001')
    jasmine.addMatchers(require('../support/e2e-matchers'))
  })

  it("should have a title", function() {
    expect(element(by.css('h2')).getText()).toBe('Todo')
  })

  it("should have the first todo checked", function() {
    var checkboxes = element.all(by.css('input[type=checkbox'))

    expect(checkboxes.get(0)).toBeChecked()
    expect(checkboxes.get(1)).not.toBeChecked()
  })

  it("should let me complete a todo", function() {
    var checkboxes = element.all(by.css('input[type=checkbox'))

    checkboxes.get(1).click()

    expect(checkboxes.get(0)).toBeChecked()
    expect(checkboxes.get(1)).toBeChecked()
  })
})

