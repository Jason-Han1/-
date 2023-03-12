const data = [40, 40, 30];
    const xdata = ['宿州啦啦啦啦啦', '芜湖啦啦啦啦', '合肥', '', ''];
    let yMax = '';
    const outSide = Math.max.apply(null, data);
    yMax += outSide + (outSide / 10);
option = {
      backgroundColor: '#fff',
      tooltip: {
        trigger: 'item',
        show: true,
      },
      grid: {
        left: '10%',
        top: '10%',
        bottom: '10%',
        right: '10%',
        containLabel: true,
      },
      xAxis: {
        data: xdata,
        type: 'category',
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          interval: 0,
          formatter:function(value)  
           {  
               return value.split("").join("\n");  
           },  
                           
        },

      },
      yAxis: [{
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      ],
      series: [
        {
          name: '辅助',
          type: 'bar',
          stack: '距离',
        //   barWidth: 20,
          itemStyle: {
            normal: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)',
            },
          },
          data: [3, 3, 3, 3, 3, 3],
        },
        {
          type: 'bar',
          barGap: '-200%',
          stack: '距离',
          animation: true,
          barWidth: 12,
          data,
          xAxisIndex: 0,
          tooltip: {
            show: true,
          },
          itemStyle: {
            normal: {
              color: '#329AFA',
              opacity: 1,
              label: {
                position: 'top',
              },
              barBorderRadius: 12,
            },
          },
          zlevel: 11,
        },
        // {
        //   type: 'bar',
        //   stack: 'bar',
        //   barGap: '-200%',
        //   barWidth: 0,
        //   data,
        //   xAxisIndex: 0,
        //   tooltip: {
        //     show: true,
        //   },
        //   itemStyle: {
        //     normal: {
        //       color: '#329AFA',
        //       opacity: 0,
        //     },
        //   },
        //   zlevel: 10,
        // },
        // {
        //   type: 'bar',
        //   stack: 'bar',
        //   barGap: '-250%',
        //   barWidth: 8,
        //   data: data2,
        //   xAxisIndex: 0,
        //   itemStyle: {
        //     normal: {
        //       color: '#329AFA',
        //       barBorderRadius: 11,
        //       borderColor: '#329AFA ',
        //     },
        //   },

        //   zlevel: 10,
        // },

        {
          type: 'bar',
          name: '框',
          barGap: '-130%',
          barWidth: 20,
          xAxisIndex: 0,
          data: data.map((d) => {
            if (d === '') {
              return null;
            }
            return yMax;
          }),
          tooltip: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: '#EBF6FF ',
              barBorderRadius: 11,
              borderColor: '#329AFA ',
            },
          },
          zlevel: 1,
        },
        //年份
//年份
        {
            show: true,
            type: 'bar',
            // xAxisIndex: 1, //代表使用第二个X轴刻度
            // barGap: '-0%',
            barWidth: '50%',
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideBottomRight',
                    textStyle: {
                        fontSize:14,
                        color: '#333',
                        textAlign: 'center',
                        textBaseline: 'middle',
                    },
                    formatter: function(data) {
                          return xdata[data.dataIndex].split("").join("\n");  
                      }
                }
            },
            data: data
        }
      ],
    };