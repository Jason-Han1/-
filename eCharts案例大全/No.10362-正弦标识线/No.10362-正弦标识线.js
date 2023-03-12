

var N_POINT = 360; // 角度
var YMAX = 600; // Y轴放大倍数


var genItem = function (k) {
    return Math.sin(Math.PI/N_POINT*2*k)*YMAX;
}

var option = {
    title: {
        text: 'sin'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {min:0,max:N_POINT},
    yAxis: {
        max:800,
        min:-800
    },
    series: [
        {
            name: name,
            type: 'line',
            data: Array.apply(null, Array(N_POINT)).map((item,i)=>[i,genItem(i)]),
            showSymbol: false
        },{
            name: '散点',
            type: 'scatter',
            data:Array.apply(null, Array(20)).map(()=>{
                var x = Math.round(Math.random()*N_POINT);
                var y = genItem(x)+ (Math.random()*YMAX/2-YMAX/4);
                return [x,y]
            })
        }
    ]
}