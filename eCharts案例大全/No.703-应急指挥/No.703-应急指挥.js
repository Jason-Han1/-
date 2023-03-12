var uploadedDataURL = "/asset/get/s/data-1637748100958-lonOPAMX0.png";

    //   var uploadedDataURL = require('../../../../assets/images/manage/nei-circle.png')

      var seriesData = [
        {
          name: '待处理事件',
          value: '400'
        },
        {
          name: '已处理事件',
          value: '70'
        }
      ]
      var colorList = ['#FEE394', '#7DF6F6']
      option = {
        backgroundColor: '#0D2741',
        grad: {
          left: '2%'
        },
        title: {
          text: '应急指挥',
          x: '43.5%',
          y: '55%',
          textStyle: {
            fontSize: 14,
            color: '#7DF6F6'
          }
        },
        tooltip: {
          trigger: 'item',
          borderColor: 'rgba(255,255,255,.3)',
          backgroundColor: 'rgba(13,5,30,.6)',
          borderWidth: 1,
          padding: 5,
          formatter: function (parms) {
            var str =
              parms.marker +
              '' +
              parms.data.name +
              '</br>' +
              '数量：' +
              parms.data.value +
              '</br>' +
              '占比：' +
              parms.percent +
              '%'
            return str
          }
        },
        graphic: [
          {
            type: 'image',
            id: 'logo',
            left: '43%',
            top: '40%',
            z: -10,
            bounding: 'raw',
            rotation: 0, // 旋转
            origin: [60.5, 30.5], // 中心点
            scale: [1.0, 1.0], // 缩放
            style: {
              image: uploadedDataURL,
              width: 140,
              border: '1px solid red',
              height: 140,
              opacity: 1
            }
          },
             {
            type: 'image',
            id: 'logo2',
            left: '38.2%',
            top: '32.4%',
            z: -10,
            bounding: 'raw',
            rotation: 0, // 旋转
            origin: [60.5, 30.5], // 中心点
            scale: [1.0, 1.0], // 缩放
            style: {
              image: uploadedDataURL,
              width: 240,
              border: '1px solid red',
              height: 240,
              opacity: 1
            }
          }
        ],
        series: [
          {
            type: 'pie',
            z: 3,
            center: ['50%', '50%'],
            radius: ['30%', '23%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              }
            },
            label: {
              show: true,
              position: 'outside',
              formatter: function (param) {
                if (param) {
                  return [
                    '{a|' + param.name + '}',
                    '{b|' + param.percent + '%}'
                  ].join(' ')
                }
              },
              rich: {
                a: {
                  color: '#7DF6F6'
                },
                b: {
                  color: '#fff'
                }
              }
            },
            labelLine: {
              // color: '#fff',
              normal: {
                length: 20,
                length2: 20,
                lineStyle: {
                  width: 1
                }
              }
            },
            data: seriesData
          }
        ]
      }