$(document).ready(function() {
    
    //Creating new canvses
    var canvases = {
        canvas1 : new fabric.Canvas('canvas1', {backgroundColor: 'green'}),
        canvas2 : new fabric.Canvas('canvas2', {backgroundColor: 'yellow'})
    };  
    
    var activeObject, initialCanvas;
    
    /**
     * Adding circle to canvas1
     */
    canvases.canvas1.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
    
    /**
     * Adding circle to canvas2
     */
    canvases.canvas1.add(new fabric.Rect({
    left: 100,
    top: 50,
    width: 100,
    height: 100,
    fill: '#CCC',
    angle: 20,
    padding: 10
    }));
  
});