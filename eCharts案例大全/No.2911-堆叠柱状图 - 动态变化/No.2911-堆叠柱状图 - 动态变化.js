option = {
    color: ['#0FD64F', '#F7B708', '#ED5D5D'],
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        top: '5%',
        left: 104,
        right: 112,
        bottom: '3%',
        containLabel: false,
    },
    xAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'category',
            inverse: true, //是否是反向坐标轴
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                color: '#FFF',
                fontSize: '16',
                formatter: function (value) {
                    const maxlength = 7;
                    if (value.length > maxlength) {
                        return value.substring(0, maxlength - 1) + '...';
                    } else {
                        return value;
                    }
                },
            },
            data: [
                '1银川市',
                '2燃煤锅炉二氧化硫燃烧',
                '3燃煤锅炉烟粉尘达',
                '4燃煤锅炉氮氧化物',
                '5工业烟粉尘达标',
                '6工业烟粉尘达标',
                '7散煤“双替代”项目',
            ],
        },
        {
            type: 'category',
            inverse: true,
            // inside: true,
            axisTick: 'none',
            axisLine: 'none',
            data: [110, 2, 3, 4, 5, 7, 5],
            axisLabel: {
                formatter: function (value, i) {
                    const arr = [`{a|${value}}`, `{b|34%}`];
                    return arr.join('');
                },
                rich: {
                    a: {
                        fontSize: 16,
                        width: 48,
                        height: 20,
                        color: '#FFF',
                        align: 'center',
                        // borderWidth: 1,
                        // borderColor: 'red'
                    },
                    b: {
                        fontSize: 16,
                        width: 48,
                        color: '#FFF',
                        align: 'center',
                    },
                },
            },
        },
    ],
    // 滑动条
    dataZoom: [
        {
            // realtime : true,
            yAxisIndex: [0, 1], // 这里是从X轴的0刻度开始
            show: false, // 是否显示滑动条，不影响使用
            type: 'slider', // 这个 dataZoom 组件是slider型
            startValue: 0, // 从头开始
            endValue: 4, // 一次性展示个数
        },
    ],
    series: [
        {
            name: '已完成',
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(175, 235, 255, 0.2)',
            },
            data: [32, 30, 31, 34, 39, 33, 32],
        },
        {
            name: '在建',
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            data: [12, 13, 11, 13, 9, 23, 20],
        },
        {
            name: '未动工',
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            data: [22, 18, 19, 24, 29, 33, 30],
        },
        {
            name: '',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
        },
    ],
};

setInterval(function() {
    // 通过动态改变数据实现不停循环播放
    let y1 = option.yAxis[0].data,
        y2 = option.yAxis[1].data,
        complate = option.series[0].data,
        underHandling = option.series[1].data,
        notStarted = option.series[2].data;
    y1.push(y1.shift());
    y2.push(y2.shift());
    complate.push(complate.shift());
    underHandling.push(underHandling.shift());
    notStarted.push(notStarted.shift());
    myChart.setOption(option);
    // 通过改变dataZoom属性实现播放
    // if (option.dataZoom[0].endValue === 7) {
    //     option.dataZoom[0].endValue = 6;
    //     option.dataZoom[0].startValue = 0;
    // } else {
    //     option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
    //     option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
    // };
    // myChart.setOption(option);
}, 2000);
