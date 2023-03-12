var trafficWay = [{
    name: '正常',
    value: 14294,
     "itemStyle":{
                        "normal":{
                            "borderWidth":5,
                            "borderRadius":20,
                            "shadowBlur":20,
                            "borderColor":"#0AF2FE",
                            "shadowColor":"#0AF2FE"
                        }
                    }
},{
    name: '报警',
    value: 314,
         itemStyle:{
                        "normal":{
                            "label":{
                                "show":false
                            },
                            "labelLine":{
                                "show":false
                            },
                            "color":"rgba(0, 0, 0, 0)",
                            "borderColor":"rgba(0, 0, 0, 0)",
                            "borderWidth":0
                        }
                    }
},{
    name: '离线',
    value: 5137,
     "itemStyle":{
                        "normal":{
                            "borderWidth":5,
                            "borderRadius":20,
                            "shadowBlur":20,
                            "borderColor":"#FE2D19",
                            "shadowColor":"#FE2D19"
                        }
                    }
},{
    name: '故障',
    value: 245,
     itemStyle:{
                        "normal":{
                            "label":{
                                "show":false
                            },
                            "labelLine":{
                                "show":false
                            },
                            "color":"rgba(0, 0, 0, 0)",
                            "borderColor":"rgba(0, 0, 0, 0)",
                            "borderWidth":0
                        }
                    }
}];

var data = [];
var color=['#00ffff','#409B5C','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
for (var i = 0; i < trafficWay.length; i++) {
    data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: trafficWay[i].itemStyle
    });
}
var seriesOption = [{
    
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [105, 109],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: false,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < trafficWay.length; i++) {
                        total += trafficWay[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if(params.name !== '') {
                        return '设备状态：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                    }else {
                        return '';
                    }
                },
            },
            labelLine: {
                length:30,
                length2:100,
                show: true,
                color:'#00ffff'
            }
        }
    },
    data: data
}];
option = {
    backgroundColor: '#0A2E5D',
    color : color,
    title: {
        text: '关联状态',
        top: '48%',
        textAlign: "center",
        left: "49%",
        textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: '400'
        }
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}
