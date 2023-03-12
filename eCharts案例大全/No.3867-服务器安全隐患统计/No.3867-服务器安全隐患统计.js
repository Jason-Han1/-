var cost = [61, 94, 97,100]//本期比上期（大于1按1处理）
var totalCost = [ 100,100, 100, 100,100]//比例综合
var visits = [1144, 3925, 40,17]//本期占总的百分比*100
//1144   剩余444  完成700
//新增189  
var grade = ['Windows服务器补丁','Windows服务器基线','Linux服务器漏洞','Linux服务器基线' ]
var myColor = ['#21BF57','#F57474',  '#1089E7', '#F8B448' ];
var data = {
    grade: grade,
    cost: cost,
    totalCost: totalCost,
    visits: visits,

};
option = {
    backgroundColor: '#fff',
    title: {
        top: '2%',
        left: 'center',
        text: '服务器安全隐患统计',
        textStyle: {
            align: 'center',
            color: '#4DCEF8',
            fontSize: 30
        }
    },
    grid: {
        left: '230',
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
            color: '#4400CC',
            fontSize: 20
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
                color: '#E60000',
                fontSize: 20,
                formatter: 
                function(param) {
                    return data.visits[param.dataIndex] +'';
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
                formatter: '{c}%',
                fontSize: 20
            }
        },
        labelLine: {
            show: true,
        },
        z: 2,
        data: data.cost,
    }]
}