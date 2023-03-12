option = {
    backgroundColor: '#051d40',
    title: {
        text: '80%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#33cbd1',
            fontSize: '25'
        }
    },
    "color": ["#33cbd1", "#313131"],
    "series": [{
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["25%", "60%"],
        "hoverAnimation": false,
        "data": [{
            "name": "",
            "value": 45,
            "z": 5,
            "labelLine": {
                "show":false,
                "length2": 80,
                "lineStyle": {
                    "color": "#3cefff",
                    "width": 1.5
                }
            },
            label: {
                normal: {
                position: 'inner',//隐藏引导线
                show : false//隐藏标识文字
                }
            }
        }, {
            "name": "",
            "value": 55,
            "labelLine": {
                "show": false,
                "emphasis": {
                    "show": false
                }
            }
        }
        ]
    },{
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["65%", "66%"],
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
                    shadowColor: 'rgba(79,175,226,1)',
                    shadowBlur: 20
                }
            },
            label: {
                normal: {
                position: 'inner',//隐藏引导线
                show : false//隐藏标识文字
                }
            }
        }, {
            "name": "",
            "value": 55,
            "labelLine": {
                "show": false,
                "emphasis": {
                    "show": false
                }
            },
            label: {
                normal: {
                position: 'inner',//隐藏引导线
                show : false//隐藏标识文字
                }
            },
            itemStyle:{
                normal:{
                    color:"rgba(0,0,0,0)"
                }
            }
        }
        ]
    }]
}