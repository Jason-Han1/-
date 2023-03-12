var hours = ['10','08', '06', '04', '02', '00', '01', '03',
    '05', '07' , '09'
];
var days = ['82', '84', '86',
    '88', '90', '92', '94', '96'
];

var data = [
    ['82', '02', 3,'0317210','OOLU','4310','../../ICON/SPECIAL/2.2.jpg','','../../ICON/SEQ/BACKGROUND.jpg','1'],
    ['84', '02', 1,'0317211','OOLU','4310','../../ICON/SPECIAL/3.1.jpg','../../ICON/CATEGORY/IMPORT.jpg','../../ICON/SEQ/BACKGROUND.jpg','2'],
    ['86', '02', 2,'0317212','OOLU','4310','','','../../ICON/SEQ/BACKGROUND.jpg','3'],
    ['88', '02', 3,'0317213','OOLU','4310','','','../../ICON/SEQ/BACKGROUND.jpg','4'],
    ['90', '02', 3,'0317214','OOLU','4310','../../ICON/SPECIAL/2.2.jpg','','../../ICON/SEQ/BACKGROUND.jpg','5'],
    ['92', '02', 2,'0317215','OOLU','4310','','../../ICON/CATEGORY/IMPORT.jpg','../../ICON/SEQ/BACKGROUND.jpg','6'],
    ['94', '02', 3,'0317216','OOLU','4310','','','../../ICON/SEQ/BACKGROUND.jpg','7'],
    ['96', '02', 3,'0317217','OOLU','4310','../../ICON/SPECIAL/3.1.jpg','','../../ICON/SEQ/BACKGROUND.jpg','8'],
];

