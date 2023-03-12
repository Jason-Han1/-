option = {
        title: {
          text: '广场舞30min',
          textStyle: {
            color: '#666',
            fontSize: 12,
            align: 'center',
            fontWeight: 'normal'
          },
          left: '40%'
        },
        tooltip: { // 提示框组件
          trigger: 'item'
          // trigger: 'axis'
        },
        axisPointer: {
          link: [{
            xAxisIndex: 'all'
          }],
          lineStyle: {
            color: '#fff',
            width: 0
          }
        },
        grid: { // 直角坐标系内绘图网格
          show: false,
          top: '30px',
          width: 'auto',
          height: 'auto'
        },
        xAxis: { // 直角坐标系grid的x轴
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            interval: 0,  // 显示x轴数据
            showMinLabel: true,
            showMaxLabel: true,
            align: 'left',
            rotate: 330
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisTick: {
            show: false
          },
          // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
        },
        yAxis: { // 直角坐标系grid的y轴
          type: 'value',
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#999'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {  // y轴网格显示
            show: true
          },
          nameTextStyle: { // 坐标轴名样式
            color: '#666',
            fontSize: 12,
            align: 'left'
          },
          boundaryGap: true,
          splitNumber: 3,  // 坐标轴分割段数
          minInterval: 40, // 自动计算的坐标轴最小间隔大小。例如可以设置成1保证坐标轴分割刻度显示成整数。
          data: ['0', '120', '140', '180']
        },
        series: [
          {
            name: '舒张压',
            type: 'line',
            smooth: true,
            smoothMonotone: 'x',
            tooltip: { // 提示框组件
              snap: true,
              formatter: '{c}',
              backgroundColor: '#81cefc',
              textStyle: {
                color: '#fff',
                fontSize: 12
              },
              position: (point) => {
                point[0] -= 10
                point[1] -= 40
                return point
              }
            },
            lineStyle: {
              normal: {
                width: 2,
                color: '#8ecefc'
              }
            },
            itemStyle: {
              normal: {
                color: '#8ecefc'
              }
            },
            areaStyle: {
              normal: {
                color: '#e6f5fe',
                origin: 'auto',
                shadowColor: '#e6f5fe'
              }
            },
            data: [44, 65, 74, 86, 70, 85, 92, 56, 75, 84, 66, 50]
          },
          {
            name: '收缩压',
            type: 'line',
            smooth: true,
            smoothMonotone: 'x',
            tooltip: { // 提示框组件
              snap: true,
              formatter: '{c}',
              backgroundColor: '#7cedc4',
              textStyle: {
                color: '#fff',
                fontSize: 12
              },
              position: (point) => {
                point[0] -= 10
                point[1] += 25
                return point
              }
            },
            lineStyle: {
              normal: {
                width: 2,
                color: '#7cedc4'
              }
            },
            itemStyle: {
              normal: {
                color: '#7cedc4'
              }
            },
            areaStyle: {
              normal: {
                color: '#7cedc41f',
                origin: 'auto'
              }
            },
            data: [ 34, 55, 54, 76, 60, 75, 72, 16, 55, 74, 36, 10 ]
          }

        ],
        textStyle: {
          color: '#666',
          fontSize: 12
        }
      }