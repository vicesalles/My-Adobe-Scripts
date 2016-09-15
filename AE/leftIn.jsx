//Selected layers will fade in by a left to right 1second movement

//Currently selected layers
layers = app.project.activeItem.selectedLayers;


//Iterating layers so stuff can get done
for (i=0; i<layers.length;i++){
    
    //Current layer
    var layer = layers[i];

    //Time variables
    var inti =layer.inPoint;   

    //Position variables
    var oPosition = layer.property('Transform').property('Position').value;
    var inpo = [oPosition[0]-200,oPosition[1],oPosition[2]];
    var defpo = [oPosition[0],oPosition[1],oPosition[2]];;
    

    //Other props
    var opacity = layer.property('Transform').property('Opacity');    
    var position = layer.property('Transform').property('Position');
    layer.Effects.addProperty('ADBE Motion Blur');    
    var direccional = layer.Effects.property('ADBE Motion Blur');

    //Initial values
    position.setValueAtTime(inti, inpo);   
    direccional.property('Longitud del desenfoque').setValueAtTime(inti, 140);
    direccional.property('Dirección').setValueAtTime(inti, 90);       
    opacity.setValueAtTime(inti, 0);  

    //Final values
    opacity.setValueAtTime(inti+1, 100);
    position.setValueAtTime(inti+1, defpo);
    direccional.property('Longitud del desenfoque').setValueAtTime(inti+1, 0);
      
  
 


}


