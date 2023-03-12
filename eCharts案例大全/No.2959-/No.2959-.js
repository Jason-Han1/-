var data = [{
        name: '市内固废经营单',
        value: 25
    },
    {
        name: '生活垃圾填埋场',
        value: 25
    },
    {
        name: '危废豁免接受单位',
        value: 8
    },
    {
        name: '一般工业固废处',
        value: 30
    }
];
var total = data.reduce((prev, curr) => prev + curr.value, 0);
option = {
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "占比：" + Math.round(parms.percent) + "%";
            return str;
        }
    },
    color: ["#FFD632", "#68A2F8", "#2778FF", '#1ED6C1'],
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    polar: {},
    angleAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
        },
    },
    radiusAxis: {
        min: 40,
        max: 120,
        interval: 20,
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: "#5EA7FE",
                width: 2,
                type: "solid"
            }
        }
    },
    calculable: true,
    series: [{
        type: 'pie',
        radius: ["0%", "0%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#5EA7FE"
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ["90%", "95%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        name: "",
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#5EA7FE"
                }
            }
        }]
    }, {
        stack: 'a',
        type: 'pie',
        radius: ['40%', '70%'],
        roseType: 'area',
        zlevel: 10,
        label: {
            normal: {
                show: true,
                formatter: (params) => {
                    return params.value + '家 ' + (params.value / total * 100).toFixed(0) + '%' + '\n' + params.name;
                },
                textStyle: {
                    fontSize: 14,
                },
                position: 'outside'
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 20
            },
            emphasis: {
                show: false
            }
        },
        data: data
    }, ]
}