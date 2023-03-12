myChart.showLoading();

$.get('https://ironbeetle.cn/shenzhen.json', function (geoJson) {
console.log('geoJson', geoJson)
    myChart.hideLoading();

    echarts.registerMap('sz', geoJson);

    myChart.setOption(option = {
        backgroundColor: '#093a88',
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        geo: [
          {
            map: 'sz',
            zoom: 1.015,
            // top: '25%',
            // bottom: '15%',
            roam: false,
            itemStyle: {
              normal: {
                areaColor: '#093c8b',
                // borderColor: '#ccc',
                // borderWidth: 10,
                shadowColor: '#e0dfb8',
                shadowOffsetX: 0,
                shadowOffsetY: 5
              },
            },
            silent: true,
          },
          {
            map: 'sz',
            roam: false,
            itemStyle: {
              normal: {
                shadowColor: '#093c8b',
                shadowOffsetX: -4,
                shadowOffsetY: 4
              },
            }
          }
        ],
        series: [
            {
                type: 'map',
                mapType: 'sz', // 自定义扩展图表类型
                label: { show: false },
                geoIndex: 1,
                itemStyle: {
                    areaColor: 'rgba(0,0,0,0)',
                    // areaColor: 'transparent',
                    // shadowColor: '#093c8b',
                    // shadowOffsetX: -3,
                    // shadowOffsetY: 3
                },
            },
            {
                type: 'map',
                mapType: 'sz', // 自定义扩展图表类型
                label: { show: true },
                geoIndex: 2,
                itemStyle: {
                    areaColor: '#98d4ff',
                },
            },
        ]
    });
});