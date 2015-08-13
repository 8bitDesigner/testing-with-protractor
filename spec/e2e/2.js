describe("My ToDo app", function() {
  it("should have a title", function() {
    browser.get('http://localhost:3001')
    expect(element(by.css('h2')).getText()).toBe('Todo')
  })

  it("should have the first todo checked", function() {
    browser.get('http://localhost:3001')

    var checkboxes = element.all(by.css('input[type=checkbox'))

    expect(checkboxes.get(0).getAttribute('checked')).toBe('true')
    expect(checkboxes.get(1).getAttribute('checked')).not.toBe('true')
  })

  it("should let me complete a todo", function() {
    browser.get('http://localhost:3001')

    var checkboxes = element.all(by.css('input[type=checkbox'))

    checkboxes.get(1).click()

    expect(checkboxes.get(0).getAttribute('checked')).toBe('true')
    expect(checkboxes.get(1).getAttribute('checked')).toBe('true')
  })
})
