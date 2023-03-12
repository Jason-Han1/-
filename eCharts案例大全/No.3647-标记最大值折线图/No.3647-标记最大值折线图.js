var uploadedDataURL = '/asset/get/s/data-1619406647701-_oG4J3hgU.png';

function hexToRgba(hex, opacity) {
    return (
        'rgba(' +
        parseInt('0x' + hex.slice(1, 3)) +
        ',' +
        parseInt('0x' + hex.slice(3, 5)) +
        ',' +
        parseInt('0x' + hex.slice(5, 7)) +
        ',' +
        opacity +
        ')'
    );
}
backgroundColor = 'rgba(0,0,0,1)';
chartdata = [
    [1, 8, 5, 4],
    [6, 7, 7, 4],
    [3, 9, 1, 9],
];
categoryData = [1010, 2020, 2019, 2018, 1010, 2020, 2019, 2018];
nameArr = ['原煤', '天然气', '原油', '原煤', '天然气', '原油'];
linecolor = ['#3ffe68', '#ffe484', '#32deff', '#eb370a', '#a8eb0a', '#0aebeb', '#0a59eb'];
linewidth = 2;
areacolor = [
    'rgba(63, 254, 104,0.3)',
    'rgba(255, 228, 132,0.3)',
    'rgba(50, 222, 255,0.3)',
    'rgba(63, 254, 104,0.3)',
    'rgba(255, 228, 132,0.3)',
    'rgba(50, 222, 255,0.3)',
];
smooth = true;
showSymbol = true;

let color = linecolor;
let color1 = areacolor;
let serieslist = [];
let maxArr = [];
chartdata.forEach((item, index) => {
    maxArr.push(Math.max.apply(null, item));
});
let max = Math.max.apply(null, maxArr);
chartdata.forEach((item, index) => {
    serieslist.push({
        name: nameArr[index],
        type: 'line',
        smooth: smooth,
        showSymbol: showSymbol,
        symbol: 'circle',
        symbolSize: 14,
        itemStyle: {
            color: (params) => {
                if (params.dataIndex == item.indexOf(max) && params.data == max) {
                    return {
                        type: 'radial',
                        colorStops: [
                            {
                                offset: 0,
                                color: '#fff',
                            },
                            {
                                offset: 0.4,
                                color: '#fff',
                            },
                            {
                                offset: 0.4,
                                color: 'transparent',
                            },
                            {
                                offset: 0.8,
                                color: 'transparent',
                            },
                            {
                                offset: 0.8,
                                color: 'yellow',
                            },
                            {
                                offset: 1,
                                color: 'yellow',
                            },
                        ],
                    };
                } else {
                    return 'transparent';
                }
            },
        },
        lineStyle: {
            color: color[index],
            width: this.linewidth,
        },
        label: {
            show: true,
            position: 'right',
            formatter: (params) => {
                if (params.dataIndex == item.indexOf(max) && params.data == max) {
                    return '{a|' + params.data + '}';
                } else {
                    return '';
                }
            },
            rich: {
                a: {
                    padding: [16, 50],
                    fontSize: 16,
                },
            },
            color: '#fff',
            backgroundColor: {
                image: uploadedDataURL,
            },
        },
        data: item,
    });
});
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
        },
    },
    grid: {
        top: '5%',
        left: '2%',
        right: '2%',
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
    series: serieslist,
};
