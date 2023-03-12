option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode : 'multiple',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
            ],
            markPoint: {
                symbol: 'pin',
                symbolSize:100,
                label:{
                    normal:{
                        show:true,
                        formatter:function(d){return d.name}
                    }
                },
                data: [
                    {name: '武汉',coord:[114.31,30.52]}
                ]
            }
        }
    ]
};