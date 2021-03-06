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
    left: 20,
    top: 20,
    width: 50,
    height: 50,
    fill: '#CCC',
    angle: 20,
    padding: 10
    }));


    canvases.canvas1.on('mouse:down', function() {
        if(this.getActiveObject()) {
            activeObject  = $.extend({}, this.getActiveObject());
            initialCanvas = this.lowerCanvasEl.id;
        }
    }); 
    
    canvases.canvas2.on('mouse:down', function() {
        if(this.getActiveObject()) {
            activeObject  = $.extend({}, this.getActiveObject());
            initialCanvas = this.lowerCanvasEl.id;
        }
    });
    
    $(document).on('mouseup', function(evt) {
        if(evt.target.localName === 'canvas' && initialCanvas) {
            canvasId = $(evt.target).siblings().attr('id');
            if(canvasId !== initialCanvas) {
                canvases[canvasId].add(activeObject);
                canvases[canvasId].renderAll();
            }
        }
        initialCanvas = '';
        activeObject  = {};                 
    });   
    
    
  
});