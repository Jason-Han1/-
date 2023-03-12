var data = [
    {
        name: '处室1',
        sqjd: 900, // 扇区角度数据
        sqcd: 60, // 扇区长度数据
    },
    {
        name: '处室2',
        sqjd: 820,
        sqcd: 30,
    },
    {
        name: '处室3',
        sqjd: 740,
        sqcd: 210,
    },
    {
        name: '处室4',
        sqjd: 660,
        sqcd: 100,
    },
    {
        name: '处室5',
        sqjd: 580,
        sqcd: 150,
    },
    {
        name: '处室6',
        sqjd: 500,
        sqcd: 10,
    },
    {
        name: '处室7',
        sqjd: 420,
        sqcd: 280,
    },
    {
        name: '处室8',
        sqjd: 340,
        sqcd: 360,
    },
    {
        name: '处室9',
        sqjd: 260,
        sqcd: 450,
    },
    {
        name: '处室10',
        sqjd: 180,
        sqcd: 550,
    },
];
var sqcdTotal = 0;
var seriesData = [];
data.forEach((item) => {
     sqcdTotal += item.sqcd;
});

data.forEach((item) => {
     seriesData.push(
        {
            name: item.name,
            type: 'bar',
            max: 900,
            data: [item.sqjd],
            barWidth: (item.sqcd / sqcdTotal) * 100 + '%',
            barGap: 0,
            coordinateSystem: 'polar',
        });
});

option = {
    tooltip: {
        show: true,
        formatter: '{a} <br/> {c}',
    },
    angleAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
    },
    radiusAxis: {
        max: 2000,
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    polar: {
        center: ['50%', '50%'],
        radius: [20, '80%'],
    },
    series: [
        ...seriesData
    ],
};
