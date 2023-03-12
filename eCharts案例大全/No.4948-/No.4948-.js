var getname = ['用餐支出', '用水支出', '用电支出', '其他支出'];
var getvalue = [800, 585, 346, 250];
var data = [];
for (var i = 0; i < getname.length; i++) {
    data.push({
        name: getname[i],
        value: getvalue[i]
    })
}
var colorList = ['#1F6EFF', '#3E82FF', '#8BF39A', '#00FCFD'];
var rich = {
    name: {
        fontSize: 15,
        color: '#C3F0FF',
        padding: [-15, 20, 0, 20]
    },
    value: {
        fontSize: 15,
        color: '#00BAFF',
        padding: [0, 100, 0, 100]
    },
    percent: {
        fontSize: 15,
        color: '#00BAFF',
        padding: [-15, 100, 0, 100]
    },
    hr: {
        width: '100%',
        height: 0,
        padding: [22, 10, 10, 10]
    },
    cir: {
        fontSize: 26,
    }
}
//职称结构图表

option = {
    backgroundColor: '#102848',
    tooltip: {
        trigger: 'axis',
    },
    series: [{
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + '：' + params.value + '元<br>占比：' + params.percent.toFixed(2) + '%'
            }
        },
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
        data: data
    }, {
        itemStyle: {
            normal: {
                borderColor: '#102848',
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
                    return `{name|${params.name}}\n{value|${params.percent}%  ${params.value}元}\n{hr|———————————————}`;
                },
                rich: rich,

            }
        },
        data: data,
        z: -1
    }, {
        itemStyle: {
            normal: {
                borderColor: '#102848',
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
        data: data,
        z: -1
    }]
};