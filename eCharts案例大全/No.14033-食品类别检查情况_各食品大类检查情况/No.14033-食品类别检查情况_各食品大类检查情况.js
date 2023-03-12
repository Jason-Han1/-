option = {
    title: {
        text: '各食品大类检查情况',
    },
    backgroundColor:'#ffffff',
    legend: {
        align: 'left',
        left: 10,
        top:30,
        data: ['生产环节合格数','生产环节不合格数', '销售环节合格数','销售环节不合格数', '餐饮环节合格数','餐饮环节不合格数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['粮食及粮食制品','调味品','肉制品','乳制品','饮料','方便食品','饼干','罐头','冷冻饮品']
    },
    series: [
        {
            name: '生产环节合格数',
            type: 'bar',
            stack: '生产',
            color: ['#92697f'],
            data: [126, 302, 121, 334, 142, 330, 320,102,122]
        },
        {
            name: '生产环节不合格数',
            type: 'bar',
            stack: '生产',
            color: ['#c3a2b4'],
            data: [120, 63, 101, 134, 90, 230, 210,231,73]
        },
        {
            name: '销售环节合格数',
            type: 'bar',
            stack: '销售',
            color: ['#5b7d62'],
            data: [320, 82, 301, 123, 76, 233, 320,34,291]
        },
        {
            name: '销售环节不合格数',
            type: 'bar',
            stack: '销售',
             color: ['#95c19e'],
            data: [120, 73, 101, 134, 90, 230, 210,231,94]
        },
        {
            name: '餐饮环节合格数',
            type: 'bar',
            stack: '餐饮',
            color: ['#5498a2'],
            data: [78, 302, 301, 233, 390, 330, 320,231,33]
        },
        {
            name: '餐饮环节不合格数',
            type: 'bar',
            color: ['#9ad3dc'],
            stack: '餐饮',
            data: [84, 34, 123, 134, 90, 230, 122,34,291]
        }
        
    ]
};