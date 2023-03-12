var getname = ['非常满意', '满意', '一般满意', '不满意', '非常不满意']
var getvalue = [75, 10, 10, 3, 12];
var getvaluemax = [];
for (let i = 0; i < getvalue.length; i++) {
    getvaluemax.push(100)
}

var sumvalue = 0;
for (var i = 0; i < getvalue.length; i++) {
    sumvalue += getvalue[i];
}

var getvaluebl = [];
for (let i = 0; i < getvalue.length; i++) {
    getvaluebl[i]=getvalue[i]*100/sumvalue
}

var getvaluewz = [];
for (let i = 0; i < getvalue.length; i++) {
    getvaluewz.push({
        value: getvalue[i],
        textStyle: {
            rich: {
                a: {
                    color: '#fff',
                    fontSize: 15,
                    width: 45,
                    height: 30,
                    lineHeight:30,
                    align: 'right',

                },
                b: {
                    color: '#34D2FF',
                    fontSize: 15,
                    width: 80,
                    height: 30,
                    lineHeight:28,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: 'rgba(52,210,255, 0.15)',
                    borderRadius: 15,
                    borderColor: '#34D2FF',
                    borderWidth: 1,

                },
            }
        }
    })
}

option = {
    backgroundColor: '#121E32',
    grid: {
        left: '120',
        right: '150',
        bottom: '20',
        top: '20',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].value.toFixed(2) + '%的毕业生对就业服务工作' + params[0].name
        }
    },
    xAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            margin: 15,
            textStyle: {
                color: '#FFF',
                fontSize: '15'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getname
    }, {
        type: "category",
        name: "",
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            formatter: function(value) {

                return '{a|' + value + '  }' + '{b|' + (value * 100 / sumvalue).toFixed(2) + '%}'




            }
        },
        inverse: true,
        data: getvaluewz
    }],
    series: [{
        name: '柱顶部',
        type: 'pictorialBar',
        symbolSize: [8, 8],
        symbolOffset: [0, 0],
        z: 10,
        itemStyle: {
            normal: {
                color: 'RGBA(255,255,255,.4)',
                shadowColor: '#004687',
                shadowBlur: 15
            }
        },
        label: {
            show: false,
        },
        symbolPosition: 'end',
        data: getvaluebl,
    }, {
        name: '值',
        type: 'bar',
        barGap: "-100%",
        itemStyle: {
            normal: {
                barBorderRadius: 6,
                color: 'RGBA(255,255,255,.18)'
            },
        },
        label: {
            normal: {
                show: false,

            }
        },
        barWidth: 10,
        data: getvaluemax,
    }, {
        name: '值',
        type: 'bar',
        itemStyle: {
            normal: {
                barBorderRadius: 6,
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#22CFF5' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#065ADA' // 100% 处的颜色
                    }],
                }
            },
        },

        barWidth: 10,
        data: getvaluebl
    }]
};