var xData = (function () {
    var data = [
        '天河区大队',
        '越秀区大队',
        '荔湾区大队',
        '白云区大队',
        '海珠区大队',
        '黄埔区大队',
        '番禺区大队',
        '花都区大队',
        '南沙区大队',
        '从化区大队',
        '增城区大队',
    ];
    return data;
})();

option = {
    backgroundColor: 'RGBA(7, 28, 51, 1)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            textStyle: {
                color: '#fff',
            },
        },
    },
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: '#fff',
        },
    },
    calculable: true,
    xAxis: {
        data: xData,
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 20],
            lineStyle: {
                color: '#023C7A',
                //利用阴影进行延长
                shadowOffsetX: 20,
                shadowColor: '#023C7A',
            },
        },
        axisTick: {
            inside: true,
        },

        axisLabel: {
            color: '#8EC7DC',
            fontSize: 11,
            rotate: 0,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#023C7A',
            },
        },
    },
    yAxis: {
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 14],
            lineStyle: {
                color: '#023C7A',
                shadowColor: '#023C7A',
            },
        },
        axisTick: {
            inside: true,
        },
        axisLabel: {
            color: '#8EC7DC',
            fontSize: 10,
        },

        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#023C7A',
            },
        },
    },
    dataZoom: [
        {
            show: true,
            height: 15,
            xAxisIndex: [0],
            bottom: 30,
            start: 10,
            end: 80,
            handleIcon:
                'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
                color: '#d3dee5',
            },
            textStyle: {
                color: '#fff',
            },
            borderColor: '#90979c',
        },
        {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35,
        },
    ],
    series: [
        {
            name: '已解决',
            type: 'bar',
            stack: '1',
            barMaxWidth: 20,
            barGap: '10%',
            itemStyle: {
                normal: {
                    color: 'rgba(0,191,183,1)',
                    opacity: 0.9,
                    barBorderRadius: [0, 0, 10, 10],
                },
            },
            data: [60, 50, 50, 30, 40, 43, 43, 33, 23, 32, 25],
        },

        {
            name: '未解决',
            type: 'bar',
            stack: '1',
            itemStyle: {
                normal: {
                    color: 'rgba(255,144,128,1)',
                    opacity: 1,
                },
            },
            data: [9, 7, 3, 2, 6, 9, 7, 3, 2, 6, 9],
        },
    ],
};
