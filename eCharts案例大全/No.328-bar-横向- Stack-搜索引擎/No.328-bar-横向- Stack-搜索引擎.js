const backgroundColor = '#101736';
const color = ['#3ba272', '#91cc75', '#fac858', '#ee6666', '#73c0de']; //2个以上的series就需要用到color数组
const title = {
    show: true,
    text: '搜索引擎',
    textStyle: {
        color: '#fff',
        fontSize: 16,
    },
    padding: 0,
    top: 35,
    left: 40,
};
const legend = {
    show: true,
    //data，就是取得每个series里面的name属性。
    orient: 'horizontal',
    icon: 'circle', //图例形状
    padding: 0,
    top: 35,
    right: 40,
    itemWidth: 14, //小圆点宽度
    itemHeight: 14, // 小圆点高度
    itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
    textStyle: {
        fontSize: 14,
        color: '#00E4FF',
    },
};
const tooltip = {
    show: true,
    trigger: 'axis',
    axisPointer: {
        type: 'shadow',
    },
};
const originData = [
    { name: '百度', data: [620, 732, 701, 734, 1090, 1130, 1120] },
    { name: '谷歌', data: [120, 132, 101, 134, 290, 230, 220] },
    { name: '必应', data: [60, 72, 71, 74, 190, 130, 110] },
    { name: '其他', data: [62, 82, 91, 84, 109, 110, 120] },
];
const commonSeriesFn = (index) => ({
    type: 'bar',
    barWidth: '40%', //柱条的宽度，不设时自适应。
    stack: 'total',
    emphasis: {
        focus: 'series',
        itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 8,
            shadowOffsetX:2,
            shadowOffsetY:2
        },
    },

    showBackground: true, //柱子是否带有背景，默认是没有的
    backgroundStyle: {
        //只有showBackground=true，设置backgroundStyle才会有效果
        color: 'rgba(180, 180, 180, .2)', //
    },
});
const series = originData.map((item, index) => ({
    ...item,
    ...commonSeriesFn(index),
}));
option = {
    backgroundColor,
    color,
    title,
    legend,
    tooltip,
    grid: {
        top: '15%',
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: true, //显示X轴
        },
        axisTick: {
            show: false, //不显示小的刻度线
        },
        splitLine: {
            show: false, //不显示横向分割线
        },
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false, //显示Y轴
        },
        axisTick: {
            show: false, //不显示小的刻度线
        },
        splitLine: {
            show: false, //不显示竖向分割线
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
    },

    series,
};
//图表自动轮播高亮显示函数 myChart直接用
const animation = (delay = 3000) => {
    let currentIndex = -1;
    const length = option.series[0].data.length;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % length;
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,

            dataIndex: currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',

            seriesIndex: 0,
            dataIndex: currentIndex,
        });
    }, delay);
};
// animation(10000)
