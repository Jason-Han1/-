var data=[];
var barname=['负荷有功(KW)','负荷无功(kVar)'];
for(var i=0;i<2;i++){
    var val=[];
    for(var j=0;j<12;j++){
        val.push({name:'S'+j,value:getRandom(0,900)})
    }
    data.push({name:barname[i],data:val})
}

let yAxisData = new Set();
let legendData = [];
data.map((d) => {
    legendData.push(d.name);
    d.data.map((item) => {
        yAxisData.add(item.name);
    });
});

yAxisData = [...yAxisData];
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

option = {
    backgroundColor:'#00185a',
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        left: 'center',
        top: 12,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 15,
        borderRadius: 0,
        textStyle: {
            color: '#bfbfbe',
            fontSize: 12
        },
        data: legendData
    },
    grid: [{
        left: '6%',
        width: '36%',
        containLabel: true,
        bottom:20,
        top:40
    }, {
        left: '52%',
        width: '0%',
        top:60,
        bottom: 20
    }, {
        right: '6%',
        width: '36%',
        containLabel: true,
        bottom:20,
        top:40
    }],
    xAxis: [{
        type: 'value',
        max:function (value) {
            return value.max;
        },
        position:'top',
        inverse: true,
        axisLabel: {
            show: true,
            color: '#009afe',
            margin: 5
        },
        axisLine: {
            lineStyle: {
                color: '#464955'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#464955'
            }
        },
        splitLine: {
            show: false
        }

    }, {
        gridIndex: 1,
        show: true
    }, {
        max:function (value) {
            return value.max;
        },
        position:'top',
        gridIndex: 2,
        type: 'value',
        axisLabel: {
            show: true,
            color: '#009afe',
            margin: 5
        },
        axisLine: {
            lineStyle: {
                color: '#464955'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#464955'
            }
        },
        splitLine: {
            show: false
        }

    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        data: yAxisData,
        position: 'right',
        axisLabel: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#464955'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#464955'
            }
        },
    },
        {
            type: 'category',
            inverse: true,
            data: yAxisData,
            gridIndex: 1,
            position: 'center',
            axisLabel: {
                verticalAlign:'middle',

                align: 'center',
                fontSize: 12,
                color: `#bfbfbe`
            },
            axisLine: {
                show:false
            },
            axisTick: {
                show:false
            },
        },
        {
            type: 'category',
            inverse: true,
            data: yAxisData,
            gridIndex: 2,
            position: 'left',
            axisLabel: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#464955'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#464955'
                }
            },
        }
    ],
    series: [{
        name: data[0].name,
        type: 'bar',
        barWidth: '50%',
        itemStyle: {
            opacity:0.8,
            color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#5472d3' // 0% 处的颜色
                }, {
                    offset: 1, color: '#009afe' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
        },
        data:data[0].data
    },
        {
            name:data[1].name,
            xAxisIndex: 2,
            yAxisIndex: 2,
            type: 'bar',
            barWidth: '50%',
            itemStyle: {
                opacity:0.8,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#c50010' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#fc4250' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
            },
            data: data[1].data

        }
    ]
};