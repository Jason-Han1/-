var option = {
      backgroundColor: 'transparent',
      color: ['#f58220', '#f15b6c', '#6950a1'],
      tooltip: {
        //提示框组件
        trigger: 'axis',
        formatter: function (params) {
          var relVal = params[0].name;
          for (var i = 0, l = params.length; i < l; i++) {
            relVal += '<br/>';
            relVal += '<span style="display:inline-block;margin-right:5px;border-radius:2px;width:9px;height:9px;background-color:' + params[i].color + '"></span>';
            relVal += params[i].seriesName + ' : ' + params[i].value;
          }
          return relVal;
        },
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 12,
        },
      },
      grid: {
        left: '10px',
        right: '15px',
        bottom: '30px',
        top: '40px',
        containLabel: true,
      },
      legend: {
        //图例组件，颜色和名字
        bottom: '0',
        itemWidth: 10,
        itemHeight: 10,
        data: [
          {
            name: '订单总量',
          },
          {
            name: '已结算订单',
          },
          {
            name: '已退订单',
          },
        ],
        textStyle: {
          color: '#a8aab0',
          fontStyle: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 12,
        },
      },
      xAxis: [
        {
          type: 'category',
          //	boundaryGap: true,//坐标轴两边留白
          data: ['爱立信端局', '中兴端局', '爱立信HSS', '中兴HSS', '华为HSS', '中兴VIMS',  '华为智能网'],
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
              color: '#204C6F',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            },
          },
          axisTick: {
            //坐标轴刻度相关设置。
            show: false,
          },
          axisLine: {
            //坐标轴轴线相关设置
            lineStyle: {
              color: '#204C6F',
              opacity: 0.2,
            },
          },
          splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          splitNumber: 5,
          axisLabel: {
            textStyle: {
              color: '#204C6F',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#204C6F'],
              opacity: 0.3,
            },
          },
          boundaryGap: ['0', '20%'],
        },
      ],
      series: [
        {
          name: '订单总量',
          type: 'bar',
          data: [500, 200, 50, 60, 36, 900, 9],
          // barWidth: 5
        },
        {
          name: '已结算订单',
          type: 'bar',
          data: [400, 180, 40,30, 31, 200, 8],
          // barWidth: 5
        },
        {
          name: '已退订单',
          type: 'bar',
          data: [300, 120, 20, 20, 26, 120, 7],
          // barWidth: 5
        },
      ],
    };