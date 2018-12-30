const mySimpleRectangle = function(paper) {
    const recWidth = 10;
    const recHeight = 10;
    var recDef = {
        x: 3, 
        y: 5, 
        width: recWidth, 
        height: recHeight
    }
    var rec = new paper.Path.Rectangle(recDef);
    rec.style = {
        fillColor: 'red',
        strokeColor: 'black',
        strokeWidth: 1
    };
}

const myRectangle = function(paper) {
    const recWidth = 10;
    const recHeight = 10;
    const indent = 2;
    var fillH = 0.0;
    var fillS = 0.6;
    var fillL = 0.6;
    for(var i=0; i<10; i++) {
        for(var j=0; j<10; j++) {
            var recDef = {
                x: 3 + (i * (recWidth + indent)), 
                y: 3 + i + (j * (recWidth + indent)), 
                width: recWidth, 
                height: recHeight
            }
            var rec = new paper.Path.Rectangle(recDef);
            fillH = (0.1*i)
            fillS = (0.1*i)
            fillL = (0.1*i)
            rec.style = {
                fillColor: new paper.Color({hue: fillH, saturation: fillS, lightness: fillL}),
                strokeColor: 'black',
                strokeWidth: 1
            };
            rec.rotation = i
        }
    }
}
