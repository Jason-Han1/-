option = {
    backgroundColor: '#151F2A',
    grid: {
        containLabel: true,
        left: 20,
        right: 20,
        bottom: 10,
        top: 40,
    },
    xAxis: {
        axisLabel: {
            color: '#c0c3cd',
            fontSize: 14,
            interval: 0,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: ['01-01', '01-05', '01-10', '01-15', '01-20', '01-25', '01-30'],
        type: 'category',
    },
    yAxis: {
        axisLabel: {
            color: '#c0c3cd',
            fontSize: 14,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        name: '',
    },
    series: [
        {
            data: [353, 66, 112, 270, 315, 418, 500],
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 30,
            itemStyle: {
                color: '#22E5D1',
            },
            label: {
                show: false,
                // position: 'top',
                // distance: 10,
                // color: '#fff'
            },
        },
        {
            data: [500, 500, 500, 500, 500, 500, 500],
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 30,
            barGap: '-100%',
            zlevel: -1,
            itemStyle: {
                color: '#174249',
            },
        },
    ],
};
