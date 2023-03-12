option = {
      title: {
        text: '折线图实线加虚线',
      },
      // 用formatter回调函数显示多项数据内容
      tooltip: {
        trigger: 'axis',
        formatter(params, ticket, callback) {
          let htmlStr = '';
          const valMap = {};
          // 过滤无效值params
          const paramsFilter = params.filter((item) => item?.value && item);
          for (let i = 0; i < paramsFilter.length; i++) {
            const param = paramsFilter[i];
            const xName = param.name; // x轴的名称
            const { seriesName } = param; // 图例名称
            const { value } = param; // y轴值
            const { color } = param; // 图例颜色
            if (i === 0) {
              htmlStr += `${xName}<br/>`; // x轴的名称
            }
            htmlStr += '<div>';
            // 为了保证和原来的效果一样，这里自己实现了一个点的效果
            htmlStr += `<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${color};"></span>`;
            // 圆点后面显示的文本
            htmlStr += `${seriesName}：${value}`;
            htmlStr += '</div>';
            valMap[seriesName] = value;
          }
          return htmlStr;
        },
      },
      legend: {
        data: ['折线1', '折线2'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        axisLine: { onZero: false, show: false, lineStyle: {} }, // x轴横线
        boundaryGap: false,
        data: [220, 182, 191, 250, 290, 300, 310, 312],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '折线1',
          type: 'line',
          data: [-220, -182, -191, -250, -290],
        },
        {
          name: '折线1',
          type: 'line',
          smooth: false, // 关键点，为true是不支持虚线，实线就用true
          lineStyle: {
            width: 2,
            type: 'dotted', // 'dotted'虚线 'solid'实线
          },
          data: [null, null, null, null, -290, -330, -310],
        },
        {
          name: '折线2',
          type: 'line',
          data: [10, 22, 31, 40, 45],
        },
        {
          name: '折线2',
          type: 'line',
          smooth: false, // 关键点，为true是不支持虚线，实线就用true
          lineStyle: {
            width: 2,
            type: 'dotted', // 'dotted'虚线 'solid'实线
          },
          data: [null, null, null, null, 45, 55, 65],
        },
      ],
    };