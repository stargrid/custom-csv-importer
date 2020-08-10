# Custom CSV Importer

## Test the project

Using [webpack](https://webpack.js.org/) with reference to folder `src/dev`.

```sh
$ npm install || yarn
```

then

```sh
$ npm start || yarn start
```

## Installation

```sh
$ npm i custom-csv-importer || yarn add custom-csv-importer
```

## Required dependencies

```
styled-components
react-xarrows
```

## How to use

| Prop | Default value |
| ----- | ----- | 
| arrows | [ ] - `A list with all connections between columns.` |
| setArrows | () => {} - `A function that sets a new connection.` |
| defaultCsvTitle | "Default CSV" |
| userCsvTitle | "User CSV" |
| defaultCsv | [{ column_id: 1, column_name: 'Default Item 1', required: true, }, { column_id: 2, column_name: 'Default Item 2', required: false, }] |
| userCsv | [{ column_id: 1, column_name: 'User Item 1' }, { column_id: 2, column_name: 'User Item 2' }] |
| customBox | { border: 1px solid grey; position: relative; padding: 20px 30px; margin: 10px 0; border-radius: 4px; width: 150px; } |
| customText | { text-align: center; } |