let acolor = ['#000', '#f90', '#f00']
      //category 类型
      let sdata = [
        {
          name: '雷军',
          id: 1,
          value: '小米',
          draggable: true,
          category: '0',
          url: 'http://192.168.178.14:8887/1.jpg'
        },
        {
          name: '李彦宏',
          id: 2,
          value: '百度',
          category: '1'
        },
        {
          name: '马化腾',
          id: 3,
          value: '腾讯',
          category: '2'
        },
        {
          name: '刘强东',
          id: 4,
          value: '京东',
          category: '2'
        },
        {
          name: '马云',
          id: 5,
          value: '阿里巴巴',
          category: '1'
        },
        {
          name: '许家印',
          id: 6,
          value: '恒大',
          category: '1'
        },
        {
          name: '潘石屹',
          id: 7,
          value: 'SOHO中国',
          category: '3'
        },
        {
          name: '王兴',
          id: 28,
          value: '美团',
          category: '3'
        },
        {
          name: '张一鸣',
          id: 9,
          value: '字节跳动',
          category: '1'
        },
        {
          name: '胡炜炜',
          id: 10,
          value: '摩拜',
          category: '1'
        },
        {
          name: '王石',
          id: 11,
          value: '万科',
          category: '1'
        },
        {
          name: '董明珠',
          id: 12,
          value: '格力',
          category: '1'
        },
        {
          name: '王健林',
          id: 13,
          value: '万达',
          category: '1'
        }
      ]
      let linksData = [
        {
          source: 0,
          target: 1,
          value: '合作关系'
        },
        {
          source: 0,
          name: 3,
          value: '朋友关系'
        },
        {
          source: 0,
          target: 3,
          value: '亲戚关系'
        },
        {
          source: 0,
          target: 4,
          value: '0-4'
        },
        {
          source: 1,
          target: 2,
          value: '1-2'
        },
        {
          source: 0,
          target: 5,
          value: '0-5'
        },
        {
          source: 4,
          target: 5,
          value: '4-5'
        },
        {
          source: 2,
          target: 8,
          value: '2-8'
        },
        {
          source: 0,
          target: 12,
          value: '0-12'
        },
        {
          source: 6,
          target: 11,
          value: '6-11'
        },
        {
          source: 6,
          target: 3,
          value: '6-3'
        },
        {
          source: 7,
          target: 5,
          value: '7-5'
        },
        {
          source: 9,
          target: 10,
          value: '9-10'
        },
        {
          source: 3,
          target: 10,
          value: '3-10'
        },
        {
          source: 2,
          target: 11,
          value: '2-11'
        }
      ]
    let bcolor = acolor.map((item, index) => {
        return {
          name: index + 1,
          itemStyle: {
            normal: {
              color: item
            }
          }
        }
      })
option = {

        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 10
            }
          }
        },
        series: [
          {
            type: 'graph',
            layout: 'force',

            symbolSize: 30,
            focusNodeAdjacency: true,
            roam: true,
          categories: bcolor,
            zoom: 0.8,
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10
                }
              }
            },
            force: {
              repulsion: 1000
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10
                },
                formatter: '{c}'
              }
            },
             //categories 数组里面设置颜色配置
             //在data里面有个 category 值（类型为number 就通过下标取，字符串就取categories下的name字段）取对应的配置
             //category 是设置当前数据颜色
             data: sdata,

            links: linksData,
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0
              }
            }
          }
        ]
      }
 
