//My first After Effects Script

//Currently selected layers
layers = app.project.activeItem.selectedLayers;


//Iterating layers so stuff can get done
for (i=0; i<layers.length;i++){
    
    //Current layer
    var layer = layers[i];

    //Time variables
    var inpo =layer.inPoint;
    var outpo = layer.outPoint;

    //Other props
    var opacity = layer.property('Transform').property('Opacity');
    var scale = layer.property('Transform').property('Scale');
    layer.Effects.addProperty('ADBE Gaussian Blur');
    var gaussian = layer.Effects.property('ADBE Gaussian Blur').property('Difuminación');

       
    opacity.setValueAtTime(inpo, 0);
    scale.setValueAtTime(inpo, [110,110]);  
    gaussian.setValueAtTime(inpo, 500);
    gaussian.setValueAtTime(inpo+1, 0);

    opacity.setValueAtTime(inpo+1, 100);
    scale.setValueAtTime(inpo+1, [100,100]);   
    opacity.setValueAtTime(outpo-1, 100);
    scale.setValueAtTime(outpo-1, [100,100]);    
    gaussian.setValueAtTime(outpo-1, 0);
    gaussian.setValueAtTime(outpo, 500);
    opacity.setValueAtTime(outpo, 0);
    scale.setValueAtTime(outpo, [110,110]);
  

 


}


