option = {
    backgroundColor: "#000",
    legend: {
        data: ["2019年", "2020年"],
        left: '72%',
        orient: 'horizontal',
        //x:'50%',      //可设定图例在左、右、居中
        y: 'left', //可设定图例在上、下、居中
        align: 'left',
        top: '10%',
        icon: "rect", //设置显示为矩形
        textStyle: { //图例文字的样式
            color: ['#00edff', '#5bffae'],
            fontSize: 14,
            fontWeight: 'normal',
            fontStretch: 'normal',
            lineHeight: 19,
            letterSpacing: 0,
            fontFamily: 'SourceHanSansCN-Regular'
        },
        itemWidth: 12, //设置图表的大小
        itemHeight: 5,
        itemGap: 20, //图例之间的距离
    },
    grid: {
        left: '12%',
        right: '8%',
        bottom: '12%',
        top: "16%",
        containLabel: true
    },
    xAxis: {
        type: 'value',
        name: '(个)',
        splitNumber: 5, //划分等分
        axisLabel: { //坐标轴刻度标签的相关设置。
            textShadowColor: '#2706dd',
            opacity: 0.8,
            verticalAlign: 'bottom',
            textStyle: {
                color: '#ffffff', //更改坐标轴文字颜色
                fontSize: 14,
                fontFamily: 'SourceHanSansCN-Regular',
                fontSize: 14,
                fontWeight: 'normal',
                fontStretch: 'normal',
                lineHeight: 19,
                letterSpacing: 0,

            },

            formatter: function(params) {
                var newParamsName = ""; // 最终拼接成的字符串
                var paramsNameNumber = params.length; // 实际标签的个数
                var provideNumber = 7; // 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = ""; // 表示每一次截取的字符串
                        var start = p * provideNumber; // 开始截取的位置
                        var end = start + provideNumber; // 结束截取的位置
                        // 此处特殊处理最后一行的索引值
                        if (p == rowNumber - 1) {
                            // 最后一次不换行
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            // 每一次拼接字符串并换行
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr; // 最终拼成的字符串
                    }
                    console.log(newParamsName)

                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }

        },
        position: 'top',
        boundaryGap: [0, 0.01], //设置距离左边位置
        axisTick: {
            show: false
        },
        axisLine: { //x轴线样式
            lineStyle: {
                color: '#666cb4',
                width: 1, //这里是为了突出显示加上的
            },
            symbol: ['none', 'arrow'] //设置x轴箭头  ，none为不设置箭头
        },
        nameTextStyle: { //x轴右方单位的颜色
            color: '#ffffff',
            fontFamily: 'SourceHanSansCN-Regular',
            fontSize: 14,
            fontWeight: 'normal',
            fontStretch: 'normal',
            lineHeight: 19,
            letterSpacing: 0,
            padding: [0, 0, 40, 10]
        },
        splitLine: { //设置网格颜色
            show: false
        }

    },
    yAxis: {
        type: 'category',
        data: ["香蜜沉沉烬如反反复复付霜", "甄嬛传", "如懿传"], //设置从低到高
        inverse: true,
        axisTick: { //去除刻度线
            show: false
        },
        boundaryGap: [0, 0.8], //设置距离上边位置
        axisLine: { //y轴线样式
            lineStyle: {
                color: '#666cb4',
                width: 1, //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontFamily: 'SourceHanSansCN-Regular',
                fontSize: 14,
                fontWeight: 'normal',
                fontStretch: 'normal',
                lineHeight: 19,
                letterSpacing: 0,
                color: '#ffffff',
                padding: [0, 20, 0, -80]
            },
        },
        splitLine: { //设置网格颜色
            show: false
        },
    },
    series: [{
            name: "2019年",
            type: 'bar',
            barWidth: 15,
            data: ["300", "200", "240"],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgba(0,255,255,0.1)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(0,215,244,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,175,248,0.9)'
                        },
                    ]),
                    barBorderRadius: [0, 0, 20, 0]
                }
            } //设置柱形渐变

        },
        {
            name: "2020年",
            type: 'bar',
            // label: {
            // show: true,
            // position: 'right',
            // textStyle: {
            //     color: '#ffffff',
            //     fontFamily: 'SourceHanSansSC-Regular',
            //     fontSize: 14
            // }
            // },
            barWidth: 15,
            data: ["260", "360", "300"],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgba(73,202,146,0.1)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(73,202,146,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(73,202,146,0.9)'
                        },
                    ]),
                    barBorderRadius: [0, 0, 20, 0]
                }
            } //设置柱形渐变

        }

    ]
};

newline(option, 7, 'yAxis')

myChart.setOption(option);



// 文字换行显示
function newline(option, number, axis) {
    /* 此处注意你的json是数组还是对象 */
    // console.log(option);
    // console.log(number);
    // console.log(axis)
    // console.log(option[axis]['axisLabel'])
    option[axis]['axisLabel'] = {
        interval: 0,
        formatter: function(params) {
            var newParamsName = "";
            var paramsNameNumber = params.length;
            var provideNumber = number;
            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
            if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    var start = p * provideNumber;
                    var end = start + provideNumber;
                    if (p == rowNumber - 1) {
                        tempStr = params.substring(start, paramsNameNumber);
                    } else {
                        tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;
                }
            } else {
                newParamsName = params;
            }
            return newParamsName
        },
        textStyle: {
            fontFamily: 'SourceHanSansCN-Regular',
            fontSize: 14,
            fontWeight: 'normal',
            fontStretch: 'normal',
            lineHeight: 19,
            letterSpacing: 0,
            align: 'left',
            color: '#ffffff',
            padding: [0, 0, 0, -105]
        },

    }
    return option;
}