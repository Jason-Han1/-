const colorList = [
        ['#4AA7F8', '#59A8ED'],
        ['#AC6BF6', '#FFB6FE'],
        ['#F2F9FF', '#FFFFFF'],
        ['#FDEF50', '#F19A38'],
        ['#F9D949', '#CDFC51'],
        ['#74FAB9', '#74FBFA'],
      ]
      const scaleData = [
        {
          'name': '7个月~1年',
          'value': 210,
        },
        {
          'name': '1年以上',
          'value': 365,
        },
        {
          'name': '2年以上',
          'value': 750,
        },
        {
          'name': '1个月',
          'value': 30,
        },
        {
          'name': '3~6个月',
          'value': 180,
        },
        {
          'name': '1~3个月',
          'value': 90,
        },
      ];
      const holderValue = scaleData.reduce((a, b) => {
        return a + b.value
      }, 0) * 0.01
      const occupiedHolderStyle = {
        value: holderValue,
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
        },
      }
      const legendOption = {
        top: '60%',
        orient: 'vertical',
        icon: 'rect',
        itemGap: 30,
        itemWidth: 18,
        itemHeight: 8,
        textStyle: {
          fontSize: 12,
          rich: {
            name: {
              color: '#bed3f8',
              fontSize: 12,
              width: 60,
            },
            percent1: {
              color: '#53A8F0',
              fontSize: 12,
            },
            percent2: {
              color: '#D893FA',
              fontSize: 12,
            },
            percent3: {
              color: '#F9FCFF',
              fontSize: 12,
            },
            percent4: {
              color: '#E6B747',
              fontSize: 12,
            },
            percent5: {
              color: '#D6F44F',
              fontSize: 12,
            },
            percent6: {
              color: '#74FAD7',
              fontSize: 12,
            },
          },
        },
        formatter: (name) => {
          const idx = scaleData.findIndex(v => v.name === name)
          if (idx < 0) {
            return ''
          }
          return (
            `\r{name|${scaleData[idx].name}}\r\r{percent${idx + 1}|${scaleData[idx].value}}`
          )
        },
      }
      const data = []
      for (let i = 0; i < scaleData.length; i++) {
        data.push(
          {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: colorList[i][0],
              }, {
                offset: 1,
                color: colorList[i][1],
              }]),
            },
          },
          occupiedHolderStyle,
        )
      }

option = {
    legend: [
          {
            data: ['1个月', '3~6个月', '1年以上'],
            left: '20%',
            ...legendOption,
          },
          {
            data: ['1~3个月', '7个月~1年', '2年以上'],
            right: '20%',
            ...legendOption,
          },
        ],
        color: colorList,
        series: [
          {
            name: '已居住时间',
            type: 'pie',
            radius: ['42%', '57%'],
            center: ['50%', '30%'],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: data,
          },
        ],
};