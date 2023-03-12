var cost = [2,3,3]//本期比上期（大于1按1处理）
var dataCost = [10.01,200,200]//真是的金额
var totalCost = [ 5,5, 5]//比例综合
var visits = [5, 5, 5,]//本期占总的百分比*100
var grade = ['R','SQL','Python']
var myColor = ['#21BF57','#56D0E3',  '#1089E7', '#F8B448','#F57474', ];
var data = {
    grade: grade,
    cost: cost,
    totalCost: totalCost,
    visits: visits,
    dataCost:dataCost
};
option = {
    backgroundColor: '#ffffff',
    title: {
        top: '2%',
        left: 'center',
        text: '编程语言',
        textStyle: {
            align: 'center',
            color: '#171B1F',
            fontSize: 18
        }
    },
    grid: {
        top: 20,
        left: 50,
        right: 50,
        bottom: 200,
        containLabel: true,
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            margin:30,
            show: true,
            color: '#171B1F',
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
                color: '#171B1F',
                fontSize: 14,
                formatter: 
                function(param) {
                    return data.visits[param.dataIndex];
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
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#6390F0',
                        },
                        {
                            offset: 1,
                            color: '#25EBE9',
                        },
                    ]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                },
            },
        max: 1,
        label: {
            normal: {
                show: true,
                color: '#ffffff',
                position: 'inside',
                fontSize: 14,
                formatter: '{c}'
            }
        },
        labelLine: {
            show: true,
        },
        z: 2,
        data: data.cost,
    }]
}