var totalCost = [5, 5, 5, 5, 5, 5, 5, 5]; //背景色比例
var visits = [4, 3, 2, 4, 3, 2, 4, 1]; //数值
var grade = ['经营能力', '财务水平', '发展能力', '企业形象', '产品/服务口碑', '组织情况', '高管情况', '资本动态'];
var data = {
    grade: grade,
    totalCost: totalCost,
    visits: visits,
};
option = {
    backgroundColor: '#2E3B51',
    grid: {
        top: 30,
        left: 50,
        right: 50,
        bottom: 30,
        containLabel: true

    },
    tooltip: {
        show: false
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#C5C9D1'
            }
        }
        
    },
    xAxis: [{
        type: 'category',

        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 90,
            textStyle: {
                align: 'center',
                fontSize: 14,
                fontWeight: 'bold',
                color: '#C5C9D1'
            },
        },
        data: data.grade
    }, {
        type: 'category',

        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: data.visits
    }, ],
    series: [{

            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#3F4E6C',
                    barBorderRadius: 0,
                    borderWidth: 0,
                    borderColor: '#fff',
                }
            },
            barWidth: '30%',

            data: data.totalCost
        },
        {

            type: 'bar',

            itemStyle: {
                normal: {
                    show: true,
                    color: '#1F8EFA',
                    barBorderRadius: 0,
                    borderWidth: 0,
                    borderColor: '#fff',
                }
            },
            label: {
                
                normal: {
                    show: false,
                }
            },
            barWidth: '30%',

            data: data.visits
        }

    ]
};