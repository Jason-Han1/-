option = {
    title: {
        text: '父标题',
        subtext: '子标题'
    },
    grid: {
        top: 10,
        bottom: 80
    },
    tooltip: {
        trigger: 'axis',
        formatter: "日期 : <br/>{b} : {c}次",
        // yAxis坐标显示
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: 'red'
            }
        }
    },
    legend: {
        data: ['邮件营销'],
        formatter: function(name) {
            return name + ' 20次'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    // 增加时间轴
    dataZoom: [{
            show: true,
            realtime: true,
            // 设置起始宽度
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            realtime: true,
            start: 65,
            end: 85
        }
    ],
    xAxis: {
        name: '月',
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            formatter: '{value} 月'
        },
        // 设置日期格式显示
        data: ['2018-06', '2018-07', '2018-08', '2018-09', '2018-10'].map(function(str) {
            return str.replace('-', '\n');
        }),
        // axisLabel: {
        //     formatter: function(value, index) {
        //         return index === 0 ? value : value.split("-")[1]
        //     }
        // },
    },
    yAxis: {
        // 设置标题
        name: '次',
        type: 'value',
        // 设置单位
        axisLabel: {
            // show: false,
            formatter: '{value} 次'
        },
        // 分割线
        // splitLine: {
        //     show: false,
        //     lineStyle: {
        //         color: 'rgb(23,255,243,0.3)'
        //     }
        // },
        // // y轴线
        // axisLine: {
        //     show: false,
        //     lineStyle: {
        //         color: 'blue'
        //     }
        // },
        // // 间隔线
        // axisTick: {
        //     show: false,
        // }
    },
    series: [{
        name: '邮件营销',
        type: 'line',
        // 设置区域 -平滑滚动
        // areaStyle: {},
        // smooth:true,
        data: [120, 132, 101, 134, 90, 230, 210]
    }, ]
};