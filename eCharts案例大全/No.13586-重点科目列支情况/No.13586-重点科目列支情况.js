var xData = ['业务招待费', '业务宣传费', '办公费', '会议费']; //x轴名称
var xeData = [5000, 3000, 1000, 500, ]; //限额数据
var zcData = [2000, 450, 100, 0, ]; //累计支出
var syData = [3000, 2550, 900, 500]; //剩余额度
var perxeData = []; //限额总数
var perzcData = []; //支出占用百分比
var persyData = []; //剩余占用百分比
for (var i = 0; i < xeData.length; i++) {
    perxeData[i] = 100; //限额总数
    perzcData[i] = zcData[i] / xeData[i] * 100; //累计支出÷科目限额
    persyData[i] = syData[i] / xeData[i] * 100; //剩余支出÷科目限额
}
//特别说明：series顺序不可随意调整
option = {
    title: {
        text: '重点科目列支情况',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },

        formatter: '{b}<br />{a0}: {c0}({c3}%)<br />{a2}: {c5}({c2}%)<br />{a1}: {c4}({c1}%)',
    },
    legend: {
        bottom: 0,
        selectedMode: false,
        data: ['科目限额', '累计支出', ]
    },
    yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: function(value, index) {
                    return value + '%'; //保留小数位数
                }
            }
        },
        {
            show: true,
            type: 'value',
        }
    ],
    xAxis: [{
            type: 'category',
            data: xData
        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },

            data: xData
        },
    ],
    series: [{
        name: '科目限额',
        type: 'bar',
        barGap: '-100%',
        xAxisIndex: 1,
        itemStyle: {
            normal: {
                color: 'rgba(128, 128, 128, 0.1)',
                borderWidth: 2,
                borderType: 'dotted',
                borderColor: 'rgba(128, 128, 128, 0.1)'

            }
        },
        data: perxeData
    }, {
        name: '科目限额',
        type: 'bar',
        yAxisIndex: 1,
        itemStyle: {
            label: {
                show: true,
                position: 'top',
                color: '#fff',
            },
            normal: {
                color: 'rgba(128, 128, 128, 0)',
                borderWidth: 2,
                borderType: 'dotted',
                borderColor: 'rgba(128, 128, 128, 0)'
            }
        },
        data: xeData,
    }, {
        name: '累计支出',
        type: 'bar',
        stack: '堆叠',
        silent: true,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'left',
                    formatter: function(p) {
                        return p.value + '%';
                    },
                    color: '#c23531'
                },
            }
        },
        barGap: '-100%',
        data: perzcData,
    }, {
        name: '累计支出',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'inside',
                    color: '#000'
                },
            }
        },
        data: zcData,
    }, {
        name: '剩余额度',
        type: 'bar',
        stack: '堆叠',
        silent: true,
        barGap: '-100%',
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'inside',
                    formatter: function(p) {
                        return p.value + '%';
                    },
                    color: '#000'
                },
                color: 'rgba(128, 128, 128, 0.1)',
                borderWidth: 2,
                borderType: 'dotted',
                borderColor: '#000'

            }
        },
        data: persyData,
    }, {
        name: '剩余额度',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'left',
                },
                color: 'rgba(128, 128, 128, 0)',
                borderWidth: 0,
                borderColor: '#000'

            }
        },
        data: syData,
    }, ]
}