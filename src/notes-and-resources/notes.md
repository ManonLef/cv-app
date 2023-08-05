# Notes on the CV application

## Requirements
- [x] section to add general information
  - [x] name
  - [x] email
  - [x] phone
- [x] section to add educational experience
  - [x] school name
  - [x] title of studies
  - [x] date of studies
- [x] job experience
  - [x] company name
  - [x] position title
  - [x] main responsibilities
  - [x] date from and until employed
- [x] edit and submit button for each section
- [x] submit should submit your form and display the value of your input fields in HTML elements
- [x] edit should return the input fields/form elements including previously entered value
- [x] create a `components` directory under your `src` directory
- [x] create a `styles` directory under your `src` directory

### 2023-07-26
- added all the base files and notes. 
- Some initial ideas up front:
  - [ ] gather inspiration from site like linkedin, common cv designs etc.
  - my to-do does this toggle thing as well. might have to simplify it here though as in: state submitted? then display only html with edit button, otherwise, display form with submit button.

### 2023-07-29
- most of the sections are in place
- I don't think I want to add validation just yet. People can use the fields whichever way they want. It might be useful for later if I for example add social handles to generate a link in pdf for example
- validation will be out of scope for this project

### 2023-08-05
- had a little break due to school holiday
- Current things that still seem left to do:
- [ ] output date in style from- to
- [ ] add some styling

## ideas or features to look into for the future
- [ ] download pdf / jpeg / or even other file format
- [ ] add template or theme picker
- [ ] future: session storage or local storage with reset function
- [ ] future future: store in account. Make save file editable for censoring and sharing online
- [ ] add a social media section right below the general information section
- [ ] edit to more friendly date output
- [ ] add max and min dates