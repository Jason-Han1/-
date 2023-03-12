// 预警时间数据
var warnTimes = [
    {
        endTime: '2021-09-21',
        reportYear: 2021,
        startTime: '2021-09-19',
        times: 4,
        warnTimes: '2021-4',
    },
    {
        endTime: 2021 - 09 - 19,
        reportYear: 2021,
        startTime: '2021-09-17',
        times: 3,
        warnTimes: '2021-3',
    },
    {
        endTime: '2021-09-16',
        reportYear: 2021,
        startTime: '2021-09-15',
        times: 2,
        warnTimes: '2021-2',
    },
    {
        endTime: '2021-09-11',
        reportYear: 2021,
        startTime: '2021-09-09',
        times: 1,
        warnTimes: '2021-1',
    },
];
var xAxisData = [
    '2021-09-01',
    '2021-09-02',
    '2021-09-03',
    '2021-09-04',
    '2021-09-05',
    '2021-09-06',
    '2021-09-07',
    '2021-09-08',
    '2021-09-09',
    '2021-09-10',
    '2021-09-11',
    '2021-09-12',
    '2021-09-13',
    '2021-09-14',
    '2021-09-15',
    '2021-09-16',
    '2021-09-17',
    '2021-09-18',
    '2021-09-19',
    '2021-09-20',
    '2021-09-21',
    '2021-09-22',
    '2021-09-23',
    '2021-09-24',
    '2021-09-25',
    '2021-09-26',
    '2021-09-27',
    '2021-09-28',
    '2021-09-29',
    '2021-09-30',
];

var markAreaData = disposeMarkArea(warnTimes);
var values = [
    '20',
    '9',
    '23',
    '24',
    '210',
    '21',
    '907',
    '8',
    '99',
    '109',
    '911',
    '212',
    '913',
    '20',
    '15',
    '21',
    '20',
    '219',
    '19',
    '20',
    '34',
    '45',
    '50',
    '51',
    '23',
    '26',
    '100',
    '101',
    '102',
    '103',
];
// 处理markArea数据
// 并手动添加第一块区域默认点击高亮效果
function disposeMarkArea(warnData) {
    // 因为预警次数列表数据是最新时间排在前面 这里倒置一下顺序
    const data = warnData.slice().reverse();
    const _arr = [];
    if (data.length == 0) return [];
    for (const i in data) {
        const item = [
            {
                xAxis: data[i].startTime,
                name: data[i].warnTimes.replace(/-/, '年') + '次',
                times: data[i].warnTimes,
            },
            { xAxis: data[i].endTime },
        ];
        _arr.push(item);
    }
    _arr[0][0].itemStyle = { color: '#f584f5' };
    return _arr;
}
option = {
    tooltip: {
        trigger: 'axis',
    },
    //添加标题
    title: {
        bottom: 0,
        left: 'center',
        textStyle: {
            fontSize: 14,
            fontWeight: 'normal',
            color: '#303133',
        },
    },
    legend: {},
    xAxis: [
        {
            data: xAxisData,
            type: 'category',
            axisTick: {
                //是否显示坐标刻度
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#DCDFE6',
                },
            },
            axisLabel: {
                color: '#303133',
                fontSize: '12',
            },
        },
    ],
    yAxis: [
        {
            name: '排放量',
            nameTextStyle: {
                color: '#909399',
                align: 'right',
                fontSize: 12,
            },
            minInterval: 1,
            min: 0,
            type: 'value',
            axisLabel: {
                color: '#606266',
                fontSize: '12',
                lineHeight: '12',
            },
            splitLine: {
                show: false, //不显示网格分割线
            },
            axisLine: {
                show: false, //不显示y轴线
            },
            axisTick: {
                //是否显示坐标刻度
                show: false,
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['#F2F6FC', 'transparent'],
                },
            },
        },
    ],
    grid: { top: '15%', bottom: '20%', left: '5%', right: '5%' },
    series: [
        {
            type: 'line',
            data: values,
            itemStyle: { color: '#409eff' },
            yAxisIndex: 0,
            name: '排放量',
            markArea: {
                data: markAreaData,
                itemStyle: { color: '#f0b1f0' },
                label: { color: '#f0b1f0' },
            },
        },
    ],
};
// 图表鼠标悬浮事件
let index = 0 
// 处理高亮选择
function disposeHourProcess() {
    console.log('myChart',myChart)

}
