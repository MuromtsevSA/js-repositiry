 var colors = {"Красный":"#FF0000",
          "Синий":"#0000FF",
          "Зеленый":"#00FF00",
          "Желтый":"#FFFF00",
          "Оранжевый":"#FFA500"};

    colors.черный = "#000000"
    delete colors.Красный


function printColors(){
	for (var color in colors){
		console.log(color)
        document.write("<div style='color:" + colors[color] + "'>" + color + "</div>");

	}
}

printColors();
