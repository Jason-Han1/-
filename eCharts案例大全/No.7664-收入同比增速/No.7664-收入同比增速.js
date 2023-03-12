//财务格式数据
function formatNum(strNum) {
    if (strNum.length <= 3) {
        return strNum;
    }
    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
        return strNum;
    }
    var a = RegExp.$1,
        b = RegExp.$2,
        c = RegExp.$3;
    var re = new RegExp();
    re.compile("(\\d)(\\d{3})(,|$)");
    while (re.test(b)) {
        b = b.replace(re, "$1,$2$3");
    }
    return a + "" + b + "" + c;
}
//数据
var planCharge = ["394637.59"];
var realCharge = ["999793.08"];
//根据数值判断前后显示
var seriesDemo1 = [{
        name: '今年累计',
        type: 'bar',
        barWidth: 25,
        z: 1,
        label: {
            normal: {
                show: true,
                position: 'insideBottomRight',
                // formatter: '{c}万元',
                formatter: function(p) {
                    return p.name + ":" + formatNum(p.value) + "万元";
                },
                color: '#fff',
                fontSize: 12,
            }
        },
        itemStyle: {
            normal: {
                show: false,
                color: '#4a90e2',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333',
            }
        },
        barGap: '0%',
        barCategoryGap: '50%',
        data: planCharge
    },
    {
        name: '去年同期',
        type: 'bar',
        barWidth: 25,
        yAxisIndex: 1,
        z: 0,
        label: {
            normal: {
                show: true,
                position: 'insideBottomRight',
                // formatter: '{c}万元',
                formatter: function(p) {
                    return p.name + ":" + formatNum(p.value) + "万元";
                },
                color: '#fff',
                fontSize: 12,
            }
        },
        itemStyle: {
            normal: {
                show: false,
                color: '#98a3ad',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333',
            }
        },
        barGap: '0%',
        barCategoryGap: '50%',
        data: realCharge
    }
];
var seriesDemo2 = [{
        name: '今年累计',
        type: 'bar',
        barWidth: 25,
        z: 0,
        label: {
            normal: {
                show: true,
                position: 'insideBottomRight',
                // formatter: '{c}万元',
                formatter: function(p) {
                    return p.name + ":" + formatNum(p.value) + "万元";
                },
                color: '#fff',
                fontSize: 12,
            }
        },
        itemStyle: {
            normal: {
                show: false,
                color: '#4a90e2',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333',
            }
        },
        barGap: '0%',
        barCategoryGap: '50%',
        data: planCharge
    },
    {
        name: '去年同期',
        type: 'bar',
        barWidth: 25,
        yAxisIndex: 1,
        z: 1,
        label: {
            normal: {
                show: true,
                position: 'insideBottomRight',
                // formatter: '{c}万元',
                formatter: function(p) {
                    return p.name + ":" + formatNum(p.value) + "万元";
                },
                color: '#fff',
                fontSize: 12,
            }
        },
        itemStyle: {
            normal: {
                show: false,
                color: '#98a3ad',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333',
            }
        },
        barGap: '0%',
        barCategoryGap: '50%',
        data: realCharge
    }
];
if (parseInt(planCharge[0]) > parseInt(realCharge[0])) {
    seriesDemo1 = seriesDemo2;
}

option = {
    title: {
        text: '收入同比增速',
        y: '30px',
        x: '20px',
        textStyle: {
            color: '#4c647c',
            fontSize: '15',

        }

    },
    backgroundColor: "",
    legend: {
        bottom: 20,
        selectedMode: true, //取消右上角点击事件
        textStyle: {
            color: '#4c647c',
        },
        data: ['今年累计', '去年同期'],
        x: '310',
        y: '30',
    },
    grid: {
        left: 'left',
        bottom: '10%',
        containLabel: false
    },
    tooltip: {
        show: "false",
        // formatter: '收入同比增速<br />{a0}: {c0}万元<br />{a1}: {c1}万元
        formatter: function(params) {
            var relVal = '收入同比增速';
            for (var i = 0, l = params.length; i < l; i++) {
                relVal += '<br/>' + params[i].seriesName + ' : ' + formatNum(params[i].value) + "万元";
            }
            return relVal;
        },
        trigger: 'axis',
        axisPointer: {
            type: '' //轴线为阴影类型
        }
    },
    xAxis: {
        type: 'value',
        show: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            data: ["今年累计"]
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
            data: ["去年同期"]
        },

    ],
    dataZoom: [{
        type: 'slider',
        show: false,
        yAxisIndex: [0, 1],
        width: 25,
        start: 1,
        end: 99
    }],
    series: seriesDemo1
};