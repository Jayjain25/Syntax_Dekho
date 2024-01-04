

function showData(dataId) {
    // Hide all data elements with the 'buttonData' class
    var allDataElements = document.querySelectorAll('.buttonData');

    // Loop through each data element and hide it
    allDataElements.forEach(function(element) {
        element.style.display = 'none';
    });

    // Show the selected data element by ID
    var selectedDataElement = document.getElementById(dataId);

    // If the selected data element exists, show it
    if (selectedDataElement) {
        selectedDataElement.style.display = 'block';
    }
}

