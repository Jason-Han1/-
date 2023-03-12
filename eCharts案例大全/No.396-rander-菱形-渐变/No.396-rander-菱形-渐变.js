const legendData = ['车辆数', '设计车位']; //图例
const color = ['#4A99FF', '#4BFFFC']; //线条边框颜色
const backgroundColor = '#101736';

const title = {
    text: '车辆雷达图',
    textStyle: {
        color: '#fff',
        fontSize: 16,
    },
    padding: 0,
    top: 35,
    left: 40,
};
const legend = {
    //data，就是取得每个series里面的name属性。
    orient: 'vertical',
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
};
const indicator = [
    {
        name: '小型车',
        max: 6000,
    },
    {
        name: '中型车',
        max: 5000,
    },
    {
        name: '大型车',
        max: 5000,
    },
    {
        name: '货车',
        max: 5000,
    },
    {
        name: '特种车',
        max: 5000,
    },
    {
        nam: '贵宾车',
        max: 5000,
    },
];
const dataArr = [
    {
        name: '车辆数',
        value: [4300, 4700, 3600, 3900, 3800, 4200],
        symbolSize: 8,
        symbol: 'circle',

        lineStyle: {
            width: 2,
        },
        areaStyle: {
            // 单项区域填充样式
            color: {
                type: 'linear',
                x: 0, //右
                y: 0, //下
                x2: 1, //左
                y2: 1, //上
                colorStops: [
                    {
                        offset: 0,
                        color: color[0],
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(0,0,0,0)',
                    },
                    {
                        offset: 1,
                        color: color[0],
                    },
                ],
                global: false,
            },
            opacity: 1, // 区域透明度
        },
    },
    {
        value: [3200, 3000, 3400, 2000, 3900, 2000],
        name: '设计车位',
        symbolSize: 8,
        symbol: 'circle',
        lineStyle: {
            width: 2,
        },

        areaStyle: {
            // 单项区域填充样式
            color: {
                type: 'linear',
                x: 0, //右
                y: 0, //下
                x2: 1, //左
                y2: 1, //上
                colorStops: [
                    {
                        offset: 0,
                        color: color[1],
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(0,0,0,0)',
                    },
                    {
                        offset: 1,
                        color: color[1],
                    },
                ],
                global: false,
            },
            opacity: 1, // 区域透明度
        },
    },
];

option = {
    backgroundColor,
    color,
    title,
    legend,
    tooltip,
    radar: {
        center: ['50%', '50%'], //圆心坐标距离左边和上边的距离
        radius: ['1%', '75%'], //内外半径，不写默认是75%
        startAngle: 90, //可以旋转图形
        shape: 'polygon',
        axisName: {
            color: '#fff',
            fontSize: 16,
        },
        indicator: indicator,
        splitArea: {
            show: false, //默认显示颜色分割区域，不需要显示
        },
        axisLine: {
            show: true, //是否显示十字交叉线
            //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#153269', //线条颜色
            },
        },
        axisLabel: { show: false },
        splitLine: {
            //雷达一圈圈
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#113865', // 雷达一圈圈颜色分隔线颜色
                width: 1, // 分隔线线宽
            },
        },
    },
    series: [
        {
            type: 'radar',
            data: dataArr,
        },
    ],
};
