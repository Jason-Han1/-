option = {
    title: [
        {
            text: '55.1%',
            textStyle: {
                color: '#333',
                fontSize: 24,
            },
            itemGap: 20,
            left: '22%',
            top: '23%',
        },
         {
            text: '66.1%',
            textStyle: {
                color: '#333',
                fontSize: 24,
            },
            itemGap: 20,
            left: '71.5%',
            top: '23%',
        },
    ],
    polar: [
        {
            radius: 116,
            center: ['25%', '25%'],
        },
        {
            radius: 116,
            center: ['75%', '25%'],
        },
    ],
    angleAxis: [
        {
            boundaryGap: false,
            polarIndex: 0,
            max: 100,
            splitLine: 'none',
            axisLine: 'none',
            axisLabel: 'none',
        },
        {
            boundaryGap: false,
            polarIndex: 1,
            max: 100,
            splitLine: 'none',
            axisLine: 'none',
            axisLabel: 'none',
        },
    ],
    radiusAxis: [
        {
            polarIndex: 0,
            type: 'category',
            data: ['1-15天'],
            axisLine: 'none',
            axisLabel: 'none',
            axisTick: 'none',
        },
        {
            polarIndex: 1,
            type: 'category',
            data: ['1-15天'],
            axisLine: 'none',
            axisLabel: 'none',
            axisTick: 'none',
        },
    ],
    series: [
        {
            type: 'bar',
            coordinateSystem: 'polar',

            showBackground: true,
            backgroundStyle: {
                color: '#F0F0FA',
            },
            barWidth: 14,
            data: [51.1],
            roundCap: true,
            itemStyle: {
                color: '#19A589',
            },
        },
        {
            type: 'bar',
            coordinateSystem: 'polar',
            polarIndex: 1,
            showBackground: true,
            backgroundStyle: {
                color: '#F0F0FA',
            },
            barWidth: 14,
            data: [60],
            roundCap: true,
            itemStyle: {
                color: '#19A589',
            },
        },
    ],
};
