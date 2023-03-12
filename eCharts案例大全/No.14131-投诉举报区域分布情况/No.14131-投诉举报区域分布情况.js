
option = {
    backgroundColor: '#FFFFFF',
    title: {
            text: '投诉举报区域分布情况',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['受理数量','不受理数量']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    yAxis: [{
        type: 'category',
        data: ['区局', '南宁市行政审批局', '南宁市局', '柳州市局', '柳州市行政审批局', '桂林市局', '梧州市局', 
        '梧州市行政审批局', '北海市局', '北海市行政审批局', '防城港市局', '钦州市局','钦州市行政审批局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局']
    }],
    xAxis: [{
        type: 'value',
        interval: 500,
        name:'主体数'
    }],
    series: [{
            name: '受理数量',
            stack: '餐饮',
            type: 'bar',
            data: [692, 517, 2236, 1370, 22, 1542, 799, 36, 500, 6, 465, 786,0,874,982,1282,625,1109,661,614],
            markPoint: { //最大值和最小值
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: { //平均值
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        },
        {
            name: '不受理数量',
            itemStyle:{normal:{color:'#6699ff'}},
            stack: '餐饮',
            type: 'bar',
            data: [692, 517, 2236, 1370, 22, 1542, 799, 36, 500, 6, 465, 786,0,874,982,1282,625,1109,661,614],
            markPoint: { //最大值和最小值
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: { //平均值
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }
    ]
};