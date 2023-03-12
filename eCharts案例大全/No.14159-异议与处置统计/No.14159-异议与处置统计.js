
options =[ {
    backgroundColor:'#FFFFFF',
    title: {
        text: '异议与处置统计',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['不合格', '异议','处置']
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
    xAxis: [{
        type: 'category',
        data: ['区局', '南宁市行政审批局', '南宁市局', '柳州市局', '柳州市行政审批局', '桂林市局', '梧州市局', 
        '梧州市行政审批局', '北海市局', '北海市行政审批局', '防城港市局', '钦州市局','钦州市行政审批局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '不合格',
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
            name: '异议',
            type: 'bar',
            data: [478, 526, 2438, 2014, 31, 1577,1751, 44, 459, 0, 518, 1363,0,1153,1247,1686,700,1490,653,765],
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
        },
        {
            name: '处置',
            type: 'bar',
            data: [123, 221,321, 1123, 12, 1233,981, 44, 459, 0, 518, 1363,0,1153,1247,1431,433,1231,221,122],
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
},
{
    backgroundColor:'#FFFFFF',
    title: {
        text: '柳州市局异议与处置统计',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['不合格', '异议','处置']
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
    xAxis: [{
        type: 'category',
        data: ['城中区', '鱼峰区', '柳北区', '柳南区', '柳江区','柳城县','鹿寨县','融安县','融水苗族自治县','三江侗族自治县']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '不合格',
            type: 'bar',
            data: [22, 799,  500, 6, 465, 786,0,874,661,614],
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
            name: '异议',
            type: 'bar',
            data: [15, 700,  478, 6, 365, 686,0,824,611,564],
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
        },
        {
            name: '处置',
            type: 'bar',
            data: [123, 221,321, 1123, 12, 1233,981, 44, 459, 0, 518, 1363,0,1153,1247,1431,433,1231,221,122],
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
}
];