//function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

var gridInput = 16;
var colors = ['#2B3752', '#2E6E65', '#86EE60', '#F4F7ED'];

$(document).ready(function() {
    console.log("started");
    $("#reset-grid").on("click", initGrid);
    $("#gridSize").on("submit", resizeGrid);
    gridInput = document.getElementById('gridSize');
    initGrid();
});

var initGrid = function() {
    var gridSize = gridInput.value;
    if(gridSize > 72)
    {
        gridSize = 72;
    }
    else if(gridSize < 2)
    {
        gridSize = 2;
    }
    createGrid(1, gridSize);

    var cells = document.getElementsByClassName('cell'),
        i = cells.length;
    console.log("cells " + cells.length)

    if(gridSize <= 32)
    {
        do {
            i--;
            cells[i].style.width = "30px";
            cells[i].style.height = "30px";
        } while(i>= 0)
    }
    if(gridSize <= 16)
    {
        do {
            i--;
            cells[i].style.width = "50px";
            cells[i].style.height = "50px";
        } while(i>= 0)
    }
    if(gridSize > 32)
    {
        do {
            i--;
            cells[i].style.width = "15px";
            cells[i].style.height = "15px";
        } while(i>= 0)
    }
};

function createGrid(recIter, gridSize) {
    //for (rowIter = 0; rowIter < 16; i++)
    //{
    $("#table").append("<tr class='row' id='rows'></tr>");
    //console.log("Decending: Row creation");
    //}

    if (recIter < gridSize) {
        recIter = recIter + 1;
        //console.log("Decending: If/else success");
        createGrid(recIter, gridSize);
    }
    //console.log("returning: Cell creation");
    $(".row").append("<td class='cell'></td>");
}



$("#resetButton").click(function() {
    $("#table").empty();
    initGrid();
});

$("#table").on("mouseenter", ".cell", function() {
    $(this).css("background-color", "black");
});


var resizeGrid = function()
{

    gridSize = document.getElementById("gridSize").value;
    console.log("GridSize Set " + gridSize);
    initGrid();
}
