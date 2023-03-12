option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    color: ['#66e4a4', '#53ece5', '#53acec', '#7b84ef','#d87bef','#ef7bbb','#f18aa2','#d3e669','#f19d55','#97bf6b','#8df7c1'],
      //多个图，就有多个grid,排序默认0、1、2....
    grid: [
      //0降雨
      {x: '7%', y: '27%', height: '35%', left: '10%',bottom:'10%'},
      //1水位流量
      {x: '7%', y2: '7%', height: '15%', left: '10%', bottom: '23%'}
    ],
    legend: {
        data:['TOP1','TOP2','TOP3','TOP4','TOP5','TOP6','TOP7','TOP8','TOP9','降水量','库水位']
    },
    dataZoom: [{
            startValue: '1月',
            xAxisIndex:[0,1],                            //设置 dataZoom-inside 组件控制的 x轴,可以用数组表示多个轴
        }, {
            type: 'inside'
        }],
     xAxis: [
                  {
                    show: true,//隐藏了x轴
                    type: 'category',
                    gridIndex: 0,//对应前面grid的索引位置（第一个）
                    splitLine:{
                        show:true
                    },
                    axisTick: {
                        show:false
                    },
                    axisLabel: {
                        show:false
                      //interval:showNum,  //x轴显示的数量，我这里是动态算的
                    },
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
          
                  },
                  {
                    type: 'category',
                    gridIndex: 1,//对应前面grid的索引位置（第二个）
                    axisTick: {
                      alignWithLabel: true
                    },
                    splitLine:{
                        show:true
                    },
                    axisLabel: {
                      //interval:showNum,
                    },
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
           
                  }
                ],
                //y轴，不管有几个x轴，几个y轴，或者图，只要找到他对应的grid图的序号索引就可以精准匹配
   
     yAxis: [
                  {
                    type: 'value',
                    gridIndex: 1,//对应前面grid的索引位置（第二个）
                    name: '降水量(mm)',
                    //nameLocation:'end',
                    splitLine: {show: true},
                    nameLocation: 'middle',
                    nameTextStyle: {
                      padding: 28
                    },
                    position: 'left',
                    axisLine: {
                      lineStyle: {
                        //color: colors[0]
                      }
                    },
                    axisLabel: {
                      formatter: '{value}'
                    }
                  },
                  {
                    type: 'value',
                    splitLine: {show: true},
                    position: 'right',
                    axisLine: {
                      lineStyle: {
                        //color: colors[2]
                      }
                    },
                    axisLabel: {
                      formatter: '{value}'
                    }
                  },
                  {
                    type: 'value',
                    gridIndex: 0,
                    name: '位移量(mm)',
                    nameTextStyle: {
                      padding: 25
                    },
                    position: 'left',
                    nameLocation: 'middle',
                    splitLine: {show: true},
                    //nameLocation: 'start',//y轴name的位置
                    //inverse: true,
                    axisLine: {
                      lineStyle: {
                        //color: '#f8f106'
                      }
                    },
                    axisLabel: {
                      formatter: '{value}',
                      textStyle: {
                        fontSize: 12//y轴坐标轴上的字体大小
                      }

                    },
                  }, {
                    type: 'value',
                    gridIndex: 0,
                    name: '库水位(m)',
                    nameTextStyle: {
                      padding: 25
                    },
                    nameLocation: 'middle',
                    position: 'right',
                    //nameLocation: 'start',//y轴name的位置
                    //inverse: true,
                    splitLine: {show: false},
                    axisLine: {
                      lineStyle: {
                        //color: colors[1]
                      }
                    },
                    axisLabel: {
                      formatter: '{value}',
                      textStyle: {
                        fontSize: 12//y轴坐标轴上的字体大小
                      }

                    }
                  }
                ],

    series: [
        {
            name:'TOP1',
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 2,
            symbol: 'none',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'TOP2',
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 2,
            symbol: 'none',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'TOP3',
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 2,
            symbol: 'none',
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
        {
            name:'TOP4',
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 2,
            symbol: 'none',
            data:[3.0, 4.2, 1.3, 4.5, 6.3, 10.2, 15.3, 80.4, 23.0, 100.5, 12.0, 89.2]
        },
        {
            name:'TOP5',
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 2,
            symbol: 'none',
            data:[15.0, 60.2, 87.3, 99.5, 67.3, 16.2, 144.3, 167.4, 178.0, 100.5, 127.0, 89.2]
        },
        {
            name:'TOP6',
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 2,
            symbol: 'none',
            data:[25.0, 26.2, 36.3, 99.5, 102.3, 156.2, 169.3, 197.4, 18.0, 16.5, 12.0, 2.2]
        },
        {
            name:'TOP7',
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 2,
            symbol: 'none',
            data:[3.6, 6.9, 10.0, 27.4, 29.7, 72.7, 177.6, 189.2, 58.7, 19.8, 8.0, 5.3]
        },
        {
            name:'TOP8',
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 2,
            symbol: 'none',
            data:[8.6, 11.9, 15.0, 32.4, 24.7, 77.7, 187.6, 199.2, 68.7, 16.8, 16.0, 10.3]
        },
        {
            name:'TOP9',
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 2,
            symbol: 'none',
            data:[120.6, 130.9, 150.0, 132.4, 124.7, 177.7, 197.6, 199.2, 168.7, 116.8, 116.0, 110.3]
        },
        {
            name:'库水位',
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 3,
            symbol: 'none',
            data:[230.3, 360,330, 450, 450, 450, 450, 450.2,450, 450, 230.0, 220.3]
        },
        {
            name:'降水量',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 0,
            symbol: 'none',
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};