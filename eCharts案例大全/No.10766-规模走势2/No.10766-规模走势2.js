// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [60,60,35,5,40];
var barData = lineData;


for (var i = 0; i < 5; i++) {
    var date = new Date(dottedBase += 3600 * 24 * 1000);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
  /*  var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b)
    lineData.push(d + b);*/
}
/*lineData[19] = 360;
barData[19] = 360*/

// option
option = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        formatter: '总规模：<span style="color:yellow">{c}</span><br>'
            + '规模1：<span>{c}<span><br/>' 
            + '规模2：{b}<br/>' ,
        borderWidth: 1,
        borderColor: 'yellow',
        padding: [5,10,5,10],
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
        
    },
    legend: {
        data: ['line', 'bar'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        boundaryGap: [0, '10%'] //留白
    },
    series: [{
        name: '黄点',
        type: 'scatter',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 30,
        data: lineData,
        symbolOffset: [0, '-100%'],
        cursor: 'default',
        hoverAnimation: false,
        itemStyle:{
            color: 'yellow'
        }
        
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#fff'
            }
        },
        symbolRepeat: true,
        symbolSize: [30, 4],
        symbolMargin: 5,
        z: -10,
        data: lineData
    }]
};
