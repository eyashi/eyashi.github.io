$('#party-button').click(function(){
    if($('audio').length == 0){
        var audio_html = `<audio id='audio' src="assets/andrejetson-bipolar.mp3" crossorigin="anonymous"></audio>`
        $('body').append(audio_html);
    }
    executePartyMode();
})

let average = (array) => array.reduce((a, b) => a + b) / array.length;

function executePartyMode(){
    $('.party-overlay').removeClass('is-hidden')

    if(!$('.party-overlay').hasClass('was-triggered')){

        $('.party-overlay').addClass('was-triggered')
        var party_canvas = document.getElementById('party-visuals')
        party_canvas.width = window.innerWidth;
        party_canvas.height = window.innerHeight;
        paper.setup(party_canvas)
    
        var amount = 15;
        var colors = ['red', 'white', 'blue', 'white'];
    
        for (var i = 0; i < amount; i++) {
            var rect = new paper.Rectangle([0, 0], [25, 25]);
            rect.center = paper.view.center;
            var path = new paper.Path.Rectangle(rect, 6);
            path.fillColor = colors[i % 4];
            var scale = (1 - i / amount) * 55;
            path.scale(scale);
        }
    }
    var children = paper.project.activeLayer.children;

    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var analyser = audioContext.createAnalyser()

    var el = document.getElementById('audio')
    el.play()
    source = audioContext.createMediaElementSource(el)
    source.connect(analyser)
    analyser.connect(audioContext.destination);

    var on_frame_tool = new paper.Tool()

    on_frame_tool.view.onFrame = function(event){
        analyser.fftSize = 2048;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength)
        analyser.getByteTimeDomainData(dataArray)

        var seg_length = Math.floor(dataArray.length/amount);
        for(var i=0; i<amount; i++){
            var start = i*seg_length
            var end = (i+1)*seg_length
            var val = average(dataArray.slice(start, end))

            children[i].fillColor.alpha = (val / 255) - .2
        }
    }

    $('.party-overlay').click(function(){
        $(this).addClass('is-hidden')
        el.pause()
    })
    
}