var colors = ['#0D00FF', '#00EB1B', '#FFF100', '#EB0E00', '#75FDFF']
function getRandomRainbow(){
    return colors[Math.floor(Math.random()*colors.length)];
}

const original_w = 516;
const original_h = 546;


window.onload = function() {
    initalizeLogo()
}

function initalizeLogo(){
    var canvas = document.getElementById('logo')
    canvas.width = original_w;
    canvas.height = original_h;
    paper.setup(canvas);
    var tool = new paper.Tool();

    var ratio = canvas.width/canvas.height;


    for(i=0;i<points.length;i++){
        var rectangle = new paper.Rectangle(new paper.Point(points[i][0][0], points[i][0][1]), new paper.Point(points[i][1][0], points[i][1][1]));
        var path = new paper.Path.Rectangle(rectangle);
        path.fillColor = '#000000';
    }
    
    tool.onMouseMove = function(event) {
        mousePos = event.point;
        res = paper.project.activeLayer.hitTest(mousePos)
        if(res){
            prev_alpha = Math.floor(res.item.fillColor.alpha * 255)
            res.item.fillColor = getRandomRainbow() + prev_alpha.toString(16)
        }

    }

    var last_r = 0;
    var min_length = 10;
    var original_length = paper.project.activeLayer.children[0].length;

    window.onresize = (event) => {

        var w = window.innerWidth;

        if (w < original_w){
            var r = w / original_w;

            for(var i=0; i<paper.project.activeLayer.children.length; i++){
                var cur_item = paper.project.activeLayer.children[i];
                if(cur_item.length <= original_length){
                    if(last_r != 0) {cur_item.setScaling(1/last_r)}
                    cur_item.setScaling(r);
                }
            }
            last_r = r;
        }
        else{
            if (paper.project.activeLayer.children[0].length != original_length){
                for(var i=0; i<paper.project.activeLayer.children.length; i++){
                    var cur_item = paper.project.activeLayer.children[i];
                    cur_item.setScaling(original_length/paper.project.activeLayer.children[0].length);
                }
            }
        }
    }

    paper.view.draw();
}

// for(var i=0; i<paper.project.activeLayer.children.length; i++){paper.project.activeLayer.children[i].setScaling(0.5)
// }
// for(var i=0; i<paper.project.activeLayer.children.length; i++){paper.project.activeLayer.children[i].setPosition(
// }