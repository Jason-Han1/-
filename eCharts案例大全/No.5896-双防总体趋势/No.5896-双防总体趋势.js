option = {
        tooltip: {
          formatter: '{a} <br/>{c} {b}'
        },
        title: {
          text: '双防总体趋势',
          left: 'center',
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            color: '#c2d4ff',
            shadowcolor: '#c2d4ff', // 默认透明
            shadowBlur: 10,
            fontSize: 20
          },
          top: 15
        },
        series: [
          {
            name: '转速',
            type: 'gauge',
            center: ['16%', '55%'], // 默认全局居中
            radius: '30%',
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 7,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                width: 2,
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              fontWeight: 'bolder',
              color: '#c2d4ff',
              shadowcolor: '#c2d4ff', // 默认透明
              shadowBlur: 10,
              show: false

            },
            axisTick: { // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto',
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#c2d4ff',
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10
              }
            },
            pointer: {
              width: 5,
              shadowcolor: '#c2d4ff', // 默认透明
              shadowBlur: 5
            },
            title: {
              offsetCenter: [0, '125%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#c2d4ff',
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10,
                fontSize: 16

              }
            },
            detail: {
              // backgroundColor: 'rgba(30,144,255,0.8)',
              // borderWidth: 1,
              bordercolor: '#c2d4ff',
              shadowcolor: '#c2d4ff', // 默认透明
              shadowBlur: 5,
              width: 80,
              height: 30,
              offsetCenter: [5, '50%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#c2d4ff',
                fontSize: 22
              }
            },
            data: [{ value: 1.5, name: '风险点数 ' }]
          },
          {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: '45%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                width: 3,
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              fontWeight: 'bolder',
              color: '#c2d4ff',
              shadowcolor: '#c2d4ff', // 默认透明
              shadowBlur: 10,
              show: false
            },
            axisTick: { // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto',
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 25, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#c2d4ff',
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10
              }
            },
            pointer: { // 分隔线
              shadowcolor: '#c2d4ff', // 默认透明
              shadowBlur: 5
            },
            title: {
              offsetCenter: [0, '108%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#c2d4ff',
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10,
                fontSize: 16
              }
            },
            detail: {
              offsetCenter: [0, '56%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#c2d4ff',
                fontSize: 22
              }
            },
            data: [{ value: 40, name: '未闭环隐患总数 ' }]
          },
          {
            name: '转速',
            type: 'gauge',
            center: ['84%', '55%'], // 默认全局居中
            radius: '30%',
            min: 0,
            max: 7,
            startAngle: 135,
            endAngle: -45,
            splitNumber: 7,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                width: 2,
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              fontWeight: 'bolder',
              color: '#c2d4ff',
              shadowcolor: '#c2d4ff', // 默认透明
              shadowBlur: 10,
              show: false
            },
            axisTick: { // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto',
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#c2d4ff',
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10
              }
            },
            pointer: {
              width: 5,
              shadowcolor: '#c2d4ff', // 默认透明
              shadowBlur: 5
            },
            title: {
              offsetCenter: [0, '125%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#c2d4ff',
                shadowcolor: '#c2d4ff', // 默认透明
                shadowBlur: 10,
                fontSize: 16
              }
            },
            detail: {
              // backgroundColor: 'rgba(30,144,255,0.8)',
              // borderWidth: 1,
              bordercolor: '#c2d4ff',
              shadowcolor: '#c2d4ff', // 默认透明
              shadowBlur: 5,
              width: 80,
              height: 30,
              offsetCenter: [-5, '50%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#c2d4ff',
                fontSize: 22
              }
            },
            data: [{ value: 1.5, name: ' 风险数' }]
          }
        ]
      }