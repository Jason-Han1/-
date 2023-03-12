const colors = ['#15C2C3', '#FE655B'];
const delta = 0.1;
const { brand = { x: 0, y: 0, name: '' }, items = [] } = {
        "brand":{
            "name":"碧欧泉",
            "x":100.1,
            "y":100.1
        },
        "items":[
            {
                "name":"兰蔻",
                "x":100.1,
                "y":100.1,
                "type":0,
                "brand_id":"1",
                "social_index":11.1,
                " social_index_ranking":10
            },
            {
                "name":"碧欧泉",
                "x":10,
                "y":100,
                "type":0,
                "brand_id":"3",
                "social_index":11.1,
                " social_index_ranking":10
            },
            {
                "name":"雅诗兰黛",
                "x":200,
                "y":100,
                "type":1,
                "brand_id":"3",
                "social_index":11.1,
                " social_index_ranking":10
            },
            {
                "name":"ysl",
                "x":300,
                "y":100,
                "type":1,
                "brand_id":"3",
                "social_index":11.1,
                " social_index_ranking":10
            }
        ]
    };

    const max = {
      x: brand.x,
      y: brand.y,
    };

    const min = {
      x: brand.x,
      y: brand.y,
    };

    const getSymbolSize = (value) => {
      const symbolSize = {
        max: 36,
        min: 12,
      };
      const size = (value * symbolSize.max) / max.y;
      return size < symbolSize.min ? symbolSize.min : size;
    };

    let directVieBrandData = [];
    let observeVieBrandData = [];

    items.forEach((item) => {
      if (item.x > max.x) {
        max.x = item.x;
      }
      if (item.y > max.y) {
        max.y = item.y;
      }
      if (item.x < min.x) {
        min.x = item.x;
      }
      if (item.y < min.y) {
        min.y = item.y;
      }
    });

    items.forEach((item) => {
      const obj = {
        id: item.id,
        name: item.name,
        selectedMode: true,
        symbolKeepAspect: true,
        // symbol: '',
        label: {
          formatter: ({ name}) => name,
          show: item.name.trim().length > 0,
          fontSize: 12,
          color: colors[item.type || 0],
          position: 'bottom',
        },
        symbolSize: getSymbolSize(item.y),
        value: [item.x, item.y],
      };
      if (item.name.trim().length === 0) {
        // @ts-ignore
        obj.symbol = item.type === 1 ? redPng : bluePng;
        obj.symbolSize = obj.symbolSize + 40;
      }
      if (item.type === 1) {
        directVieBrandData.push(obj);
      } else {
        observeVieBrandData.push(obj);
      }
    });

    const directVieBrandSeries = {
      name: '品牌1',
      type: 'scatter',
      animation: false,
      symbol: 'circle',
      color: colors[1],
      itemStyle: {
        opacity: 1,
      },
      zlevel: 1,
      data: directVieBrandData,
      markLine: {
        silent: true,
        zlevel: 0,
        symbol: 'none',
        lineStyle: {
          type: 'solid',
          color: 'rgba(227, 227, 227, 0.6)',
          width: 1,
          opacity: 0.4,
        },
        label: {
          show: false,
        },
        data: [
          {
            xAxis: brand.x,
          },
          {
            yAxis: brand.y,
          },
        ],
      },
    };

    const observeVieBrandSeries = {
      name: '品牌2',
      type: 'scatter',
      symbol: 'circle',
      color: colors[0],
      itemStyle: {
        opacity: 1,
      },
      zlevel: 1,
      data: observeVieBrandData,
      markLine: {
        silent: true,
        zlevel: 0,
        symbol: 'none',
        lineStyle: {
          type: 'solid',
          color: 'rgba(227, 227, 227, 0.6)',
          width: 1,
          opacity: 0.4,
        },

        data: [
          {
            xAxis: brand.x,
            label: {
              show: false,
            },
          },
          {
            yAxis: brand.y,
            label: {
              position: 'start',
              formatter: brand.name,
            },
          },
        ],
      },
    };
option = {
      grid: {
        top: 94,
        left: 48,
        right: 68,
        bottom: 70,
        containLabel: true,
      },
      color: colors,
      legend: {
        show: true,
        // 		"selectedMode": false,
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 20,
        textStyle: {
          fontSize: 12,
          color: '#000000',
        },
        x: 47,
        y: 20,
        data: ['品牌1', '品牌2'],
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: [6, 12],
        borderWidth: 0,
        textStyle: {
          color: 'rgba(0, 0, 0, 0.9)',
          fontSize: 12,
        },
        formatter: ({ name, value }) => {
          if (!name) {
            return '';
          }
          let str = `<div style=" display:flex;flex-direction: column ;justify-content: center;font-size:12px">
          <div style=" margin: 0 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); ">
          <p style="font-weight: bold;font-size:13px;line-height:24px">${name}</p>
          <div style="color: rgba(0, 0, 0, 0.6);">
          <p><span style="display:inline-block;width:80px;line-height:24px;font-size:12px">榜单排名</span><span style="display:inline-block;width:50px;text-align:right;">${value[0]}</span></p>
          <p><span style="display:inline-block;width:80px;line-height:24px;font-size:12px">社交影响力指数</span><span style="display:inline-block;width:50px;text-align:right;">${value[1]}</span></p>
          </div>
          </div>`;
          str = str + '</div>';
          return str;
        },
      },
      xAxis: {
        name: '相关度',
        nameLocation: 'end',
        // min: min.x * (1 - delta),
        nameTextStyle: {
          color: 'color: rgba(0, 0, 0, 0.6)',
          lineHeight: 17,
        },
        axisLine: {
          //  "show": false,
          lineStyle: {
            color: 'rgba(227, 227, 227, 1)',
          },
        },
        axisTick: {
          inside: true,
          show: false,
        },
        axisLabel: {
          // 			"showMaxLabel": false,
          color: 'color: rgba(0, 0, 0, 0.6)',
          fontSize: 12,
          // 			"show": false,
          formatter: (val) => {
            if (+val === max.x) {
              return '高';
            }
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgba(240, 240, 240, 1)',
          },
        },
        max: max.x * (1 + delta),
      },
      yAxis: [
        {
          name: '品牌指数',
          min: min.y,
          max: max.y,
          nameGap: 20,
          nameTextStyle: {
            color: 'color: rgba(0, 0, 0, 0.6)',
            lineHeight: 20,
            align: 'center',
          },
          axisLine: {
            //  "show": false,
            lineStyle: {
              color: 'rgba(227, 227, 227, 1)',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: 'rgba(0,0,0,0.6)',
            formatter: (val) => {
              if (val === min.y) {
                return '低';
              } else if (val === max.y) {
                return '高';
              }
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(240, 240, 240, 1)',
              type: 'dashed',
            },
          },
        },
      ],
      series: [directVieBrandSeries, observeVieBrandSeries],
    }