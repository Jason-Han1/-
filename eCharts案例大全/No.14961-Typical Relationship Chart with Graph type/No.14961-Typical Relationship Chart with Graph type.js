/**
 * 
 * 测试关系图 graph type
 * 
 */
var symbolSize = 20;
var coors1 = [
    [100, 220],
    [200, 182],
    [300, 191],
    [400, 234],
    [500, 290],
    [600, 330],
    [700, 310]
];

var coors2 = [
    [100, 420],
    [200, 382],
    [300, 391],
    [400, 434],
    [500, 490],
    [600, 530],
    [700, 510]
];

var coors3 = [
    [100, 620],
    [200, 582],
    [300, 591],
    [400, 634],
    [500, 690],
    [600, 730],
    [700, 710]
];


var data = [coors1, coors2, coors3];


var optionSeries = [];
var legendData = [];



for (var i = 0; i < data.length; i++) {
    var links = data[i].map(function(item, j) {
        return {
            source: j,
            target: j + 1
        };
    });

    links.pop();
    optionSeries.push({
        type: 'graph',
        layout: 'none', //布局
        coordinateSystem: 'cartesian2d',
        symbolSize: 20,
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        data: data[i],
        links: links,
        lineStyle: {
            normal: {
                color: '#2f4554'
            }
        },
        animationDelay: function(idx) {
            return idx * 200;
        }
    });


}


if (!app.inNode) {
    setTimeout(function() {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
            graphic: echarts.util.map(data, function(element, index) {
                console.log('1st layer!');
                return {
                    type: 'group',
                    id: 'group' + (index + 1),
                    children: echarts.util.map(element, function(item, dataIndex) {

                        var i = index;
                        return {
                            type: 'circle',
                            position: myChart.convertToPixel('grid', item),
                            shape: {
                                cx: 0,
                                cy: 0,
                                r: symbolSize / 2
                            },
                            invisible: true,
                            draggable: true,
                            ondrag: echarts.util.curry(onPointDragging, dataIndex, index),
                            onmousemove: echarts.util.curry(showTooltip, dataIndex),
                            onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                            z: 100
                        };
                    })
                };
            })

        });
    }, 0);

window.addEventListener('resize', function() {

    myChart.resize();
        
        myChart.setOption({
            graphic: echarts.util.map(data, function(element, index) {
                //console.log('1st layer!');
                return {
                    type: 'group',
                    id: 'group' + (index + 1),
                    children: echarts.util.map(element, function(item, dataIndex) {

                        var i = index;
                        return {
                            type: 'circle',
                            position: myChart.convertToPixel('grid', item),
                            shape: {
                                cx: 0,
                                cy: 0,
                                r: symbolSize / 2
                            },
                            invisible: true,
                            draggable: true,
                            ondrag: echarts.util.curry(onPointDragging, dataIndex, index),
                            onmousemove: echarts.util.curry(showTooltip, dataIndex),
                            onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                            z: 100
                        };
                    })
                };
            })

        });
        
});
}




function showTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'hideTip'
    });
}

function onPointDragging(dataIndex, i) {
    //console.log('Drag !' + i);
    data[i][dataIndex] = myChart.convertFromPixel('grid', this.position);

    // Update data
    myChart.setOption({
        series: optionSeries
    });
}


option = {
    title: {
        text: 'Typical Relationship Chart'
    },
    legend: {
        data: legendData,
        left: 0,
        top: 100
    },
    grid: {
        top: 100
    },
    xAxis: {
        min: 0,
        max: 1000
    },
    yAxis: {
        min: 0,
        max: 1000
    },
    tooltip: {
        formatter: function(obj) {

            return "a " + "-->" + " b";
        }
    },
    series: optionSeries
};