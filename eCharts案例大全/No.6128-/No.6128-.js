var getinnername = ['非国有', '国有'];
var getinnervalue = [3759, 1741];
var getoutername = ['私企', '外企', '非国有事业单位', '国有企业', '国有事业单位', '公务员'];
var getoutervalue = [2354, 1064, 341, 1106, 532, 103];

var innervalue = [];
for (var i = 0; i < getinnername.length; i++) {
    innervalue.push({
        name: getinnername[i],
        value: getinnervalue[i]
    })
}
var outervalue = [];
for (var i = 0; i < getoutername.length; i++) {
    outervalue.push({
        name: getoutername[i],
        value: getoutervalue[i]
    })
}
let echartData = {
    inner: innervalue,
    outer: outervalue
};
var colorList = [{
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#81BEFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#3295FF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#48D69E' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#70F3C2' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FEAE5C' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FECC84' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#A1AEFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#9686F3' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FECAFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#D47FE6' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#7EEAE6' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#1ABBB5' // 100% 处的颜色
                }],
            }];
option = {
    series: [{
            color: [{
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#81BDFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#3294FF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#70F3C2' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#48D69E' // 100% 处的颜色
                }],
            }],
            type: 'pie',
            radius: [0, '40%'],
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                }
            },
            label: {
                normal: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: params => {
                        return (
                            '{name|' + params.name + '}'
                        );
                    },
                    padding: [0, -130, 25, -130],
                    rich: {
                        color: '#fff',
                        name: {
                            fontSize: 14,
                            padding: [0, 0, 3, 0],
                            color: '#fff'
                        },
                        percent: {
                            fontSize: 14,
                            color: '#fff',
                            padding: [0, 0, 17, 0],
                        },
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: echartData.inner
        },
        {
            type: 'pie',
            color: colorList,
            radius: ['45%', '60%'],
            data: echartData.outer,
            labelLine: {
                normal: {
                    length:20,
                    length2: 0,
                    lineStyle: {
                        color: '#C8C8C8'
                    }
                }
            },
            label: {
                normal: {
                    formatter: params => {
                        return '{name|' + params.name + '}\n{hr|}\n{percent|' + params.value + '人}  {percent|' + params.percent + '%} '
                    },
                    distanceToLabelLine: 0,
                    padding: [-2, 0, 0, 0],
                    rich: {
                        name: {
                            color: "#656565",
                            fontSize: 13,
                            padding: [6, 10],
                            align: 'left'
                        },
                        percent: {
                            color: "#656565",
                            align: 'center',
                            fontSize: 13,
                            padding: [5, 10]
                        },
                        hr: {
                            borderColor: '#C8C8C8',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0,
                        }
                    }
                }
            },
        }
    ]
};
