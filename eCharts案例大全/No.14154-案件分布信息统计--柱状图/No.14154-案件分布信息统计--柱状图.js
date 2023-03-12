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
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['受理案件数量','涉案金额']
    },
    xAxis: [
        {
            type: 'category',
            data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市','北海市','梧州市','桂林市','柳州市','南宁市']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '受理案件数量',
            min: 0,
            max: 450,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '涉案金额（万元）',
            min: 0,
            interval: 10,
            position: 'right',
            axisLabel: {
                formatter: '{value}',
            }
        }
    ],
    series: [
        {
            name:'受理案件数量',
            type:'bar',
            itemStyle:{normal:{color:'#386AB7'}},
            data:[200, 210, 220, 210, 230, 290, 310, 340,320, 300,  250, 210,250, 210],
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
        },
        {
            name:'涉案金额',
            type:'line',
            yAxisIndex: 1,
            itemStyle:{normal:{color:'#ff9933'}},
            data:[97, 110, 110, 70, 121, 132, 109, 110, 87, 88, 75, 74,75, 74],
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
};
