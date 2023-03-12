option = {
    color: ['#08daaa', '#1e30ff'],
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(73,81,92,.95)', //背景颜色
        borderWidth: '0', //边框为0
        textStyle: {
            color: '#fff', //字体颜色
        },
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    legend: {
        data: ['当前月均碳排放量', '碳帐户余额'],
        right: 20,
        top: 10,
    },
    // 设置网格样式
    grid: {
        left: '1%',
        right: '2%',
        bottom: '1%',
        top: '12%',
        containLabel: true, // 包含刻度文字在内
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true, //坐标轴两端空白策略
            axisTick: {
                show: false, //隐藏X轴刻度
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
    ],
    yAxis: [
        {
            name: '单位:吨',
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#666',
                },
            },
            //name的样式设计
            nameTextStyle: {
                color: '#333',
                align: 'left',
            },
            splitLine: {
                lineStyle: {
                    type: 'solid', //设置网格线类型 dotted：虚线 solid:实线
                    color: '#E9E9E9',
                },
            },
            axisLine: {
                show: false, //隐藏Y轴线
            },
            axisTick: {
                show: false, //隐藏Y轴刻度
            },
        },
    ],
    series: [
        {
            name: '当前月均碳排放量',
            type: 'line',
            areaStyle: {},
            emphasis: {
                focus: 'series',
            },
            data: [820, 932, 1002, 901, 954, 934, 1290, 1360, 1450, 1400, 1350, 1320],
        },
        {
            name: '碳帐户余额',
            type: 'line',
            areaStyle: {},
            emphasis: {
                focus: 'series',
            },
            data: [620, 712, 802, 701, 734, 734, 1090, 1160, 1250, 1220, 1150, 1120],
        },
    ],
};
