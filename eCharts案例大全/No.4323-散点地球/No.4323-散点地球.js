option = {
        backgroundColor: '#000',
        globe: {
            // baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',


            shading: 'lambert',

            light: {
                ambient: {
                    intensity: 0.4
                },
                main: {
                    intensity: 0.4
                }
            },

            viewControl: {
                autoRotate: false
            }
        },
        tooltip:{
            show:true,
            trigger:'item'
        },
        series: [{

            type: 'lines3D',

            coordinateSystem: 'globe',

            blendMode: 'lighter',

            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                opacity: 0.1
            },

            data: []
        },{
      name: '起点',
      type: 'scatter3D',
      coordinateSystem: 'globe',
      blendMode: 'source-over',
      symbol: 'circle',
      symbolSize: 10,
      label: {
        show: false,
        formatter: "{b}",
        distance: 5,
        position: 'right',
        textStyle: {
          fontSize: 14,
          fontWeight: 'normal',
          fontFamily: 'Microsoft YaHei',
          color: '#fff',
          borderRadius: 2,
          backgroundColor: 'rgba(255,255,255,0.5)'
        }
      },
      emphasis: {
        label: {
          show: false
        }
      },
      itemStyle: {
        color: 'rgb(255, 0, 0)',
        opacity: 1,
        borderWidth: 8,
        borderColor: 'rgba(255,0,0,0.5)'
      },
      data: [{
        name: "北京",
        value: [116.405285,39.904989]
      }]
        }]
};