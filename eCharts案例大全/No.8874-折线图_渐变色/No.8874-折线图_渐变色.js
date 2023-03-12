option = {
    backgroundColor: '#FFF',
    // title: {
    //   text: '堆叠区域图',
    //   textStyle: {
    //     align: 'center',
    //     color: '#fff',
    //     fontSize: 20,
    //   },
    //   top: '5%',
    //   left: 'center',
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    // legend: {
    //   x: '4%',
    //   top: '1%',
    //   textStyle: {
    //     color: '#8C8C8C',
    //   },
    //   data: ['商品', '会员']
    // },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: "#e5e5e5"
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#8c8c8c"
          }
        },
        // boundaryGap: false,
        data: ['300以下', '300-500元', '500-800元', '800-1500元', '1500元以上']
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: "#e5e5e5"
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#8c8c8c"
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
            show: false
        }
      }
    ],
    series: [
       {
         name: '会员',
         type: 'line',
        //  showAllSymbol: false,
         showSymbol: false, // 鼠标移入才显示圆点
         color:['#76A8F8'],
         areaStyle: {
           normal: {
             // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
               offset: 0,
               color: '#76A8F8'
             },
             {
               offset: 1,
               color: 'rgba(118,168,248, 0)'
             }
             ], false),
             shadowColor: 'rgba(118,168,248, 0.9)', // 阴影颜色
             shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
           }
         },
         data: [40, 34, 30, 3, 24]
       }
    ]
}