var data = [70, 34, 60, 70, 34, 60, 78, 69, 78, 69];
var sum = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
var titlename = ['总部', '绵阳知商谷', '重庆分公司', '广州子公司', '佛山分公司', '江门分公司', '金华分公司', '青岛分公司', '海口分公司', '重庆分公司'];
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#E176B5', '#9FBB5A', '#BDAAE1', '#64B8F0', '#8B78F6', '#F8B448', '#13AAAC'];
option = {
    //图标位置
    grid: {
        top: '0',
        right: '100',
        bottom: '0',
        left: '110',
        containLabel: true
    },
    // x 轴不显示
    xAxis: {
        show: false
    },
    // y 轴
    yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '0',
            axisLabel: {
                color: '#333',
                formatter: (value, index) => {
                    return [
                        '{title|' + value + '} '
                    ]
                },
                rich: {
                    title: {
                        color: '#333',
                    }
                }
            },
            data: titlename,
            inverse: true,
        },
        {
            axisTick: 'none',
            axisLine: 'none',
            data: [],
            inverse: true,
        }
    ],
    series: [{
            name: '总次数',
            type: 'bar',
            yAxisIndex: 0,
            data: sum,
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    formatter: (value, index) => {
                        return [
                            '{title|' + value.value + '%' + '} '
                        ]
                    },
                    rich: {

                        title: {
                            color: '#333',
                            align: 'right',
                        }
                    },
                    position: 'right',
                    textStyle: {
                        color: '#333',
                        fontSize: '16',
                    }
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 0.3
                }
            }
        },
        {
            name: '次数占比',
            type: 'bar',
            yAxisIndex: 1,
            data: data,
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#333',
                        fontSize: '16',
                    }
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            }
        },
    ]
};