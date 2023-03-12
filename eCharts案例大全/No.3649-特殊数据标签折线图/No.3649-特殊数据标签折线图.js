backgroundColor = 'rgba(0,0,0,1)';
chartdata = [600, 650, 500, 550, 500, 600];
categoryData = [2010, 2015, 2017, 2018, 2020, 2022];
nameArr = '原煤';
linecolor = 'rgb(149,232,255)';
linewidth = 2;
areacolor = 'rgba(149,232,255,0.3)';
smooth = true;
showSymbol = true;

let color = linecolor;
let color1 = areacolor;
let max = 550;
option = {
    backgroundColor: backgroundColor,
    tooltip: {
        show: true,
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'dashed',
                color: '#fff',
            },
        },
        textStyle: {
            align: 'left',
            color:'#fff'
        },
        formatter:(params)=>{
            param=params[0];
            return param.seriesName+param.value
        }
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '8%',
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
            splitNumber: 4,
            splitLine: { show: false },
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                show: true,
                formatter: (val) => {
                    return val;
                },
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
            name: nameArr,
            type: 'line',
            smooth: smooth,
            showSymbol: showSymbol,
            symbol: 'circle',
            symbolSize: 16,
            itemStyle: {
                color: (params) => {
                    if (params.value <= max) {
                        return {
                            type: 'radial',
                            colorStops: [
                                {
                                    offset: 0,
                                    color: color,
                                },
                                {
                                    offset: 0.5,
                                    color: color,
                                },
                                {
                                    offset: 0.5,
                                    color: 'transparent',
                                },
                                {
                                    offset: 0.9,
                                    color: 'transparent',
                                },
                                {
                                    offset: 0.9,
                                    color: color,
                                },
                                {
                                    offset: 1,
                                    color: color,
                                },
                            ],
                        };
                    } else {
                        return {
                            type: 'radial',
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'yellow',
                                },
                                {
                                    offset: 0.5,
                                    color: 'yellow',
                                },
                                {
                                    offset: 0.5,
                                    color: 'transparent',
                                },
                                {
                                    offset: 0.9,
                                    color: 'transparent',
                                },
                                {
                                    offset: 0.9,
                                    color: 'yellow',
                                },
                                {
                                    offset: 1,
                                    color: 'yellow',
                                },
                            ],
                        };
                    }
                },
            },
            label: {
                show: true,
                position: 'top',
                formatter: (params) => {
                    if (params.data > max) {
                        return '{a|' + params.data + '}';
                    } else {
                        return '';
                    }
                },
                color: '#fff',
                backgroundColor: '#201702',
                borderRadius: 4,
                borderColor: 'yellow',
                borderWidth: 1,
                shadowColor: 'yellow',
                shadowBlur: 5,
                align: 'center',
                rich: {
                    a: {
                        padding: [8, 12],
                    },
                },
            },
            lineStyle: {
                color: color,
                width: linewidth,
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: color1, // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,0,0,0)', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
            data: chartdata,
        },
        {
            name: '',
            type: 'line',
            smooth: smooth,
            symbol: 'circle',
            symbolSize: 16,
            itemStyle: {
                color: (params) => {
                    if (params.value <= max) {
                        return {
                            type: 'radial',
                            colorStops: [
                                {
                                    offset: 0,
                                    color: color,
                                },
                                {
                                    offset: 0.5,
                                    color: color,
                                },
                                {
                                    offset: 0.5,
                                    color: 'transparent',
                                },
                                {
                                    offset: 0.9,
                                    color: 'transparent',
                                },
                                {
                                    offset: 0.9,
                                    color: color,
                                },
                                {
                                    offset: 1,
                                    color: color,
                                },
                            ],
                        };
                    } else {
                        return {
                            type: 'radial',
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'yellow',
                                },
                                {
                                    offset: 0.5,
                                    color: 'yellow',
                                },
                                {
                                    offset: 0.5,
                                    color: 'transparent',
                                },
                                {
                                    offset: 0.9,
                                    color: 'transparent',
                                },
                                {
                                    offset: 0.9,
                                    color: 'yellow',
                                },
                                {
                                    offset: 1,
                                    color: 'yellow',
                                },
                            ],
                        };
                    }
                },
            },
            label: {
                show: true,
                position: 'bottom',
                formatter: (params) => {
                    if (params.data > max) {
                        return '新高';
                    } else {
                        return '';
                    }
                },
                color: 'yellow',
            },
            lineStyle: {
                color: 'transparent',
                width: linewidth,
            },
            areaStyle: {
                color: 'transparent',
            },
            data: chartdata,
        },
    ],
};
