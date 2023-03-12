//------------------------------------引用请注明出处

var dataBeast = [660, 841, 521, 820, 578, 727, 598, 792, 701, 660, 729, 782, 660, 841, 541, 513, 792, 701, 660, 729, 782, 660, 841, 521, 820, 578, 727, 598,789,549,523,549,754];
var dataBeauty = [541, 513, 792, 701, 660, 729, 782, 660, 841, 521, 820, 578, 727, 598, 660, 841, 521, 820, 578, 727, 598, 792, 701, 660, 729, 513, 792, 701,789,549,523,549,754];
var xAxisData = ['奥伦达部落', '皇后镇休闲度假村', '顶秀美泉小镇', '印象山庄', '普拉托休闲小镇', '爱斐堡国际酒庄', '古北水镇', '青龙峡', '云蒙山', '雁栖湖', '黄花城', '云蒙山', '黑龙潭', '白河大峡谷', '奥伦达部落', '皇后镇休闲度假村', '顶秀美泉小镇', '印象山庄', '普拉托休闲小镇', '爱斐堡国际酒庄', '古北水镇', '青龙峡', '云蒙山', '雁栖湖', '黄花城', '云蒙山', '黑龙潭', '白河大峡谷','第一','第二','第三','第四','第五'];
var dataTotal = function() {
    var data = [];
    for (var i = 0; i < dataBeauty.length; i++) {
        data.push(dataBeauty[i] + dataBeast[i]);
    }

    return data;
}

console.log(dataTotal());

option = {
    color: ['#019aba', '#7a201f', '#11565d'],
    backgroundColor: '#000',
    title: {
        text: '北京各春游景点人数统计',
        textStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',

        },
        subtextStyle: {
            color: '#ddd',
        },
    },
    legend: {
        right: '20%',
        textStyle: {
            color: '#666',
            fontSize: 12,
        },
        data: ['帅哥', '美女', '总人数'],

        // 自定义legend图标
        // data: [
        //     {
        //         name: '帅哥',
        //         icon: 'image://url',
        //         textStyle: {
        //             color: 'red'
        //         }
        //     },
        //     {
        //         name: '美女',
        //         icon: 'image://url',
        //         textStyle: {
        //             color: 'red'
        //         }
        //     },
        //     {
        //         name: '总人数',
        //         icon: 'image://url',
        //         textStyle: {
        //             color: 'red'
        //         }
        //     },
        // ]
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#ddd',

            },

        },
    },

    toolbox: {
        right: 20,
        feature: {
            saveAsImage: {},
            restore: {},
            dataView: {},
            dataZoom: {},
            magicType: {
                type: ['line', 'bar']
            },
            // brush: {},
        }
    },

    grid: {
        left: 5,
        right: 20,
        top: 80,
        bottom: 50,
        containLabel: true,
    },
    xAxis: {
        show: true,

        axisLabel: {
            interval: 0,
            rotate: -20,
            margin: 30,
            textStyle: {
                color: '#ddd',
                align: 'center'

            },
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle: {
                color: '#ddd',

            },
        },
        data: xAxisData,
    },
    yAxis: [{
            type: 'value',
            name: '(人/次)',
            nameTextStyle: {
                color: '#ddd',
            },
            axisLabel: {
                textStyle: {
                    color: '#ddd',
                },
            },
            axisTick: {
                alignWithLabel: true,
                lineStyle: {
                    color: '#ddd',

                },
            },
            splitLine: {
                show: false,
            },
        },
        {
            type: 'value',
            name: '总人次',
            nameTextStyle: {
                color: '#ddd',
            },
            axisLabel: {
                textStyle: {
                    color: '#ddd',
                },
            },
            axisTick: {
                alignWithLabel: true,
                lineStyle: {
                    color: '#ddd',

                },
            },
            splitLine: {
                show: false,
            },
        },
    ],
    dataZoom: [{
            show: true,
            height: 20,
            bottom: 10,
            start: 10,
            end: 60,
            zoomLock: true,//固定滑动区间
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
                color: "#d3dee5",
            },
            textStyle: {
                color: "#fff"
            },
            borderColor: "#90979c",
        },
        {
            type: "inside"
        }
    ],
    series: [{
            type: 'bar',
            name: '帅哥',
            stack: '游客人数',
            data: dataBeast,
            label: {
                normal: {
                    show: true,
                    position: 'insideTop',
                    offset: [0, 20],
                    textStyle: {
                        color: '#000',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#fff',
                    },
                },
            },
        },
        {
            type: 'bar',
            name: '美女',
            stack: '游客人数',
            data: dataBeauty,
            label: {
                normal: {
                    show: true,
                    position: 'insideTop',
                    offset: [0, 20],
                    textStyle: {
                        color: '#000',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#fff',
                    },
                },
            },
        },
        {
            type: 'line',
            name: '总人数',
            yAxisIndex: 1,
            stack: '游客人数',
            data: dataTotal(),
            label: {
                normal: {
                    show: true,
                    position: 'insideTop',
                    offset: [0, -30],
                    textStyle: {
                        color: '#666',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#fff',
                    },
                },
            },
            // symbol:'image://../imgs/point1.png',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    // "color": "#01B3D7",
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        position: "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            lineStyle: {
                normal: {
                    color: '#01B3D7',
                    width: 1,

                },
            },
        },
    ]
};