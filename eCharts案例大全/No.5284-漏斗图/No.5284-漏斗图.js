const colorList = [
        '#79D9FF',
        '#52DBD4',
        '#58ED4B',
        '#99E93D',
        '#DDFF00',
        '#F1B737',
        '#DA7F56',
        '#C86FCD',
        '#8DCBF1',
        '#73CFF3',
      ]
      const scaleData = [
        {
          value: 1234,
          name: '其他',
        },
        {
          value: 131,
          name: '随迁',
        },
        {
          value: 342,
          name: '学习培训',
        },
        {
          value: 1342,
          name: '治病疗养',
        },
        {
          value: 1002,
          name: '工作调动',
        },
        {
          value: 1202,
          name: '经商',
        },
        {
          value: 402,
          name: '务农',
        },
        {
          value: 800,
          name: '婚嫁',
        },
        {
          value: 1800,
          name: '务工',
        },
        {
          value: 500,
          name: '投亲靠友',
        },
      ]
      const values = scaleData.map(item => item.value)
      const baseAverage = Math.max(...values) / 10
      const baseData = []
      const data = []
      const sortData = scaleData.sort((obj1, obj2) => {
        const a = obj1.value
        const b = obj2.value
        if (a > b) {
          return -1
        } else if (a < b) {
          return 1
        } else {
          return 0
        }
      })
      for (let i = 0; i < sortData.length; i++) {
        baseData.push(
          {
            value: Math.max(...values) - baseAverage * i,
            name: sortData[i].name,
          },
        )
        data.push(
          {
            value: sortData[i].value,
            name: sortData[i].name,
            itemStyle: {
              color: colorList[i],
            },
          },
        )
      }
      const legendOption = {
        top: '9%',
        orient: 'vertical',
        icon: 'roundRect',
        itemGap: 15,
        itemWidth: 14,
        itemHeight: 6,
        textStyle: {
          fontSize: 12,
          color: '#BED3F8',
          rich: {
            name: {
              width: 55,
            },
          },
        },
        formatter: (name) => {
          const idx = scaleData.findIndex(v => v.name === name)
          if (idx < 0) {
            return ''
          }
          return (
            `\r{name|${scaleData[idx].name}}\r\r${scaleData[idx].value}`
          )
        },
      }


option = {
    legend: [
          {
            data: ['其他', '随迁', '学习培训', '治病疗养', '工作调动'],
            left: 20,
            ...legendOption,
          },
          {
            data: ['经商', '务农', '婚嫁', '务工', '投亲靠友'],
            right: 20,
            ...legendOption,
          },
        ],
        color: colorList,
        series: [
          {
            name: '流入原因',
            type: 'funnel',
            left: '10%',
            top: '9%',
            bottom: '9%',
            width: '80%',
            sort: 'ascending',
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            emphasis: {
              label: {
                show: false,
              },
            },
            itemStyle: {
              opacity: 0.2,
            },
            data: baseData,
          },
          {
            name: '流入原因',
            type: 'funnel',
            left: '10%',
            width: '80%',
            top: '9%',
            bottom: '9%',
            maxSize: '80%',
            sort: 'ascending',
            label: {
              show: false,
            },
            itemStyle: {
              borderColor: '#333',
              borderWidth: 1,
            },
            data: data,
          },
        ],
};