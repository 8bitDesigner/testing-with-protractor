describe("My ToDo app", function() {
  it("should have a title", function() {
    browser.get('http://localhost:3001')
    expect(element(by.css('h2')).getText()).toBe('Todo')
  })
})
