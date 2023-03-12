let value = 0.89;
let color = [[value, '#15ffff'], [1, '#ffb2ad']];
option = {
    backgroundColor: "none",
    tooltip: {
        formatter: "{b}{c}"
    },
    series: [ {
        tooltip: {
            show: false
        },
        "name": 'wrap',
        "type": 'pie',
        "hoverAnimation": false,
        "legendHoverLink": false,
        center: ['50%','60%'],
        "radius": ['2%', '3%'],
        "z": 5,
        "label": {
            "normal": {
                "show": false,
                "position": 'center'
            },
            "emphasis": {
                "show": false
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "data": [{
            "value": 100,
            itemStyle: {
                normal: {
                    color: "#24D8E7"
                },
                emphasis: {
                    color: "#24D8E7"
                }
            }
        }]
    },{
        name: '占比',
        type: 'gauge',
        radius: '70%',
        min: 0,
        max: 1,
        center: ['50%','60%'],
        data: [{
            value: value,
            name: '占比'
        }],
        splitNumber: 10, //刻度数量
        startAngle: 180,
        endAngle: 0,
        z: 5,
        axisLine: {
            show: true,
            lineStyle: {
                width: 0,
                color: color,
            }
        }, //仪表盘轴线
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize:20,
            distance: -70,
            formatter:function(params){
                var value = params.toFixed(2)
                
                if(value == 0.00){
                    return '男'
                }else if(value == 1.00){
                    return '女'
                }else{
                    return ''
                }
            }
        }, //刻度标签。
        axisTick: {
            splitNumber: 10,
            show: true,
            lineStyle: {
                color: 'auto',
                width: 3
            },
            length: 30,
        }, //刻度样式
        splitLine: {
            show: true,
            length: 35,
            lineStyle: {
                color: 'auto',
                width: 5
            }
        }, //分隔线样式

        "itemStyle": {
            "normal": {
                "color": "#fff" //指针颜色
            }
        },
        pointer: {
            width: 10,
            length: '80%'
        },
        detail: {
            formatter: function(params){
                return (params*100).toFixed(0) + '%'
            },
            fontSize: 50,
            color: "#fff",
            offsetCenter: ['0%', '-35%']
        },
        title: {
            offsetCenter: ['0', '-60%'], 
            fontSize: 40,
            color: "#fff",
            show: true
        },
    }]
};