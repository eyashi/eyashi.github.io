var colors = ['#0D00FF', '#00EB1B', '#FFF100', '#EB0E00', '#75FDFF']
function getRandomRainbow(){
    return colors[Math.floor(Math.random()*colors.length)];
}

window.onload = function() {
    var canvas = document.getElementById('logo')
    canvas.width = 516;
    canvas.height = 546;
    paper.setup(canvas);
    var tool = new paper.Tool();

    for(i=0;i<points.length;i++){
        var rectangle = new paper.Rectangle(new paper.Point(points[i][0][0], points[i][0][1]), new paper.Point(points[i][1][0], points[i][1][1]));
        var path = new paper.Path.Rectangle(rectangle);
        path.fillColor = '#000000';
    }

    tool.onMouseMove = function(event) {
        mousePos = event.point;
        res = paper.project.activeLayer.hitTest(mousePos)
        if(res){
            res.item.fillColor = getRandomRainbow();
        }

    }
    
    paper.view.draw();
}