var chartName=['2015','2016','2017'];
var chartData=[53.83,50.42,32.37];
var chartColor=['#000','#422222','blue'];
var data=[];
for(var i=0;i<chartData.length;i++){
        var tmp = {
                "value": chartData[i],
                "name": chartName[i],
                "itemStyle": {
                    "normal": {
                        "color": chartColor[i]
                    }
                }
            };
    data.push(tmp)
}
for(var i=0;i<9;i++){
        var tmp = {
                "value": 0,
                "name": "",
                "label":{
                    show:false
                },
                "labelLine": {
                    "show": false,
                }
            };
    data.push(tmp)
}
option = {
    backgroundColor: 'rgb(43, 51, 59)',
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    "tooltip": {
        "trigger": "item",
        "formatter": "{a}<br/>{b}:{c}千万元"
    },

    "calculable": true,
    // "legend": {
    //     "icon": "circle",
    //     "x": "center",
    //     "y": "15%",
    //     "data": chartName,
    //     "textStyle": {
    //         "color": "#fff"
    //     }
    // },
    "series": [{
        "name": "XX线索",
        "type": "pie",
        "radius": [
            30,
            155
        ],
        "avoidLabelOverlap": false,
        "startAngle": 0,
        "center": [
            "50.1%",
            "34%"
        ],
        "roseType": "area",
        "selectedMode": "single",
        "label": {
            "normal": {
                "show": true,
                "formatter": "{b}\n{c}千万元"
            },
            "emphasis": {
                "show": true
            }
        },
        "labelLine": {
            "normal": {
                "show": true,
                "smooth": false,
                "length": 20,
                "length2": 10,
            },
            "emphasis": {
                "show": true
            }
        },
        "data": data
    }]
};