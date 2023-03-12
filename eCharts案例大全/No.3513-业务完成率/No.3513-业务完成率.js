var data = 80;

var option = {
    title: {
        text: '业务完成率',
        textStyle: {
            color: '#22f5ff',
            fontSize: 48,
            fontWeight: 'normal',
        },
        x: 'center',
        y: '80%',
    },
    backgroundColor: '#0a2b71',
    tooltip: { show: false },
    legend: { show: false },
    polar: {
        radius: ['48%', '58%'],
        center: ['50%', '35%'],
    },
    angleAxis: { max: 100, show: false },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
    },

    series: [
        {
            name: '业务完成率',
            type: 'bar',
            silent: true,
            roundCap: true,
            showBackground: true,
            backgroundStyle: { color: '#0a3887' },
            coordinateSystem: 'polar',
            itemStyle: { color: '#22f5ff' },
            data: [data],
        },
        {
            type: 'pie',
            silent: true,
            color: '#0a3887',
            data: [1],
            label: {
                show: true,
                position: 'center',
                color: '#fff',
                fontSize: 48,
                formatter: () => `${data}%`,
            },
            radius: ['40%', '43%'],
            center: ['50%', '35%'],
        },
    ],
};
