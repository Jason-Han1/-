var uploadedDataURL = "/asset/get/s/data-1461584707906-r1hSmtsx.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('HK', geoJson);

    myChart.setOption(option = {
        title: {
            text: ' Poverty Rate(%) by district Council district (2015)',
            subtext: 'Data from Commission on Poverty',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (%)'
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
        visualMap: {
            min: 9,
            max: 19,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            color: ['black','red','lightyellow']
        },
        series: [
            {
                name: 'Poverty Rate by district Council district',
                type: 'map',
                mapType: 'HK', // 自定义扩展图表类型
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: 'Central and Western', value: 11.9},
                    {name: 'Wan Chai', value: 13.6},
                    {name: 'Eastern', value: 13.6},
                    {name: 'Southern', value: 10.9},
                    {name: 'Yau Tsim Mong', value: 15.5},
                    {name: 'Sham Shui Po', value: 17.0},
                    {name: 'Kowloon City', value: 15.0},
                    {name: 'Wong Tai Sin', value: 16.2},
                    {name: 'Kwun Tong', value: 16.8},
                    {name: 'Kwai Tsing', value: 15.7},
                    {name: 'Tsuen Wan', value: 12.6},
                    {name: 'Tuen Mun', value: 14.4},
                    {name: 'Yuen Long', value: 16.0},
                    {name: 'North', value: 14.2},
                    {name: 'Tai Po', value: 12.0},
                    {name: 'Sha Tin', value: 12.7},
                    {name: 'Sai Kung', value: 9.7},
                    {name: 'Islands', value: 14.3}
                ],
                // 自定义名称映射
                nameMap: {
                    'Central and Western': 'Central and Western',
                    'Eastern': 'Eastern',
                    'Islands': 'Islands',
                    'Kowloon City': 'Kowloon City',
                    'Kwai Tsing': 'Kwai Tsing',
                    'Kwun Tong': 'Kwun Tong',
                    'North': 'North',
                    'Sai Kung': 'Sai Kung',
                    'Sha Tin': 'Sha Tin',
                    'Sham Shui Po': 'Sham Shui Po',
                    'Southern': 'Southern',
                    'Tai Po': 'Tai Po',
                    'Tsuen Wan': 'Tsuen Wan',
                    'Tuen Mun': 'Tuen Mun',
                    'Wan Chai': 'Wan Chai',
                    'Wong Tai Sin': 'Wong Tai Sin',
                    'Yau Tsim Mong': 'Yau Tsim Mong',
                    'Yuen Long': 'Yuen Long'
                }
            }
        ]
    });
});