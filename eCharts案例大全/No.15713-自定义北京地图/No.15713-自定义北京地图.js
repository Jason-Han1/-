var uploadedDataURL = "/asset/get/s/data-1482818963027-Hko9SKJrg.json";

myChart.showLoading();
$.get(uploadedDataURL, function(chinaJson) {
    echarts.registerMap('北京', chinaJson);
    myChart.hideLoading();
    myChart.setOption({
         visualMap: {
                min: 10,
                max: 50,
                text:['High','Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue','yellow', 'orangered']
                }
            },
        series: [{
            type: 'map',
            map: '北京',
            selectedMode:'single',
            itemStyle:{
                normal:{
                    label:{
                        show:true
                    }
                },
                emphasis:{
                    label:{
                        show:true
                    }
                }
            },
            data:[
                {name: '城六区', value: 100},
                {name: '门头沟区', value: 10},
                {name: '通州区', value: 20},
                {name: '昌平区', value: 30},
                {name: '大兴区', value: 40},
                {name: '房山区', value: 41},
                {name: '顺义区', value: 15},
                {name: '平谷区', value: 25},
                {name: '密云区', value: 35},
                {name: '延庆区', value: 35},
                {name: '怀柔区', value: 45}
               
               
            ]
        }]
    });
});