# angular-form-async-validation-errors-bug

This demonstrates that form errors are cleared before they are passed into async validators if the normal validators do not return anything

## How to run

- `cd app`
- `npm install`
- `npm start`

## How to demonstrate

- Type anything into the input, an error message will be shown
- Toggle validations off
- Type anything into the input
- The error has been cleared even though the behavior of the validator is to return any existing errors
