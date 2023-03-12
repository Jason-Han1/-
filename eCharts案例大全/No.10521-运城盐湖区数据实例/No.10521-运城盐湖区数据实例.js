var uploadedDataURL = "/asset/get/s/data-1564648820874-g-QMHvXkd.geojson";

myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('yuncheng', geoJson);
    myChart.hideLoading();
    option = {
        title: {
        text: '运城盐湖区数据实例',
        subtext: '',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min:0,
        max: 500,
        splitNumber: 5,
        seriesIndex: [0],
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'].reverse()
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
            show: true,
            map: 'yuncheng',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
        },
    series: [{
        name: 'AQI',
        type: 'map',
        //map: 'yuncheng',
        geoIndex: 0,
        aspectScale:0.9,
        data:[
            {name: '上王乡', value: 199},
            {name: '三路里镇', value: 39},
            {name: '上郭乡', value: 152},
            {name: '王范乡', value: 299},
            {name: '泓芝驿镇', value: 89},
            {name: '北相镇', value: 52},
            {name: '冯村乡', value: 9},
            {name: '王范乡', value: 90},
            {name: '姚孟街道', value: 99},
            {name: '陶村镇', value: 39},
            {name: '大渠街道', value: 480},
             {name: '北城街道', value: 299},
             {name: '中城街道', value: 199},
            {name: '东城街道', value: 39},
            {name: '西城街道', value: 152},
            {name: '南城街道', value: 299},
            {name: '安邑街道', value: 89},
            {name: '东郭镇', value: 52},
            {name: '龙居镇', value: 9},
            {name: '金井乡', value: 90},
            {name: '解州镇', value: 99},
            {name: '席张乡', value: 39}
            
        ]
    }]
    }
    myChart.setOption(option);
});