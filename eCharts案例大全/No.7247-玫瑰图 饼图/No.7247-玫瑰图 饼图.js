option = {
    backgroundColor:"#0B1837",
    color: ["#019CFF", "#33C74D", "#F7E71B", "#19D6EC"],
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    
    calculable: true,
    series: [{
        type: 'pie',
        radius: ["16%", "17%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
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
                    color: "#0B4A6B"
                }
            }
        }]
    },{
        type: 'pie',
        radius: ["0%", "13%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
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
                    color: "#3A496D"
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ["60%", "61%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
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
                    color: "#0B4A6B"
                }
            }
        }]
    },{
        stack: 'a',
        type: 'pie',
        radius: ['20%', '50%'],
        roseType: 'area',
        zlevel:10,
        label: {
            normal: {
                show: true,
                formatter: function(params){
                    return params.value+'\n'+params.name
                },
                textStyle: {
                    fontSize: 28,
                },
                position: 'outside'
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 55,
                lineStyle:{
                    width:3
                }
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 10,
                name: '消缺'
            },
            {
                value: 15,
                name: '大修技改'
            },
            {
                value: 18,
                name: '基建'
            },
            {
                value: 25,
                name: '例行试验'
            }
        ]
    }, ]
}