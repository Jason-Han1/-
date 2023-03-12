let colotArr=['#0A5CE0','#729CDD','#4EBB96','#D5B829','#DB611A']
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    backgroundColor:'#021434',
    color:colotArr,
    legend: {
        icon: 'circle',
        itemGap: 15,
        itemWidth: 10, // 设置宽度
        itemHeight: 10,
        top:'0',
        right:'30',
        textStyle: {
            color: '#fff'
        },
        data: ['常态服务', '包保服务', '通知加改', '延伸服务', '应急保障']
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        top:'10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#273860'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#ACCFFF',
                fontStyle: 'normal',
                fontSize: 12,
            }
        },
        data: ['1号服务站', '2号服务站', '3号服务站', '4号服务站', '5号服务站', '6号服务站', '7号服务站']
    },
    yAxis: {
        type: 'value',
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            textStyle: {
                color: '#ACCFFF',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#273860'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#273860'
            },
        },
    },
    series: [
        {
            name: '常态服务',
            type: 'bar',
            stack: '总量',
            barWidth:'30%',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '包保服务',
            type: 'bar',
            stack: '总量',
            barWidth:'30%',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '通知加改',
            type: 'bar',
            barWidth:'30%',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '延伸服务',
            type: 'bar',
            barWidth:'30%',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '应急保障',
            type: 'bar',
            barWidth:'30%',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [520, 232, 501, 634, 290, 330, 320]
        }
    ]
};