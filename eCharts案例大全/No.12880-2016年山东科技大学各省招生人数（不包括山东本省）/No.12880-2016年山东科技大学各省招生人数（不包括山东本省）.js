app.title = '气泡图';

var data = [
    [[16,14,300000000,'天津',"北方"],[5,2,70000000,'北京',"北方"],[81,9,900000000,'山西',"北方"],[28,12,400000000,'内蒙古',"北方"],[25,15,400000000,'辽宁',"北方"],[28,12,400000000,'吉林',"北方"],[56,4,600000000,'黑龙江',"北方"],[18,8,260000000,'新疆',"北方"],[44,0,440000000,'甘肃 ',"北方"],[24,6,300000000,'青海 ',"北方"],[70,25,950000000,'河南 ',"北方"],[86,14,1000000000,'陕西 ',"北方"],[156,14,1700000000,'宁夏 ',"北方"],[123,17,1400000000,'河北',"北方"]],
    [[74,16,900000000,'四川',"南方"],[32,8,400000000,'重庆',"南方"],[31,9,400000000,'海南',"南方"],[82,18,1000000000,'广西',"南方"],[6,4,100000000,'广东',"南方"],[40,0,400000000,'湖南',"南方"],[44,8,520000000,'湖北',"南方"],[118,22,1400000000,'贵州',"南方"],[60,0,600000000,'云南',"南方"],[33,17,500000000,'浙江',"南方"],[45,5,500000000,'江苏',"南方"],[61,10,710000000,'福建',"南方"],[75,21,960000000,'安徽',"南方"],[0,0,0000000,'西藏',"南方"],[61,14,750000000,'江西',"南方"],[6,4,100000000,'上海',"南方"]]
];


option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: '2016年山东科技大学各省招生人数（不包括山东本省）'
    },
    legend: {
        right: 10,
        data: ['北方', '南方']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '北方',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '南方',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};