var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(255,0,0,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};

var data = [{
    "value": 100,
    "name": "地市合格率"
}, {
    "value": 80,
    "name": "CDN服务器合格率"
}, {
    "value": 75,
    "name": "CDN节点合格率"
}, {
    "value": 80,
    "name": "CP合格率"
}, {
    "value": 85,
    "name": "域名合格率"
}];

var init_num = 5;
var new_data = [];
var data_name = [];
for (var m in data) {
    var arr = null;
    arr = {
        name: data[m]['name'],
        type: 'pie',
        clockWise: false,
        radius: [init_num, init_num = init_num + 18],
        center: ['70%', '85%'],
        itemStyle: dataStyle,
        textStyle: {
            fontFamily: "微软雅黑",
            fontSize: '12px',
            color: "#fff",
            fontWeight: 'normal',
        },
        data: [{
                value: data[m]['value'],
                name: data[m]['name'] + ' ' + data[m]['value'] + '%'
            },
            {
                value: 100 - data[m]['value'],
                name: 'invisible',
                itemStyle: placeHolderStyle,
                textStyle: {
                    fontFamily: "微软雅黑",
                    fontSize: '12px',
                    color: "#fff",
                    fontWeight: 'normal',
                }
            }
        ]
    }
    new_data.push(arr)
    data_name.unshift(data[m]['name'] + ' ' + data[m]['value'] + '%')
}

option = {
    backgroundColor: "#fff",
    title: {
        text: '',
        subtext: '',
        left: '50%',
        top: '50',
        textAlign: 'center',
        textStyle: {
            color: "#fff",
            fontWeight: 'normal',
            fontFamily: '宋体'
        }
    },
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        textStyle: {
            color: "#fff",
            fontWeight: 'normal',
            fontFamily: '宋体'
        }
    },
    legend: {
        orient: 'vertical',
        left: '5%',
        top: 520,
        itemGap: 18,
        data: data_name,
        textStyle: {
            fontFamily: "微软雅黑",
            fontSize: '12px',
            color: "#000000",
            fontWeight: 'normal',
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
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        textStyle: {
            fontFamily: "微软雅黑",
            fontSize: '12px',
            color: "#000",
            fontWeight: 'normal',
        }
    },
    series: new_data
};