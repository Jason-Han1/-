var bar = function(data_value, data_value1, data_time, version, Label, project_name) {
    option = {
        backgroundColor: ["#242341"],
        graphic: {
            type: 'group',
            left: '0',
            top: '0',
            children: [{
                    type: 'rect',
                    z: 100,
                    left: '-120',
                    top: 'middle',
                    shape: {
                        width: 1400,
                        height: 35
                    },
                    style: {
                        fill: '#383a5e',
                    }
                },
                {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#a5a6cc',
                        text: project_name + '统计',
                        fontFamily: 'Microsoft YaHei',
                        fontWeight: 'bolder',
                        fontSize: 16,
                    }
                }
            ]
        },
        title: [
            {
                id: 'version_text',
                text: version,
                right: -30,
                bottom: '1%',
                textStyle: {
                    fontSize: 8,
                    color: '#fff'
                }

            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: {
            top: '18%',
            left: '5%',
            right: '9%',
            bottom: '11%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#8d92ba'
                }
            },
            axisLabel: {
                color: '#8c89f3',
            },
            inverse: true,
            data: data_time,
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#8e93bb'
                }
            },
            axisLabel: {
                color: '#c7cdf1',
                fontSize: 16
            },
            splitLine: {
                lineStyle: {
                    color: '#48466b'
                }
            },
        }],
       
        series: [
            {
                name: name[0],
                type: 'bar',
                label: {
                    normal: {
                        color: '#db90ff',
                        show: true,
                        position: 'top',
                        formatter: '{c}次'
                    },
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.2,
                            color: '#db90ff'
                        }, {
                            offset: 1,
                            color: '#0c75cf'
                        }], false)
                    }
                },
                data: data_value1
            }
        ]
    }
    return option
}

var version = 'v1.0 \n数据来源：XXX系统'
var Remote_Label = ['次数']

var Remote_name = '浏览次数'
var Remote_value = [80, 77, 55, 84, 69, 73, 71, 66, 3]
var Remote_value1 = [375, 379, 193, 406, 385, 415, 309, 304, 3]
var Data_time = ['2019-04', '2019-03', '2019-02', '2019-01', '2018-12', '2018-11', '2018-10', '2018-09', '2018-08']

var tion = bar(Remote_value, Remote_value1, Data_time, version, Remote_Label, Remote_name)