var color =['#3082FF', '#FF9C98', '#FEAF1B', '#00C9D9'];
var legendData = ['s6', '南七'];
var xAxisdata = ['2001', '2002', '2003', '2004', '2005', '2006'];
var data1 = ['40', '80', '50', '120', '70', '190'];
var data2 = ['20', '60', '30', '100', '50', '170'];
var seriesData = [];

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

legendData.forEach((item, i) => {
    seriesData.push({
        name: legendData[i],
        type: 'line',
        symbolSize: 8,

        symbol: 'circle',
        lineStyle: {
            normal: {
                color: color[i],
                width: 2,
                shadowBlur: 3,
                shadowColor: hexToRgba(color[i], 0.5),
                shadowOffsetY: 8,
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
                            color: hexToRgba(color[i], 0.3),
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[i], 0),
                        },
                    ],
                    false
                ),
                shadowColor: hexToRgba(color[i], 0.1),
                shadowBlur: 10,
            },
        },
        smooth: true,
        data: eval('data' + (i + 1)),
    });
});
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        //				        trigger: 'yAxis',
    },
    color: color,
    grid: {
        left: '2%',
        right: '2%',
        top: '10%',
        bottom: '13%',
        containLabel: true,
    },
    xAxis: [
        {
            show: true,
            type: 'category',
            splitLine: {
                show: false,
            },
            data: xAxisdata,
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#E6EAF3',
                },
            },
            axisLabel: {
                color: '#4B525E',
            },
            boundaryGap: true,
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: true,
            },
            min: 0,
            max: 250,
            axisLabel: {
                color: '#4B525E',
            },
            axisLine: {
                lineStyle: {
                    color: '#E6EAF3',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: seriesData,
};
