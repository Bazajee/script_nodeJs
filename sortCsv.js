import fs from 'fs'


/*
This script have two function.
The first function, getColumn(array, array), return the array of an specific column
The second function, getArrayData(dataArray, indexArray), retun an array with data by column
*/



// define the path of your csv file 
const csvFilePath = 'put/your/csv/path/file.csv'

// Transform your csv file in one string, then split them by line. 
// csvLines is an array where every element, is string and corresponds of a line of csv file. 
let csvLines = fs.readFileSync(csvFilePath).toString().split("\r")

// Out the firstline of csv file (column name)
let rawData = csvLines.slice(1)


// Put the column index your interest
const columnsIndex = []

function getColumn(dataArray, indexArray = []) {
    /*
    * Function to get specific columns from a 2D array
    * Parameters:
    *   - array: 2D array containing data
    *   - indexArray: Array of column indices to be extracted (default is an empty array)
    */

    // Extract the header row and split it into an array of column names
    let columnsList = dataArray[0].split(';')

    // Map the specified column indices to their corresponding names
    let filterColumns = indexArray.map(index => columnsList[index])

    // Return the filtered columns
    return filterColumns
}

function getColumn(dataArray, indexArray = []) {
    /*
    * Function to get specific columns from a 2D array
    * Parameters:
    *   - array: 2D array containing data
    *   - indexArray: Array of column indices to be extracted (default is an empty array)
    */

    // Extract the header row and split it into an array of column names
    let columnsList = dataArray[0].split(';')

    // Map the specified column indices to their corresponding names
    let filterColumns = indexArray.map(index => columnsList[index])

    // Return the filtered columns
    return filterColumns
}


function getArrayData(array, indexArray) {
    /*
    * Function to get specific data columns from a 2D array
    * Parameters:
    *   - array: 2D array containing data
    *   - indexArray: Array of column indices to be extracted
    */
    let data = [];

    // Loop through each row in the array
    for (let lineIndex in array) {
        let line = [];

        // Extract the specified columns for each row and add them to the line array
        indexArray.forEach(element => line.push(array[lineIndex].split(";")[element]))

        // Add the line array to the data array
        data.push(line)
    }

    // Returns the 2D array containing the specified data in the selected columns
    return data
}

getColumn(csvLines, columnsIndex)
getArrayData(rawData, columnsIndex)