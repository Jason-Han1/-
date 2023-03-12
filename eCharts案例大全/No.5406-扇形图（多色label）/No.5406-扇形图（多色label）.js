//职称结构取数
var getsjjg = ['小说', '教材', '期刊', '其他'];
var getsjjgrs = [300, 200, 100, 50];
var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}
var colorList = ['#503EFF', '#3E82FF', '#8BF39A', '#00FCFD'];
var rich = {
    name: {
        color: "#FFF",
        fontSize: 14,
        padding: [10, 15, 0, 10],
        fontWeight: '400',
        align: 'left'
    },
    value: {
        color: "#FFF",
        fontSize: 15,
        padding: [10, 10, 0, 15],
        fontWeight: '500',
        align: 'right'
    },
    percent: {
        color: "#FFF",
        align: 'right',
        fontSize: 15,
        fontWeight: '500',
        //padding: [0, 5]
    },
    hr: {
        width: '100%',
        height: 0,
    },
    cir: {
        fontSize: 26,
    }
}
//职称结构图表

option = {
    backgroundColor: '#0A1934',
    tooltip: {
        trigger: 'axis',
    },
    series: [{
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + '：' + params.value + '册<br>占比：' + params.percent.toFixed(2) + '%'
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#0A1934',
                borderWidth: 3,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        radius: ['30%', '50%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                show: false,
                position: 'inner',
                formatter: params => {
                    return (
                        '{percent|' + params.percent.toFixed(0) + '%}'
                    );
                },
                rich: rich,
            }
        },
        data: syjgdata
    }, {
        itemStyle: {
            normal: {
                borderColor: '#0A1934',
                borderWidth: 5,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['30%', '50%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                length: 30,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },
        label: {
            normal: {

                formatter: params => {
                    return '{name|' + params.name + '}\n{hr|————————}\n{value|' + params.value + '}{percent|' + params.percent.toFixed(0) + '%}';
                },
                rich: {
                    name: {
                        fontSize: 13,
                        padding: [0, 10, 0, 0],
                        color: '#C3F0FF'
                    },
                    value: {
                        fontSize: 13,
                        padding: [0, 10, 0, 20],
                        color: '#00BAFF'
                    },
                    percent: {
                        fontSize: 13,
                        padding: [0, 40, 0, 0],
                        color: '#00BAFF'
                    },
                },
                padding: [-10, 25, -10, 25]
            }
        },
        data: syjgdata,
        z: -1
    }, {
        itemStyle: {
            normal: {
                borderColor: '#0A1934',
                borderWidth: 5,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['30%', '50%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                length: 30,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return '\n{cir|●}\n';
                },
                rich: rich,
            }
        },
        data: syjgdata,
        z: -1
    }]
};