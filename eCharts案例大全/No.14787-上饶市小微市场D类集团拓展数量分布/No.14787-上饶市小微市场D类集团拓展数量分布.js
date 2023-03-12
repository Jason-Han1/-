var uploadedDataURL = "/asset/get/s/data-1507621331560-H1nRFl53b.json";



function randomData() {
    return Math.round(Math.random() * 10000);
}


function showProvince() {
    var name = 'hn';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
           
            title: {
                text: "上饶市小微市场D类集团拓展数量分布",
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            
            visualMap: {
                min: 0,
                max: 100,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true
            },
             toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                        }
            },
            series: [{
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
                itemStyle: {

                    normal: {
                        borderColor: '#389BB7',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
                
            data:[
                {name: '上饶县', value: 100},
                {name: '信州区', value: 10},
                {name: '玉山县', value: 20},
                {name: '广丰县', value: 30},
                {name: '铅山县', value: 40},
                {name: '横峰县', value: 41},
                {name: '弋阳县', value: 15},
                {name: '万年县', value: 25},
                {name: '余干县', value: 35},
                {name: '鄱阳县', value: 35},
                {name: '德兴市', value: 35},
                {name: '商丘市', value: 35},
                {name: '婺源县', value: 35}
                
            ]
                    
            }],
            
        });
    });
}

var currentIdx = 0;

showProvince();