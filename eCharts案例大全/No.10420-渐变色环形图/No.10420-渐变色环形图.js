app.title = '环形图';

option = {
    legend: {
        show: false
    },
    series: [
        {
            type:'pie',
            radius: ['50%', '65%'],
            avoidLabelOverlap: false,
            silent: true,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                borderWidth: 4,
                borderColor: '#fff'
            },
            data:[
                {
                    value:20,
                    itemStyle: {
                        color: '#d3d8e2'
                    }
                },
                {
                    value:20,
                    itemStyle: {
                        color: '#d3d8e2'
                    }
                },
                {
                    value:20,
                    itemStyle: {
                        color: '#d3d8e2'
                    }
                },
                {
                    value:20,
                    itemStyle: {
                        color: '#d3d8e2'
                    }
                },
                {
                    value:20,
                    itemStyle: {
                        color: '#d3d8e2'
                    }
                }
            ]
        },
        {
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: true
            },
            labelLine: {
                show: false
            },
            data:[
                {
                    value:48,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(26,239,192,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(222,255,164,0.28)'
                        }])
                    }
                },
                {
                    value:52,
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        }
    ]
};