var data1 = data.map(function(item) {
    var imagePath = 'none';
    if(item[6] && item[6]!= ""){
        imagePath = 'image://'+ item[6];
    }
    return {
        'value':[item[1], item[0], item[3], item[4] || '', item[5] || '', item[6] || '', item[7] || '',item[2] || '-'],
        'symbol': imagePath ,        
    }
});
var data3 = data.map(function(item) {
    var imagePath = 'none';
    if(item[7] && item[7] != ""){
        imagePath = 'image://'+ item[7];
    }
    return {
        'value':[item[1], item[0], item[3], item[4] || '', item[5] || '', item[6] || '', item[7] || '',item[2] || '-'],
        'symbol': imagePath ,        
    }
});
var data4 = data.map(function(item) {
    var imagePath = 'none';
    if(item[8] && item[8]!= ""){
        imagePath = 'image://'+ item[8];
    }
    return {
        'value':[item[1], item[0], item[3], item[4] || '', item[5] || '', item[6] || '', item[9] || '',item[2] || '-'],
        'symbol': imagePath ,        
    }
});
var data2 = data.map(function(item) {
    return [item[1], item[0], item[3], item[4] || '', item[5] || '', item[6] || '', item[7] || '',item[2] || '-'];
});
var imageUrl ='';
option = {
    tooltip: {

        position: 'top'
    },
    animation: false,
    grid: {
        y: '10%'        
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        },
    },
    visualMap: {
        min: 0,
        max: 3,
        splitNumber: 3,
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'].reverse()
        },
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
            name: 'heatmap',
            type: 'heatmap',
            data: data1,
            zlevel: 2
        }, {
            name: 'topLeft1',
            type: 'scatter',
            //coordinateSystem: 'calendar',
            //symbolSize: [30,30],
            symbolSize: 1,
            symbol: 'circle',
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        imageUrl = params.value[5];
                        return '\n\n {a|' + (params.value[2] || '')+'}';
                    },
                    rich: {
                        a: {
                            align: 'left',
                            verticalAlign: 'top',
                            lineHeight: 66,
                            width: 60,
                            height: 20,
                            fontSize: 10,
                            fontWeight: 800,
                            color: '#e00',
                            textBorderColor: '#eee'
                        }
                    }
                }
            },
            data: data2,
            zlevel: 3
        }, {
            name: 'topLeft2',
            type: 'scatter',
            //coordinateSystem: 'calendar',
            symbolSize: 1,
            symbol: 'rect',
            label: {
                normal: {
                    show: true,
                    formatter: function(params){
                        return '{a|'+params.value[3]+'}';
                    },
                    rich: {
                        a: {
                            align: 'left',
                            verticalAlign: 'top',
                            lineHeight: 66,
                            width: 60,
                            height: 20,
                            fontSize: 12,
                            fontWeight: 800,
                            color: '#e00',
                            textBorderColor: '#eee'
                        }
                    }
                }
            },
            data: data2,
            zlevel: 4
        }, {
            name: 'bottomLeft',
            type: 'scatter',
            //coordinateSystem: 'calendar',
            symbol: 'rect',
            symbolOffset : [-20,20],
            symbolSize: [30,30],
            label: {
                normal: {
                    show: false,
                    formatter: function(params){
                        return '\n\n {a|'+" "+'}';
                    },
                    rich: {
                        a: {
                            align: 'left',
                            verticalAlign: 'top',
                            lineHeight: 25,
                            width: 30,
                            height: 30,
                            color: '#e00',
                            textBorderColor: '#eee',
                        }
                    }
                }
            },
            data: data1,
            zlevel: 4
        }, {
            name: 'topright',
            type: 'scatter',
            //coordinateSystem: 'calendar',
            symbol: 'rect',
            symbolOffset : [20,-25],
            symbolSize: [15,15],
            label: {
                normal: {
                    show: false,
                    formatter: function(params){
                        return '{a|'+""+'}';
                    },
                    rich: {
                        a: {
                            align: 'right',
                            verticalAlign: 'top',
                            lineHeight: 66,
                            width: 15,
                            height: 15,
                            color: '#e00',
                            textBorderColor: '#eee',
                           
                        }
                    }
                }
            },
            data: data3,
            zlevel: 4
        }, {
            name: 'bottomright2',
            type: 'scatter',
            //coordinateSystem: 'calendar',
            symbol: 'rect',
            symbolOffset : [15,15],
            symbolSize: [30,20],

            label: {
                normal: {
                    show: true,
                    formatter: function(params){
                        return '{a|'+params.value[6]+'}';
                    },
                    rich: {
                        a: {
                            align: 'center',
                            verticalAlign: 'top',
                            lineHeight: 18,
                            width: 30,
                            height: 20,
                            color: '#000000',
                            textBorderColor: '#eee',
                        }
                    }
                }
            },
            data: data4,
            zlevel: 4
        }, {
            name: 'bottomright3',
            type: 'scatter',
            //coordinateSystem: 'calendar',
            symbolSize: 2,
            symbol: 'rect',
            symbolOffset : [20,60],

            label: {
                normal: {
                    show: true,
                    formatter: function(params){
                        return '{a|'+params.value[4]+'}';
                    },
                    rich: {
                        a: {
                            align: 'right',
                            verticalAlign: 'top',
                            lineHeight: 66,
                            width: 20,
                            height: 10,
                            color: '#e00',
                            textBorderColor: '#eee',
                            fontSize: 10,
                            fontWeight: 800,
                        }
                    }
                }
            },
            data: data1,
            zlevel: 4
        }
        /*{
            type: 'scatter',
            data: data2,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    distance: 20,
                    formatter: function (params) {
                    //var d = echarts.number.parseDate(params.value[0]);
                    return '{a|'+params.value[2]+'}';
                    },
                    width: 50,
                    rich: {
                        a: {
                            color:'#000',
                            lineHeight: 16,
                            //backgroundColor : "#eac736",
                            backgroundColor: {
                                image: '../img/icon.png'
                            },
                            align: 'left',
                            //fontSize: 16
                        }

                    }
                }
            },
            symbolOffset:[25,-25],//偏移度
            symbol:'circle',
            zlevel: 3,
            symbolSize :10,//点大小
            itemStyle: {
                color: '#d94e5d',
                borderColor: '#eeeeee',
                borderWidth: 1 
            }
        },*/
        /*{
            type: 'custom',
            //coordinateSystem: 'calendar',
            renderItem: renderItem,
            dimensions: [null, {type: 'ordinal'}],
            data: data2
        }*/
        /*,
        {
            name: 'before',
            type: 'scatter',
            color: 'red',
            data: data2,
            zlevel: 3
        },*/
    ]

};
function renderItem(params, api) {
    var cellPoint = api.coord(api.value(0));
   /*var cellWidth = params.coordSys.cellWidth;
    var cellHeight = params.coordSys.cellHeight;*/
    var cellWidth = 70;
    var cellHeight = 70;

    var value = api.value(1);
    var events = value;  

    /*if (isNaN(cellPoint[0]) || isNaN(cellPoint[1])) {
        return;
    }*/

    var group = {
        type: 'group',
        children: echarts.util.map(layouts[3], function (itemLayout, index) {
            return {
                type: 'image',
                /*shape: {
                    pathData: pathes[0],
                    x: -8,
                    y: -8,
                    width: 16,
                    height: 16
                },*/
                /*position: [
                    cellPoint[0] + echarts.number.linearMap(itemLayout[0], [-0.5, 0.5], [-cellWidth / 2, cellWidth / 2]),
                    cellPoint[1] + echarts.number.linearMap(itemLayout[1], [-0.5, 0.5], [-cellHeight / 2 + 20, cellHeight / 2])
                ],*/
                style: api.style({
                    fill: colors[0],
                    image:'../img/icon.png'
                })
            };
        }) || []
    };
/*
    group.children.push({
        type: 'text',
        style: {
            x: cellPoint[0],
            y: cellPoint[1] - cellHeight / 2 + 15,
            text: echarts.format.formatTime('dd', api.value(0)),
            fill: '#777',
            textFont: api.font({fontSize: 14})

        }
    });*/

    return group;
}