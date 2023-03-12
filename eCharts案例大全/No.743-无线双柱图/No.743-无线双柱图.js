let  datas= [
        {
          createtime: '2021-05-11',
          success: 3851,
          dbid: 'cc1523f729754aa0a96c66149e4a397f',
          name: '数据库管理',
          id: 'ad390942402044638e072b6599b7f6a5',
          error: 131
        },
        {
          createtime: '2020-12-23',
          success: 2113,
          dbid: '04cef98167f94ab3bc24d96b86da5ff1',
          name: '问题处置系统',
          id: '38b8649241b04d6a9b984c7347122f4c',
          error: 141
        },
        {
          createtime: '2020-12-23',
          success: 2037,
          dbid: '809e8d9024d549649249ecb63ed07999',
          name: '随手拍',
          id: '49604ef7c9474562bc33d06a6c3be5ba',
          error: 157
        },
        {
          createtime: '2020-12-23',
          success: 2368,
          dbid: 'd36f0e0a02544b70a488970ad0a1ed8b',
          name: '再监督',
          id: 'ff3037c8bdd9499fbd87dbe75a104fc0',
          error: 40
        },
        {
          createtime: '2020-12-23',
          success: 2621,
          dbid: '7b7fad626ba749d6b0510b684dc25dfb',
          name: '三重一大',
          id: '165409bd823c48d58ef5696db50474f6',
          error: 43
        },
        {
          createtime: '2020-12-22',
          success: 2728,
          dbid: '2eb58bad84484625aa4e211a30a0595d',
          name: '数据字典',
          id: '33cf9e87a9374b689cfd9fb7d8de53cd',
          error: 38
        }
      ]
       let nameArr = [],
        errorArr = [],
        dataArr = []
      datas.forEach(e => {
        nameArr.push(e.name)
        dataArr.push(e.success)
        errorArr.push(e.error)
      })
option = {
    backgroundColor:'#010429',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true
            }
          }
        },
        legend: {
          top: '0%',
          right: '0%',

          orient: 'vertical',
          // align: "right",
          textStyle: {
            fontSize: 16,
            color: '#ffffff'
          },
          data: ['正常数', '异常数']
        },
        grid: {
          left: '8%',
          top: '10%',
          right: '4%',
          bottom: '15%'
        },
        // dataZoom: [
        //   {
        //     type: 'slider',
        //     xAxisIndex: 0,
        //     startValue: 0,
        //     endValue: 10,
        //     filterMode: 'filter',
        //     height: 4,
        //     bottom: 5,
        //     handleSize: '300%',
        //     handleIcon:
        //       'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg2NDg1MzkzMjI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3MzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI2Ljc0Mjg1NyAwIDAgMjI2Ljc0Mjg1NyAwIDUxMnMyMjYuNzQyODU3IDUxMiA1MTIgNTEyIDUxMi0yMjYuNzQyODU3IDUxMi01MTItMjI2Ljc0Mjg1Ny01MTItNTEyLTUxMnogbTAgODc3LjcxNDI4NmMtMjA0LjggMC0zNjUuNzE0Mjg2LTE2MC45MTQyODYtMzY1LjcxNDI4Ni0zNjUuNzE0Mjg2czE2MC45MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2LTM2NS43MTQyODYgMzY1LjcxNDI4NiAxNjAuOTE0Mjg2IDM2NS43MTQyODYgMzY1LjcxNDI4Ni0xNjAuOTE0Mjg2IDM2NS43MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2eiIgZmlsbD0iIzRBQkRDRiIgcC1pZD0iNDczNiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0zNjUuNzE0Mjg2IDBhMzY1LjcxNDI4NiAzNjUuNzE0Mjg2IDAgMSAwIDczMS40Mjg1NzIgMCAzNjUuNzE0Mjg2IDM2NS43MTQyODYgMCAxIDAtNzMxLjQyODU3MiAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDczNyI+PC9wYXRoPjwvc3ZnPg==',
        //     handleStyle: {
        //       color: '#0E1557'
        //     },
        //     backgroundColor: '#1c3a75',
        //     fillerColor: '#295fcc',
        //     borderColor: 'transparent',
        //     textStyle: {
        //       color: 'transparent'
        //     },
        //     dataBackground: {
        //       areaStyle: {
        //         opacity: 0
        //       },
        //       lineStyle: {
        //         opacity: 0
        //       }
        //     }
        //   }
        // ],
        xAxis: {
          data: nameArr,
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: '#3d7a99',
              width: 2
            }
          },
          axisTick: {
            show: false, //隐藏X轴刻度
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff', //X轴文字颜色
              fontSize: 16
            },
            interval: 0
          }
        },
        yAxis: [
          {
            type: 'value',
            // name: "个数",
            nameTextStyle: {
              color: '#ffffff',
              fontSize: 16
            },
            splitLine: {
              show: false,
              lineStyle: {
                width: 1,
                color: '#CED2DB'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true, //隐藏X轴轴线
              lineStyle: {
                color: '#3d7a99',
                width: 2
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#ffffff',
                fontSize: 16
              }
            }
          }
        ],
        series: [
          {
            name: '正常数',
            type: 'bar',
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#00d5ff'
                  },
                  {
                    offset: 1,
                    color: '#00d5ff'
                  }
                ])
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#ffffff',
                fontSize: '16px'
              }
            },
            data: dataArr
          },
          {
            name: '异常数',
            type: 'bar',
            barWidth: 16,
            barGap: '100%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#86DE64'
                  },
                  {
                    offset: 1,
                    color: '#7AD959'
                  }
                ])
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#ffffff',
                fontSize: '16px'
              }
            },
            data: errorArr
          }
        ]
      }
