var uploadedDataURL = "/asset/get/s/data-1501749293114-BkSElDlDW.json";



$.get(uploadedDataURL, function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('孝感市', geoJson);
    
var allData = {
"citys":[
{"name":"惠城区","value":[114.382474,23.084137],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"惠东县 5%","value":[114.719988,22.985014],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"惠阳区 5%","value":[114.456176,22.789788],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"博罗县 50%","value":[114.289528,23.172771],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"龙门县 20%","value":[114.254863,23.727737],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
],

"moveLines":[
{"fromName":"惠东县","toName":"惠城区","coords":[[114.719988,22.985014],[114.382474,23.084137]]},
{"fromName":"惠东县","toName":"惠阳区","coords":[[114.719988,22.985014],[114.456176,22.789788]]},
{"fromName":"惠东县","toName":"博罗县","coords":[[114.719988,22.985014],[114.289528,23.172771]]},
{"fromName":"惠东县","toName":"龙门县","coords":[[114.719988,22.985014],[114.254863,23.727737]]},
]

};
    
option = {
    backgroundColor: '#404a59',
    title: {
        text: '惠州市卡口数据研判',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'auto',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: '孝感市',
        label: {
            //normal:{
                //show: true,
                //textStyle:{
                    //color:'#fff',
                //}
            //},
            emphasis: {
                show: false,
                    textStyle:{
                    color:'#fff',
                }
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 1,
        rippleEffect: {
            brushType: 'stroke',
            period:7,
            scale:26
        },
        label: {
            normal:
            {
                show : true,
                position:'right',
                formatter:'{b}'
            },
            emphasis: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: allData.citys
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 50,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 10,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                width: 2,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: allData.moveLines
    }]
};
myChart.setOption(option);
});
