option = {
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false
            },
            itemStyle:{
               color:{
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0.05,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#7D0425' // 0% 处的颜色
                    },{
                        offset: 0.25, color: '#9F004A' // 0% 处的颜色
                    },{
                        offset: 0.5, color: '#FF3E00' // 0% 处的颜色
                    }, {
                        offset: 0.75, color: '#FFF200' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#04FF00' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
               }
            },
            data: [
                {value: 1048, name: '搜索引擎',},
            ]
        }
    ]
};