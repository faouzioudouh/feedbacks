# Feedbacks

* [Live demo](#live-demo)
* [Install](#how-to-run)
* [Tests](#tests)
* [Libraries](#libraries)
* [Exercise](#exercise)
* [Extra points](#extra-points)
* [Structure](#structure)

## Live demo
[click me](https://faouzioudouh.github.io/feedbacks/)

## How to run

Clone the repository
```
$ git clone https://github.com/faouzioudouh/feedbacks.git
```

Install dependencies
```
$ yarn
```

Start development server
```
$ yarn start
```

Production build
```
$ yarn build
```

## Tests
I tested 9 components, you can find all the tests whithin the `./tests` folder.
I used `Jest` and `Enzymer`.

- To run the tests:
```
$ yarn test
```

## Libraries
- **React** for the UI
_No extra lib for state managment needed_

## Exercise
All the required points are there ;).

- [x]   Fetch this JSON file
- [x]   Display the feedback items in a list.
- [x]   Use comment and rating filters to filter feedback items.
- [x]   Make the application as responsive as possible for mobile phones, tablets, and desktops.
- [x]   Match the provided design below as close as possible.
- [x]   Do something creative with the extra data provided in the JSON file.

## Extra points

- [x]   Pagination
- [x]   Error handling
- [x]   Api
- [x]   More for you to explore...

# Structure
Within each component folder you'll find three files:

- `Componenet.js` Stateless component (functional component)
- `ComponenetContainer.js` Where the state managment logic belongs.
- `Componenet.scss` Style
- `index.js` Just to keep the path/to/component as small as possible
