const myData = [
    {
      "children": [
        {
          "children": [
            {
              "name": "导出资金",
              "value": 1,
              "status": 9
            }
          ],
          "name": "导出估值",
          "status": 9
        }
      ],
      "level": 3,
      "name": "导出代码",
      "status": 9
    },
    {
      "itemStyle": {
        "color": "transparent"
      },
      "value": 0.1
    },
    {
      "level": 1,
      "name": "自动清算",
      "value": 1,
      "status": 9
    },
    {
      "itemStyle": {
        "color": "transparent"
      },
      "value": 0.1
    },
    {
      "level": 1,
      "name": "主清算",
      "value": 1,
      "status": 1
    },
    {
      "itemStyle": {
        "color": "transparent"
      },
      "value": 0.1
    },
    {
      "children": [
        {
          "name": "委托倒入",
          "value": 1,
          "status": 1
        }
      ],
      "level": 2,
      "name": "净值导入",
      "status": 0
    },
    {
      "itemStyle": {
        "color": "transparent"
      },
      "value": 0.1
    },
    {
      "level": 1,
      "name": "提前批清算",
      "value": 1,
      "status": 0
    },
    {
      "itemStyle": {
        "color": "transparent"
      },
      "value": 0.1
    },
    {
      "level": 1,
      "name": "系统开工",
      "value": 1,
      "status": 0
    },
    {
      "itemStyle": {
        "color": "transparent"
      },
      "value": 0.1
    }
]

const series = []

function addStyle(data) {
    data.forEach(item => {
        switch (item.status) {
            case 0:
                item.itemStyle = {
                    color: 'transparent',
                    borderWidth: 1,
                    borderColor: '#0674BC'
                }
                item.label = {
                    color: '#82F0FF'
                }
                break;
            case 1:
                item.itemStyle = {
                    color: '#1896FE',
                    borderWidth: 1,
                    borderColor: '#0674BC'
                }
                item.label = {
                    color: '#82F0FF'
                }
                break;
            case 9:
                item.itemStyle = {
                    color: '#81F0FF',
                    borderWidth: 1,
                    borderColor: '#0674BC'
                }
                item.label = {
                    color: '#1798FE'
                }
                break;
            default:
                item.itemStyle = {
                    color: 'transparent',
                    borderWidth: 0
                }
        }
        if (item.children) addStyle(item.children)
    })
        
}

addStyle(myData)
for(let i = 1;i < 4;i++) {
    const itemData = myData.map(item => {
        if (!item.level || item.level === i) {
            return item
        } else {
            return {
                value: 1,
                itemStyle: {
                    color: 'transparent',
                    borderWidth: 0
                }
            }
        }
    })
    const sunburstItem = {
        type: 'sunburst',
        radius: ['60%', '100%'],
        label: {
            rotate: 'tangential',
            color: '#82F0FF',
            fontSize: 14
        },
        sort: null,
        silent: true,
        data: itemData
    }
    series.push(sunburstItem)
}
option = {
    title: {
        text: '环形流程图'
    },
    series: series
};