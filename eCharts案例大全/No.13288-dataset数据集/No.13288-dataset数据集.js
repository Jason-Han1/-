option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['已完成', '未完成', '进行中']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },

    dataset: {
        // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
        // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
        dimensions: ['product', '已完成', '未完成', '进行中', '总任务数'],
        source: [{
                product: '组一',
                '已完成': 320,
                '未完成': 220,
                '进行中': 150,
                '总任务数': 690
            },
            {
                product: '组二',
                '已完成': 132,
                '未完成': 182,
                '进行中': 132,
                '总任务数': 446
            },
            {
                product: '组三',
                '已完成': 101,
                '未完成': 191,
                '进行中': 201,
                '总任务数': 493
            },
            {
                product: '组四',
                '已完成': 134,
                '未完成': 234,
                '进行中': 154,
                '总任务数': 522
            },
            {
                product: '组五',
                '已完成': 90,
                '未完成': 290,
                '进行中': 90,
                '总任务数': 470
            },
            {
                product: '组六',
                '已完成': 30,
                '未完成': 230,
                '进行中': 130,
                '总任务数': 390,
            }
        ]
    },
    xAxis: [{
        type: 'category',
        //data : ['财政局','审计局','统计局','国土局','发改委','国税局'],
        axisLabel: {
            interval: 0
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [

        {
            name: '已完成',
            type: 'bar',
            barWidth: '40%',

            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            stack: '报送状态',
            //data:[320, 132, 101, 134, 90, 30]
        },
        {
            name: '未完成',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            stack: '报送状态',
            //data:[220, 182, 191, 234, 290, 230]
        },
        {
            name: '进行中',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            stack: '报送状态',
            //data:[150, 132, 201, 154, 90, 130]
        },
        {
            name: '总任务数',
            type: 'bar',
            stack: '报送状态',
            label: {
                normal: {
                    offset: ['50', '800'],
                    show: true,
                    position: 'insideBottom'

                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(128, 128, 128, 0)'
                }
            },
            //data: [690, 446,  493,522,  470, 390]
        }
    ]
};