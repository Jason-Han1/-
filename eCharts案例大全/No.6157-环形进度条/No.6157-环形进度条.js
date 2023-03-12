const themeColor = {
    bar: '#3b6ad9',
    remain: '#a6cde3',
    text: '#1f78b4'
};
const progress = 60;
option = {
    backgroundColor: '#fff',
    title: [{
        text: progress + '%',
        subtext: '全年',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: '50',
            color: themeColor.text,
            fontFamily: 'Lato',
            foontWeight: '600',
        },
        subtextStyle: {
            fontSize: 25,
            color: themeColor.remain
        }
    }],
    polar: {
        radius: ['44%', '50%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [{
        name: '',
        type: 'bar',
        roundCap: true,
        barWidth: 60,
        showBackground: true,
        backgroundStyle: {
            color: progress > 0 ? themeColor.remain: 'red',
        },
        data: [progress],
        coordinateSystem: 'polar',
        itemStyle: {
            color: themeColor.bar,
        }

    }, ]
};