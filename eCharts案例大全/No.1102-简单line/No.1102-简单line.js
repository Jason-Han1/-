option = {
    title: {
        text: 'aaaa',
        left: 30,
        top: 20,
        textStyle: {
            fontSize: '16px',
            fontFamily: 'Regular',
            color: '#646464',
            fontStyle: 'normal',
            fontWeight: 'normal',
        },
    },
    legend: {
        show: true,
        data: [
            {
                name: '2020',
                icon: 'rect',
            },
            {
                name: '2021',
                icon: 'rect',
            },
        ],
        selectedMode: false,
        itemWidth: 15,
        itemHeight: 3,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        axisLine: { show: true, lineStyle: { color: '#cccccc' } },
        axisTick: { show: true, lineStyle: { color: '#cccccc' } },
    },
    tooltip: {
        trigger: 'axis',
    },
    color: '#008FFF',
    yAxis: {
        name: 'mg/m³',
        axisLine: { show: true, lineStyle: { color: '#cccccc' } },
        axisTick: { show: true, lineStyle: { color: '#cccccc' } },
        splitLine: { show: true, lineStyle: { color: '#cccccc', type: 'dotted' } },
    },
    series: [
        {
            name: '2021',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: [220, 182, 191, 234, 290, 330, 310],
            silent: false,
            symbol: 'none',
            markLine: {
                silent: false,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: 'rgb(244, 61, 61)',
                    },
                },
                data: [
                    {
                        yAxis: 200,
                    },
                ],
                label: {
                    position: 'end',
                    color: 'rgb(244, 61, 61)',
                    formatter: function (params) {
                        return params.value;
                    },
                },
            },
        },
        {
            name: '2020',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: [2200, 1820, 191, 234, 290, 330, 310],
            silent: false,
            color: '#ff9001',
            symbol: 'none',
        },
    ],
};
