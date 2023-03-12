var barlist = [];
var lineList = []
var xList = [];
var lengendList = [];

let datalist = [{
        date: '2019-12-01',
        list: [{
                name: '进入',
                enterValue: '2200'
            },
            {
                name: '离开',
                leaveValue: '177'
            }
        ]
    },
    {
        date: '2019-12-02',
        list: [{
                name: '进入',
                enterValue: '2410'
            },
            {
                name: '离开',
                leaveValue: '216'
            }
        ]
    },
    {
        date: '2019-12-03',
        list: [{
                name: '进入',
                enterValue: '2321'
            },
            {
                name: '离开',
                leaveValue: '190'
            }
        ]
    },
    {
        date: '2019-12-04',
        list: [{
                name: '进入',
                enterValue: '2400'
            },
            {
                name: '离开',
                leaveValue: '180'
            }
        ]
    },
    {
        date: '2019-12-05',
        list: [{
                name: '进入',
                enterValue: '2500'
            },
            {
                name: '离开',
                leaveValue: '230'
            }
        ]
    },
    {
        date: '2019-12-06',
        list: [{
                name: '进入',
                enterValue: '2200'
            },
            {
                name: '离开',
                leaveValue: '200'
            }
        ]
    },
    {
        date: '2019-12-07',
        list: [{
                name: '进入',
                enterValue: '2310'
            },
            {
                name: '离开',
                leaveValue: '160'
            }
        ]
    }
];

datalist.forEach(function(item, index) {
   console.log(item);
    barlist.push(item.list[1].leaveValue);
    lineList.push(item.list[0].enterValue);
    xList.push(item.date);
    console.log(barlist);
});
lengendList.push(datalist[0].list[0].name);
lengendList.push(datalist[0].list[1].name);
console.log(barlist);


// option
option = {
    backgroundColor: '#fff',
   
     tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(5,185,185,0.3)',
        padding: [10, 20],
        axisPointer: {
            type: 'line',
            lineStyle :{
                type:'dashed',
                color:'#05B8B9'
            }
        }
    },
    legend: {
        data: lengendList,
        right:'5%',
        textStyle: {
            color: '#666'
        }
    },
    xAxis: {
        axisLabel :{
            color:'#666'
            
        },
        axisTick:{show:false},
        data: xList,
        axisLine: {
            show:false,
        }
    },
    yAxis: {
        name:'重量(kg)',
        nameTextStyle:{
            color:'#666'
        },
        
        splitLine: {
            show: true,
             lineStyle: {
                color: 'rgba(0,0,0,0.05)'
            }
        },
        axisTick:{show:false},
        axisLine: {
            show: false,
           
        },
        axisLabel :{
            color:'#666'
            
        }
    },
    series: [{
        name: lengendList[0],
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbolSize: 10,
        symbol:'circle',
        itemStyle: {
            normal: {
                color: '#2BFAFF',
                lineStyle: {
                    color: "rgba(255,255,255,0)",
                    width: 1
                },
                areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(7,44,90,0.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,212,199,0.9)'
                    }]),
                }
            }
        },
        data: lineList
    }, {
        name:  lengendList[1],
        type: 'bar',
        barWidth: 10,
        color: '#218FFE',
        data: barlist
    }]
};