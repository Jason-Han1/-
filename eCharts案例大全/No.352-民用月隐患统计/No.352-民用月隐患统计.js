var cost = [0.5, 0.201, 0.6,0.7, 0.301, 0.8,0.4]//本期比上期（大于1按1处理）
var dataCost = [10.01,200,200,1000.01,200000,200,200000]//真是的金额
var totalCost = [ 1,1, 1, 1,1]//比例综合
var visits = [24, 76, 89,92, 22, 89,92]//本期占总的百分比*100
var grade = ['5级隐患','4级隐患','3级隐患','2级隐患','1级隐患', ]
var myColor = ['#21BF57','#56D0E3',  '#1089E7', '#F8B448','#F57474', ];
var data = {
    grade: grade,
    cost: cost,
    totalCost: totalCost,
    visits: visits,
    dataCost:dataCost
};
option = {
    backgroundColor: '#05274C',
    title: {
        top: '2%',
        left: 'center',
        text: '民用月隐患统计',
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
            margin:30,
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
                formatter: 
                function(param) {
                    return data.visits[param.dataIndex] +'%';
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