//数据
var data ={
            "total": 2268,
            "data": [
                {"name": "黄色预警", "value": 234},
                {"name": "橙色预警", "value": 678},
                {"name": "红色预警", "value": 456},
                {"name": "蓝色预警", "value": 900}
            ]
        }
var labelData = [];
var scale=64/data.total;
var totalNum = data.total*scale;
var step1=data.data[0].value*scale;
var step2=step1+data.data[1].value*scale;
var step3=step2+data.data[2].value*scale;
            for (var i = 0; i <= totalNum; i++){
                switch (true) {
                    case i < step1:
                        labelData.push({
                            'value': 1,
                            'name': data.data[0],
                            'itemStyle': {
                                'normal': {
                                    'color': "#FF0000"
                                }
                            }
                        });
                        break;
                    case step1 < i &&i<step2:
                        labelData[i] = {
                            'value': 1,
                            'name': data.data[1],
                            'itemStyle': {
                                'normal': {
                                    'color': "#FF7900"
                                }
                            }
                        };
                        break;
                    case step2 < i &&i< step3:
                        labelData[i] = {
                            'value': 1,
                            'name': data.data[2],
                            'itemStyle': {
                                'normal': {
                                    'color': "#F1C000"
                                }
                            }
                        };
                        break;
                    case step3 < i &&i< totalNum:
                        labelData[i] = {
                            'value': 1,
                            'name': data.data[3],
                            'itemStyle': {
                                'normal': {
                                    'color': "#0068FF"
                                }
                            }
                        };
                        break;
                }
            }
option = {
    backgroundColor: 'rgb(41, 60, 85)',
    'title': {
        'text': '',
        'subtext': '',
        'left': 'center',
        'top': '35%',
        'textBaseline': 'top',
        'textStyle': {
            'fontSize': 12,
            'color': '#fff',
            'fontFamily': 'Digiface'
        },
        'subtextStyle': {
            'fontSize': 16,
            'color': '#f3be2c'
        }
    },
    'tooltip': {
        'show': false,
        'position': [0, 0],
        'trigger': 'item',
        'formatter': '{b}: {c} ({d}%)'
    },
    'grid': {
        'left': 0,
        'top': 0,
        'bottom':0,
        'right': 0
    },
    'series':[
        {
            type: 'pie',
            radius: [0, 60],
            hoverAnimation: false,
            // minAngle:30,
            itemStyle:{
                color:'transparent'
            },
            label:{
                fontSize:24,
                color:'#00ffff',
                position:'center',
                formatter:function(params){
                    return params.value
                }
            },
            data:[
                {value: data.total}
            ]
        },
        {
            'type': 'pie',
            hoverAnimation:false,
            "color": ['#FF0000', '#FF7900', '#F1C000', '#0068FF'],
            // 'radius': [55, 80],
            'radius': [60, 90],
            'startAngle': 30,
            'label': {
                'normal': {
                    formatter: function (params) {
                        return '' + params.name+'('+ params.value+')'+ '\n' + params.percent + '%';
                    },
                    'show': true,
                    'textStyle': {
                        'fontSize': '14',
                        'color': '#fff'
                    }
                },
            },
            'labelLine': {
                'show': true,
                'normal': {
                    'lineStyle': {
                        'width': 2
                    },
                    'smooth': 0.2,
                    'length': 20,
                    'length2': 45
                }
            },
            'data':data.data ,
            z:1

        },
        {
            'hoverAnimation': true,
            // 'avoidLabelOverlap': true,
            'type': 'pie',
            'data': labelData,
            'startAngle': 30,
            'itemStyle': {
                'normal': {
                    'borderWidth': 2,
                    'borderColor': 'rgb(41, 60, 85)'
                },
                "emphasis":{
                    show:false
                }
            },
            'radius': [60, 90],
            'label': {
                'normal': {
                    'show': false,
                },
                "emphasis":{
                    show:false
                }
            },
            z:2
        }
    ]
};
//修改第一个series【1】的radius值 环的大小会产生不同效果的环 如修改成：'radius': [50, 80]