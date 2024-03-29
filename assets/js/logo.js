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

    var ratio = canvas.height/canvas.width;

    var orig_pos_array = []
    for(i=0;i<points.length;i++){
        var rectangle = new paper.Rectangle(new paper.Point(points[i][0][0], points[i][0][1]), new paper.Point(points[i][1][0], points[i][1][1]));
        var path = new paper.Path.Rectangle(rectangle);
        orig_pos_array.push({x: path.position.x, y: path.position.y});
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


    // window.onresize = (event) => {

    //     var w = window.innerWidth;
    //     if (w < original_w){
    //         var r = w / original_w;

    //         for(var i=0; i<paper.project.activeLayer.children.length; i++){
    //             var cur_item = paper.project.activeLayer.children[i];
    //             var o_pos = orig_pos_array[i]
    //             if(cur_item.length <= original_length){
    //                 if(last_r != 0) {cur_item.setScaling(1/last_r)}
    //                 cur_item.setScaling(r);
    //                 let new_x = r * o_pos.x;
    //                 let new_y = r * ratio * o_pos.y;
    //                 cur_item.setPosition(new_x, new_y)
    //             }
    //         }
    //         last_r = r;
    //     }
    //     else{
    //         if (paper.project.activeLayer.children[0].length != original_length){
    //             for(var i=0; i<paper.project.activeLayer.children.length; i++){
    //                 var cur_item = paper.project.activeLayer.children[i];
    //                 cur_item.setScaling(original_length/paper.project.activeLayer.children[0].length);
    //                 cur_item.setPosition(orig_pos_array[i].x, orig_pos_array[i].y);
    //             }
    //         }
    //     }
    // }

    paper.view.draw();
}