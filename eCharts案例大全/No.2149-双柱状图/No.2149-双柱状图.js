option = {
        backgroundColor: '#FFF',
        grid: {
          top: '12%',
          bottom: '10%',
          left: '10%',
          right: '4%',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
          label: {
            show: true,
          },
        },
        legend: {
          icon: 'circle',
          align: 'left',
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 20,
          borderRadius: 4,
          textStyle: {
            fontSize: 14,
          },
          x: 'center',
          y: 'top',
          data: ['pv', 'uv'],
        },
        xAxis: {
          boundaryGap: true, //默认，坐标轴留白策略
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
          },
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: 'rgba(33,148,246,0.2)',
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: 'pv',
            type: 'bar',
            itemStyle: {
              color: '#52C1F5',
              borderWidth: 1,
              borderColor: '#FFF',
              barBorderRadius: [8, 8, 0, 0],
            },
            barWidth: 12,

            label: {
              show: false,
              distance: 1,
            },
            data: [200, 120, 310, 340, 310, 500, 600],
          },
          {
            name: 'uv',
            type: 'bar',
            itemStyle: {
              color: '#FF7A8C',
              borderWidth: 1,
              borderColor: '#FFF',
              barBorderRadius: [8, 8, 0, 0],
            },
            barWidth: 12,

            label: {
              show: false,
              distance: 1,
            },
            data: [1000, 200, 500, 900, 300, 500, 600],
          },
        ],
      }
