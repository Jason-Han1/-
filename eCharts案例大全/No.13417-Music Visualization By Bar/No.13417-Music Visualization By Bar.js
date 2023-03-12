var xdata=[];
var ydata=[];

for(var i=0;i<1024/2;i++){
    xdata.push(i);
    ydata.push(0);
}




option = {
    animation:false,
    xAxis: {
        type: 'category',
        data: xdata,
        show:false
    },
    yAxis: {
        type: 'value',
        show:false
    },
    series: [{
        data:ydata,
        type: 'bar',
         itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
    }]
};

 window.AudioContext =(window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext);
let audioContext=new window.AudioContext();


var oReq = new XMLHttpRequest();
oReq.open('GET', '/asset/get/s/data-1493350085456-S1p6LNlyZ.mp3', true);
oReq.responseType = 'arraybuffer';

var analyser;
oReq.onload = function(e) {
    audioContext.decodeAudioData(oReq.response, function(buffer){
            var audioBufferSouceNode = audioContext.createBufferSource();
             audioBufferSouceNode.buffer = buffer;

             analyser = audioContext.createAnalyser();
             audioBufferSouceNode.connect(analyser);

             analyser.connect(audioContext.destination);
             audioBufferSouceNode.start(0);
             animation();
    });
};

oReq.send();

function animation(){
        requestAnimationFrame(animation);
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var data=[];
        for(var i=0;i<array.length;i+=2){
            data.push(array[i]);
        }
        // console.log(data)
        option.series[0]={data:data,type:'bar'}
        myChart.setOption(option);
        //  console.log(array)
}