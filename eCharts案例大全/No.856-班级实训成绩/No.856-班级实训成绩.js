var data = [
    {
        name: '连锁1班', //班级名称
        excellent: '100', //优秀人数
        good: '90', //良好人数
        medium: '80', //中等人数
        pass: '60', //及格人数
        failed: '58', //不及格人数
    },
    {
        name: '连锁2班', //班级名称
        excellent: '98', //优秀人数
        good: '88', //良好人数
        medium: '75', //中等人数
        pass: '65', //及格人数
        failed: '52', //不及格人数
    },
    {
        name: '连锁3班', //班级名称
        excellent: '99', //优秀人数
        good: '87', //良好人数
        medium: '76', //中等人数
        pass: '61', //及格人数
        failed: '40', //不及格人数
    },
    {
        name: '连锁4班', //班级名称
        excellent: '97', //优秀人数
        good: '89', //良好人数
        medium: '78', //中等人数
        pass: '62', //及格人数
        failed: '47', //不及格人数
    },
];

var dataList = [];
var excellentdata = [];
var gooddata = [];
var mediumdata = [];
var passdata = [];
var faileddata = [];

var lengendData = ['优秀', '良好', '中等', '及格', '不及格'];
data.forEach(function (item, index) {
    dataList.push(item.name);
    excellentdata.push(item.excellent);
    gooddata.push(item.good);
    mediumdata.push(item.medium);
    passdata.push(item.pass);
    faileddata.push(item.failed);
});

option = {
    color: ['#0cb4d7', '#9acff9', '#80d5ac', '#fe9c3a', '#eb7c6f'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        data: lengendData,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            name: '人数',
            type: 'value',
        },
    ],
    yAxis: [
        {
            type: 'category',
            data: dataList,
            axisLine: {
                show: true,
            },
            axisTick: {
                show: true,
            },
        },
    ],
    series: [
        {
            name: lengendData[0],
            type: 'bar',
            barWidth: 24,
            data: excellentdata,
            itemStyle: {
                normal: {
                    show: true,
                    label: {
                        show: true,
                        textStyle: {
                            color: '#FFF',
                        },
                    },
                },
            },
        },
        {
            name: lengendData[1],
            type: 'bar',
            barWidth: 24,
            data: gooddata,
            itemStyle: {
                normal: {
                    show: true,
                    label: {
                        show: true,
                        textStyle: {
                            color: '#FFF',
                        },
                    },
                },
            },
        },
        {
            name: lengendData[2],
            type: 'bar',
            barWidth: 24,
            data: mediumdata,
            itemStyle: {
                normal: {
                    show: true,
                    label: {
                        show: true,
                        textStyle: {
                            color: '#FFF',
                        },
                    },
                },
            },
        },
        {
            name: lengendData[3],
            type: 'bar',
            barWidth: 24,
            data: passdata,
            itemStyle: {
                normal: {
                    show: true,
                    label: {
                        show: true,
                        textStyle: {
                            color: '#FFF',
                        },
                    },
                },
            },
        },
        {
            name: lengendData[4],
            type: 'bar',
            barWidth: 24,
            data: faileddata,
            itemStyle: {
                normal: {
                    show: true,
                    label: {
                        show: true,
                        textStyle: {
                            color: '#FFF',
                        },
                    },
                },
            },
        },
    ],
};
