var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAABWklEQVQ4jZXTsUscURTF4W91xBTRxsLOQhJJZWVlaZHGxsZGRLEJCYQkRcBCxMbC1kJIoY0gIhamSQIhhZV/Qap0KQJBEmKIFnFnVnnsQ53ZGXf3NsO78Dv3vDvn1aa/ftBlPcU5TgKWNBo9neIJ1vEcwzfNrNHbCTyCfUxiF/+7EZjBNobi+TBnK80qBfqxgdeoxd4ZPucEsiwpg0dxgIlC/wiXBQctArPR8mCJ8GGxkdRvBR5gE88qrvQbX1oE0rQvfJ9Ey+MVcKj3qJc5WMAWHt4DiwNaqvb407ey/hz22gie4mWSpi1LDI21NnAI1Sv8SupZX9n0sQrwJ17EfTSnFRyEw2oFHCL8Bn9yQD2fg3k8KoA/4q/9WKZ6N0jF6VfYwVv8rXCVE1iMEQ71PU7N5b5UIGs+prDJlTj1HZbxrx3cFGg+56UIT+G4E/CuQLjDQIzxRTcwXAMcrFZXC2wO/wAAAABJRU5ErkJggg==';

var trafficWay = [{
    name: '天津分公司',
    value: 20
},{
    name: '上海分公司',
    value: 10
},{
    name: '深圳分公司',
    value: 30
},{
    name: '湛江分公司',
    value: 40
}];

var data = [];
for (var i = 0; i < trafficWay.length; i++) {
    data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
            normal: {
                color:{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color:'#009afe' // 0% 处的颜色
                    },{
                        offset: 1, color: '#5472d3' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: {
            normal: {
                label: {show: false},
                labelLine: {show: false},
                color: 'rgba(0, 0, 0, 0)',
            }
        }
    });
       
}
var seriesOption = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: ['60%', '70%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                lineHeight:18,
                color: '#ddd',
                formatter: function(params) {
                    if(params.name !== '') {
                        return "{title|"+params.name + "}{value| " + '\n'  + params.value + 'kwh } ';
                    }else {
                        return '';
                    }
                },
                textStyle: {
                        rich: {
                            title: {
                                fontSize: 12,
                                color: "#fff"
                            },
                            value: {
                                fontSize: 12,
                                color: "#009afe"
                            }
                        }
                    },
            },
            labelLine: {
                length:10,
                length2:20,
                show: true,
                color:'#00ffff'
            }
        }
    },
    data: data
},{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: ['43%', '50%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {show: false},
            labelLine: { show:false}
        }
    },
    data: [
        {value: 4,itemStyle: {normal: {label: {show: false},labelLine: {show: false},color:'rgba(0,154,254,0.3)'}}},
        {value: 2,name: '',itemStyle: {normal: {label: {show: false},labelLine: {show: false},color: 'rgba(0, 0, 0, 0)',}}},
        {value: 2,itemStyle: {normal: {label: {show: false},labelLine: {show: false},color:'rgba(0,154,254,0.3)'}}},
        {value: 3,name: '',itemStyle: {normal: {label: {show: false},labelLine: {show: false},color: 'rgba(0, 0, 0, 0)',}}},
        {value: 5,itemStyle: {normal: {label: {show: false},labelLine: {show: false},color:'rgba(0,154,254,0.3)'}}},
        {value: 2,name: '',itemStyle: {normal: {label: {show: false},labelLine: {show: false},color: 'rgba(0, 0, 0, 0)',}}},
        {value: 2,itemStyle: {normal: {label: {show: false},labelLine: {show: false},color:'rgba(0,154,254,0.3)'}}},
        {value: 3,name: '',itemStyle: {normal: {label: {show: false},labelLine: {show: false},color: 'rgba(0, 0, 0, 0)',}}},
    ]
},{
    name: '',
    type: 'pie',
    radius: ['53%', '55%'],
    hoverAnimation: false,
    animation:false,
    itemStyle: {
        normal: {
            label: {show: false},
            labelLine: { show:false},
            color:'rgba(0,154,254,0.4)',
        }
    },
    data: [1]
},{
    name: '',
    type: 'pie',
    radius: ['32%', '34%'],
    hoverAnimation: false,
    animation:false,
    itemStyle: {
        normal: {
            label: {show: false},
            labelLine: { show:false},
            color:'rgba(255,144,0,0.4)',
        }
    },
    data: [{
            value: 0,
            name: '',
            tooltip: {
                show:false,     //取消鼠标放上去时会显示信息的样式
            },
            label: {
                normal: {
                    formatter: '{c| }'+'\n' +'{b|}',
                    position: 'center',  //让文字居中
                    show: true,
                    rich: {
                        c: {
                            backgroundColor: {
                                image: img,
                            },
                            offset:10,
                            width:16,
                            height:20,
                            left:'center'  //让图片居中
                        },
                        b:{
                            lineHeight:28,
                        },
                    }
                },
            }
        }]
}];
option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '日发电量',
        top: '50%',
        left: "center",
        textStyle: {
            color: '#ff9100',
            fontSize: 14,
            fontWeight: '400'
        }
    },
    tooltip: {
        show: false
    },
    legend: {
        show:false
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}