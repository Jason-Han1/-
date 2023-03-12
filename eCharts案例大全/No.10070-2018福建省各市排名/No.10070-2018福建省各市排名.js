var uploadedDataURL = "/asset/get/s/data-1568010881871-0of0Mrx7V.json";

var gdpdata = [{
    name: '三明市',
    value: 2353.72
}, {
    name: '南平市',
    value: 1792.51
}, {
    name: '龙岩市',
    value: 2393.3
}, {
    name: '宁德市',
    value: 1942.8
}, {
    name: '福州市',
    value: 7856.81
}, {
    name: '莆田市',
    value: 2242.41
}, {
    name: '泉州市',
    value: 8467.97
}, {
    name: '厦门市',
    value: 4791.41
}, {
    name: '漳州市',
    value: 3947.63
}];
var ppdata = [{
    name: '三明市',
    value: 255
}, {
    name: '南平市',
    value: 266
}, {
    name: '龙岩市',
    value: 263
}, {
    name: '宁德市',
    value: 289
}, {
    name: '福州市',
    value: 757
}, {
    name: '莆田市',
    value: 289
}, {
    name: '泉州市',
    value: 858
}, {
    name: '厦门市',
    value: 392
}, {
    name: '漳州市',
    value: 505
}];
var areadata = [{
    name: '三明市',
    value: 22928.8
}, {
    name: '南平市',
    value: 26300
}, {
    name: '龙岩市',
    value: 19050
}, {
    name: '宁德市',
    value: 13452
}, {
    name: '福州市',
    value: 12154
}, {
    name: '莆田市',
    value: 4119
}, {
    name: '泉州市',
    value: 11015
}, {
    name: '厦门市',
    value: 1575.16
}, {
    name: '漳州市',
    value: 12600
}];
var seriesdata = [{
    name: '人口',
    type: 'map',
    map: '福建',
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
},{
    name: 'GDP',
    type: 'map',
    map: '福建',
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
},{
    name: '辖区面积',
    type: 'map',
    map: '福建',
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
    data: areadata
}];

var div = document.createElement('div');
div.innerHTML = "<hr>EChart Test<hr>";
div.style.color = '#00BFFF';
div.style.position = 'absolute';
div.style.top = '20%';
div.style.left = '15%';
var body = document.body;

function opt(max, min, vmp, unit, flag1, flag2, flag3) {
    var optn = {
        title: {
            text: '2018福建省各市' + vmp,
            subtext: '注：数据来源网络,泉州市数据不含金门县（单位：' + unit + '）',
            left: 'center',
            textStyle: {
                color: '#000'
            }
        },

        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['人口', 'GDP', '辖区面积'],
            selectedMode: 'single',
            selected: {
                '人口': flag1,
                'GDP': flag2,
                '辖区面积': flag3
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
                    text: '福建省2018年数据',
                    font: 'bold 26px Microsoft YaHei'
                }
            }],
            onmouseover: function() {
                body.appendChild(div);
            },
            onmouseout: function() {
                body.removeChild(div);
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


option = opt(858, 255, '人口', '万', true, false, false);
option1 = opt(8468, 1793, 'GDP', '亿', false, true, false);
option2 = opt(26300, 1576, '辖区面积', '平方公里', false, false, true);
$.get(uploadedDataURL, function(fjMap) {
    echarts.registerMap('福建', fjMap);
    myChart.setOption(option, true);

});
myChart.on('legendselectchanged', function(params) {
    if (params.name == '人口') {
        myChart.setOption(option, true);
    } 
    else if (params.name == 'GDP') {
        myChart.setOption(option1, true);
    } 
    else {
        myChart.setOption(option2, true);
    }
});