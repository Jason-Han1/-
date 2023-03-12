const times = ['2016', '2017', '2018'];
const colors = ["#80CA35", "#518CD2", "#E05D7C", "#DB9154", "#808080"]; //污染颜色级别
const levels = [10, 20, 30, 40, 50]; //污染值级别
const pollutions = [
    [19, 24, 8, 41, 35, 25, 18],
    [41, 35, 25, 19, 24, 8, 18],
    [24, 8, 19, 41, 35, 25, 18]
]; //污染数据

const getColorStops = (pollution) => {
    let step = 1 / (pollution.length - 1);
    let res = [];
    Array(pollution.length).fill().reduce((prev, item, i) => {
        res.push({
            offset: prev,
            color: colors[getIndex(pollution[i])]
        });
        return step + prev;
    }, 0);
    return res;
};

const getIndex = (value) => {
    let index = 0;
    levels.some((item, i) => {
        if (value <= item) {
            index = i;
            return true;
        }
    });
    return index;
};

option = {
    baseOption: {
        containLabel: true,
        visualMap: { //颜色图例
            type: 'continuous',
            calculable: false,
            text: ['严重', '轻微'],
            orient: 'horizontal',
            min: 0,
            max: 50,
            splitNumber: 5,
            color: [...colors].reverse(),
            textStyle: {
                color: 'dodgerblue'
            },
            top:5,
            right:20
        },
        dataZoom: [ //滑块
            {
                type: "inside",
                show: true,
                height: 15,
                start: 0,
                end: 100,
            },
            {
                type: "slider",
                xAxisIndex: [0],
                start: 0,
                end: 100,
                bottom:'5%'
            },
        ],
        grid:{
            bottom:'11%'
        },
        timeline: {
            data: times,
            axisType: 'category',
            autoPlay: false,
            playInterval: 1500, //播放速度

            left: '5%',
            right: '5%',
            bottom: '0%',
            width: '90%',
            //  height: null,
            label: {
                normal: {
                    textStyle: {

                        color: 'red',
                    }
                },
                emphasis: {
                    textStyle: {
                        color: 'red'
                    }
                }
            },
            symbolSize: 10,
            lineStyle: {
                color: '#red'
            },
            checkpointStyle: {
                borderColor: '#red',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                normal: {
                    color: '#ff8800',
                    borderColor: '#ff8800'
                },
                emphasis: {
                    color: 'red',
                    borderColor: 'red'
                }
            },
        },
        title: {
            text: '河道水质结果过程线分析'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: ['20', '30', '40', '50', '60', '70', '80'],
            name: '里程'
        },
        yAxis: [{
                type: 'value',
                position: 'left',
                name: '水位'
            },
            {
                type: 'value',
                position: 'left',
                offset: 65,
                name: '高程'
            },
            {
                type: 'value',
                position: 'right',
                name: '浓度'
            }
        ],
        series: [{
                type: 'line',
                yAxisIndex: 0,
                areaStyle: {
                    normal: {
                        opacity: 0
                    }
                },
                stack: '总量',
                symbol: 'none',
                smooth: true,
                data: [220, 218, 209, 199, 195, 189, 180]
            },
            {
                type: 'line',
                yAxisIndex: 0,
                /*areaStyle: {
                    normal: {
                        color: {
                            type: 'linear', //设置线性渐变
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            // colorStops: [{
                            //     offset: 0,
                            //     color: 'rgba(0, 254, 157, 0.8)' // 0% 处的颜色
                            // }, {
                            //     offset: 0.25,
                            //     color: 'rgba(145, 127, 255, 0.8)' // 0% 处的颜色
                            // }, {
                            //     offset: 0.5,
                            //     color: 'rgba(51, 156, 255, 0.8)' // 0% 处的颜色
                            // }, {
                            //     offset: 1,
                            //     color: 'rgba(2, 221, 241, 0.8)' // 100% 处的颜色
                            // }],
                            colorStops: getColorStops(),
                            globalCoord: false // 缺省为 false
                        }
                    }
                },*/
                stack: '总量',
                symbol: 'none',
                smooth: true,
                data: [30, 40, 30, 50, 40, 60, 80]
            },
            {
                type: 'line',
                yAxisIndex: 2,
                // data: [182, 220, 290, 330, 310, 191, 234]
            }
        ]
    },
    options: []
};

option.options = pollutions.map((item, i) => {
    return {
        series: [{}, {
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear', //设置线性渐变
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: getColorStops(item),
                        globalCoord: false // 缺省为 false
                    }
                }
            },
        }, {
            data: item
        }]
    }
});
console.log(option.options)