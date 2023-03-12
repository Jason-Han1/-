option = {
    backgroundColor: "#FFFFFF",
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {

    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        
    },
    xAxis: {
        type: 'value',
     show: false
    },
    yAxis: {
        type: 'category',
        data: ['淘汰','保留','灵活敏捷','新陈代谢','信心指数','员工治理健康度','流程支持','员工思维健康度','信息沟通','文化价值观','组织运作','绩效激励','员工能力健康度','执行','培训发展','质量','人才招聘','成本','创新','敏捷','客户导向'
]
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
            barWidth:20,
            label: {
                show: true,
                position: 'insideRight'
            },
            itemStyle: {
                         color:"#698ACF"
                    },
            data: [31.9,34,33.5,37.7,35.6,34.5,33.5,33.6,35.7,34.3,32.1,36.9,48.3,35,30.4,48.5,33.4,46.2,39,54.5,39.3,33.4,56.3]
        },
        {
            name: '中立',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight',
                
            },
                        itemStyle: {
                         color:"#D8E3F5"
                    },
            data: []
        },
        {
            name: '不赞成',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },  
            itemStyle: {
                         color:"#FFD65A"
                    },
            data: []
        },

    ]
};