var data = [];
for (var i = 0; i < 20; i++) {
    data.push(
        [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 40)
        ]
    );
}
option = {
    color: ['#2988b8','red'],
    backgroundColor: '#ffffff',
    xAxis:{
        axisLabel: {
            margin:15,
            textStyle: {
                color: '#3e4956'
            }  
        },
        axisTick: {
            alignWithLabel:true,
            length:10,
            lineStyle: {
                color: '#eaeef1'
            }  
            
        },
        axisLine: {
            lineStyle: {
                color: '#eaeef1'
            }  
        },
        splitLine: {
            lineStyle: {
                color: '#eaeef1',
            }
        }
    },
    yAxis: {
        axisTick: {show:false},
        splitLine: {show:false},
        axisLabel: {show:false},
        axisLine: {show:false},
    },
    visualMap: {
        show: false,
        max: 100,
        inRange: {
            symbolSize: [10, 50]
        }
    },
    series: 
    {
        type: 'scatter',
        data: data
    },
    animationDelay: function (idx) {
        return idx * 50;
    },
    animationEasing: 'elasticOut'
};

    var zr = myChart.getZr();
    myChart.on('click', function (param) {
        var seriesModel = myChart.getModel().getSeriesByIndex(param.seriesIndex);
        var data = seriesModel.getData();
        var coordSys = seriesModel.coordinateSystem;
        var color = data.getItemVisual(param.dataIndex, 'color');
        var symbolSize = data.getItemVisual(param.dataIndex, 'symbolSize');
        var pt1 = coordSys.dataToPoint(param.value);
     
        var circle2 = new echarts.graphic.Circle({
            shape: {
                cx: pt1[0], //图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。
                cy: pt1[1],//图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
                r: symbolSize//外半径。
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
            // zr.remove(circle2);
        })
        zr.add(circle2);
    });
