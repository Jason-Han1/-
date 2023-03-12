var uploadedDataURL = "/asset/get/s/data-1629083495704-vP1aRb_bw.png";

var xdata =['1月','二月','三月','四月','五月'];
var data = [111,1223,1234,334,3333];
option = {
    backgroundColor: 'rgba(5,39,58,1)', //背景色
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle: {
            align: 'left',
        },
        formatter: (params) => {
            let str = '';
            params.forEach((item) => {
                // 排除多余内容
                if (item.seriesName != '中间') {
                     str += item.name + ':' + item.data + '<br/>';
                }
            });

            return str;
        },
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '2%',
        top: '10%',
        containLabel: true,
    },
    xAxis: {
        data: xdata,
        triggerEvent: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,

            lineStyle: {
                color: 'rgba(0, 192, 255,0.3)',
            },
        },
        axisLabel: {
            show: true,
            rotate: 0,
            interval: 0,
            textStyle: {
                // padding: [14, 0, 0, 0],
                fontSize: 12,
                color: 'rgba(255,255,255,1)',
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            nameLocation: 'end',
            nameTextStyle: {
                color: 'rgba(255,255,255,1)',
                fontSize: 16,
                padding: [0, 0, 10, -20],
            },
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
                show: true,
                lineStyle: {
                    color: 'rgba(0, 192, 255,0.3)',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgb(148,159,167)',
                    fontSize: 16,
                },
            },
        }
    ],
    // color: ["#e54035"],
    series: [
        {
            // barMinHeight: 10,
            barWidth: 14,
            type: 'pictorialBar',
            // barCategoryGap: "60%",
            symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            // symbol:
            //   "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
                normal: {
                    //barBorderRadius: 5,
                    //渐变色
                    color: {
                        type: 'linear', //radial
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(93, 255, 253)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(77, 178, 255,0.05)',
                            },
                        ],
                    },
                },
            },
            data: data,
            z: 10,
        },
        // 中间白线与顶部圆
        {
            z: 11,
            type: 'bar',
            name:'中间',
            barWidth: 26,
            data: data,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(77, 178, 255,0.1)',
            },
            itemStyle: {
                // 为保证柱状背景宽度柱子宽度为26，但只需要一条线所以用渐变色实现
                color: {
                    type: 'linear', //radial
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgb(255, 255, 255,0)',
                        },
                        {
                            offset: 0.49,
                            color: 'rgba(255, 255, 255,0)',
                        },
                        {
                            offset: 0.49,
                            color: 'rgba(255, 255, 255,0.05)',
                        },
                        {
                            offset: 0.52,
                            color: 'rgba(255, 255, 255,0.05)',
                        },
                        {
                            offset: 0.52,
                            color: 'rgba(255, 255, 255,0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 255, 255,0.05)',
                        },
                    ],
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: (params) => {
                        return '';
                    },
                    padding: [8, 8, 8, 8],
                    offset: [1, 16],
                    // 顶部圆（我用的图片，若只是简单形状可用颜色结合padding、width、height等实现）
                    backgroundColor: {
                        image: uploadedDataURL,
                    },
                },
            },
        },
    ],
};
