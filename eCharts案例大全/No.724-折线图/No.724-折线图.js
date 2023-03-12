let bgColor = '#081A2A';
let color = ['#4F95FF', '#FA6DA8', '#1BE315', '#FFE400'];
let echartData = [
    {
        name: '1',
        value1: 100,
        value2: 233,
        value3: 253,
        value4: 260,
    },
    {
        name: '2',
        value1: 138,
        value2: 233,
        value3: 193,
        value4: 270,
    },
    {
        name: '3',
        value1: 350,
        value2: 200,
        value3: 293,
        value4: 240,
    },
    {
        name: '4',
        value1: 173,
        value2: 180,
        value3: 263,
        value4: 210,
    },
    {
        name: '5',
        value1: 180,
        value2: 199,
        value3: 183,
        value4: 290,
    },
    {
        name: '6',
        value1: 150,
        value2: 233,
        value3: 213,
        value4: 220,
    },
    {
        name: '7',
        value1: 180,
        value2: 210,
        value3: 203,
        value4: 265,
    },
    {
        name: '8',
        value1: 230,
        value2: 180,
        value3: 153,
        value4: 220,
    },
];

let xAxisData = echartData.map((v) => v.name);
let yAxisData1 = echartData.map((v) => v.value1);
let yAxisData2 = echartData.map((v) => v.value2);
let yAxisData3 = echartData.map((v) => v.value3);
let yAxisData4 = echartData.map((v) => v.value4);
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
    backgroundColor: bgColor,
    color: color,
    legend: {
        right: 10,
        top: 10,
        itemWidth: 27, // 设置宽度
        itemHeight: 8, // 设置高度
        itemGap: 10, // 设置间距
        selectedMode: false, //图例点击失效
        textStyle: {
            fontSize: 12,
            fontFamily: 'Microsoft YaHei',
            fontWeight: 'bold',
            color: '#FFFFFF',
        },
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            let html = '';
            params.forEach((v) => {
                console.log(v);
                html += `<div style="color: #666;font-size: 12px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                    color[v.componentIndex]
                };"></span>
                ${v.seriesName} ${v.name}月
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 12px">${v.value}</span>
                `;
            });

            return html;
        },
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        // axisPointer: {
        //     type: 'shadow',
        // shadowStyle: {
        //     color: '#ffffff',
        //     shadowColor: 'rgba(225,225,225,1)',
        //     shadowBlur: 5
        // }
        // }
    },
    grid: {
        top: 100,
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                formatter: '{value}月',
                textStyle: {
                    fontSize: 11,
                    fontFamily: 'Microsoft YaHei',
                    fontWeight: 400,
                    color: '#00FFFF',
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#02D2D6',
                },
            },
            axisTick: {
                show: false,
            },
            data: xAxisData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            axisLabel: {
                textStyle: {
                    color: '#00FFFF',
                    fontSize: 11,
                    fontFamily: 'Microsoft YaHei',
                    fontWeight: 400,
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#08222F',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '事件',
            type: 'line',
            smooth: true,
            // showSymbol: false,/
            symbolSize: 8,
            symbol: 'circle', //标记的图形为实心圆
            zlevel: 3,
            itemStyle: {
                normal: {
                    color: '#4F95FF',
                    borderColor: '#ffffff', //圆点透明 边框
                    borderWidth: 1,
                },
            },
            lineStyle: {
                normal: {
                    width:3,
                    color: color[0],
                    shadowBlur: 10,
                    shadowColor: hexToRgba(color[0], 0.8),
                    shadowOffsetY: 10,
                },
            },
            data: yAxisData1,
        },
        {
            name: '巡查',
            type: 'line',
            smooth: true,
            // showSymbol: false,
            symbolSize: 8,
            symbol: 'circle', //标记的图形为实心圆
            zlevel: 3,
            itemStyle: {
                normal: {
                    color: '#FA6DA8',
                    borderColor: '#ffffff', //圆点透明 边框
                    borderWidth: 1,
                },
            },
            lineStyle: {
                normal: {
                    width:3,
                    color: color[1],
                    shadowBlur: 10,
                    shadowColor: hexToRgba(color[1], 0.8),
                    shadowOffsetY: 10,
                },
            },
            data: yAxisData2,
        },
        {
            name: '报修',
            type: 'line',
            smooth: true,
            // showSymbol: false,
            symbolSize: 8,
            symbol: 'circle', //标记的图形为实心圆
            zlevel: 3,
            itemStyle: {
                normal: {
                    color: '#1BE315',
                    borderColor: '#ffffff', //圆点透明 边框
                    borderWidth: 1,
                },
            },
            lineStyle: {
                normal: {
                    width:3,
                    color: color[2],
                    shadowBlur: 10,
                    shadowColor: hexToRgba(color[2], 0.8),
                    shadowOffsetY: 10,
                },
            },
            data: yAxisData3,
        },
        {
            name: '设备',
            type: 'line',
            smooth: true,
            // showSymbol: false,
            symbolSize: 8,
            symbol: 'circle', //标记的图形为实心圆
            zlevel: 3,
            itemStyle: {
                normal: {
                    color: '#FFE400',
                    borderColor: '#ffffff', //圆点透明 边框
                    borderWidth: 1,
                },
            },
            lineStyle: {
                normal: {
                    width:3,
                    color: color[3],
                    shadowBlur: 10,
                    shadowColor: hexToRgba(color[3], 0.8),
                    shadowOffsetY: 10,
                },
            },
            data: yAxisData4,
        },
    ],
};
