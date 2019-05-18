// from data.js
// Assign the data from `data.js` to a descriptive variable
var tableData = data;
// console.log(tableData);

// YOUR CODE HERE!

for(var i=0; i<tableData.length; i++){
    var ini_tableRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];
    
    var newRow   = ini_tableRef.insertRow(ini_tableRef.rows.length);
    for (j=0; j<7; j++){
        switch(j){
            case 0:
                var newCell = newRow.insertCell(j)
                newCell.append(tableData[i].datetime)
                break;
            case 1:
                var newCell = newRow.insertCell(j)
                newCell.append(tableData[i].city)
                break;
            case 2:
                var newCell = newRow.insertCell(j)
                newCell.append(tableData[i].state)
                break;
            case 3:
                var newCell = newRow.insertCell(j)
                newCell.append(tableData[i].country)
                break;
            case 4:
                var newCell = newRow.insertCell(j)
                newCell.append(tableData[i].shape)
                break;
            case 5:
                var newCell = newRow.insertCell(j)
                newCell.append(tableData[i].durationMinutes)
                break;
            case 6:
                var newCell = newRow.insertCell(j)
                newCell.append(tableData[i].comments)
                break;
            }
        
        }   
    }

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    document.getElementById('ufo-table').getElementsByTagName('tbody')[0].innerHTML = "";

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Create an array to hold input values
    var inputvalues = {}

    // 1  
    // Select the input element and get the raw HTML node
    var inputElement1 = d3.select("#user-date");
  
    // Get the value property of the input element
    var inputValue1 = inputElement1.property("value");

    if(inputValue1){
        inputvalues["datetime"] = inputValue1
        console.log(`User entered ${inputValue1} and it was appended to the dictionary`)
    }

    // 2
    // Select the input element and get the raw HTML node
    var inputElement2 = d3.select("#user-city");
  
    // Get the value property of the input element
    var inputValue2 = inputElement2.property("value");
    inputValue2 = inputValue2.toLowerCase();

    if(inputValue2){
        inputvalues["city"] = inputValue2
        console.log(`User entered ${inputValue2} and it was appended to the dictionary`)
    }

    // 3
    // Select the input element and get the raw HTML node
    var inputElement3 = d3.select("#user-state");

    // Get the value property of the input element
    var inputValue3 = inputElement3.property("value");
    inputValue3 = inputValue3.toLowerCase();

    if(inputValue3){
        inputvalues["state"] = inputValue3
        console.log(`User entered ${inputValue3} and it was appended to the dictionary`)
    }

    // 4
    // Select the input element and get the raw HTML node
    var inputElement4 = d3.select("#user-country");

    // Get the value property of the input element
    var inputValue4 = inputElement4.property("value");
    inputValue4 = inputValue4.toLowerCase();  

    if(inputValue4){
        inputvalues["country"] = inputValue4
        console.log(`User entered ${inputValue4} and it was appended to the dictionary`)
    }

    // 5
    // Select the input element and get the raw HTML node
    var inputElement5 = d3.select("#user-shape");

    // Get the value property of the input element
    var inputValue5 = inputElement5.property("value");
    inputValue5 = inputValue5.toLowerCase();

    if(inputValue5){
        inputvalues["shape"] = inputValue5
        console.log(`User entered ${inputValue5} and it was appended to the dictionary`)
    }

    var keys_arr = []

    Object.keys(inputvalues).forEach(element => {
        console.log(`---`);
        keys_arr.push(element);        
    });  

    for (i=0; i<keys_arr.length; i++){
        console.log(inputvalues[keys_arr[i]])
    };

    var filteredData = []
  
    for (i=0; i<keys_arr.length; i++){
        switch(i){
            case 0:
                filteredData = tableData.filter(entry => 
                entry[keys_arr[i]] === inputvalues[keys_arr[i]]
                )
                break;
            default:
                filteredData = filteredData.filter(entry => 
                entry[keys_arr[i]] === inputvalues[keys_arr[i]]
                )
                break;
        }
    }

    // var filteredData = tableData.filter(entry => 
    //     entry.datetime === inputValue1 
    //     && entry.city === inputValue2 
    //     && entry.state === inputValue3
    //     && entry.country === inputValue4
    //     && entry.shape === inputValue5);
  
    console.log(filteredData);

    for(var i=0; i<filteredData.length; i++){
        var tableRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];
        
        var newRow   = tableRef.insertRow(tableRef.rows.length);
        for (j=0; j<7; j++){
            switch(j){
                case 0:
                    var newCell = newRow.insertCell(j)
                    newCell.append(filteredData[i].datetime)
                    break;
                case 1:
                    var newCell = newRow.insertCell(j)
                    newCell.append(filteredData[i].city)
                    break;
                case 2:
                    var newCell = newRow.insertCell(j)
                    newCell.append(filteredData[i].state)
                    break;
                case 3:
                    var newCell = newRow.insertCell(j)
                    newCell.append(filteredData[i].country)
                    break;
                case 4:
                    var newCell = newRow.insertCell(j)
                    newCell.append(filteredData[i].shape)
                    break;
                case 5:
                    var newCell = newRow.insertCell(j)
                    newCell.append(filteredData[i].durationMinutes)
                    break;
                case 6:
                    var newCell = newRow.insertCell(j)
                    newCell.append(filteredData[i].comments)
                    break;
                }
            
            }   
        }
    }
  );