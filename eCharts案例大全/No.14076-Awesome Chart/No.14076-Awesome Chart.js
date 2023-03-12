
var data={
    //油相泵
    oilPump: {
        status: true,//true表示正常运行，false表示停机
        current:111,//电流
        rotateSpeed:444,//转数
        flow:222 //流量
    },
    //水相泵
    waterPump: {
        status: false,//true表示正常运行，false表示停机
        current:111,//电流
        rotateSpeed:444,//转数
        flow:222 //流量
    },
    //基质泵
    substratePump: {
        status: true,//true表示正常运行，false表示停机
        current:111,//电流
        temperature:444,//温度
        pressure:222 //压力
    },
    //乳胶泵1
    latexPump1: {
        status: true,//true表示正常运行，false表示停机
        current:111,//电流
        temperature:444,//温度
        pressure:222 //压力
    },
    //乳胶泵2
    latexPump2: {
        status: true,//true表示正常运行，false表示停机
        current:111,//电流
        temperature:444,//温度
        pressure:222 //压力
    },
    //装药机1
    loadingMachine1: {
        status: true,//true表示正常运行，false表示停机
        RCSpeed:111,//装药速度
        RCExtrdrAutoSpeed:444,//速度百分比
        ExtruderPressure:222 //挤胶压力
    },
    //装药机2
    loadingMachine2: {
        status: true,//true表示正常运行，false表示停机
        RCSpeed:111,//装药速度
        RCExtrdrAutoSpeed:444,//速度百百分比
        ExtruderPressure:222 //挤胶压力
    }
};

var size = 150;
var yy = 200;
var yy1 = 250;
option = {
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '设备状态',
        type: 'graph',
        layout: 'force',
        symbol:'rect',
        itemStyle:{
             normal: {
                color:function (params){
                    if(params.value.status === true){
                        return '#8dc1a9';
                    } else {
                        return '#bbb';
                    }
                }
             }
        },
        force: {
            //initLayout: ...,
            repulsion: 500,
            gravity: 0.1,
            edgeLength: 100,
            layoutAnimation: true,
        },
        data: [{
            "name": "水相泵",
            x: 100,
            y: yy,
            "symbolSize": size,
            
            "category": "水相泵",
            "draggable": "true",
            "value": data.waterPump,
            

        }, {
            "name": "油相泵",
            "value": data.oilPump,
            x: 200,
            y: yy1,
            "symbolSize": size,
            "category": "油相泵",
            "draggable": "true"
        }, {
            x: 300,
            y: yy,
            "name": "基质泵",
            "symbolSize": size,
            "category": "基质泵",
            "draggable": "true",
            "value": data.substratePump
        }, {
            x: 300,
            y: 300,
            "name": "乳胶泵1",
            "symbolSize": size,
            "category": "乳胶泵1",
            "draggable": "true",
            "value": data.latexPump1
        }, {
            x: 300,
            y: 300,
            "name": "乳胶泵2",
            "symbolSize": size,
            "category": "乳胶泵2",
            "draggable": "true",
            "value": data.latexPump2
        }, {
            x: 400,
            y: yy1,
            "name": "装药机1",
            "symbolSize": size,
            "category": "装药机1",
            "draggable": "true",
            "value": data.loadingMachine1
        }, {
            x: 500,
            y: yy,
            "name": "装药机2",
            "symbolSize": size,
            "category": "装药机2",
            "draggable": "true",
            "value": data.loadingMachine2
        } ],
        links: [{
            "source": "水相泵",
            "target": "油相泵"
        }, {
            "source": "油相泵",
            "target": "基质泵"
        }, {
            "source": "基质泵",
            "target": "乳胶泵1"
        }, {
            "source": "基质泵",
            "target": "乳胶泵2"
        }, {
            "source": "乳胶泵1",
            "target": "装药机1"
        }, {
            "source": "乳胶泵2",
            "target": "装药机2"
        } ],
        categories: [{
            'name': '水相泵'
        }, {
            'name': '油相泵'
        }, {
            'name': '基质泵'
        }, {
            'name': '乳胶泵1'
        }, {
            'name': '乳胶泵2'
        }, {
            'name': '装药机1'
        }, {
            'name': '装药机2'
        }],
        //focusNodeAdjacency: true,
        roam: false,
        label: {
            normal: {
                align:'center',
                show: true,
                position: 'inside',
                formatter: function(params){
                    var label = '\n' + params.name + '\n ' ;
                    if (params.value.current){
                        label += '电流: ' + params.value.current + ' A\n';
                    }
                    if (params.value.rotateSpeed){
                        label += '转速: ' + params.value.rotateSpeed + ' r/min\n';
                    }
                    if (params.value.flow){
                        label += '流量: ' + params.value.flow + ' kg/min\n';
                    }
                    if (params.value.temperature){
                        label += '温度: ' + params.value.temperature + ' ℃\n';
                    }
                    if (params.value.pressure){
                        label += '压力: ' + params.value.pressure + ' Mpa\n';
                    }
                    if (params.value.RCSpeed){
                        label += '装药速度: ' + params.value.RCSpeed + ' 根/分\n';
                    }
                    if (params.value.RCExtrdrAutoSpeed){
                        label += '速度百分比: ' + params.value.RCExtrdrAutoSpeed + ' %\n';
                    }
                    if (params.value.ExtruderPressure){
                        label += '挤胶压力: ' + params.value.ExtruderPressure + ' Mpa\n';
                    }
                    return label;
                },
                fontSize: 16,
                fontStyle: '600',

            }
        },
        lineStyle: {
            normal: {
                width: 6,
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};