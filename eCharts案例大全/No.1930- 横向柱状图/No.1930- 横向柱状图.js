var colorList = ['#39B3FF', '#47E0E0', '#7891D9', '#83D978', '#C7A530', '#FF8439'];
option = {
    grid: {
        left: '2',
        right: '1%',
        bottom: '-14%',
        top: '14%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(73,81,92,.95)', //背景颜色
        borderWidth: '0', //边框为0
        textStyle: {
            color: '#333', //字体颜色
        },
        axisPointer: {
            type: 'none',
        },
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            name: '地区名称',
            inverse: true,
            //name的样式设计
            nameTextStyle: {
                align: 'left',
                padding: [-602, 0, 0, -44], //地区名称的位置
                color: '#333',
                fontSize: '16',
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#333',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: ['长春市', '吉林市', '四平市', '白城市', '延边市'],
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            name: '减排量（单位：万吨）',
            //name的样式设计
            nameTextStyle: {
                align: 'left',
                padding: [-602, 0, 0, -70],
                color: '#333',
            },
            axisLabel: {
                textStyle: {
                    color: '#333',
                    fontSize: '12',
                },
                // formatter: function (value) {
                //     return value + ' %';
                // },
            },
            data: [843.21, 777.98, 712.54, 699.12, 654.21],
        },
    ],
    series: [
        {
            name: '减排量',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 20, 20, 0],
                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    //     offset: 0,
                    //     color: 'rgb(57,89,255,1)'
                    // }, {
                    //     offset: 1,
                    //     color: 'rgb(46,200,207,1)'
                    // }]),
                    color: (params) => {
                        return colorList[params.dataIndex];
                    },
                },
            },
            barWidth: 12,
            data: [843.21, 777.98, 712.54, 699.12, 654.21],
        },
    ],
};
