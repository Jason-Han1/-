var uploadedDataURL = "/asset/get/s/data-1566529109598--SpW4kQ4X.json";





myChart.showLoading();

$.get(uploadedDataURL, function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('HK', geoJson);
 myChart.setOption(option = {
     tooltip:{},
     geo: {
         roam:true,
        map: 'HK',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        },
        regions: [{
        name: '广东省',
        itemStyle: {
           
           
           
            shadowColor: 'blue',
            shadowBlur: 30,
         
           
        }
    }]

    },
})

});