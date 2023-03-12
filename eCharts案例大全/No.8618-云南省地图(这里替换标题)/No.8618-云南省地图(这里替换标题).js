var uploadedDataURL = "/asset/get/s/data-1499226477412-HJrdb19VW.json";

function showProvince() {
    myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {
        
        myChart.hideLoading();
        
        echarts.registerMap('云南', geoJson);
        
        myChart.setOption(option = {
            //backgroundColor:'#FFFFFF',
            title: {
                text: '干旱受灾人口(人)',
                
                x: 'center',
                textStyle:{
                    //color:'#000000'
                }
            },
            visualMap:{
                min:0,
                max:400000,
                left:'left',
                top:'bottom',
                text:['人'],//文本
                calculable:true,
                inRange:{
                    // color: ['#3B5077', '#031525'] // 蓝黑
                //color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                //color: ['#23074d', '#cc5333'] // 紫红
                //color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                 //color: ['#00467F', '#A5CC82'] // 蓝绿
                 color: ['#FFD2D2','#930000'] // 紫红
                },
                textStyle:{
                    color:'#000000'
                },
            },
            tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (人/平方公里)'
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
                label:{
                    normal:{
                        show:true
                    },
                    emphasis:{
                        textStyle:{
                            color:'#FFFFFF'
                        }
                    }
                },

                itemStyle: {
                    
                    normal:{
                        label: {
                            show: true,
                            formatter:'{b}\n{c}',
                            },
                        borderColor:'#389BB7',
                        areaColor:'#FFFFFF',
                    },
                    emphasis: {
                        areaColor:'#389BB7',
                        borderWidth:0
                        }
                    },
                    animation:false,

                data: [{
                    name: '昆明市',
                    value:22104
                }, {
                    name: '普洱市',
                    value:285949
                }, {
                    name: '曲靖市',
                    value:37998
                }, {
                    name: '昭通市',
                    value:305190
                }, {
                    name: '玉溪市',
                    value:399950
                }, {
                    name: '红河哈尼族彝族自治州',
                    value:128550
                }, {
                    name: '文山壮族苗族自治州',
                    value:111791
                }, {
                    name: '西双版纳傣族自治州',
                    value:83012
                }, {
                    name: '临沧市',
                    value:131354
                }, {
                    name: '楚雄彝族自治州',
                    value:36623
                }, {
                    name: '丽江市',
                    value:3237
                }, {
                    name: '大理白族自治州',
                    value:19550
                }, {
                    name: '保山市',
                    value:20573
                }, {
                    name: '德宏傣族景颇族自治州',
                    value:6991
                }, {
                    name: '怒江傈僳族自治州',
                    value:14085
                }, {
                    name: '迪庆藏族自治州',
                    value:0
                }]
            }]
        });
    });
}

//var currentIdx = 0;

showProvince();
//https://gallery.echartsjs.com/editor.html?c=xDLGMMiEJ&v=9
//这个网页是模板和生成系统