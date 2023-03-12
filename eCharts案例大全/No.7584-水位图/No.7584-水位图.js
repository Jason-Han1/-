var cost = [0.2, 0.201, 1, 0.23, 0.25] // 水位
var totalCost = [1, 1, 1, 1, 1, 1] //水位最大值 1
var visits = [92, 102, 89, 23, 45] //利用率
var grade = ['CPU', '内存', '共享内存', 'NET IN', 'NET OUT']
var data = {
    grade: grade,
    cost: cost,
    totalCost: totalCost,
    visits: visits,
};
option = {
    backgroundColor: '#fff',
    grid: {
        left: '150',
        right: '200'
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {
            margin: 20,
            show: true,
            color: '#888',
            fontSize: 14
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: data.grade
    },
    series: [{
        type: 'bar',
        barGap: '-100%',
        label: {
            normal: {
                show: true,
                position: 'right',
                color: '#4DCEF8',
                fontSize: 14,
                formatter: function(param) {
                    return '利用率：' + data.visits[param.dataIndex] + '%';
                },
            }
        },
        barWidth: '35%',
        itemStyle: {
            normal: {
                borderColor: '#4DCEF8',
                borderWidth: 2,
                barBorderRadius: 15,
                color: 'rgba(102, 102, 102,0)'
            },
        },
        z: 1,
        data: data.totalCost,
    }, {
        type: 'bar',
        barGap: '-97%',
        barWidth: '33%',
        barMinHeight:80,
        itemStyle: {
            normal: {
                barBorderRadius: 16,
                color: {
                    type: 'linear',
                    x: 0,
                    x1: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#02ddff'
                    }, {
                        offset: 1,
                        color: '#00feff'
                    }]
                },
            },
        },
        max: 1,
        label: {
            show: true,
            position: 'insideRight',
            color: '#666',
            fontSize: 14,
            formatter: (params) => {
                return '水位: ' + (+params.value)*100 + '%'
            }
        },
        labelLine: {
            show: true,
        },
        z: 2,
        data: data.cost,
    }]
}