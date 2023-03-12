option = {
    "tooltip": {
        "trigger": "axis",
        "padding": 15,
        "textStyle": {
            "color": "#999a9d",
            "fontSize": 12
        },
        "axisPointer": { // 指示器，直线或阴影
            "type": "none"
        },
        // formatter(params) {
        //     // console.log(params)
        //     const result = [];
        //     const name = `<span style="color:#fff">${params[0].name}</span>`;
        //     result.push(name);
        //     const score = `知识点分值占比 : ${Math.round(params[0].value)}%`;
        //     result.push(score);
        //     const scorePerc = `知识点得分率占比 : ${Math.round(params[1].value)}%`;
        //     result.push(scorePerc);
        //     const titleNo = `包含该知识点的题目题号 ：${percKonwledgePoint[params[0].dataIndex].includedTopics}`;
        //     result.push(titleNo);
        //     return result.join('<br/>');
        // },
        "backgroundColor": "rgba(33,34,39,0.95)"
    },
    "calculable": true,
    "grid": {
        "top": 35,
        "left": 70,
        "height": 245,
        "width": 900
    },
    "xAxis": [{
        "type": "category",
        // "type": "value", // 用值类型，标线位置才能自由
        name: '分数段',
        "data": [
            "0-20",
            "20-40",
            "40-60",
            "60-80",
            "80-100",
            // 0,
            // 20,
            // 40,
            // 60,
            // 80,
            // 100
        ],
        "axisLabel": {
            "inside": false,
            "interval": 0,
            "lineHeight": 16,
            padding: [15, 0, 0, 0],
            "textStyle": {
                "color": "#999a9d"
            }
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#000"
            }
        },
        "axisTick": {
            "show": false
        }
    }],
    "yAxis": [{
        "type": "value",
        "max": 100,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#444652"
            }
        },
        "splitLine": {
            "show": false
        },
        "boundaryGap": false,
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "inside": false,
            "show": true,
            "interval": "auto",
            "formatter": "{value} %",
            "textStyle": {
                "color": "#999a9d"
            }
        }
    }],
    "series": [{ // 柱子背景
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderType: 'dashed',
                    borderColor: '#C4C4C4',
                }
            },
            barGap: '-98%', // 不同系列的柱间距离，-100% 重叠
            barCategoryGap: '20%',
            data: [100, 100, 100, 100, 100],
            barWidth: 90,
            markLine: {
                symbol: 'none',
                lineStyle: {
                    normal: {
                        type: 'solid',
                        color: 'blue',
                    }
                },
                label: {
                    //   position: 'end',
                    formatter: ''
                },
                data: [
                    [{
                            yAxis: 0,
                            xAxis: 2 // 取值 <= xAxis.data.length
                        },
                        {
                            yAxis: 100,
                            xAxis: 2
                        }
                    ]
                ]
            },
            markPoint: {
                symbol: 'path://M1208,708.674573 L1213.83995,703.807945 L1214,703.75 L1224,703.75 C1224.9665,703.75 1225.75,702.966498 1225.75,702 L1225.75,686 C1225.75,685.033502 1224.9665,684.25 1224,684.25 L1192,684.25 C1191.0335,684.25 1190.25,685.033502 1190.25,686 L1190.25,702 C1190.25,702.966498 1191.0335,703.75 1192,703.75 L1202,703.75 L1202.16005,703.807945 L1208,708.674573 Z',
                symbolSize: [36, 25],
                data: [{
                        name: '年最高',
                        value: 42.2,
                        xAxis: 2,
                        yAxis: 100
                    }
                ],
                label: {
                    color: '#233143',
                    offset: [0, -2]
                },
                symbolOffset: [0, -18],
                // symbol: 'none',
                itemStyle: {
                    color: '#ecebeb',
                    borderColor: '#969ba2',
                }
            }
        },
        {
            "name": "知识点分值占比",
            "type": "bar",
            "data": [
                20,
                11,
                13,
                3,
                50
            ],
            "barWidth": 86,
            // "barMaxWidth": 86,
            // "barMinWidth": 56,
            "itemStyle": {
                "normal": {
                    color: 'red'
                }
            }
        }
    ]
}