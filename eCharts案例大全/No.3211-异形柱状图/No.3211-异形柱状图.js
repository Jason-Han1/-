const list = [
    {
        name: '抓拍数量',
        value: '5000',
    },
    {
        name: '抓拍设备',
        value: '8000',
    },
];

const datas = ['抓拍数量', '抓拍设备'];
const values = [5000, 8000];
option = {
    backgroundColor: "black",
    xAxis: {
        max: 10000,
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
    },
    grid: {
        containLabel: true,
        left: '3%',
        top: '3%',
        right: '10%',
        bottom: '3%',
    },
    legend: {
        orient: 'vertical',
        x: 'right', //可设定图例在左、右、居中
        y: 'center', //可设定图例在上、下、居中
    },
    // legend : {
    //   orient: "vertical",
    //   bottom : '5%',
    //   left : '0%',
    //   itemWidth : 22,
    //   itemHeight : 22,
    //   itemGap: 343,
    //   icon : 'horizontal',
    //   textStyle : {
    //       color : '#ffffff',
    //       fontSize : 20,
    //   },
    //   data: ['抓拍数量', '抓拍设备']
    // },
    yAxis: [
        {
            data: datas,
            //max:3,
            inverse: true,
            axisLine: { show: false },
            axisTick: { show: false },
            // splitLine: {
            //   show: true
            // },
            axisLabel: {
                show: false,
                margin: 10,
                textStyle: {
                    fontSize: 26,
                    color: '#ffff',
                },
            },
        },
    ],
    series: [
        {
            //内
            type: 'bar',
            barWidth: 40,
            // legendHoverLink: false,
            // symbolRepeat: true,
            barGap: '50%' /*多个并排柱子设置柱子之间的间距*/,
            barCategoryGap: '50%' /*多个并排柱子设置柱子之间的间距*/,
            silent: true,
            itemStyle: {
                color: 'transparent',
                // borderWidth:2
                borderColor: 'transparent',
            },
            data: list,
            z: 1,
            // animationEasing: 'elasticOut',
        },
        {
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'rect',
            symbolSize: [20, 40],
            symbolMargin: 2,
            // symbolBoundingData: 2000,
            itemStyle: {
                normal: {
                    color: 'transparent',
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [-20, 0],
                    textStyle: {
                        color: '#ffff',
                        fontSize: 26,
                    },
                },
            },
            data: values,
            z: 0,
            animationEasing: 'elasticOut',
        },
        {
            //分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    // color: new this.$echarts.graphic.LinearGradient(
                    //   0,
                    //   0,
                    //   0,
                    //   1,
                    //   [
                    //     {
                    //       offset: 0,
                    //       color: "#26C5A2" // 0% 处的颜色
                    //     },
                    //     {
                    //       offset: 1,
                    //       color: "#8EE9A9" // 100% 处的颜色
                    //     }
                    //   ],
                    //   false
                    // )
                    color: function (params) {
                        // build a color map as your need.

                        var colorList = ['#FFD203', '#03CFFF'];

                        return colorList[params.dataIndex];
                    },
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 3,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [30, 40],
            symbolPosition: 'start',
            // symbolOffset: [0, 0],
            // symbolBoundingData: 2000,
            data: list,
            z: 2,
            animationEasing: 'elasticOut',
        },
    ],
};
