option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '食品生产监管情况',
        subtext: '事项办理类型发展趋势'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['办理事项数'],
        left:'27%'
    },
    grid: {
        left: '1%',
        right: '60%',
        bottom: '40%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        position:'top',
        splitLine: {show: false},
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['南宁市局', '武鸣区局', '横县局', '宾阳县局', '上林县局', '上林县局'
        , '隆安县局','兴宁区分局', '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局',
        '良庆区分局','广西-东盟经济技术开发区行政审批局','广西-东盟经济技术开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']   },
    series: [
        {
            name: '办理事项数',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#27727B',
                           '#FE8463',
                        ];
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: [9263,13203,14203,18103,21203,23903,28203,31603,38203, 43489, 49034, 54970, 55744, 61230, 63489, 69034, 74970]
        }
    ]
};
