# Lessons Learned

## How to install Cypress

1. Initialize your project, run `yarn init` and `git init`. If you are on existing project, you may skip this step.
1. Install Cypress `yarn add cypress --dev`
1. Run Cypress `yarn cy:open`

## Common Commands

1. visit() : visit a page
1. contains() : query an element
1. get() : get DOM elements by selector
1. click() : perform a click event
1. should() : make an assertion

## Scripts

1. `yarn cy:open` : to open cypress
1. `yarn cy:reporter` : create mochawesome reporter that runs all tests
1. `yarn cy:spec path/to/your/test.spec.js` : run specific test spec
1. `yarn cy:dashboard` : record all tests run which integrates with cypress dashboard
