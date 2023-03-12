option = {
    backgroundColor: '#4ba4ba',
    title: {
        text: 'GPA',
        x: 'left',
        textStyle: {
            color: '#fff',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },

    legend: {
        data: [{
            name: '平均GPA',
            textStyle: {
                color: '#fff'
            }
        }, ]
    },
    grid: {
        y2: 100
    },

    xAxis: [{
        type: 'category',
        data: ['国际关系学院', '华西口腔医学院', '电气信息学院', '华西基础医学与法医学院', '电子信息学院', '公共管理学院', '商学院', '体育学院', '地理与环境科学学院', '初等教育学院', '文学院', '建筑与环境学院', '艺术学院', '水利水电学院', '马克思主义学院', '华西第二医院', '灾后重建与管理学院', '制造科学与工程学院', '经济学院'],
        axisLine: {
            lineStyle: {
                color: "#024"
            }
        },
        axisPointer: {
            type: 'shadow'
        },
        axisLabel: {
            rotate: -35,
            showMinLabel: 'ture',
            showMaxLabel: 'ture',
        }
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#024"
            }
        },
        name: '',
        min: 2,
        max: 3.2,
        interval: 0.2,
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '平均GPA',
        type: 'bar',
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        data: [2.75, 2.99, 2.9, 2.68, 2.57, 2.8, 2.78, 2.1, 2.6, 2.6, 2.1, 2.1, 2.1, 2.2, 2.2, 2.8, 3.1, 3.1, 3.2]
    }]
};