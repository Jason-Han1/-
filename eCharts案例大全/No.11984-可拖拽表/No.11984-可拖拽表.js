/**
 *
 * 测试关系图 graph type
 *
 */
var symbolSize =10;
var coors1 = [
    [200, 200],
    [400, 200],
    [600, 200],
    [800, 200],
    [1000, 200],
   
];
 
var coors2 = [
   [200, 400],
    [400, 400],
    [600, 400],
    [800, 400],
    [1000, 400],
];
 
var coors3 = [
    [200, 600],
    [400, 600],
    [600, 600],
    [800, 600],
    [1000, 600],
];
  var color = ['#a6c84c', '#ffa022', '#46bee9', '#c23531', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', ];
 
var data = [coors1, coors2, coors3];
 
 
var optionSeries = [];
 
 
 
 
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
        symbolSize: 8,
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [0, 0],
        data: data[i],
        links: links,
        lineStyle: {
            normal: {
                color: color[i],
               // opacity: 1,
                width:1,
            // curveness: 0.1
            }
        },
        animationDelay: function(idx) {
            return idx * 200;
        }
    });
 
 
}
 
 
if (!myChart.inNode) {
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
     
      var tmpPos = myChart.convertFromPixel({ 'seriesIndex': 0 }, this.position);
    //console.log('Drag !' + i);
    data[i][dataIndex][1] = tmpPos[1];
 
    // Update data
    myChart.setOption({
        series: optionSeries
    });
     
    
}
 
 
option = {
    title: {
        text: ''
    },
    legend: {
                
           
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
    series: optionSeries,
    
};