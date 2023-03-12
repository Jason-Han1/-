option = {
    backgroundColor: '#030f24',
    legend: {
        show: false
    },
    tooltip: {
        show: true
    },
    geo: {
        map: 'china',
        aspectScale: 0.75,
         label: {
            emphasis: {
                show: false
            }
        },
        regions: [
            {
              name: "南海诸岛",
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0,
                  label: {
                    show: false
                  }
                }
              }
            }
          ],
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 0)',
                borderWidth: 0.5,
                areaColor: {
                    x: 1000,
                    y: 1000,
                    x2: 1000,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#69c5d8' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#126caf' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
                opacity:1,
            },
            emphasis: {
                show:false,
                areaColor: '#69c5d8'
            }
        },
        z: 2
    },
    series: [{
        type: 'map',
        map: 'china',
        tooltip: {
            show: false
        },
        label: {
            emphasis: {
                show: false,
                color:'#fff'
            }
        },
        top: '9.7%',
        left: '10%',
        aspectScale: .75,
        roam: false,
        itemStyle: {
            normal: {
                borderColor: '#2cb3dd',
                borderWidth: 0.8,
                areaColor: {
                    type: 'linear-gradient',
                    x: 1000,
                    y: 600,
                    x2: 1000,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#274d68' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#09132c' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
            },
            emphasis: {
                show:false,
                areaColor: '#274d62'
            }
        },
        zlevel: 1
    }]
};