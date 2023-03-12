var data = [
    { dateStr: '2021-07-05', signInTime: '07:37', signOutTime: '20:39' },
    { dateStr: '2021-07-06', signInTime: '08:37', signOutTime: '20:39' },
    { dateStr: '2021-07-07', signInTime: '08:37', signOutTime: '20:39' },
    { dateStr: '2021-07-08', signInTime: '08:27', signOutTime: '16:39' },
    { dateStr: '2021-07-09', signInTime: '08:07', signOutTime: '20:39' },
    { dateStr: '2021-07-12', signInTime: '08:18', signOutTime: '20:39' },
    { dateStr: '2021-07-13', signInTime: '08:37', signOutTime: '20:39' },
    { dateStr: '2021-07-14', signInTime: '08:37', signOutTime: '20:39' },
    { dateStr: '2021-07-15', signInTime: '08:37', signOutTime: '20:39' },
    { dateStr: '2021-07-16', signInTime: '08:37', signOutTime: '20:39' },
    { dateStr: '2021-07-19', signInTime: '08:37', signOutTime: '20:39' },
    { dateStr: '2021-07-20', signInTime: '08:37', signOutTime: '20:39' },
    { dateStr: '2021-07-21', signInTime: '08:39', signOutTime: '20:39' },
    { dateStr: '2021-07-22', signInTime: '07:22', signOutTime: '20:39' },
    { dateStr: '2021-07-23', signInTime: '08:00', signOutTime: '19:37' },
    { dateStr: '2021-07-26', signInTime: '08:08', signOutTime: '23:39' },
    { dateStr: '2021-07-27', signInTime: '08:39', signOutTime: '20:39' },
    { dateStr: '2021-07-28', signInTime: '08:39', signOutTime: '20:39' },
    { dateStr: '2021-07-29', signInTime: '08:39', signOutTime: '20:39' },
    { dateStr: '2021-07-30', signInTime: '08:39', signOutTime: '20:39' },
    { dateStr: '2021-08-02', signInTime: '08:10', signOutTime: '20:39' },
    { dateStr: '2021-08-03', signInTime: '08:05', signOutTime: '20:39' },
];
function timeFromat(t) {
    let arr = t.split(':');
    return arr[0] * 10 + arr[1] / 6;
}
function getTwoNumber(num) {
    if (Math.ceil(num) < 10) {
        return `0${Math.ceil(num)}`;
    }
    return `${Math.ceil(num)}`;
}
function toString(num) {
    let first = Math.floor(num / 10);
    let second = (num - first * 10) * 6;
    return `${first}:${getTwoNumber(second)}`;
}
let x = data.map((item) => (item.dateStr ? item.dateStr : null));
let y1 = data.map((item) => (item.signInTime ? timeFromat(item.signInTime) : null));
let y2 = data.map((item) => (item.signOutTime ? timeFromat(item.signOutTime) : null));
option = {
    title: {
        text: '考勤折线图',
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return `${params[0].name}<br/>
            <div style="display:inline-block;width:8px;height:8px;background-color:${
                params[0].color
            };border-radius:5px;margin-right:4px;"></div>上班打卡:
            ${data[params[0].dataIndex].signInTime ? data[params[0].dataIndex].signInTime : '-'}<br/>
            <div style="display:inline-block;width:8px;height:8px;background-color:${
                params[1].color
            };border-radius:5px;margin-right:4px;"></div>下班打卡:
            ${data[params[0].dataIndex].signOutTime ? data[params[0].dataIndex].signOutTime : '-'}`;
        },
    },
    color: ['#fb0202', '#14e253', '#fac858', '#ee6666'],
    legend: {
        data: ['上班打卡', '下班打卡'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    xAxis: {
        show: true,
        type: 'category',
        axisTick: {
            show: false,
        },
        axisLine: { show: false },
        boundaryGap: false,
        data: x,
    },
    yAxis: {
        type: 'value',
        max: 240,
        interval: 30,
        inverse: true,
        axisLabel: {
            formatter: function (value, index) {
                return toString(value);
            },
        },
    },
    series: [
        {
            name: '上班打卡',
            type: 'line',
            stack: '上班打卡',
            data: y1,
        },
        {
            name: '下班打卡',
            type: 'line',
            stack: '下班打卡',
            data: y2,
        },
    ],
};
