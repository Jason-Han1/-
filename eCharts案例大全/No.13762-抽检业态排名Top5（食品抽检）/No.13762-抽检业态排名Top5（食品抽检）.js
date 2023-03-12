var colors = ['#2978aa', '#3470a3'];
option = {
    backgroundColor: '#fff',
    title: {
        text: '抽检批次排名Top5',
        textStyle: {
            fontSize: '15'
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        top: '20%',
        left: '10%',
        right: '40%',
        bottom: '45%'
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            interval: {
                default: 0
            },
            rotate: 50, //倾斜度

            formatter: function(params) {
                var newParamsName = ""; // 最终拼接成的字符串
                var paramsNameNumber = params.length; // 实际标签的个数
                var provideNumber = 4; // 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr = params.substring(0, 4);
                    newParamsName = tempStr + "..."; // 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }
        },
        "data": ['原辅料库', '生产线', '半成品库', '成品库（待检区）', '成品库（已检区）'],
    }],
    yAxis: [{
        type: 'value',
        name: '不合格批次数\n(批次)',
        min: 0,

        position: 'left',
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        },
        axisLabel: {
            formatter: '{value} '
        }
    }],
    series: [{
        name: '抽检批次数',
        type: 'bar',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#60c9ed'
                }, {
                    offset: 1,
                    color: '#a7d8e8'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        barWidth: '30%',
        data: ['45', '40', '35', '21', '5']
    }, ]
};