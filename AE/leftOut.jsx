//Selected layers will fade out by a right to left 1second movement

//Currently selected layers
layers = app.project.activeItem.selectedLayers;

//Iterating layers so stuff can get done
for (i=0; i<layers.length;i++){
    
    //Current layer
    var layer = layers[i];

    //Time variables
    var inti =layer.inPoint; 
    var outpo = layer.outPoint;  

    //Position variables
    var oPosition = layer.property('Transform').property('Position').value;
    var inpo = [oPosition[0],oPosition[1],oPosition[2]];
    var defpo = [oPosition[0]-200,oPosition[1],oPosition[2]];;
    
    //Other props
    var opacity = layer.property('Transform').property('Opacity');    
    var position = layer.property('Transform').property('Position');
    layer.Effects.addProperty('ADBE Motion Blur');    
    var direccional = layer.Effects.property('ADBE Motion Blur');

    //Initial values
    position.setValueAtTime(outpo-1, inpo);   
    direccional.property('Longitud del desenfoque').setValueAtTime(outpo-1, 0);
    direccional.property('Dirección').setValueAtTime(outpo-1, 90);       
    opacity.setValueAtTime(outpo-1, 100);  

    //Final values
    opacity.setValueAtTime(outpo, 0);
    position.setValueAtTime(outpo, defpo);
    direccional.property('Longitud del desenfoque').setValueAtTime(outpo, 250);     


}


