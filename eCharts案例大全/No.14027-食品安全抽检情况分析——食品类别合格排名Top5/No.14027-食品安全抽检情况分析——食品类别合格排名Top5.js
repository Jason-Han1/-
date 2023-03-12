option = {
    title: {
        text: '食品类别合格排名Top5',
    },
    backgroundColor:'#ffffff',
    legend: {
        align: 'left',
        left: 10,
        top:30,
        data: ['生产环节合格数', '销售环节合格数', '餐饮环节合格数']
    },
    grid: {
        left: '3%',
        right: '34%',
        bottom: '43%',
        containLabel: true
    },
    yAxis:  {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['粮食及粮食制品','调味品','肉制品','乳制品','饮料']
    },
    series: [
        {
            name: '生产环节合格数',
            type: 'bar',
            barWidth:25,
            stack: '总量',
            color: ['#12a10b'],
            data: [76, 54, 47,35, 32]
        },
        {
            name: '销售环节合格数',
            type: 'bar',
            stack: '总量',
            color: ['#6ebc6a'],
            data: [87, 82, 75, 63, 56]
        },
        {
            name: '餐饮环节合格数',
            type: 'bar',
            stack: '总量',
            color: ['#a7d9a4'],
            data: [78, 67, 54, 53, 49]
        }
    ]
};