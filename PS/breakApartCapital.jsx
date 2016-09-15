   //Aquest script desplaça la primera paraula d'una cadena de text a una nova capa.
   
    doc = app.activeDocument;
    layer = doc.activeLayer;     

    var text = layer.textItem.contents;
    var textArray = text.split(" ") || text.split("\r"); 
    var pos = layer.textItem.position;   

    layer.textItem.contents=textArray[0];  
    layer.name = textArray[0];

    capaNova = layer.duplicate();
    textSize = capaNova.textItem.size;
    var lasting = "";
    for ( var i = 1; i<textArray.length;i++){

        lasting+=textArray[i]+" ";

    }    
    capaNova.textItem.position = [pos[0], pos[1] + textSize];       
    capaNova.name = lasting;
    capaNova.textItem.contents = lasting;
     

    //Agrupo les capes en un sol grup
    var grupNou = layer.parent.layerSets.add();  
    grupNou.name = text;    
    layer.move(grupNou, ElementPlacement.INSIDE);  
    capaNova.move(grupNou, ElementPlacement.INSIDE);   
   

    
    
