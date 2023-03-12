options = [{
    backgroundColor:'#ffffff',
    title: {
        text: '被检查主体信息统计'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['检查主体数','违法违规数','整改数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        type: 'value',
        name: '主体数',
        min: 0,
        max: 3000,
        type: 'value'
    },
    series: [
         {
            name:'违法违规数',
            type:'line',
            
            stack: '总量',
            data:[200, 210, 220, 210, 230, 290, 310, 340, 340, 320, 300, 280, 250, 210],
            markPoint : {
                color:'red',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'整改数',
            type:'line',
            stack: '总量',
            data:[190, 210, 210, 207, 230, 275, 305, 336, 330, 310, 300, 278, 250, 210],
            markPoint : {
                color:'green',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'检查主体数',
            type:'line',
            stack: '总量',
            data:[1422, 1522, 1622, 1422, 1522, 1122, 1422, 1322, 1422, 1352, 1022, 922, 822, 1222],
            markPoint : {
                color:'blue',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
},{
    backgroundColor:'#ffffff',
    title: {
        text: '案件受理情况分析'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['移送司法机关数量','立案数量','处罚数量','受理数量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        type: 'value',
        name: '案件数',
        min: 0,
        type: 'value'
    },
    series: [
         {
            name:'移送司法机关数量',
            type:'line',
            data:[200, 210, 220, 210, 230, 290, 310, 340, 340, 320, 300, 280, 250, 210],
            markPoint : {
                color:'red',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'立案数量',
            type:'line',
            data:[1422, 1522, 1680, 1452, 1522, 1122, 1422, 1322, 1422, 1352, 1022, 922, 822, 1222],
            markPoint : {
                color:'green',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'处罚数量',
            type:'line',
            data:[1322, 1422, 1522, 1402, 1402, 1022, 1322, 1222, 1122, 1252, 1122, 922, 822, 1122],
            markPoint : {
                color:'blue',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'受理数量',
            type:'line',
            itemStyle:{normal:{color:'#6930BE'}},
            data:[1422, 1522, 1622, 1422, 1522, 1122, 1422, 1322, 1422, 1352, 1022, 922, 822, 1222],
            markPoint : {
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
},
option = {
     title : {
        text: '案件受理情况分析',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['受理数量','同比','环比']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '受理数量',
            min: 0,
            max: 450,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '同比/环比（%）',
            min: 0,
            max: 200,
            interval: 10,
            position: 'right',
            axisLabel: {
                formatter: '{value}',
            }
        }
    ],
    series: [
        {
            name:'受理数量',
            type:'bar',
            itemStyle:{normal:{color:'#386AB7'}},
            data:[200, 210, 220, 210, 230, 290, 310, 340,320, 300,  250, 210],
        },
        {
            name:'同比',
            type:'line',
            yAxisIndex: 1,
            itemStyle:{normal:{color:'#99cccc'}},
            data:[100, 140, 100, 130, 150, 70, 76, 90, 78, 80, 90, 100]
        },
        {
            name:'环比',
            type:'line',
            yAxisIndex: 1,
            itemStyle:{normal:{color:'#ff9933'}},
            data:[97, 110, 110, 70, 121, 132, 109, 110, 87, 88, 75, 74]
        }
    ]
}
];
