var data1 = [
      [2217259283381, 20.44, '服饰内衣', 110, '221.73亿', '2.39亿'],
      [602114355042, 14.71, '食品饮料', 30, '60.21亿', '1.48亿'],
      [585907565898, 7.84, '家居用品', 29, '58.59亿', '1.37亿'],
      [646877854676, 13.16, '美妆', 32, '64.69亿', '1.05亿'],
      [243377998162, 21.8, '个护家清', 20, '24.34亿', '7886.8w'],
      [322356850379, 38.69, '母婴宠物', 20, '32.24亿', '7672.1w'],
      [180280196970, 39.12, '生鲜', 20, '18.03亿', '3809.0w'],
      [360327634905, 16.11, '鞋靴箱包', 20, '36.03亿', '3708.1w'],
      [696987663512, 54.56, '珠宝文玩', 34, '69.70亿', '3212.2w'],
      [131406625822, -20.62, '钟表配饰', 20, '13.14亿', '2889.6w'],
    ];
    option = {
      // grid: {
      //     left: 20,
      //     right: 20,
      //     top: 20,
      //     bottom: 20,
      //     containLabel: true,
      // },
      tooltip: {
        formatter: function (params) {
          // console.log(params);
          if (params.componentType == 'series') {
            return (
              params.value[2] +
              '<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
              params.color +
              ';"></span>' +
              '30天GMV增长率: ' +
              params.value[1] +
              '%' +
              '<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
              params.color +
              ';"></span>' +
              '销售额: ' +
              params.value[4] +
              '<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
              params.color +
              ';"></span>' +
              '销量: ' +
              params.value[5]
            );
          }
        },
      },
      xAxis: [{
        // name: '（活跃度）',
        type: 'value',
        min: 0,
        max: 2217259283381 * 1.15,
        splitNumber: 11,
        splitLine: {
          show: false,
        },
        // 坐标轴刻度
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          formatter: function (params) {
            console.log(params)
            return ('' + params).slice(0, 4)
          },
        },
        axisLine: {
          show: true,
          onZero: false,
          symbol: ['none', 'path://M 512 124 L 64 900 h 896 Z'],
          lineStyle: {
            color: '#000',
          },
        },
      }, ],
      yAxis: [{
        type: 'value',
        min: -20.62 * 1.15,
        max: 54.56 * 1.15,
        splitNumber: 11,
        splitLine: {
          show: false,
        },
        // 坐标轴刻度
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          onZero: false,
          symbol: ['none', 'path://M 512 124 L 64 900 h 896 Z'],
          lineStyle: {
            color: '#000',
          },
        },
        axisLabel: {
          show: true,
        },
      }, ],
      series: [{
          type: 'scatter',
          zlevel: 2,
          data: data1,
          symbolSize: function (d) {
            // console.log(d);
            return d[3];
          },
          label: {
            normal: {
              width: 50,
                overflow: 'truncate',
              show: true,
              formatter: function (params) {
                return params.value[2];
              },
              position: 'bottom',
              distance: 12,
              color: '#52C41A',
              textStyle: {
                fontSize: 13,
                lineHeight: 13,
              },
            },
          },
          itemStyle: {
            opacity: 1,
            color: 'rgba(82, 196, 26, 0.2)',
          },
          emphasis: {
            itemStyle: {
              color: '#52C41A',
            },
          },
        },
        {
          type: 'scatter',
          zlevel: 3,
          // data: data,
          markLine: {
            silent: true, //鼠标悬停事件  true没有，false有
            symbol: 'none', //去掉箭头
            label: {
              show: false,
            },
            lineStyle: {
              color: '#f00',
              type: 'dashed',
            },
            data: [
              // {
              //     type: 'average',
              //     name: '平均值',
              // },
              {
                // yAxis: 10,
                yAxis: (54.56 * 1.15 + (-20.62 * 1.15)) / 2,
              },
              {
                xAxis: (2217259283381 * 1.15) / 2,
              },
            ],
          },
        },
      ],
    };