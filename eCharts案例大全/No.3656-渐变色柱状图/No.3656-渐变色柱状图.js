let categoryData = ['原煤', '天然气', '原油', '一次电力', '汽油', '柴油'];
let chartdata = [1111, 11111, 1111, 1111, 22222, 2222];
let barWidth = 14;
let backgroundColor = 'rgba(0,0,0,1)';
let itemcolor = {
    type: 'linear',
    colorStops: [
        {
            offset: 0,
            color: 'rgba(6, 120, 157,1)',
        },
        {
            offset: 0.5,
            color: 'rgba(6, 120, 157,0.2)',
        },
        {
            offset: 1,
            color: 'rgba(6, 120, 157,1)',
        },
    ],
};
option = {
    backgroundColor: backgroundColor,
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            lineStyle: {
                color: '#fff',
            },
        },
        //   formatter: (params) => {
        //     return params[0].name + "   " + params[0].value;
        //   },
        textStyle: {
            align: 'left',
        },
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: 40,
        containLabel: true,
        show: true,
        borderColor: 'transparent',
        backgroundColor: 'rgba(25, 163, 209,0.08)',
    },
    xAxis: [
        {
            type: 'category',
            data: categoryData,
            axisTick: {
                show: false, // 是否显示坐标轴轴线
            },
            axisLabel: {
                color: '#fff',
            },
            splitLine: {
                show: false,
            },
            boundaryGap: true,
            axisLine: {
                //坐标轴轴线相关设置。
                show: true,
                inside: false,
                lineStyle: {
                    color: '#0e7675',
                },
            },
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 0,
            splitNumber: 4,
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(25, 163, 209,0.1)',
                    type: 'solid',
                },
            },
            show: true,
        },
    ],
    dataZoom: [
        {
            show: false,
            xAxisIndex: [0],
            left: 0,
            bottom: 30,
            start: 1,
            end: 100,
            handleSize: '100%',
            handleStyle: {
                color: '#5B3AAE',
            },
            textStyle: {
                color: 'rgba(204,187,225,0.5)',
            },
            fillerColor: 'rgba(67,55,160,0.4)',
            borderColor: 'rgba(204,187,225,0.5)',
        },
        {
            type: 'inside',
            show: true,
            start: 1,
            end: 100,
        },
    ],
    series: [
        {
            type: 'bar',
            barMaxWidth: barWidth,
            barMinHeight: 10,
            zlevel: 10,
            legendHoverLink: true,
            emphasis: {
                show: true,
                itemStyle: {
                    color: '#1ff0ff',
                },
            },
            // barGap: '100%',
            data: chartdata,
            label: {
                show: true,
                //   formatter: (params) => {
                //     return this.NumFormat(params.data);
                //   },
                position: 'top',
                color: '#fff',
            },
            itemStyle: {
                normal: {
                    color: itemcolor,
                },
            },
        },
    ],
};
