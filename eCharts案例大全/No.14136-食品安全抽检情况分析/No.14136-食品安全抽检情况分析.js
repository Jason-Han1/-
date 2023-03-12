option = {
    title: {
        text: '柳州市各食品大类检查情况',
        subtext: '数据来自网络'
    },
    backgroundColor:'#ffffff',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
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
            
            data: [126, 302, 121, 334, 142, 330, 320,102,122]
        },
        {
            name: '生产环节不合格数',
            type: 'bar',
            stack: '生产',
            
            data: [120, 63, 101, 134, 90, 230, 210,231,73]
        },
        {
            name: '销售环节合格数',
            type: 'bar',
            stack: '销售',
            
            data: [320, 82, 301, 123, 76, 233, 320,34,291]
        },
        {
            name: '销售环节不合格数',
            type: 'bar',
            stack: '销售',
            
            data: [120, 73, 101, 134, 90, 230, 210,231,94]
        },
        {
            name: '餐饮环节合格数',
            type: 'bar',
            stack: '餐饮',
            
            data: [78, 302, 301, 233, 390, 330, 320,231,13]
        },
        {
            name: '餐饮环节不合格数',
            type: 'bar',
            stack: '餐饮',
            data: [84, 34, 123, 134, 90, 230, 122,34,291]
        }
        
    ]
};