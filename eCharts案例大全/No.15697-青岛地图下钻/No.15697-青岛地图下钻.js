var pingdu = "/asset/get/s/data-1483067894283-HJ0xGUXrg.json";//pingdu

var laixi = "/asset/get/s/data-1483067888252-B1ugMUXrl.json";//laixi

var jimo = "/asset/get/s/data-1483067881660-BJfxf8Xrg.json";//jimo

var jiaozhou = "/asset/get/s/data-1483067768021-BJlYWI7Hl.json";//jiaozhou

var laoshan = "/asset/get/s/data-1483067759307-HkwuZI7He.json";//laoshan

var huangdao = "/asset/get/s/data-1483067748020-rJhwZLmrl.json";//huangdao

var chengyang = "/asset/get/s/data-1483067726478-HyIUZ8QHe.json";//chengyang

var licang = "/asset/get/s/data-1483067720288-S1lLZ8mSl.json";//licang

var shinan = "/asset/get/s/data-1483067708437-H1VSZLQrg.json";//shinan

var shibei = "/asset/get/s/data-1483067702527-BkJBZ87rx.json";//shibei

var qingdao = "/asset/get/s/data-1483067692839-rkBEZ87rl.json";//qingdao



var chart = myChart;


var cityProper = {
    '城阳区': chengyang,
    '崂山区': laoshan,
    '李沧区': licang,
    '市北区': shibei,
    '市南区': shinan,
    '黄岛区': huangdao,
    '胶州市': jiaozhou,
    '即墨市': jimo,
    '莱西市': laixi,
    '平度市': pingdu
};
var data = [{
    name: '城阳区'
}, {
    name: '崂山区'
}, {
    name: '李沧区'
}, {
    name: '市北区'
}, {
    name: '市南区'
}, {
    name: '黄岛区'
}, {
    name: '胶州市'
}, {
    name: '即墨市'
}, {
    name: '莱西市'
}, {
    name: '平度市'
}];
for (var i = 0; i < data.length; i++) {
    data[i].value = Math.round(Math.random() * 10000);
}

$.get(qingdao, function(getJSON) {
    echarts.registerMap("青岛",getJSON)
        option = {
            tooltip: {
                trigger: 'item'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    }
                }
            },
            series: [{
                tooltip: {
                    trigger: 'item'
                },
                name: '选择器',
                type: 'map',
                mapType: '青岛',
                left: 'left',
                top: 'top',
                width: '30%',
                roam: true,
                selectedMode: 'single',
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
                data: data
            }],
            animation: false
        };


        chart.setOption(option, true);
        
        chart.on("click", chartClick);
    })
    //var ecConfig = echarts.config;
function chartClick(param)
{ 
    //var selected = param.selected;
    //console.log(option.series[0].data[1].selected);
    var selectedProvince = param.name;
    if (!cityProper[selectedProvince]) {
        option.series.splice(1);
        option.legend = null;
        option.visualMap = null;
        chart.setOption(option, true);
        return;
    }
    console.log(cityProper[selectedProvince]);
    $.get(cityProper[selectedProvince], function(geojson) {
        echarts.registerMap(selectedProvince, geojson);
        option.series[1] = {
            name: '选择器',
            type: 'map',
            mapType: selectedProvince,
            left: '50%',
            top: 'top',
            width: '30%',
            roam: true,
            selectedMode: 'single',
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
            data: data
        };
        option.legend = {
            left: 'right',
            data: ['随机数据']
        };
        option.visualMap = {
            seriesIndex: 1,
            orient: 'horizontal',
            left: 'right',
            min: 0,
            max: 1000,
            color: ['orange', 'yellow'],
            text: ['高', '低'], // 文本，默认为数值文本
            splitNumber: 0
        };
        chart.setOption(option, true);
    })

};