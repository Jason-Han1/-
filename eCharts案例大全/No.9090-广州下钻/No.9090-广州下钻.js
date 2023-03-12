var gz = "/asset/get/s/data-1576821068997-HGlupX6J.json";
var sg = "/asset/get/s/data-1576821486518-hXiIB3zl.json";
var sz = "/asset/get/s/data-1576823863630-dp3ZR3zA.json";
var zh = "/asset/get/s/data-1576824001581-HGb5qVrI.json";
var st = "/asset/get/s/data-1576824020491-B7h-K2yV.json";
var fs = "/asset/get/s/data-1576824043187-E-xwb0jW.json";
var jm = "/asset/get/s/data-1576824050865-VcmIj6LF.json";
var zj = "/asset/get/s/data-1576824072094-_S1ovhbZ.json";
var mm = "/asset/get/s/data-1576824083659-HUyf5kmu.json";
var zq = "/asset/get/s/data-1576824094572-yuEzuCbC.json";
var hz = "/asset/get/s/data-1576824222099-nELgXb84.json";
var mz = "/asset/get/s/data-1576824237769-_uMBnSG_.json";
var sw = "/asset/get/s/data-1576824251141-jwLw_Xww.json";
var hy = "/asset/get/s/data-1576824260491-fhsmPl4c.json";
var jy = "/asset/get/s/data-1576824277625-fC0b1Dof.json";
var qy = "/asset/get/s/data-1576824295450-lI2psCvK.json";
var dg = "/asset/get/s/data-1576824310416-w16vG8kl.json";
var zs = "/asset/get/s/data-1576824354651-9bwLpzgy.json";
var cz = "/asset/get/s/data-1576824367651-WDNeewJ3.json";
var jy = "/asset/get/s/data-1576824380485-eFPHlFNL.json";
var yf = "/asset/get/s/data-1576824384706-1Brve1Oj.json";
// 广东省数据
var qingdao = "/asset/get/s/data-1576655009916-by_DuGU2.json";
var chart = myChart;
var cityProper = {
    '广州市': gz,
    '韶关市': sg,
    '深圳市': sz,
    '珠海市': zh,
    '汕头市': st,
    '佛山市': fs,
    '江门市': jm,
    '湛江市': zj,
    '茂名市': mm,
    '肇庆市': zq,
    '惠州市': hz,
    '梅州市': mz,
    '汕尾市': sw,
    '河源市': hy,
    '阳江市': jy,
    '清远市': qy,
    '东莞市': dg,
    '中山市': zs,
    '潮州市': cz,
    '揭阳市': jy,
    '云浮市': yf,
};
var data = [{
    name: '广州市',
    value: 1000,
    valueNum: 300,
}, {
    name: '韶关市',
    value: 1000,
    valueNum: 300,
}, {
    name: '深圳市',
    value: 1000,
    valueNum: 300,
}, {
    name: '珠海市',
    value: 1000,
    valueNum: 300,
}, {
    name: '汕头市',
    value: 1000,
    valueNum: 300,
}, {
    name: '佛山市',
    value: 1000,
    valueNum: 300,
}, {
    name: '江门市',
    value: 1000,
    valueNum: 300,
}, {
    name: '湛江市',
    value: 1000,
    valueNum: 300,
}, {
    name: '茂名市',
    value: 1000,
    valueNum: 300,
}, {
    name: '肇庆市',
    value: 1000,
    valueNum: 300,
}, {
    name: '惠州市',
    value: 1000,
    valueNum: 300,
}, {
    name: '梅州市',
    value: 1000,
    valueNum: 300,
}, {
    name: '汕尾市',
    value: 1000,
    valueNum: 300,
}, {
    name: '河源市',
    value: 1000,
    valueNum: 300,
}, {
    name: '阳江市',
    value: 1000,
    valueNum: 300,
}, {
    name: '清远市',
    value: 1000,
    valueNum: 300,
}, {
    name: '东莞市',
    value: 1000,
    valueNum: 300,
}, {
    name: '中山市',
    value: 1000,
    valueNum: 300,
}, {
    name: '潮州市',
    value: 1000,
    valueNum: 300,
}, {
    name: '揭阳市',
    value: 1000,
    valueNum: 300,
}, {
    name: '云浮市',
    value: 1000,
    valueNum: 300,
}, ];
// 随机产生数据   
// for (var i = 0; i < data.length; i++) {
//     data[i].value = Math.round(Math.random() * 10000);
//     data[i].valueNum = Math.round(Math.random() * 1000);
// }
let option = {
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
                trigger: 'item',
                show: true,
                formatter: function(params) {
                    if (params.data) {
                        return `${params.name}</br>
                            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#1197b8"></span>
                            规划数量：${params.data.value}</br>
                            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#5ba2ff"></span>
                            发证数量：${params.data.valueNum}`
                    } else {
                        return;
                    }
                }
            },
        name: '选择器',
        type: 'map',
        mapType: '青岛',
        // left: 'left',
        // top: 'top',
        // width: '30%',
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
$.get(qingdao, function(getJSON) {
    echarts.registerMap("青岛", getJSON)
    chart.setOption(option, true);

    chart.on("click", chartClick);
})
//var ecConfig = echarts.config;
function chartClick(param) {
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
    $.get(cityProper[selectedProvince], function(geojson, data) {
        echarts.registerMap('青岛', geojson);
        // 配置移上去的显示信息
        let cityData = []
        let mapData = JSON.parse(geojson).features
        // 市数据配置
        mapData.map((i, ind) => {
            cityData[ind] = {
                name: i.properties.name,
                value: Math.round(Math.random() * 10000),
                valueNum: Math.round(Math.random() * 1000),
            }
        })
        // 如果要单独配置某个地区的值 请使用以下方法
        // F12 打印出了具体的值 对应位置
        console.log(cityData)
        cityData[0].value = 1000
        cityData[0].valueNum = 10000
        //地图配置
        option.series[0] = {
            name: '选择器',
            type: 'map',
            mapType: '青岛',
            // left: '50%',
            // top: 'top',
            // width: '30%',
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
            data: cityData
        };
        option.legend = {
            left: 'right',
            data: ['随机数据']
        };
        option.tooltip = {
                trigger: 'item',
                show: true,
                formatter: function(params) {
                    if (params.data) {
                        return `${params.name}</br>
                            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#1197b8"></span>
                            规划数量：${params.data.value}</br>
                            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#5ba2ff"></span>
                            发证数量：${params.data.valueNum}`
                    } else {
                        return;
                    }
                }
            },

            chart.setOption(option, true);
    })

};