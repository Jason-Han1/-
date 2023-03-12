var data = [];
var startTime = new Date("2021-09-14 00:00:00").getTime();
var categories = ['设备与打印机', '设备与设备', '设备与平台','',''];
var types = [
    {name: '未开启', color: '#dddddd'},
    {name: "连接", color: '#1ab99b'}, 
    {name: '断开', color: '#f15751'},
   
];
data=[
    {
        name:'未开启',
        value:[2,startTime,startTime+1000*60*60,1000*60*60],
        itemStyle: {
                normal: {
                    color: types[0].color
                }
            }
    },
     {
        name:'连接',
        value:[2,startTime+1000*60*60,startTime+2000*60*60,1000*60*60],
        itemStyle: {
                normal: {
                    color: types[1].color
                }
            }
    },
     {
        name:'未开启',
        value:[2,startTime+2000*60*60,startTime+3000*60*60,1000*60*60],
        itemStyle: {
                normal: {
                    color: types[0].color
                }
            }
    },
    {
        name:'未开启',
        value:[1,startTime,startTime+1000*60*60,1000*60*60],
        itemStyle: {
                normal: {
                    color: types[0].color
                }
            }
    },
     {
        name:'连接',
        value:[1,startTime+1000*60*60,startTime+2000*60*60,1000*60*60],
        itemStyle: {
                normal: {
                    color: types[1].color
                }
            }
    },
    {
        name:'断开',
        value:[1,startTime+2000*60*60,startTime+3000*60*60,1000*60*60],
        itemStyle: {
                normal: {
                    color: types[2].color
                }
            }
    },
     {
        name:'连接',
        value:[0,startTime,startTime+1000*60*60,1000*60*60],
        itemStyle: {
                normal: {
                    color: types[1].color
                }
            }
    },
    {
        name:'断开',
        value:[0,startTime+1000*60*60,startTime+3000*60*60,2000*60*60],
        itemStyle: {
                normal: {
                    color: types[2].color
                }
            }
    }
    
    ]



function renderItem(params, api) {
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = 16
    console.log(categoryIndex)
    

    var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height
    }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
    });

    return rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: rectShape,
        style: api.style()
    };
}


option = {
    tooltip: {
        formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[3] + ' ms';
        }
    },
    title: {
        text: 'Profile',
        left: 'center'
    },
    dataZoom: [{
        type: 'slider',
        filterMode: 'weakFilter',
        showDataShadow: false,
        top: 400,
        labelFormatter: ''
    }, 
    {
        type: 'inside',
        filterMode: 'weakFilter'
    },

    ],
    grid: {
        height: 300
    },
   
    xAxis: {
        type:'time',
        min: startTime,
        axisLine:{
            show:true
        },
        axisTick:{
            show:true
        }
    },
    yAxis: {
        data: categories,
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            inside:true,
            verticalAlign:'bottom',
             lineHeight:50,
        }
    },
     // //散点图
    // singleAxis:[{
    //     type:'time',
    //     left: 150,
    //     top: (1 * 100 /10 + 5) + '%',
    //     height: (100 / 7 - 10) + '%',
    //     axisLabel: {
    //         interval: 2,
    //         show:false,
    //     },
    //     axisLine:{show:false},
    //     axisTick:{show:false}
    // }],
    series: [{
        type: 'custom',
        renderItem: renderItem,
        
        itemStyle: {
            opacity: 0.8
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: data
    },
    {
        
        // coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [[startTime+1000*60*60,3],[startTime+2000*60*60,3],[startTime+3000*60*60,3]],
        symbolSize: 15
    },
    {
        
        // coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [[startTime+1000*60*60,4],[startTime+2000*60*60,4],[startTime+3000*60*60,4]],
        symbolSize: 15
    }
    
    ]
};