var city = {
    '和林格尔县': "/asset/get/s/data-1564725009369-c0jEbn74h.json",
    '回民区': "/asset/get/s/data-1564725083272-d-Vv-x09h.json",
    '清水河县': "/asset/get/s/data-1564725123650-sIaS7AwU_.json",
    '赛罕区': "/asset/get/s/data-1564725187455-6SvSFL2is.json",
    '土默特左旗': "/asset/get/s/data-1564725227063-fPmX-P44r.json",
    '托克托县': "/asset/get/s/data-1564725264198-RI5sOBe_r.json",
    '武川县': "/asset/get/s/data-1564725303217-Qfsf6vUn9.json",
    '新城区': "/asset/get/s/data-1564725343881-hMGRsVHsz.json",
    '玉泉区': "/asset/get/s/data-1564725369355-qgxEtdpWh.json",
};

var uploadedDataURL = "/asset/get/s/data-1563704020089-nsr-OBQor.json";


function randomData() {
    return Math.round(Math.random() * 10000);
}

function showProvince() {
    var name = '呼和浩特市';

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#1D346F',
            title: {
                text: "呼和浩特市企业数量示意图",
                subtext: "数据纯属虚构",
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: { //提示框组件。
                trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                formatter: '{a} <br/> {b}: {c}家',
                textStyle: {
                    fontSize: '24px'
                }
            },
            /*         visualMap: {
                         min: 0,
                         max: 10000,
                         left: 'left',
                         top: 'bottom',
                         text: ['高', '低'], // 文本，默认为数值文本
                         calculable: true
                     },*/
            geo: [{
                show: true,
                map: name,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                // roam: false,//地图设置不可拖拽，固定的
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderWidth: 0,
                        shadowColor: '#D79D3D',
                        shadowBlur: 30,
                        shadowOffsetX: -5,
                        shadowOffsetY: 10
                    }
                }
            }],
            series: [{
                name: '企业数量',
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: "#fff",
                            fontSize: "12"
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: "#fff",
                            fontSize: "12"
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#1D346F',
                        borderColor: '#D79D3D',
                        // borderWidth: 0,
                        // shadowColor: '#D79D3D',
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                animation: false,
                data: [{
                    "name": "武川县",
                    "value": 351
                }, {
                    "name": "新城区",
                    "value": 1000
                }, {
                    "name": "回民区",
                    "value": 68
                }, {
                    "name": "和林格尔县",
                    "value": 563
                }, {
                    "name": "清水河县",
                    "value": 91
                }, {
                    "name": "托克托县",
                    "value": 947
                }, {
                    "name": "土默特左旗",
                    "value": 228
                }, {
                    "name": "玉泉区",
                    "value": 989
                }, {
                    "name": "赛罕区",
                    "value": 801
                }]
            }]
        });
    });
}

var currentIdx = 0;

showProvince();