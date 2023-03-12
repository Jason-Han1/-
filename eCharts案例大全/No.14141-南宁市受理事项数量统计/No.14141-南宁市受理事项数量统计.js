
option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '南宁市受理事项数量统计',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['受理数', '办结数']
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
        data: ['南宁市局', '武鸣区局', '横县局', '宾阳县局', '上林县局', '上林县局'
        , '隆安县局', 
        '兴宁区分局', '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局',
        '良庆区分局'
        ,'广西-东盟经济技术开发区行政审批局','广西-东盟经济技术开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']
    }],
    xAxis: [{
        type: 'value',
        interval: 300,
        max:1200
    }],
    series: [{
            name: '受理数',
            
            type: 'bar',
            data: [692, 517, 761, 799, 36, 500, 6, 465, 311,874,982,762,625,761,661,614],
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
            name: '办结数',
            type: 'bar',
            data: [478, 526, 541,541, 44, 459, 0, 518, 651,0,411,321,611,700,651,653,765],
            markPoint: {
                data: [
                    //{name : '最高', value : 182.2, xAxis: 7, yAxis: 183},
                    //{name : '最低', value : 2.3, xAxis: 11, yAxis: 3}
                    {
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }
    ]
};