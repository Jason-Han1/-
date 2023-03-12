option = {
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '56%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return ['#94ea87','#ffa048'][params.dataIndex]
                    }
                }
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
            ]
        }
    ]
};