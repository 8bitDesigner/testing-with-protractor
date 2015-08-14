module.exports = {
  load: function load() {
    browser.get('http://localhost:3001')
  },

  get title() {
    return element(by.css('h2')).getText()
  },

  get checkboxes() {
    return element.all(by.css('input[type=checkbox'))
  },

  get firstCheckbox() {
    return this.checkboxes.get(0)
  },

  get secondCheckbox() {
    return this.checkboxes.get(1)
  },

  get textField() {
    return element.all(by.css('form input[type=text]'))
  },

  get submitButton() {
    return element.all(by.css('form input[type=submit]'))
  }
}
