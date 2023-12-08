/* 
   File Name: AdvancedDataManipulation.js
   
   Description: This code performs advanced data manipulation on a given dataset. 
                It includes operations like filtering, sorting, grouping, and transforming the data.
   Author: John Doe
   Version: 1.0
*/

// Define a sample dataset
const dataset = [
  { id: 1, name: "John", age: 28, city: "New York" },
  { id: 2, name: "Sarah", age: 32, city: "London" },
  { id: 3, name: "James", age: 45, city: "Paris" },
  { id: 4, name: "Emily", age: 24, city: "Sydney" },
  { id: 5, name: "Michael", age: 52, city: "Tokyo" },
  { id: 6, name: "Sophia", age: 30, city: "Berlin" },
  { id: 7, name: "David", age: 38, city: "Moscow" },
  { id: 8, name: "Olivia", age: 29, city: "Amsterdam" },
  { id: 9, name: "Daniel", age: 31, city: "Dubai" },
  { id: 10, name: "Emma", age: 27, city: "Rome" },
  // ... more data objects
];

// Filter dataset based on specific conditions
const filteredData = dataset.filter((data) => {
  return data.age > 30 && data.city === "London";
});

// Sort the filtered dataset based on a specific attribute
const sortedData = filteredData.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

// Group the sorted dataset by city
const groupedData = sortedData.reduce((groups, data) => {
  const city = data.city;
  if (!groups[city]) {
    groups[city] = [];
  }
  groups[city].push(data);
  return groups;
}, {});

// Perform transformation operations on each group
const transformedData = Object.keys(groupedData).map((city) => {
  return {
    city,
    totalPeople: groupedData[city].length,
    averageAge: groupedData[city].reduce((sum, data) => sum + data.age, 0) / groupedData[city].length,
    // ... additional transformations
  };
});

// Print the transformed data
console.log(transformedData);

// ... more complex data manipulation operations can be added

// Output:
/*
[
  { city: "London", totalPeople: 1, averageAge: 32 },
]
*/