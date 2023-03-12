option = {
      tooltip: {
        trigger: 'item',
      },

      visualMap: {
        show: false,
        min: 0,
        seriesIndex: 0,
        left: 'left',
        top: 'bottom',
        calculable: false,
        inRange: {
          color: ['#FFDED1', '#FEB08F', '#FF9C6F'],
        },
      },
      geo: {
        map: 'china',
        zoom: 1.2,
        label: {
          normal: {
            show: true,
            color: '#E68470',
          },
          emphasis: {
            show: false,
            color: '#292929',
          },
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#FFDED1',
            borderColor: '#E68470',
            borderWidth: 1,

          },
        },
      },
      series: [
        {
          name: '城市迁入人数',
          type: 'map',
          mapType: 'china',
          geoIndex: 0,
          label: {
            normal: {
              show: true,
            },
            emphasis: {
              show: true,
            },
          },
          data: [
            {
              name: '山西',
              value: 9000,

            },
            {
              name: '广东',
              value: 9000,

            },
          ],
          markPoint: {
                symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABIxJREFUWEfNl11oHFUYht/vTGITsztLDVqbG8GdJGqDYFNDEIOCWIJaxcwuoSKlWltosVpQC6LUYnujBsSfgj8VfyIVu5mAJRGk0qoXrbEKktrYZma9UazG1rizmyYmO+eTTQ0kYXdnTmbFzt1y3vf9nnNmznfOEi7xhy5xPlQEkJNJ7YI2vAJefiVDeKhadrbuwMkxIuKwCxAK0E0Y9zFjPcCdYMTmwxAwBtAggXuj/emjSwVdEqCbiN/CEq8CaA1SmIi+ENAej1hnhoPoF01UzZIxGx8jcA8zV6s4iTAJaFt1a/R9JZ+K2O2KP8FAj4pnsZYIW3Qr/XbQjMCv2E003gMpDzHCbSwieIJFZ6Tf/jwIZCBA3nh7jZv9+TQY1wQJ9dUQOXoDWug1528/bSDATMLYAckv+4WpjAvC9qiVft3PEwywyxgCuK1sGNFBMAaEoAlmvhWMbQxeVspDREO65bSHBswmjSulx2PlggjiIb3ffm++Jmc23+jBOwbmulJeodFV0ZTzR/lsnylMmM1r8pw/UWYlBnTLWVds3O1q3MmQL5TyVlVrbXUfj5bMLvh8X3HGbLoL7A2WnAeJHTHLfqXY+ES3sTo/w9+VnJwQ6/Q+e+A/XkGxU7fsl4oVyXQb7Zjh42Um1x6z7KFQgLyltdo9lzkPcLRYEBF9pVvObUUBzca9YPlMUQCinC4uq6fUyHQowILZNY23mHlzyY9diF2R1Oje+beXXMJYKxkDpY5EInpHt5xHQu/iQkDWNFZJ5h/Kz5SOE/GghMhRoc2AzVKnDgFMGrVEU85IRQALIRnT+AzMa/0Cg4wT4VPdSt8dSBtEVNAU2o3H+W8qchYLsSaSsr8PUtu3zcwPcc34u8zYGCS49M6lfTHLeTRohhLgxIPXr8xPzoyCORK0wHwdgc5Fa2qb6MDJ8aB+JcDZDZOIb5cXb9PKj0bigYhlf6RiVAZkZsomjC+Z0aFSCEQHY5bTreQJctQVC5xKxo1piWFm1AYpSMDZqFbTQqlTfwbRL/wsVB3/6rMJY5uUvM/PTgQphOiMpOzDftpi48qveMGu7jI+YfC9PoX3xPrTu5YCV/CEA9xwXT1y+WEGNxSdPdHRqLjpTkqlvP8FsFDUTTR1QMojDK5a1FJ+obrLW6O9w2Uvu37goVZwLtw1G59ili/O/SbClIaqjjrrzLd+AH7jFQGcbT2mYTFw/8WCtCHW7/T6FQ8yXhHAQiF+uDmazXhfAzikW87TQYoH0YQCnO2HtdXj+genzxeK5ZI3XF138NTvc/dCTq66wpWyPmb9aAeBqVibcc34ZjCeZKAJRM/HLOe5YuHZrsZnJeQeEDmCqCfaZ7+pCqq8gm6XsYnB+xfsWKIBQPSB8BMIzOxdS5LMxT1SkNgatew3VCCVAS8km9pmpDwMZl2lEEBZEtyp96WPqfiUAWe/tfUtK+TM1CZIvoNBN5f6QwWiHAEniOkIadX7I6mR31TgQp8ks7t3924xaX/YIKerlrPnLZ8N1bRxoc38Veut/jXMKVIRQNUVUdUv6RWrFgmj/wer16o4uaoZHQAAAABJRU5ErkJggg==',
                symbolSize:30,
                label:{
                    normal:{
                        show:false,
                    }
                },
                data: [
                    {coord:[111.15,31.89]},
                    {coord:[101.15,31.89]},
                    {coord:[105.15,31.89]},
                    {coord:[105.15,38.89]}
                ]
        },
        },
        {
          type: 'lines',
          coordinateSystem: 'geo',
          z: 99,
          zlevel: 2,
          effect: {
            show: true,
            period: 4, // 箭头指向速度，值越小速度越快
            trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', // 箭头图标
            symbolSize: 5, // 图标大小
          },
          lineStyle: {
            normal: {
              color: 'rgba(79, 141, 245, 1)',
              width: 1, // 尾迹线条宽度
              opacity: 1, // 尾迹线条透明度
              curveness: 0.3, // 尾迹线条曲直度
            },
          },
          data: [{
            coords: [[116.4551, 40.2539], [119.5313, 29.8773]],
          }, {
            coords: [[117.29, 32.0581], [119.5313, 29.8773]],
          }, {
            coords: [[114.3896, 30.6628], [119.5313, 29.8773]],
          }, {
            coords: [[114.4995, 38.1006], [119.5313, 29.8773]],
          }],
        }, {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          symbolSize: 11,
          zlevel: 2,
          rippleEffect: { // 涟漪特效
            color: 'transparent',
          },

          symbol: 'circle',
          itemStyle: {
            color: '#4F8DF5',
            borderWidth: 20,
            borderColor: 'rgba(79, 141, 245, 0.05)',
          },
          data: [
            [116.4551, 40.2539],
            [117.29, 32.0581],
            [114.3896, 30.6628],
            [114.4995, 38.1006],
          ],
        },
      ],
    };
