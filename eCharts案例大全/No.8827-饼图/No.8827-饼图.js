option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
 
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
              color: 'transparent',
              borderWidth: 2,
             
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: '直接访问', itemStyle: {borderColor: 'red'}},
                {value: 310, name: '邮件营销',itemStyle: { borderColor: 'green'}},
                {value: 234, name: '联盟广告', itemStyle: { borderColor: 'blue'}},
  
            ]
        }
    ]
};
