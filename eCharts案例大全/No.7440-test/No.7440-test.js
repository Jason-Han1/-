// Schema:
// date
var data1 = [
    [5,5,5,5,5,1,],
   
];

var data3 = [
    [5,4,3,2,1,1],
    
];

var data2 = [
    [1,2,3,4,5,1],
   
];

var data4 = [
    [1,2,3,4,5,1],
   
];


var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

option = {
    backgroundColor: '#161637',
    title: {
        text: '演讲评价',
        left: 'center',
        textStyle: {
            color: '#eee'
        }
    },
     tooltip: {
          trigger : 'item'
     },
    legend: {
        bottom: 5,
        data: ['演讲者1', '演讲者2', '演讲者3', '演讲者4'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
            
        },
        selectedMode: 'single'
    },
    // visualMap: {
    //     show: true,
    //     min: 0,
    //     max: 20,
    //     dimension: 5,
    //     inRange: {
    //         colorLightness: [0.5, 0.8]
    //     }
    // },
    radar: {
        indicator: [
            {name: 'A', max: 5},
            {name: 'B', max: 5},
            {name: 'C', max: 5},
            {name: 'D', max: 5},
            {name: 'E', max: 5},
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '演讲者1',
            type: 'radar',
            lineStyle: lineStyle,
            tooltip: {
                formatter: function (param) {
                    param = param[0];
                    return [
                        'AAAAAAAA   <hr size=1 style="margin: 3px 0">',
                        'BBBBBBBB'+ '<br/>',
                        'CCCCCCCC'+ '<br/>',
                        'DDDDDDDD',
                    ].join('');
                }
            },
            data: data1,
            symbol: 'none',
            itemStyle: {
                color: '#F9713C'
            },
            areaStyle: {
                opacity: 0.1
            }
        },
        {
            name: '演讲者2',
            type: 'radar',
            lineStyle: lineStyle,
            data: data2,
            symbol: 'none',
            itemStyle: {
                color: '#B3E4A1'
            },
            areaStyle: {
                opacity: 0.05
            }
        },
        {
            name: '演讲者3',
            type: 'radar',
            lineStyle: lineStyle,
            data: data3,
            symbol: 'none',
            itemStyle: {
                color: 'rgb(238, 197, 102)'
            },
            areaStyle: {
                opacity: 0.05
            }
},
{
            name: '演讲者4',
            type: 'radar',
            lineStyle: lineStyle,
            data: data4,
            symbol: 'none',
            itemStyle: {
                color: 'rgb(238, 197, 102)'
            },
            areaStyle: {
                opacity: 0.05
            }

        }
    ]
};
