   //Aquest script trenca una cadena de text i converteix cada paraula en una capa
   
    doc = app.activeDocument;
    layer = doc.activeLayer;     

    var text = layer.textItem.contents;
    var textArray = text.split(" ") || text.split("\r"); 
    var pos = layer.textItem.position;   

    layer.textItem.contents=textArray[0];  
    layer.name = textArray[0];
    //Grup de capes
    var grupNou = layer.parent.layerSets.add();  
    grupNou.name = text; 
    layer.move(grupNou, ElementPlacement.INSIDE); 

    for (var i=1; i<textArray.length;i++){

        tmp = layer.duplicate();
        textSize = tmp.textItem.size;
        tmp.textItem.position = [pos[0], pos[1]+textSize*i];       
        tmp.name = textArray[i];
        tmp.textItem.contents = textArray[i];
        tmp.move(grupNou, ElementPlacement.INSIDE);      

    }
    
