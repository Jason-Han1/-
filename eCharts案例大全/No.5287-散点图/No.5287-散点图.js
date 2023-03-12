const plantCap = [{
        name: '共建共驻协议书',
        value: '12345',
        percent: '45%',
      }, {
        name: '党建需求清单',
        value: '2311',
        percent: '15%',
      }, {
        name: '党建项目',
        value: '1899',
        percent: '13%',
      }, {
        name: '党建资源',
        value: '1356',
        percent: '8%',
      }];
      const datalist = [{
        offset: [51, 67], // [x,y]
        symbolSize: 45, // 点大小
        opacity: .6,
        color: '#2C90F0',
      },  {
        offset: [30, 53],
        symbolSize: 15,
        opacity: .6,
        color: '#FF7F20'
      }, {
        offset: [68, 52],
        symbolSize: 13,
        opacity: .6,
        color: '#FFDC64'
      }, {
        offset: [50, 42],
        symbolSize: 8,
        opacity: .6,
        color: '#FC5289'
      }];
      const datas = [];
      for (let i = 0; i < plantCap.length; i++) {
        const item = plantCap[i];
        const itemToStyle = datalist[i];
        datas.push({
          name: item.name + '\n' + item.value + '\n' + item.percent,
          value: itemToStyle.offset,
          symbolSize: 50 + 200 * itemToStyle.symbolSize / 100,
          label: {
            normal: {
              textStyle: {
                fontSize: 14,
                color: item.color
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: itemToStyle.color,
              color: itemToStyle.color,
              opacity: itemToStyle.opacity
            }
          },
        })
      }

option = {
    grid: {
          show: false,
          top: 10,
          bottom: 10
        },
        xAxis: [{
          gridIndex: 0,
          type: 'value',
          show: false,
          nameLocation: 'middle',
          min: 0,
          max: 100,
          nameGap: 5
        }],
        yAxis: [{
          min: 0,
          max: 100,
          gridIndex: 0,
          show: false,
          nameLocation: 'middle',
          nameGap: 5
        }],
        series: [{
          type: 'scatter',
          symbol: 'circle',
          symbolSize: 150,
          label: {
            normal: {
              show: true,
              formatter: '{b}',
              color: '#fff',
              textStyle: {
                fontSize: '20'
              }
            },
          },
          itemStyle: {
            normal: {
              borderWidth: '4',
              borderType: 'solid',
              color: '#68b837',
            }
          },
          data: datas
        }]
};