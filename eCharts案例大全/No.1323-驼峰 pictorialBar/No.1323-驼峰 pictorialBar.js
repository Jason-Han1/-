var xdata = ['10人+团', '自由行', '家庭团', '精致小团', '本地团'];
var data = [120, 60, 80, 23, 56, 77];
var maxArr = [100, 100, 100];
option = {
    backgroundColor: 'rgba(5,39,58,1)', //背景色
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        // borderRadius: 5,
        // borderColor: "#6baab2",
        // borderWidth: 1,
        formatter: function (params) {
            // params[0].data.nameCode
            let dot =
                '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:#02C4DD"></span>';
            return params[0].name + '<br>' + '杆塔数量 ：' + params[0].value;
        },
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '40%',
        top: '30%',
        containLabel: true,
    },
    xAxis: {
        data: xdata,
        triggerEvent: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            rotate: 0,
            interval: 0,
            textStyle: {
                padding: [14, 0, 0, 0],
                fontSize: 14,
                color: 'rgba(255,255,255,1)',
            },
        },
    },
    yAxis: {
        // name: "单位：个数",
        // triggerEvent: true,
        // nameTextStyle: {
        //     color: "rgba(255,255,255,1)",
        //     fontSize: 16,
        //     padding: [0,0,10,-20]
        // },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,.1)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,.1)',
            },
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: 'rgb(148,159,167)',
                fontSize: 16,
            },
        },
    },

    // color: ["#e54035"],
    series: [
        {
            name: '数量',
            // barMinHeight: 10,
            type: 'pictorialBar',
            barCategoryGap: '2%',
            labelLine: {
                show: true,
                 showAbove: true,
                lineStyle: {
                    type: 'dashed',
                    color:'#fff'
                },
            },

            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol:
                'path://M16.6587 31.1983C28.4114 17.0864 31.6843 0.582123 38.3821 0.0108708C45.0799 -0.560382 53.1128 21.5391 59.9953 29.3446C66.8778 37.1501 79 38.9999 79 38.9999H0C0 38.9999 10.0613 39.1201 16.6587 31.1983Z',
            itemStyle: {
                normal: {
                    //barBorderRadius: 5,
                    // color:'rgba(117, 171, 235, 1)'
                    //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(45, 153, 255, 1)',
                        },
                        // {
                        //     offset: 0.5,
                        //     color: "#02C4DD"
                        // },
                        {
                            offset: 1,

                            color: 'rgba(117, 171, 235, 1)',
                        },
                    ]),
                },
            },
            label: {
                show: true,
                position: 'top',
                distance: 30,
                offset:[-2, 0],
                textStyle: {
                    color: '#95F4D8',
                    fontSize: 14,
                },
            },
            data: data,
            z: 10,
        },
        // {
        //     name: "hill",
        //     type: "bar",
        //     barWidth: '20%',
        //     symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        //     itemStyle: {
        //         normal: {
        //             color: "rgba(11,47,68,.8)"
        //         }
        //     },
        //     data: maxArr,
        //     z: 9
        // }
    ],
};
