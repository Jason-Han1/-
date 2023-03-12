const legendData = ['车辆数', '设计车位']; //图例
const color = ['rgba(0, 181, 255, 0.3)']; //线条边框颜色
const backgroundColor = '#101736';
const typeList = ['火灾接警数', '消防安全管理', '灭火救援能力', '消防基础设施', '重点单位火灾风险水平', '火灾隐患信息'];
const number = [10, 23, 14, 17, 20, 18];
const maxData = Math.max(...number) * 1.1;
const title = {
    show: false,
};
const legend = {
    show: false,
};
const tooltip = {
    show: true,
};
const indicator = typeList.reduce((acc, cur) => {
    acc.push({ name: cur, max: maxData });
    return acc;
}, []);
const dataArr = [
    {
        name: '单位消防安全运行',
        value: number,
        symbolSize: 0,
        symbol: 'circle',

        lineStyle: {
            width: 1,
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
];

option = {
    backgroundColor,
    color,
    title,
    legend,
    tooltip,
    radar: {
        center: ['50%', '50%'], //圆心坐标距离左边和上边的距离
        radius: ['0%', '75%'], //内外半径，不写默认是75%
        startAngle: 90, //可以旋转图形
        shape: 'circle',
        axisName: {
            color: '#fff',
            fontSize: 24,
        },
        indicator: indicator,
        splitArea: {
            show: false, //默认显示颜色分割区域，不需要显示
        },
        axisLine: {
            show: true, //是否显示十字交叉线
            symbol: ['none','circle'],
            symbolSize: [12,12],
            
            lineStyle: {
                color:'#fff',
                width: 0,
                
            },
        },
        axisLabel: { show: false },
        splitLine: {
            //雷达一圈圈
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#455063', // 雷达一圈圈颜色分隔线颜色
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
