option = {
    tooltip: {
        trigger: 'axis',
        formatter(params){
            let str = params[0].name
            for(let i = 0; i < params.length; i++){
                str +=  '<br />'+params[i].seriesName + ': ' + params[i].value
            }
            return str
        },
        backgroundColor: 'rgba(255, 68, 2, 0.1)',
        borderColor: 'rgba(250, 193, 53, 1)',
        borderWidth: 2
    },
    legend: {
        orient: "horizontal",
        top: "4",
        right: "84",
        itemWidth: 22,
        itemHeight: 7,
        itemGap: 40,
        textStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 0
        },
        data: [{
            name: '平均值',
            icon: 'rect',
        },{
            name: '月线',
            icon: 'rect',
        }]
    },
    color: ['#ff5a0c','#000'],
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '月线',
            data: [820, 840, 800, 720, 920, 880, 760],
            type: 'line',
            symbol: 'circle',
            symbolSize: 18,
            showSymbol: false,
            itemStyle: {
                color: function(params){
                let dataIndex = params.dataIndex
                let statu = 'dowm'
                let colors = {
                    up: ['rgba(89, 255, 128, 1)', 'rgba(89, 255, 128, 0.5)', 'rgba(89, 255, 128, 0.25)'],
                    dowm: ['rgba(255, 255, 255, .5)', 'rgba(235, 97, 0, 0.5)', 'rgba(235, 97, 0, 0.25)']
                }
                return {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [
                        {
                            offset: 0, color: colors[statu][0] // 0% 处的颜色
                        },
                        {
                            offset: 0.33, color: colors[statu][0] // 33% 处的颜色
                        },
                        {
                            offset: 0.34, color: colors[statu][1] // 34% 处的颜色
                        },
                        {
                            offset: 0.66, color: colors[statu][1] // 66% 处的颜色
                        },
                        {
                            offset: 0.67, color: colors[statu][2] // 67% 处的颜色
                        },
                        {
                            offset: 1, color: colors[statu][2] // 100% 处的颜色
                        }
                    ],
                }
                }
            },
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FFC435' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FF4302' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                width: 4
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(235, 97, 0, 0.25)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(235, 97, 0, 0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name: '平均值',
            data: [820, 820, 820, 820, 820, 820, 820],
            type: 'line',
            symbol: 'circle',
            symbolSize: 18,
            showSymbol: false,
            tooltip: {
                show: false
            },
            markPoint: {
                symbol: 'rect',
                symbolSize: [22,7],
                symbolOffset: [660,0],
                label: {
                    position: 'right',
                    formatter: '{c}',
                    align: 'left'
                },
                data: [
                    {name: '平均值',type: 'average'}
                ]
            },
            itemStyle:{
                normal:{
                    lineStyle:{
                        width: 1,
                        type: 'dashed'
                    }
                }
            }, 
        }
    ]
};
