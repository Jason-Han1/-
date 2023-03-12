option = {
    title: {
        text: '饼图+柱状图',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    grid: { //控住柱状图
        left: 406,
        right: 42,
        bottom: 26,
        containLabel: true
    },
    color: ['#005587', '#62B5E5', '#75787B'],
    legend: {
        // left: 10,
        itemWidth: 13, //设置方块的宽
        itemHeight: 13,
        bottom: 10,
        left: 5,
        data: ['省级城投数量', '市级城投数量', '区县级城投数量']
    },
    xAxis: [{
        // gridIndex: 1,
        type: 'category',
        data: ['北京', '上海', '广州', '深圳', '重庆', '武汉', '江苏'],
        axisLabel: {
            interval: 0,
            rotate: 90
        },
    }],
    yAxis: [{
        // gridIndex: 1,
        name: "企业数量",
        type: 'value'
    }],
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: [41, 82],
            center: ['18%', '50%'],
            // left: 30,
            // width: 390,
            label: {
                formatter: '{c} ({d}%)'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',

            },
            data: [{
                    value: 335,
                    name: '省级城投数量'
                },
                {
                    value: 310,
                    name: '市级城投数量'
                },
                {
                    value: 234,
                    name: '区县级城投数量'
                },

            ],

        },
        {
            name: '省级城投数量',
            type: 'bar',
            stack: '广告',
            barWidth: 8,
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '市级城投数量',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '区县级城投数量',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
        },

    ]
};