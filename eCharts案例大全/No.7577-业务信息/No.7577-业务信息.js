var cost = [ 201, 150, 230, 25] // 水位
var grade = ['平均响应时间', 'P99响应时间', '实例数量', '异常实例数量']
var data = {
    grade: grade,
    cost: cost,
};
option = {
    backgroundColor: '#fff',
    grid: {
        top: '550',
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
        barGap: '-97%',
        barWidth: '33%',
        barMinHeight:50,
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
                if(params.name == '平均响应时间' || params.name == 'P99响应时间') {
                    return  (+params.value) + ' ms'
                }
                return  (+params.value) + ' 个'
            }
        },
        labelLine: {
            show: true,
        },
        z: 2,
        data: data.cost,
    }]
}