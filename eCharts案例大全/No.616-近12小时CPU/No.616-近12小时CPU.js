 var option = {
     title: {
	        text: '近12小时CPU',
	        textStyle: {
	        	 align: 'center',
	            color: '#333333',
	            fontSize: 18,
	        },
	        top: '2%',
	        left: '2%',
	    },
      grid: {
        top: '25%',
        bottom: '19%',
        left: '6%',
        right: '4%',
      },
      tooltip: {
        trigger: 'axis',
        label: {
          show: true,
        },
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
        data: [
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
        ],
      },
      yAxis: {
        max:100,
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
        splitArea: {
          show: true,
          areaStyle: {
            color: '#fff',
          },
        },
      },
      series: [
        {
          name: 'cpu占用率：',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 7,
          lineStyle: {
            color: 'rgba(95, 87, 245, 1) ',
            shadowBlur: 12,
            shadowColor: 'rgba(95, 87, 245, 0.9)',
            shadowOffsetX: 1,
            shadowOffsetY: 1,
          },
          itemStyle: {
            color: 'rgba(95, 87, 245, 1) ',
            borderWidth: 1,
            borderColor: '#FFF',
          },

          data: [
            20, 18, 28, 9, 16, 20, 30, 20, 13, 19, 40,
            30,
          ],
        },
      ],
    }