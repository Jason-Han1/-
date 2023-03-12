var uploadedDataURL = "/asset/get/s/data-1502779360900-HkKJuGe_W.json";

var ppdata = [{
    name: '广州市',
    value: 1350
}, {
    name: '深圳市',
    value: 1190
}, {
    name: '珠海市',
    value: 167
}, {
    name: '汕头市',
    value: 555
}, {
    name: '佛山市',
    value: 743
}, {
    name: '韶关市',
    value: 293
}, {
    name: '湛江市',
    value: 724
}, {
    name: '肇庆市',
    value: 405
}, {
    name: '江门市',
    value: 451
}, {
    name: '茂名市',
    value: 608
}, {
    name: '惠州市',
    value: 475
}, {
    name: '梅州市',
    value: 434
}, {
    name: '汕尾市',
    value: 302
}, {
    name: '河源市',
    value: 307
}, {
    name: '阳江市',
    value: 251
}, {
    name: '清远市',
    value: 383
}, {
    name: '东莞市',
    value: 825
}, {
    name: '中山市',
    value: 320
}, {
    name: '潮州市',
    value: 264
}, {
    name: '揭阳市',
    value: 605
}, {
    name: '云浮市',
    value: 246
}];
var gdpdata = [{
    name: '广州市',
    value: 19610
}, {
    name: '深圳市',
    value: 19492
}, {
    name: '珠海市',
    value: 2226
}, {
    name: '汕头市',
    value: 2080
}, {
    name: '佛山市',
    value: 8630
}, {
    name: '韶关市',
    value: 1218
}, {
    name: '湛江市',
    value: 2584
}, {
    name: '肇庆市',
    value: 2084
}, {
    name: '江门市',
    value: 2418
}, {
    name: '茂名市',
    value: 2636
}, {
    name: '惠州市',
    value: 3412
}, {
    name: '梅州市',
    value: 1045
}, {
    name: '汕尾市',
    value: 828
}, {
    name: '河源市',
    value: 898
}, {
    name: '阳江市',
    value: 1319
}, {
    name: '清远市',
    value: 1388
}, {
    name: '东莞市',
    value: 6827
}, {
    name: '中山市',
    value: 3202
}, {
    name: '潮州市',
    value: 976
}, {
    name: '揭阳市',
    value: 2032
}, {
    name: '云浮市',
    value: 778
}];
var seriesdata = [{
    name: '人口',
    type: 'map',
    map: '广东',
    itemStyle: {
        normal: {
            label: {
                show: true
            }
        },
        emphasis: {
            label: {
                show: true
            }
        }
    },
    data: ppdata
}, {
    name: 'GDP',
    type: 'map',
    map: '广东',
    itemStyle: {
        normal: {
            label: {
                show: true
            }
        },
        emphasis: {
            label: {
                show: true
            }
        }
    },
    data: gdpdata
}, ];

var div=document.createElement('div');
div.innerHTML="<hr>前尘往事成云烟<hr>";
div.style.color='#00BFFF';
div.style.position='absolute';
div.style.top='20%';
div.style.left='15%';
var body = document.body;
var txtdeg=0;
var scalea=0.5;
var animat
var div1=document.createElement('div');
div1.innerHTML="<hr>此情可待成追忆<hr>";
div1.style.color='#00BFFF';
div1.style.position='absolute';
div1.style.top='36%';
div1.style.left='15%';

function rorat() {
    // div.style.WebkitTransform = `rotate(${txtdeg}deg)`;
    // txtdeg-=30
    // animat=setTimeout(rorat, 100);
    div.style.WebkitTransform = `scale(${scalea})`;
    scalea+=0.1;
    div1.style.WebkitTransform = `rotate(${txtdeg}deg)`;
    txtdeg-=30

    animat=setTimeout(rorat, 200);
    if(scalea>1.2){scalea=0.5}
    
}

function opt(max, min, vmp, unit, flag1, flag2) {
    var optn = {
        title: {
            text: '2016广东省各市' + vmp,
            subtext: '数据来源网络（单位：' + unit + '）',
            left: 'center',
            textStyle: {
                color: '#000'
            }
        },

        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['人口', 'GDP'],
            selectedMode: 'single',
            selected: {
                '人口': flag1,
                'gdp': flag2
            }
        },
        visualMap: {
            min: min,
            max: max,
            text: [vmp, '单位：' + unit],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        graphic: [{
            type: 'group',
            bounding: 'raw',
            rotation: Math.PI / 4,
            right: 100,
            bottom: 100,
            z: 100,
            children: [{
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 90,
                shape: {
                    width: 400,
                    height: 50
                },
                style: {
                    fill: 'rgba(0,0,0,0.3)'
                }
            }, {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                    fill: '#fff',
                    text: 'd***t & ECHARTS',
                    font: 'bold 26px Microsoft YaHei'
                }
            }],
            onmouseover: function() {
                body.appendChild(div);
                body.appendChild(div1);
                rorat()
            },
            onmouseout: function() {
                body.removeChild(div);
                body.removeChild(div1);
                clearTimeout(animat)
            }
        }],
        tooltip: {
            formatter: function(params) {
                return params.name + ": " + params.value + unit;
            }
        },
        series: seriesdata
    };
    return optn;
}


option = opt(1350, 160, '人口', '万', true, false);
option1 = opt(19610, 770, 'GDP', '亿', false, true);
$.get(uploadedDataURL, function(gdMap) {
    echarts.registerMap('广东', gdMap);
    myChart.setOption(option, true);

});
myChart.on('legendselectchanged', function(params) {
    if (params.name == '人口') {
        //$.get(uploadedDataURL, function(gdMap) {
            //echarts.registerMap('广东', gdMap);
            myChart.setOption(option, true);

        //});
    } else {
        //$.get(uploadedDataURL, function(gdMap) {
            //echarts.registerMap('广东', gdMap);
            myChart.setOption(option1, true);

        //});
    }
});