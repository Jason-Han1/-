let max = 100;
let value = 50;
option = {
    grid:{
        left:0,
        right:0,
        top:0,
        containLabel:true,
        bottom:0
    },
    xAxis: {
        type: 'value',
        max: max,
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
    },
    series: [
        {
            type: 'bar',
            data: [value],
            barWidth: 8,
            borderRadius: [4, 4, 4, 4],
            itemStyle: {
                borderRadius: [4, 4, 4, 4],
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#5CCFFF',
                        },
                        {
                            offset: 1,
                            color: '#4C8EFA',
                        },
                    ],
                },
            },
        },
        {
            type: 'bar',
            data: [max],
            barGap: '-100%',
            barWidth: 8,
            itemStyle: {
                borderRadius: [4, 4, 4, 4],
                opacity: 0.3,
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#5CCFFF',
                        },
                        {
                            offset: 1,
                            color: '#4C8EFA',
                        },
                    ],
                },
            },
        },
    ],
};
