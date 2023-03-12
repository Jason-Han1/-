option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['利润', '支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '进出货量',
            min: -2000,
            max: 2000,
            position: 'left',
            axisLabel: {
                formatter: '{value} 件'
            }
        },
        {
            type: 'value',
            name: '零件在库存储时间',
            min: 0,
            max: 20,
            position: 'right',
            axisLabel: {
                formatter: '{value} 天'
            }
        }
    ],
    series : [
        {
            name:'存储时间',
            type:'line',
            yAxisIndex: 1,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[7, 15, 8, 12, 9, 17, 11]
        },
        {
            name:'进货量',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[1120, 1732, 1101, 1234, 1490, 1930, 1210]
        },
        {
            name:'出货量',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-1320, -1302, -1341, -1374, -1390, -1450, -1420]
        }
    ]
};
