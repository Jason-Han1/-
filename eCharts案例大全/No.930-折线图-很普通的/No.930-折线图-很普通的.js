let bgColor = '#fff'; //背景颜色
let color = ['#FF58F4', '#36CE9E', '#FFC005', '#FF515A', '#8B5CFF', '#00CA69'];
let echartData = [
    {
        name: '1',
        value1: 100,
        value2: 5,
    },
    {
        name: '2',
        value1: 138,
        value2: 10,
    },
    {
        name: '3',
        value1: 350,
        value2: 20,
    },
    {
        name: '4',
        value1: 173,
        value2: 30,
    },
    {
        name: '5',
        value1: 180,
        value2: 0,
    },
    {
        name: '6',
        value1: 150,
        value2: 5,
    },
    {
        name: '7',
        value1: 180,
        value2: 6,
    },
    {
        name: '8',
        value1: 230,
        value2: 8,
    },
    {
        name: '9',
        value1: 130,
        value2: 16,
    },
    {
        name: '10',
        value1: 488,
        value2: 14,
    },
    {
        name: '11',
        value1: 366,
        value2: 22,
    },
    {
        name: '12',
        value1: 544,
        value2: 33,
    },
]; //数据
let y_max = 800; //设置y轴最大值
let y_min = 0; //设置y轴最小值

let xAxisData = echartData.map((v) => v.name);
// ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12"]
let yAxisData1 = echartData.map((v) => v.value1);
// [100, 138, 350, 173, 180, 150, 180, 230,355,244,122,023]
let yAxisData2 = echartData.map((v) => v.value2);
// [233, 233, 200, 180, 199, 233, 210, 180,147,158,254,888]
// 转化函数
const hexToRgba = (hex, opacity) => {
    let rgbaColor = '';
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt(
            '0x' + hex.slice(5, 7)
        )},${opacity})`;
    }
    return rgbaColor;
};

option = {
    // 底部标题
    title: {
        text: '月河流过闸流量',
        textStyle: {
            color: '#333333',
            fontWeight: 600,
            fontFamily: 'MicrosoftYaHeiSemibold',
            fontSize: 14,
        },
        left: 'center',
        bottom: '20',
    },
    backgroundColor: bgColor,
    color: color,
    legend: {
        top: '0',
        left: '0',
        itemGap: 40,
        itemWidth: 13,
        itemHeight: 12,
        textStyle: {
            fontSize: 12,
        },
        data: [
            {
                name: '水位',
                icon: 'roundRect',
            },
            {
                name: '流量',
                icon: 'roundRect',
            },
        ],
    },
    tooltip: {
        // trigger: 'item',
        // axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        // },
        // 浮窗 样式
        trigger: 'axis',
        // formatter: function (params) {
        //     let html = '';
        //     params.forEach((v) => {
        //         console.log(v);
        //         html += `
        //         <span style="color:#5355FF;">${v.value}</span>
        //         `;
        //     });

        //     return html;
        // },
        // 设置内边距为 10
        padding: 10,
        textStyle: {
            fontWeight: 600,
            fontFamily: 'MicrosoftYaHeiSemibold',
            fontSize: 14,
            color: '#5355FF',
        },
        extraCssText: 'background: #fff; border-radius: 4px;box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.12);;',
        // axisPointer: {
        //     type: 'none',
        //     shadowStyle: {
        //         color: '#ffffff',
        //         shadowColor: 'rgba(225,225,225,1)',
        //         shadowBlur: 5,
        //     },
        // },
        axisPointer: {
            type: 'cross',
            label: {
                formatter: function (params) {
                    if (params.seriesData.length === 0) {
                        window.mouseCurValue = params.value;
                    }
                },
            },
        },
        formatter: function (params) {
            let res = '';
            console.log('params', params);
            params.forEach((v) => {
                console.log(v);
                if (v.data >= window.mouseCurValue) {
                    res = v.data + '<br/>';
                }
            });
            return res;
        },
    },
    grid: {
        top: 100,
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisTick: false,
            axisLabel: {
                formatter: '{value}月',
                textStyle: {
                    color: '#333',
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#395EFC30',
                },
            },
            data: xAxisData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '过闸流量(m³)',
            scale: true,
            max: y_max,
            min: y_min,
            splitNumber: 5,
            boundaryGap: [0.2, 0.2],
            axisLabel: {
                textStyle: {
                    color: '#666',
                },
            },
            nameTextStyle: {
                color: '#33333360',
                fontSize: 12,
                lineHeight: 20,
                fontWeight: 500,
            },
            splitLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#E9E9E9',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#395EFC30',
                },
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'value',
            name: 'm',
            scale: true,
            max: 40,
            min: 0,
            splitNumber: 5,
            boundaryGap: [0.2, 0.2],
            axisLabel: {
                textStyle: {
                    color: '#666',
                },
            },
            nameTextStyle: {
                color: '#33333360',
                fontSize: 12,
                lineHeight: 20,
                fontWeight: 500,
            },
            splitLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#E9E9E9',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#395EFC30',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '2018',
            type: 'line',
            smooth: false,

            // showSymbol: false,/
            symbolSize: 0.01,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[0],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[0], 0.5),
                    shadowOffsetY: 1,
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: hexToRgba(color[0], 0.3),
                            },
                            {
                                offset: 0.5,
                                color: hexToRgba(color[0], 0.1),
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[0], 0),
                            },
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 10,
                },
            },
            data: yAxisData1,
        },
        {
            name: '2019',
            type: 'line',
            smooth: false,
            yAxisIndex: 1,
            // showSymbol: false,/
            symbolSize: 0.01,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[1],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[1], 0.5),
                    shadowOffsetY: 1,
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: hexToRgba(color[1], 0.3),
                            },
                            {
                                offset: 0.5,
                                color: hexToRgba(color[1], 0.1),
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[1], 0),
                            },
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[1], 0.1),
                    shadowBlur: 10,
                },
            },
            data: yAxisData2,
        },
    ],
};
