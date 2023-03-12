var dataArr =[{
                "value": 20,
                itemStyle: {
                    normal: {
                        color: "transparent"
                    }
                }

            },
            {
                "value": 80,
                itemStyle: {
                    normal: {
                        color: "#00C0FF"
                    }
                }
            },
            ];
var option = {
    backgroundColor:'#000',
     title: {
        text: '未达标',
        y: 'center',
        x: 'center',
        textStyle: {
            color: '#FE7853',
            fontSize:50,
            fontWeight:'600'
        }
    },
    series: [
        {
            // "name": '饼图',
            "type": 'pie',
            "radius": ['45%', '54%'],
            clockwise:false,
            "avoidLabelOverlap": false,
            "color": ["#9f8fc1"],
            "hoverAnimation": false,
            "legendHoverLink": false,
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
            "data": dataArr
        },
        {
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["45%", "44.5%"],
        "hoverAnimation": false,
        "data": [{
            "name": "",
            "value": 45,
            "z": 5,
            "labelLine": {
                "show":false,
                "length2": 80,
                "lineStyle": {
                    "color": "#fffff",
                    "width": 1.5
                }
            },
            itemStyle:{
                normal:{
                    color:'#3EAADB'
                    // shadowColor: 'rgba(79,175,226,1)',
                    // shadowBlur: 20
                }
            },
            label: {
                normal: {
                position: 'inner',//隐藏引导线
                show : false//隐藏标识文字
                }
            }
        },
        ]
    },
    {
        // 底圈
        type: 'pie',
        radius: '54%',
        center: ['50%', '50%'],
        color: '#165DAD',
        data:[100],
        hoverAnimation:false,
        roseType: 'radius',
        itemStyle: {
            borderWidth: '20',
            color: 'pink',
            borderColor: '#FFF',
            normal: {
                // borderWidth: '10',
                // borderColor: 'rgba(0,0,0,2)',
            },
        },
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        z:1
    },
    ]
};