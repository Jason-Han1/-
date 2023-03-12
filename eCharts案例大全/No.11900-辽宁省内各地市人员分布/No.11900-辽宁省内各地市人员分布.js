var uploadedDataURL = "/asset/get/s/data-1487150273481-Bkt6n9WYl.json";

function showProvince() {
    var name = 'liaoning';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            title: {
                text: '辽宁省内各地市人员分布',
                left: 'center', //标题位置
                textStyle: {
            fontSize: 32,
            fontWeight: 'bolder',
            color: 'black' // 主标题文字颜色
        }
            },
             color: ['orange'],
            legend: {
                orient: 'vertical',
                left: 'left',
                 textStyle: {
            fontSize: 20,
            color: 'black' // 图例文字颜色
        },
                //data: ['地市']
               // 图例位置
            },

            visualMap: {
                min: 0,
                max: 3045,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                //color: ['blue', 'blue']
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
            series: [{
                name: '地市',
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },

                data: [{name: '沈阳市',value: 2045},
{name: '抚顺市',value: 1166},
{name: '铁岭市',value: 1078},
{name: '大连市',value: 1017},
{name: '鞍山市',value: 978},
{name: '营口市',value: 925},
{name: '朝阳市',value: 705},
{name: '本溪市',value: 688},
{name: '丹东市',value: 627},
{name: '盘锦市',value: 603},
{name: '辽阳市',value: 588},
{name: '葫芦岛市',value: 588},
{name: '锦州市',value: 571},
{name: '阜新市',value: 429}

                    ]
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

showProvince();