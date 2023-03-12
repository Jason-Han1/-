option = {
    color: ["#F86464", "#19DC7C", "#34A6FE", "#FA9022", "#DCDB01", "#8C70F8", "#2A4AD1", "#E76FE3", "#5032C0", "#168FB2"],
    grid: {
        left: '2%',
        top: '1%',
        bottom: 10,
        right: '1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 14
        },
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        bottom: '5%',
        textStyle: {
            color: '#333',
            fontSize: 14
        },
        itemWidth: 16,
        itemHeight: 8,
        data: ['数据1', '数据2', '数据3', '数据4', '数据5', '数据6', '数据7']
    },
    calculable: true,
    series: [
        {
        type: 'pie',
        radius: ["6%", "8%"],
        center: ['55%', '35%'],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#68c5ff"
                }
            }
        }]
    }, 
    {
        type: 'pie',
        radius: ["49.5%", "50%"],
        center: ['55%', '35%'],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        name: "",
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#0674bf"
                }
            }
        }]
    }, {
        stack: 'a',
        type: 'pie',
        radius: ['20%', '40%'],
        center: ['55%', '35%'],
        roseType: 'area',
        zlevel: 10,
        label: {
            normal: {
                formatter: '{d}%',
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -50],
                height: 40,
                fontSize: 12,
                align: 'center',
                rich: {
                    b: {
                        fontSize: 13,
                        lineHeight: 5,
                        color: '#41B3DC'
                    }
                }
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [
            {
                value: 5,
                name: '数据1'
            },
            {
                value: 15,
                name: '数据2'
            },
            {
                value: 25,
                name: '数据3'
            },
            {
                value: 20,
                name: '数据4'
            },
            {
                value: 35,
                name: '数据5'
            },
            {
                value: 35,
                name: '数据6'
            },
            {
                value: 35,
                name: '数据7'
            }
        ]
    }, ]
};