
option = {

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
    color: ['#8d7fec', '#5085f2', '#e75fc3'],
    legend: {
        // left: 10,
        itemWidth: 13, //设置方块的宽
        itemHeight: 13,
        bottom: 10,
        left: 'right',
        top: 25,
        data: ['男性', '女性', '未知']
    },
    xAxis: [{
        // gridIndex: 1,
        type: 'category',
        data: ['美团', '饿了么', '饭盟小店'],
        axisLabel: {
            interval: 0,
            rotate: 90
        },
    }],
    yAxis: [{
        // gridIndex: 1,
        name: "总客户数",
        type: 'value'
    }],
    series: [{
            name: '性别',
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
                    name: '男性'
                },
                {
                    value: 310,
                    name: '女性'
                },
                {
                    value: 234,
                    name: '未知'
                },

            ],

        },
        {
            name: '男性',
            type: 'bar',
            stack: '广告',
            barWidth: 50,
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '女性',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '未知',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
        },

    ]
};