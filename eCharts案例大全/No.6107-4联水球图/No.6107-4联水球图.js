var attrs = [{
    'name': '农信云',
    'value': 567,
    'center_l': '20%'
}, {
    'name': '商城',
    'value': 518167,
    'center_l': '40%'
}, {
    'name': '金融',
    'value': 518167,
    'center_l': '60%'
}, {
    'name': '智农通',
    'value': 518167,
    'center_l': '80%'
}]
var datas = [
    [0.6, 0.6, 0.6],
    [0.6, 0.6, 0.6],
    [0.6, 0.6, 0.6],
    [0.6, 0.6, 0.6]
];


var series = [];
for (var i = 0; i < datas.length; i++) {
    var item = {
        type: 'liquidFill',
        radius: '22%',
        center: [attrs[i].center_l, '50%'],
        //  shape: 'roundRect',
        data: datas[i],
        backgroundStyle: {
            color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(4,33,77, 0)'
                }, {
                    offset: 0.5,
                    color: 'rgba(4,33,77, .5)'
                }, {
                    offset: 0,
                    color: 'rgba(4,33,77, 1)'
                }],
                globalCoord: false
            },
        },
        outline: {
            borderDistance: 5,
            itemStyle: {
                borderWidth: 5,
                borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(50,115,233, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(50,115,233, .5)'
                    }, {
                        offset: 1,
                        color: 'rgba(50,115,233, 1)'
                    }],
                    globalCoord: false
                },
                shadowBlur: 10,
                shadowColor: '#000',
            }
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 1,
                color: 'rgba(72,107,254, 0.8)'
            }, {
                offset: 0.75,
                color: 'rgba(21,216,238, .5)'
            }, {
                offset: 0,
                color: 'rgba(72,107,254, 1)'
            }],
            globalCoord: false
        },
        label: {
            normal: { //此处没有生效，本地生效
                textStyle: {
                    fontSize: 10,
                    color: '#e6e6e6',
                },
                formatter: ''

            }
        }
    }
    series.push(item);
}

option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#010612'
    }, {
        offset: 1,
        color: '#091638'
    }]),
 graphic: [{
         type: 'group',
         left: '16.5%',
         top: '47%',
         children: [{
             type: 'text',
             z: 100,
             left: 'center',
             top: '25',
             style: {
                 fill: '#fff',
                 text: attrs[0].value,
                 font: '20px Microsoft YaHei'
             }
         },{
             type: 'text',
             z: 100,
             left: 'center',
             top: '65',
             style: {
                 fill: '#fff',
                 text: attrs[0].name,
                 font: '20px Microsoft YaHei'
             }
         }]
     },{
         type: 'group',
         left: '36.5%',
         top: '47%',
         children: [{
             type: 'text',
             z: 100,
             left: 'center',
             top: '25',
             style: {
                 fill: '#fff',
                 text: attrs[1].value,
                 font: '20px Microsoft YaHei'
             }
         },{
             type: 'text',
             z: 100,
             left: 'center',
             top: '65',
             style: {
                 fill: '#fff',
                 text: attrs[1].name,
                 font: '20px Microsoft YaHei'
             }
         }]
     },{
         type: 'group',
         left: '56.5%',
         top: '47%',
         children: [{
             type: 'text',
             z: 100,
             left: 'center',
             top: '25',
             style: {
                 fill: '#fff',
                 text: attrs[2].value,
                 font: '20px Microsoft YaHei'
             }
         },{
             type: 'text',
             z: 100,
             left: 'center',
             top: '65',
             style: {
                 fill: '#fff',
                 text: attrs[2].name,
                 font: '20px Microsoft YaHei'
             }
         }]
     },{
         type: 'group',
         left: '76.5%',
         top: '47%',
         children: [{
             type: 'text',
             z: 100,
             left: 'center',
             top: '25',
             style: {
                 fill: '#fff',
                 text: attrs[3].value,
                 font: '20px Microsoft YaHei'
             }
         },{
             type: 'text',
             z: 100,
             left: 'center',
             top: '65',
             style: {
                 fill: '#fff',
                 text: attrs[3].name,
                 font: '20px Microsoft YaHei'
             }
         }]
     }],
    series: series
};