var cost = [50, 20.1, 65, 70, 30.1] //占总的百分比（大于100%按100%处理）
var dataCost = [10.01, 200, 200, 1000.01, 2000] //真是的金额
var totalCost = [100, 100, 100, 100, 100] //比例综合100%
var visits = [24, 76, 89, 92, 22] //总的任务值(万元)
var grade = ['团队05', '团队04', '团队03', '团队02', '团队01', ]
var myColor = ['#21BF57', '#56D0E3', '#1089E7', '#F8B448', '#F57474', ];
var data = {
    grade: grade,
    cost: cost,
    totalCost: totalCost,
    visits: visits,
    dataCost: dataCost
};
option = {
    backgroundColor: '#05274C',
    title: {
        top: '2%',
        left: 'center',
        text: '进度完成率',
        textStyle: {
            align: 'center',
            color: '#4DCEF8',
            fontSize: 18
        }
    },
    grid: {
        left: '130',
        right: '100'
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            margin: 30,
            show: true,
            color: '#4DCEF8',
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
        barGap: '-65%',
        label: {
            normal: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 14,
                formatter: function(param) {
                    return data.visits[param.dataIndex] + '万';
                },
            }
        },
        barWidth: '30%',
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
        // data: da
    }, {
        type: 'bar',
        barGap: '-85%',
        barWidth: '21%',
        itemStyle: {
            normal: {
                barBorderRadius: 16,
                color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
            }
        },
        max: 1,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
            }
        },
        labelLine: {
            show: true,
        },
        z: 2,
        data: data.cost,
    }]
}