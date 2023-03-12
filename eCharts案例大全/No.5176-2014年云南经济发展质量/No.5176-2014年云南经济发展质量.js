var uploadedDataURL = "/asset/get/s/data-1499226477412-HJrdb19VW.json";

function showProvince() {
    myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        myChart.hideLoading();

        echarts.registerMap('云南', geoJson);

        myChart.setOption(option = {
            //backgroundColor:'#FFFFFF',
            title: {
                text: '2014年云南经济发展质量',

                x: 'center',
                textStyle: {
                    //color:'#000000'
                }
            },
            visualMap: {
                min: 0,
                max: 0.6,
                left: 'left',
                top: 'bottom',
                text: ['评分'], //文本
                calculable: true,
                inRange: {
                    // color: ['#3B5077', '#031525'] // 蓝黑
                    //color: ['#ffc0cb', '#800080'] // 红紫
                    // color: ['#3C3B3F', '#605C3C'] // 黑绿
                    //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                    //color: ['#23074d', '#cc5333'] // 紫红
                    //color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#1488CC', '#2B32B2'] // 浅蓝
                    //color: ['#00467F', '#A5CC82'] // 蓝绿
                    color: ['#FFD2D2', '#930000'] // 紫红
                },
                textStyle: {
                    color: '#000000'
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c}'
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {
                        pixelRatio: 4
                    }
                }
            },
            series: [{
                type: 'map',
                mapType: '云南',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#FFFFFF'
                        }
                    }
                },

                itemStyle: {

                    normal: {
                        label: {
                            show: true,
                            formatter: '{b}\n{c}',
                        },
                        borderColor: '#389BB7',
                        areaColor: '#FFFFFF',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,

                data: [{
                    name: '昆明市',
                    value: 0.595
                }, {
                    name: '普洱市',
                    value: 0.137
                }, {
                    name: '曲靖市',
                    value: 0.255
                }, {
                    name: '昭通市',
                    value: 0.107
                }, {
                    name: '玉溪市',
                    value: 0.314
                }, {
                    name: '红河州',
                    value: 0.208
                }, {
                    name: '文山壮族苗族自治州',
                    value: 0.193
                }, {
                    name: '西双版纳傣族自治州',
                    value: 0.319
                }, {
                    name: '临沧市',
                    value: 0.127
                }, {
                    name: '楚雄彝族自治州',
                    value: 0.155
                }, {
                    name: '丽江市',
                    value: 0.292
                }, {
                    name: '大理白族自治州',
                    value: 0.163
                }, {
                    name: '保山市',
                    value: 0.149
                }, {
                    name: '德宏傣族景颇族自治州',
                    value: 0.446
                }, {
                    name: '怒江傈僳族自治州',
                    value: 0.120
                }, {
                    name: '迪庆州',
                    value: 0.304
                }]
            }]
        });
    });
}

//var currentIdx = 0;

showProvince();
//https://gallery.echartsjs.com/editor.html?c=xDLGMMiEJ&v=9
//这个网页是模板和生成系统