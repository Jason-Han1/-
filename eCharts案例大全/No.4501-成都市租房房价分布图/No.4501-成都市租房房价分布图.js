var cdmap = "/asset/get/s/data-1608370627842-5P7jirpm5.json";
myChart.showLoading();
$.getJSON(cdmap, function(geoJson) {
    myChart.hideLoading();
    echarts.registerMap('chengdu', geoJson);
    myChart.setOption(option={
        backgroundColor: '#fcf8e8',
        //backgroundColor: '#020933',
        //backgroundColor: '#231942',
        title:{
            text:'成都市房价分布图',
            subtext:'数据爬取于链家网站',
            top: 20,
            left: 'center'
        },
        tooltip:{
            trigger:'item',
            formatter: '{b}<br/>平均房价：{c} (元/m²)<br/>',
        },
        toolbox:{
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature:{
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap:{
            min: 5000,
            max: 18000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
                //color: ['#fffaa4','#54e346','#0e49b5']
            }
        },
        series:[
            {
                name: '成都市租房房价',
                type: 'map',
                mapType: 'chengdu',
                label:{
                    show: true
                },
                roam: true,
                itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    //borderColor: '#3fdaff',
                    borderColor: '#6155a6',
                    borderWidth: 1,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    //shadowBlur: 15
                },
                emphasis: {
                    areaColor: '#ffffff',
                }
            },
                data:[
                    {name: '成华区', value: 13869.47},
                    {name: '崇州市', value: 6777.47},
                    {name: '大邑县', value: 5812.9},
                    {name:'都江堰市',value: 6949.67},
                    {name: '简阳市', value: 8529.93},
                    {name: '金牛区', value: 12955.08},
                    {name: '金堂县', value: 5048.37},
                    {name: '锦江区', value: 17597.01},
                    {name: '龙泉驿区', value: 10136.54},
                    {name: '彭州市', value: 5832.82},
                    {name: '郫都区', value: 9082.69},
                    {name: '蒲江县', value: 6181.06},
                    {name: '青白江区', value: 6232.65},
                    {name: '青羊区', value: 17548},
                    {name: '邛崃市', value: 6928.06},
                    {name: '双流区', value: 10967.17},
                    {name: '温江区', value: 8789.23},
                    {name: '武侯区', value: 14452.12},
                    {name: '新都区', value: 8383.07},
                    {name: '新津区', value: 8730.25},
                    ]
            }]
    })
});