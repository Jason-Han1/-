option = {
    title: {
        text: "正负图-负数值较小正数较大时,绘制刻度不均值展示(为了好看)",

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params, ticket, callback) {
            // console.log(params);    ////可以打印出来看看数据结构哦
            let axisValueLabel = params[0].axisValueLabel

            let src = axisValueLabel + '<br>';
            for (x in params) {
                params[x].value = Math.abs(params[x].value)
                src += params[x].marker + params[x].seriesName + ": " + params[x].value + '<br>';
            }

            return src
        },
    },
    // legend: {
    //     data: ['利润', '支出', '收入']
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }

    ],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: function(value, index) {
                value =value<0? Math.abs(value) / 30:value
                return Math.round(value) //四舍五入取整
            }
        }
    }],
    series: [{
            name: '利润',
            type: 'bar',
            stack: '总量1',
            // label: {
            //     show: true,
            //     position: 'inside'
            // },
            data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量2',

            data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量1',
            // label: {
            //     show: true,
            //     position: 'left'
            // },
            // data: [-12, -13, -10, -13, -19, -23, -21]
            data: [-120, -130, -100, -130, -190, -230, -210] //10倍值
        },
        {
            name: '其他',
            type: 'bar',
            stack: '总量2',
            // label: {
            //     show: true,
            //     position: 'left'
            // },
            // data: [-12, -13, -10, -13, -19, -23, -21]
            data: [-120, -130, -100, -130, -190, -230, -210] //10倍值
        }
    ]
};