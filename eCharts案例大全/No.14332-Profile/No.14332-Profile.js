

var baseTop = 70;
var gridHeight = 60;

var data = {
    cpu: [],
    memory: [],
    
    xMin: 0,
    xMax: 8
};

    data.cpu=[12,34,46,7,678,9,0,10];
     data.aa1=[0,0,0,0,0,0,0,0];
    data.memory=[12,34,46,7,678,9,0,10];
   



function makeXAxis(gridIndex, opt) {
    var aa={
            
            snap: true,
            lineStyle: {
                color: '#004E52',
                opacity: 0.5,
                width: 2
            },
            label: {
                show: true,
                formatter: function (params) {
                    return  params.value;
                },
                backgroundColor: '#004E52'
            },
            
        };
    if(gridIndex==1){
        aa={
            value: 6,
            snap: true,
            lineStyle: {
                color: '#004E52',
                opacity: 0.5,
                width: 2
            },
            label: {
                show: true,
                formatter: function (params) {
                    return  params.value;
                },
                backgroundColor: '#004E52'
            },
            handle: {
                show: true,
                color: '#004E52'
            }
        };
    }
     if(gridIndex==2){
        aa={
            value: 2,
            snap: true,
            lineStyle: {
                color: '#004E52',
                opacity: 0.5,
                width: 2
            },
            label: {
                show: true,
                formatter: function (params) {
                    return  params.value;
                },
                backgroundColor: '#004E52'
            },
            handle: {
                show: true,
                color: '#004E52'
            }
        };
    }
    return echarts.util.merge({
       
        data:[1,2,3,4,5,6,7,8],
        gridIndex: gridIndex,
       axisPointer: aa,
        splitLine: {
            show: false
        }
    }, opt || {}, true);
}

function makeYAxis(gridIndex, opt) {
    return echarts.util.merge({
        type: 'value',
        gridIndex: gridIndex,
        nameLocation: 'middle',
        nameTextStyle: {
            color: '#333'
        },
        boundaryGap: ['30%', '30%'],
        axisTick: {show: false},
        axisLine: {lineStyle: {color: '#ccc'}},
        axisLabel: {show: false},
        splitLine: {show: false}
    }, opt || {}, true);
}

function makeGrid(top, opt) {
    return echarts.util.merge({
        top: top,
        height: gridHeight
    }, opt || {}, true);
}

option = {
    tooltip: {
        triggerOn: 'none',
        
        borderColor: 'rgba(0, 0, 200, 0.2)',
        borderWidth: 1,
        borderRadius: 0,
        padding: 10,
        
    },
    title: {
        text: 'Profile',
        left: 'center'
    },
   
    grid: [
        makeGrid(baseTop),
        makeGrid(baseTop + gridHeight),
        makeGrid(baseTop + gridHeight)
    ],
    xAxis: [
        makeXAxis(0),
        makeXAxis(1),
        makeXAxis(2)
    ],
    yAxis: [
        makeYAxis(0, {
            name: 'cpu'
        }),
        makeYAxis(1, {
            name: 'memory'
        }),
        makeYAxis(2, {
            name: 'memory'
        })
    ],
   
    series: [{
        name: 'cpu',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
        itemStyle: {
            normal: {
                color: '#5193f2'
            }
        },
        data: data.cpu
    }, {
        name: 'memory',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#75b228'
            }
        },
        data: data.memory
    },
    , {
        name: 'memory',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
        xAxisIndex: 2,
        yAxisIndex: 2,
        itemStyle: {
            normal: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: data.aa1
    }]
};
