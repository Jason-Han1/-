const backgroundColor = '#101736';
const colors = ['#FF3D10', '#16CEB9'];
const title = {
    show: true,
    text: '时间段分布',
    textStyle: {
        fontSize: 28,
        color: '#ffffff',
        fontFamily: 'PingFangSC-Medium, PingFang SC',
        fontWeight: 500,
        textShadowColor: '#4bb2ff',
        textShadowBlur: 12,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
    },
    padding: 0,
    top: 20,
    left: 25,
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
        color: '#ffffff',
    },
};
const tooltip = {
    show: true,
    trigger: 'axis',
    axisPointer: {
        type: 'shadow',
    },
    //之所以formatter写的那么复杂是因为数据出水实警里面是负数。要把负数转为正数
    formatter: (params) => {
        let str = `<div>${params[0].name}</div>`
        return str+=params
            .map((item) => {
                return `<div><span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color}"></span>
                ${item.seriesName} ${Math.abs(item.value)}</div>
                `
            })
            .join('');
        
    },
};
const getBorderRadius = (index) => {
    if (index === 0) return [0, 100, 100, 0];
    if (index === 1) return [100, 0, 0, 100];
    return 0;
};
// x轴
const nameArr = [
    '00:00-02:00',
    '02:00-04:00',
    '04:00-06:00',
    '06:00-08:00',
    '08:00-10:00',
    '10:00-12:00',
    '12:00-14:00',
    '14:00-16:00',
    '16:00-18:00',
    '18:00-20:00',
    '20:00-22:00',
    '22:00-24:00',
];

const originData = [
    {
        name: '火灾实警',
        value: [400, 241, 360, 320, 302, 341, 374, 390, 450, 420, 345, 257],
    },
    {
        name: '出水实警',
        value: [-120, -180, -120, -120, -132, -101, -134, -190, -230, -210, -234, -145],
    },
];
const series = originData.map((item, index) => ({
    name: item.name,
    type: 'bar',
    stack: 'total',
    label: {
        show: false, //不显示item上面的数字
    },
    lineStyle: {
        width: 2,
        color: colors[index], // 线条颜色
    },
    barWidth: 22,
    itemStyle: {
        color: colors[index],
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: getBorderRadius(index),
    },
    data: item.value,
}));

option = {
    backgroundColor,
    title,
    tooltip,
    legend,

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'value',
            show: false,
        },
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            data: nameArr,
            axisLabel: {
                color: '#FFFFFF',
                fontSize: 14,
            },
            axisLine: {
                show: false,
            },
        },
    ],

    series: series,
};
