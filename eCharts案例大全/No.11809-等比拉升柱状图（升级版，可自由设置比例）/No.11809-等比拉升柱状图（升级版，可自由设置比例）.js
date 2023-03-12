var datas = [1500, 1, 12, 30, 4, 85, 6, 2, 11, 545];

var ax = 5; //真实y轴数据间隔
var ay = 10; //虚拟y轴数据比例


function setValue(datas) {
    var list = [];
    datas.forEach(function(data) {
        var x = 1,
            y = 1 / ay,
            newv = 0,
            z = 0;
        while (data > ax * x) {
            newv += ax;
            x *= ay;
            y *= ay;
            z += 1;
        }
        if (z > 0) {
            if (y > 1) {
                data -= (x / ay * ax);
            } else {
                data -= ax;
            }
            data = data / (x - y);
        }
        newv += data;
        list.push(newv);
    });
    return list;
}

function getValue(data) {
    var x = 1,
        y = 1 / ay,
        newv = 0,
        z = 0;
    while (data >= ax * (z + 1)) {
        newv += ((x - y) > 1 ? (x - y) : 1) * ax;
        y *= ay;
        x *= ay;
        z += 1;
    }
    if (z > 0) {
        if (y > 1) {
            data -= z * ax;
        } else {
            data -= ax;
        }
        data = data * (x - y);
    }
    newv += data;
    return Math.round(newv);

    //return data;
}

function getYaxis(value) {
    var x = ay,
        y = 1,
        newval = 0,
        z = 0;
    while (value >= ax) {
        if (z > 0) {
            newval += (x - y) * ax;
            x *= ay;
            y *= ay;
        } else {
            newval += ax;
        }
        value = value - ax;
        z += 1;
    }
    return newval;

}

option = {
    backgroundColor: '#000',
    color: ['#2ea5c3', '#e08f68'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },

        formatter: function(params) {
            var tiplabel = params[0].name + '<br/>' +
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[0].color.colorStops[0].color + '"></span>' +
                params[0].seriesName + ':' + getValue(params[0].value) + '<br/>' +
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[1].color.colorStops[0].color + '"></span>' +
                params[1].seriesName + ':' + getValue(params[1].value);
            return tiplabel;
        }
    },
    legend: {
        data: ['呼入量', '呼出量'],
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        //top:80,
        left: 10,
        bottom: 50,
        right: 50,
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: [
            'a1',
            'a2',
            'a3',
            'a4',
            'a5',
            'a6',
            'a7',
            'a8',
            'a9',
            'a10'
        ],
        axisLabel: {
            tooltip: {
                show: true,
            },
            inside: false,
            textStyle: {
                fontSize: 16
            },
            interval: 0,
            color: '#00ffea'
        },
    },
    yAxis: [{
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(36,101,199,.5)',
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12
            },
            formatter: function(value) {
                return getYaxis(value);
            },
            color: '#00ffea'
        },
        minInterval: ax,
        maxInterval: ax
    }],
    series: [{
            name: '呼入量',
            yAxisIndex: 0,
            //barMinHeight:5,
            barCategoryGap: '30%',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#fff',
                        fontSize: 14,
                        formatter: function(params) {
                            return getValue(params.value);
                        },
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1a9afe'
                    }, {
                        offset: 1,
                        color: '#71b5e8'
                    }]),
                    opacity: 1,
                    barBorderRadius: 20,
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: setValue(datas)
        },
        {
            name: '呼出量',
            yAxisIndex: 0,
            //barMinHeight:5,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#fff',
                        fontSize: 14
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#e12945'
                    }, {
                        offset: 1,
                        color: '#f7734e'
                    }]),
                    opacity: 1,
                    barBorderRadius: 20,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]
}