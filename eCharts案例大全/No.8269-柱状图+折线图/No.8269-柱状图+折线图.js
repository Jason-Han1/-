option = {
    title: {
        text: '折线图+柱状图',
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
        // left: 406,
        // right: 42,
        bottom: 40,
        containLabel: true
    },
    color: ['#005587', '#62B5E5', '#75787B', '#86bc25'],
    legend: [{
            // left: 10,
            itemWidth: 13, //设置方块的宽
            itemHeight: 13,
            bottom: 10,
            left: 5,
            data: ['省级城投数量', '市级城投数量', '区县级城投数量']
        },
        {
            // left: 10,
            itemWidth: 19, //设置方块的宽
            itemHeight: 4,
            bottom: 10,
            // left: 900,
            // color: ['#86bc25'],
            // x:'right',
            data: [{
                name: '企业数量累计占比',
                icon:"rect"
            }]
        },
    ],
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
            // gridIndex: 0,
            name: "企业数量",
            type: 'value'
        },
        {
            //   gridIndex: 1,
            name: "累计占比",
            type: 'value'
        }
    ],
    series: [

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
        // {
        //     name: '企业数量累计占比',
        //     type: 'bar',
        //     stack: '广告',
        //     data: [0, 0, 0, 0, 0, 0, 0]
        // },
        {
            name: '企业数量累计占比',
            type: 'line',
            // radius: [41, 82],
            // // center: ['15%', '50%'],
            // left: 30,
            // width: 390,
            yAxisIndex: 1,
            // label: {
            //     formatter: '{c} ({d}%)'
            // },
            tooltip: {
                trigger: 'item',
                // formatter: '{a} <br/>{b}: {c} ({d}%)',

            },
            data: [10, 20, 40, 40, 60, 80, 100],

        },

    ]
};