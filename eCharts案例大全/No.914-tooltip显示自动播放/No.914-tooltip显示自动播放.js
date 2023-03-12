option = {
    color: ['rgba(29, 250, 250, 1)', 'rgba(34, 143, 254, 1)', 'rgba(241, 93, 35, 1)'],
  backgroundColor: 'rgba(0,0,0,1)',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(35, 47, 76, 0.5)',
        textStyle: { color: 'rgba(124, 129, 173, 0.98)', fontSize: 12 },
        axisPointer: {
            type: 'shadow',
            label: { show: true, backgroundColor: 'transparent' },
            shadowStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(100, 101, 171, 0)' },
                        { offset: 0.5, color: 'rgba(100, 101, 171, 0.2)' },
                        { offset: 0.999999, color: 'rgba(100, 101, 171, 1)' },
                        { offset: 1, color: 'rgba(100, 101, 171, 1)' },
                    ],
                    global: false,
                },
            },
        },
    },
    legend: {
        bottom: 0,
        icon: 'circle',
        itemWidth: 9,
        itemHeight: 9,
        itemGap: 30,
        textStyle: { color: 'white', fontSize: 12 },
        selectedMode: false,
        type: 'scroll',
        pageIconColor: '#ffffff',
        pageIconInactiveColor: '#999999',
        pageTextStyle: { color: '#ffffff' },
        top: 18,
        data: ['邮件营销', '联盟广告', '视频广告'],
    },
    grid: { top: '13%', left: '4%', right: '2%', bottom: '6%', containLabel: true },
    xAxis: {
        type: 'category',
        axisTick: { show: false },
        axisLine: { show: true, lineStyle: { color: 'rgba(41, 164, 255, .39)', width: 3 } },
        axisLabel: { fontSize: 12, color: 'white' },
        data: ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06', '05-07'],
    },
    yAxis: [
        {
            type: 'value',
            splitLine: { show: false },
            axisLabel: { fontSize: 12, color: 'white', formatter: '{value}%' },
            nameGap: 15,
            nameTextStyle: { align: 'right', color: '#333', padding: [0, 8, 0, 0] },
            axisLine: { show: true, lineStyle: { color: 'rgba(41, 164, 255, .39)', width: 3 } },
        },
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 3,
            lineStyle: { width: 1 },
            areaStyle: {
                opacity: 1,
                color: {
                    colorStops: [
                        { offset: 0, color: 'rgba(40, 237, 250, .3)' },
                        { offset: 1, color: 'rgba(20, 119, 125, .3)' },
                    ],
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                },
            },
            smooth: true,
            showSymbol: false,
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: '联盟广告',
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 3,
            lineStyle: { width: 1 },
            areaStyle: {
                opacity: 1,
                color: {
                    colorStops: [
                        { offset: 0, color: 'rgba(40, 237, 250, .3)' },
                        { offset: 1, color: 'rgba(20, 119, 125, .3)' },
                    ],
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                },
            },
            smooth: true,
            showSymbol: false,
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            name: '视频广告',
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 3,
            lineStyle: { width: 1 },
            areaStyle: {
                opacity: 1,
                color: {
                    colorStops: [
                        { offset: 0, color: 'rgba(40, 237, 250, .3)' },
                        { offset: 1, color: 'rgba(20, 119, 125, .3)' },
                    ],
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                },
            },
            smooth: true,
            showSymbol: false,
            data: [150, 232, 201, 154, 190, 330, 410],
        },
    ],
};
// 动态显示tootip
var faultByHourIndex = 0; //播放所在下标
var faultByHourTime = setInterval(function () {
    //使得tootip每隔三秒自动显示
    myChart.dispatchAction({
        type: 'showTip', // 根据 tooltip 的配置项显示提示框。
        seriesIndex: 0,
        dataIndex: faultByHourIndex,
    });
    faultByHourIndex++;
    // faultRateOption.series[0].data.length 是已报名纵坐标数据的长度
    if (faultByHourIndex >= option.series[0].data.length) {
        faultByHourIndex = 0;
    }
    if (faultByHourIndex >= option.series[1].data.length) {
        faultByHourIndex = 0;
    }
    if (faultByHourIndex >= option.series[2].data.length) {
        faultByHourIndex = 0;
    }
}, 3000);
