option = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        }
    },
    legend: {
        data:['成绩','专业排名'],
        x: 'left'
    },
    xAxis : [
        {
            type : 'category',
            axisLine: {onZero: false},
            data : [
                '{第1学期}', '{第2学期}','{第3学期}','{第4学期}','{第5学期}','{第6学期}','{第7学期}','{第8学期}'
            ]
        }
    ],
    yAxis: [
        {
            name: '成绩',
            type: 'value',
            max: 100
        },
        {
            name: '专业排名',
            nameLocation: 'start',
            max: 10,
            type: 'value',
            inverse: true
        }
    ],
    series: [
        {
            name:'成绩',
            type:'bar',
            data:[
                77,86,86,95,95,94,84,100
                ]
        },
        {
            name:'专业排名',
            type:'line',
            yAxisIndex:1,
            data: [
                 7,6,6,5,5,4,6,1
                ]
        }
    ]
};
