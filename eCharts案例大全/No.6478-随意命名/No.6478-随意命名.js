var xAxisData = [];
var data1 = [1,2,1,1,5];
var data2 = [-1,-2,-1,-1,-5];
var data3 = [11,6,10,5,7];
var barname = ['bar', 'bar2', 'bar3'];


option = {
    backgroundColor: 'transparent',
    legend: {
        data: barname,
        itemGap:100,
       left:'center',
        textStyle:{
             color: 'rgb(123,127,148)'
        }
        
    },

    tooltip: {},
    xAxis: {
        data: xAxisData,
        name: 'X Axis',
        axisLine: {onZero: true},
        axisLine: {
                 show:false
               },
        splitLine: {show: false},
        splitArea: {show: false}
    },
    yAxis: {
        inverse: true,
        axisLine: {
                   lineStyle: {
                       color: 'rgb(123,127,148)'
                   },
                   show:false
               },
        
        splitArea: {show: false}
    },
    grid: {
        left: 100
    },

    series: [
            
        {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            
            barWidth:"10%",
            data: data1,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(23,58,102,0.8)'},
                        {offset: 0.5,  color: 'rgba(57,129,176,0.8)'},
                        {offset: 1, color: 'rgba(24,141,240,0.8)'}
                    ]
                )
            },
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'two',
           
             barWidth:"10%",
            data: data2,
             itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(242,215,174,0.8)'},
                        {offset: 0.5,  color: 'rgba(154,139,128,0.8)'},
                        {offset: 1, color: 'rgba(59,59,79,0.8)'}
                    
                    ]
                )
            },
        },
        {
            name: 'bar3',
            type: 'bar',
            stack: 'three',
            
             barWidth:"10%",
            data: data3,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(81,51,80,0.8)'},
                        {offset: 0.5,  color: 'rgba(154,86,100,0.8)'},
                        {offset: 1, color: 'rgba(226,120,120,0.8)'}
                    ]
                )
            },
        },
    ]
};

myChart.on('brushSelected', renderBrushed);

function renderBrushed(params) {
    var brushed = [];
    var brushComponent = params.batch[0];

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    }
}