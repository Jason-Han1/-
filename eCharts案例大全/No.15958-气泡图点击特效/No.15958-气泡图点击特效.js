var data = [];
var data2 = [];


for (var i = 0; i < 10; i++) {
    data.push(
        [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 40)
        ]
    );
    data2.push(
        [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)
        ]
    );
}

var axisCommon = {
    axisLabel: {
        textStyle: {
            color: '#8290a5'
        }  
    },
    axisTick: {
        lineStyle: {
            color: '#8290a5'
        }  
    },
    axisLine: {
        lineStyle: {
            color: '#414d5d'
        }  
    },
    splitLine: {
        lineStyle: {
            color: '#414d5d',
            type: 'solid'
        }
    }
};

option = {
    color: ['#2988b8', '#6a71ba'],
    backgroundColor: '#3c4656',
    xAxis: axisCommon,
    yAxis: axisCommon,
    visualMap: {
        show: false,
        max: 100,
        inRange: {
            symbolSize: [10, 40]
        }
    },
    series: [
        {
            type: 'scatter',
            data: data
        },
        {
            type: 'scatter',
            data: data2
        }
    ],
    animationDelay: function (idx) {
        return idx * 50;
    },
    animationEasing: 'elasticOut'
};

myChart.clear();
setTimeout(function () {
    
    // $(myChart.getDom()).css('background', 'radial-gradient(circle at 50% 0, #475b7a 0%, #3c4656 100%)');
    
    var zr = myChart.getZr();
    myChart.off('click');
    myChart.on('click', function (param) {
        var seriesModel = myChart.getModel().getSeriesByIndex(param.seriesIndex);
        var data = seriesModel.getData();
        var coordSys = seriesModel.coordinateSystem;
        var color = data.getItemVisual(param.dataIndex, 'color');
        var symbolSize = data.getItemVisual(param.dataIndex, 'symbolSize');
        var pt1 = coordSys.dataToPoint(param.value);
        var pt2 = coordSys.dataToPoint([param.value[0], 0]);
        var line = new echarts.graphic.Line({
            shape: {
                x1: pt1[0],
                y1: pt1[1],
                x2: pt1[0],
                y2: pt1[1]
            },
            style: {
                stroke: color,
                opacity: 0.6
            },
            z: 100
        });
        
        line.animate('shape')
            .when(300, {
                y1: pt1[1]
            })
            .when(500, {
                y1: pt1[1] * 0.7 + 0.3 * pt2[1],
                y2: pt2[1]
            })
            .when(1000, {
                y1: pt1[1],
                y2: pt1[1]
            })
            .done(function () {
                zr.remove(line);
            })
            .start(function (t) {
                var y = Math.sin(t * Math.PI) * 0.5;
                if (t >= 0.5) {
                    y = 1 - y;
                }
                return y;
            });
            
        var circle = new echarts.graphic.Circle({
            shape: {
                cx: pt2[0],
                cy: pt2[1],
                r: 0
            },
            style: {
                fill: color
            },
            z: 100
        });
        var circle2 = new echarts.graphic.Circle({
            shape: {
                cx: pt1[0],
                cy: pt1[1],
                r: symbolSize
            },
            style: {
                fill: color,
                opacity: 0.4
            }
        });
        circle2.animateTo({
            shape: {
                r: symbolSize * 1.5
            },
            style: {
                opacity: 0
            }
        }, 400, function () {
            zr.remove(circle2);
        })
        
        circle.animate('shape')
            .when(250, {
                r: 6
            })
            .when(500, {
                r: 0
            })
            .delay(500)
            .done(function () {
                zr.remove(circle);
            })
            .start(function (t) {
                var y = Math.sin(t * Math.PI) * 0.5;
                if (t >= 0.5) {
                    y = 1 - y;
                }
                return y;
            });
            
        
        zr.add(circle);
        zr.add(circle2);
        zr.add(line);
    });
});