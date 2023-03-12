option = {
    title: {
        text: '2016年12月长宁区合规成本分析'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['包租费', '装修费', '保洁费', '物业费'],
        align: 'right',
        right: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北']
    }],
    yAxis: [{
        type: 'value',
        name: '总价(万元)',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
            name: '包租费',
            type: 'bar',
            itemStyle: {
                color: '#c12e34'
            },
            markLine:{
                data:[
                    [{coord:[0,20]},{coord:[1,12],symbol:'circle'}],
                  [{coord:[1,12]},{coord:[2,31],symbol:'circle'}],
                  [{coord:[2,31]},{coord:[3,34],symbol:'circle'}],
                  [{coord:[3,34]},{coord:[4,31],symbol:'circle'}]
                    ]
            },
            data: [20, 12, 31, 34, 31]
        },
        {
            name: '装修费',
            type: 'bar',
            itemStyle: {
                color: '#cda819'
            },
            data: [10, 20, 5, 9, 3],
             markLine:{
                data:[
                    [{coord:[0,10]},{coord:[1,20],symbol:'circle'}],
                  [{coord:[1,20]},{coord:[2,5],symbol:'circle'}],
                  [{coord:[2,5]},{coord:[3,9],symbol:'circle'}],
                  [{coord:[3,9]},{coord:[4,3],symbol:'circle'}]
                    ]
            },
        }
    ]
};