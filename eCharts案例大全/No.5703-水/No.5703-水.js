var placeHolderStyle = {
    normal: {
        // label: {
        //     show: false,
        // },
         label: {
                show: true,
                position: 'inside',
                color: '#ffff',
                formatter: function(params) {
                    return params.value;
                }
            },
        labelLine: {
            show: false,
        }
    }
};
option = {
     backgroundColor: "#344b58",
    "title": {
        "text": "水",
        "x": "center",
        textStyle: { //主标题样式
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20
        },
    },
      label: {
                show: true,
                position: 'inside',
                color: '#ffff',
                formatter: function(params) {
                    return params.value;
                }
            },
    "tooltip": {
        "trigger": "item",
        // "formatter": "{a} <br/>{b} : {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "data": ["图1", "图2"],
         textStyle: {
            color: '#fff'
        },
    },
     color: ['#5DC4C4', '#C43CA9', '#053afe'], 
    "series": [{
        "name": "图1",
        "type": "pie",
        clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
        // "radius": ["45%", "50%"],
          radius: ['65%', '85%'],//控制环的大小前内后外
           itemStyle: placeHolderStyle,
        "data": [{
            "value": 90,
            "name": "图1",
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)",
                    "normal": {
                        "color": "#dc1439"
                    }
                }
            }
        }, {
            "value": 100,
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
                 label: {
                show: false,
                position: 'inside',
                color: '#ffff',
                formatter: function(params) {
                    return params.value;
                }
            },
        }]
    }, {
        "name": "图2",
        "type": "pie",
        clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
        // "radius": ["55%", "60%"],
         radius: ['40%', '60%'],//控制环的大小前内后外
          itemStyle: placeHolderStyle,
        "data": [{
            "value": 80,
            "name": "图2",
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)",
                    "normal": {
                        "color": "#dc1439"
                    }
                }
            }
        }, {
            "value": 100,
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
                 label: {
                show: false,
                position: 'inside',
                color: '#ffff',
                formatter: function(params) {
                    return params.value;
                }
            },
        }]
    }]
}