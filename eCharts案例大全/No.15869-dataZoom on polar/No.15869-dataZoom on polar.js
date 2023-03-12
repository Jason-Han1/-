var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i < 70; i++) {
    data1.push([Math.random() * 5, Math.random() * 360]);
    data2.push([Math.random() * 5, Math.random() * 360]);
    data3.push([Math.random() * 10, Math.random() * 360]);
}

options = [
    {
        title: {
            text: 'dataZoom on angle',
            left: 'center'
        },
        legend: {
            data: ['scatter', 'scatter2', 'scatter3'],
            top: 40
        },
        polar: {
    
        },
        angleAxis: {
            type: 'value'
        },
        radiusAxis: {
            axisAngle: 0
        },
        dataZoom: [
            {
                type: 'slider',
                angleAxisIndex: 0,
                bottom: 40,
                start: 20,
                end: 80
            },
            {
                type: 'inside',
                angleAxisIndex: 0,
                start: 20,
                end: 80
            }
        ],
        series: [{
            coordinateSystem: 'polar',
            angleAxisIndex: 0,
            radiusAxisIndex: 0,
            name: 'scatter',
            type: 'scatter',
            symbolSize: 10,
            data: data1
        }, {
            coordinateSystem: 'polar',
            angleAxisIndex: 0,
            radiusAxisIndex: 0,
            name: 'scatter2',
            type: 'scatter',
            symbolSize: 10,
            data: data2
        }, {
            coordinateSystem: 'polar',
            angleAxisIndex: 0,
            radiusAxisIndex: 0,
            name: 'scatter3',
            type: 'scatter',
            symbolSize: 10,
            data: data3
        }]
    },
    {
        title: {
            text: 'dataZoom on radius',
            left: 'center'
        },
        legend: {
            data: ['scatter', 'scatter2', 'scatter3'],
            top: 40
        },
        polar: {
    
        },
        angleAxis: {
            type: 'value'
        },
        radiusAxis: {
            axisAngle: 0
        },
        dataZoom: [
            {
                type: 'slider',
                radiusAxisIndex: 0,
                bottom: 40,
                start: 20,
                end: 80
            },
            {
                type: 'inside',
                radiusAxisIndex: 0,
                start: 20,
                end: 80
            }
        ],
        series: [{
            coordinateSystem: 'polar',
            // FIXME
            // 现在必须得设置这个，能不能polar和catesian一样，要不然很多特殊处理。
            angleAxisIndex: 0,
            radiusAxisIndex: 0,
            name: 'scatter',
            type: 'scatter',
            symbolSize: 10,
            data: data1
        }, {
            coordinateSystem: 'polar',
            angleAxisIndex: 0,
            radiusAxisIndex: 0,
            name: 'scatter2',
            type: 'scatter',
            symbolSize: 10,
            data: data2
        }, {
            coordinateSystem: 'polar',
            angleAxisIndex: 0,
            radiusAxisIndex: 0,
            name: 'scatter3',
            type: 'scatter',
            symbolSize: 10,
            data: data3
        }]
    }
];
