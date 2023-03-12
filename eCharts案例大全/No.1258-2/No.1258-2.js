data = [
    {
        name: 'test1',
        data: [38, 60, 40, 55, 42, 39, 45, 40],
    },
];

function getSeriesr() {
    let ser = [];
    let ofe = 60;

    let length = data.length;
    let startX = -(ofe * (length - 1));

    data.forEach((item, index) => {
        let offsetX = startX + ofe * index * 2;

        ser.push(
            {
                data: item.data,
                type: 'bar',
                barMaxWidth: 'auto',
                barWidth: 30,

                label: {
                    show: true,
                    position: 'top',
                    distance: 10,
                    color: '#fff',
                },
            },
            {
                data: item.data,
                type: 'pictorialBar',
                barMaxWidth: '20',
                symbolPosition: 'end',
                symbol: 'diamond',
                color: '#66c8ff',
                symbolOffset: [offsetX + '%', '-50%'],
                symbolSize: [30, 10],
                zlevel: 4,
            },
            {
                data: [1, 1, 1, 1, 1, 1, 1, 1],
                type: 'pictorialBar',
                barMaxWidth: '20',
                symbolPosition: 'end',
                symbol: 'diamond',
                color: '#66c8ff',
                symbolOffset: [offsetX + '%', '-50%'],
                symbolSize: [30, 10],
                zlevel: 4,
            }
        );
    });
    return ser;
}

option = {
    backgroundColor: '#000000',
    color: ['#33a2fe', '#33a2fe', '#33a2fe', '#33a2fe', '#33a2fe'],
    xAxis: {
        nameTextStyle: {
            color: '#c0c3cd',
            padding: [0, 0, -10, 0],
            fontSize: 14,
        },
        axisLabel: {
            color: '#c0c3cd', //X轴文字
            fontSize: 14,
            interval: 0,
        },
        axisTick: {
            lineStyle: {
                color: '#0B1535',
                width: 1,
            },
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#384267',
                width: 1,
                type: 'dashed',
            },
            show: true,
        },
        data: ['V11', 'N11', 'V01', 'N08', 'V02', 'NV01', 'V5', 'X12'],
        type: 'category',
    },
    yAxis: {
        type: 'value',
        name: '(L)',
        nameTextStyle: {
            color: '#c0c3cd',
            padding: [0, 0, -10, 0],
            fontSize: 14,
        },
        axisLabel: {
            color: '#c0c3cd', //Y轴文字
            fontSize: 14,
        },
        axisTick: {
            lineStyle: {
                color: '#384267',
                width: 1,
            },
            show: true,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#384267',
                type: 'line',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 1,
                type: 'line',
            },
            show: false,
        },
    },
    series: getSeriesr(),
};
