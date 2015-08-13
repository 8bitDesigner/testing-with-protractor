module.exports = {
  toBeChecked: function () {
    return {
      compare: function(actual) {
        function isTruthy(val) { return !!val }

        return {
          message: "Expected element to be checked",
          pass: actual.getAttribute('checked').then(isTruthy)
        }
      }
    }
  }
}

