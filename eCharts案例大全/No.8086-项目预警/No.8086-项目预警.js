var scale = 1;
var colorList = ['#FFA059', '#1890FF', '#0F8C41', '#FF3703', "rgba(250,250,250,0.5)"];
var echartData = [{
    value: 15,
    name: '预算紧张'
}, {
    value: 34,
    name: '预算吻合'
}, {
    value: 54,
    name: '预算充足'
}, {
    value: 3,
    name: '预算不足'
}]
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 30 * scale,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#333",
        fontSize: 30 * scale,
        align: 'center'
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 14 * scale,
        padding: [21, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 16 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 2,
        height: 0,
    },
    nameStyle: {
        fontSize: 20 * scale,
        color: "#555",
        align: 'center'
    },
    rate: {
        fontSize: 20 * scale,
        color: "#034079",
        align: 'center'
    },
    percent: {
        fontSize: 20 * scale,
        color: "#1ab4b8",
        align: 'center'
    }
}
option = {
    //  backgroundColor: '#031f2d',
    title: {
        text: '总项目数',
        // left:'center',
        top: '53%',
        x: 'center',
        y: 'center',
        // padding:[24,0],
        textStyle: {
            color: '#666',
            fontSize: 16 * scale,
            align: 'center'
        }
    },
    grid: {
        bottom: 150,
        left: 0,
        right: '10%'
    },
    legend: {
        selectedMode: false,
        formatter: function(name) {
            var total = 0; //项目数总和
            var averagePercent; //综合占比
            echartData.forEach(function(value, index, array) {
                total += value.value;
            });
            return '{total|' + total + '}';
        },
        data: [echartData[0].name],
        // data: [''],
        // itemGap: 50,
        left: 'center',
        top: 'center',
        icon: 'none',
        align: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 16 * scale,
            rich: rich
        },
    },
    series: [

        //主要显示层
        {
            name: '项目总数',
            type: 'pie',
            radius: ['25%', '51%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            //  color: ['#0F8C41', '#1890FF', '#FFA059', '#FF3703', '#f1bb4c', "rgba(250,250,250,0.5)"],
            label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                normal: {
                    formatter: function(params, ticket, callback) {
                        var total = 0; //项目总数量
                        var percent = 0; //项目占比
                        echartData.forEach(function(value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{nameStyle|' + params.name + '}\n\n{hr|}\n\n{rate|项目数量：' + params.value + '}\n\n{percent|占百分比：' + percent + '%}';
                    },
                    rich: rich
                },
            },
            labelLine: {
                normal: {
                    length: 100 * scale,
                    length2: 50,
                    // lineStyle: {
                    //     color: '#0b5263'
                    // }
                }
            },
            data: echartData
        },
        // 边框的设置
        {
            radius: ['47%', '51%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'rgba(250,250,250,0.5)'
                }
            },
            data: [{
                value: 1,
            }],
        }
    ]
};