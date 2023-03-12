option = {
    backgroundColor: '#08254F',
    // tooltip（提示框组件）
    tooltip: {
        //trigger(触发类型)，可选'item','axis','none'
        trigger: 'axis',
        axisPointer: {
            //指示器类型,可选'line','shadow','cross'
            type: 'shadow'
        },
    },
    //echarts图表的相对于容器的布局,
    grid: {
        top: 30,
    },
    xAxis: [{
        type: 'value',
        splitLine: {
            show: false,
        },
        //axisTick 坐标轴刻度相关设置
        axisTick: {
            show: false
        },
        //axixLine 坐标轴轴线相关设置
        axisLine: {
            show: false,
            lineStyle: {
                color: '#FFFFFF',
            }
        },
        //axisLabel 坐标轴刻度标签的相关设置
        axisLabel: {
            show: false,
        }
    }, ],
    yAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        axisLabel: {
            show: false,
            color: '#fff',
            fontSize: 14,
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false
        },
    }, {
        type: 'category',
        data: [],
        axisLabel: {
            show: false,
            color: '#fff',
            fontSize: 14,
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false
        },
    }, ],
    series: [{
            type: 'bar',
            data: [20, 30, 10, 25, 20],
            barWidth: '30%',
            z: 2,
            itemStyle: {
                barBorderRadius: 50,
                color: 'rgba(0,191,252)',
            },
        },
        {
            type: 'bar',
            data: [30, 40, 50, 60, 70],
            barWidth: '30%',
            // barGap 不同系列的柱间距离
            barGap: '-100%',
            z: 1,
            itemStyle: {
                //barBorderRadius bar圆角半径
                barBorderRadius: 50,
                color: 'rgba(81,255,174)',
            },
        },
        {

            type: 'bar',
            yAxisIndex: 1,
            // barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: '30%',
            z: 0,
            itemStyle: {
                barBorderRadius: 50,
                color: 'rgba(255,255,255,0.2)',
            },
        },
    ]
};