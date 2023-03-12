option = {
    backgroundColor: 'rgba(1, 17, 48, 0.8)',

    legend: {
        orient: 'vertical',
        top: 'center',
        right: '10%',
        textStyle: {
            color: '#fff'
        },
        data: ['物损', '人伤', '死亡'],
        formatter: name => {
            let data = option.series[0].data;
            let total = 0,
                tarVal = 0;
            data.map((ele, key) => {
                total += Number(ele.value);
                if (ele.name == name) {
                    tarVal = Number(ele.value);
                }
            });
            let p = 0;
            if (total) {
                p = ((tarVal / total) * 100).toFixed(0);
            }
            return `${name}${tarVal} (${p}%)`;
        }
    },
    title: {
        text: "事故类型",
        x: '33%',
        y: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 500,
            color: "rgba(255,255,255,1)",
            lineHeight: 25
        }
    },
    series: [{
        type: 'pie',
        name: '',
        center: ["40%", "50%"],
        radius: ['45%', '70%'],
        avoidLabelOverlap: false,
        left: '10%',
        itemStyle: {
            normal: {

            }
        },
        label: {
            normal: {
                show: false,
                formatter(obj) {

                    return `{bigger|${obj.value}起}\n{small|${obj.name}}`;
                },
                position: ["30%", "50%"]
            },
            emphasis: {
                show: true,
                textStyle: {

                    color: "#fff",
                    fontWeight: 'bold'
                },
                rich: {
                    bigger: {
                        fontSize: '30'
                    },
                    small: {
                        fontSize: '20'
                    }

                }
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 40
            },
            emphasis: {
                show: true
            }
        },
        data: [{
                value: 335,
                name: '物损',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                // 0% 处的颜色   
                                offset: 0,
                                color: '#B4EC51'
                            },
                            {
                                // 100% 处的颜色
                                offset: 1,
                                color: '#429321'
                            }
                        ], false)
                    }
                },

            },
            {
                value: 310,
                name: '人伤',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                // 0% 处的颜色   
                                offset: 0,
                                color: '#FAD961'
                            },
                            {
                                // 100% 处的颜色
                                offset: 1,
                                color: '#F76B1C'
                            }
                        ], false)
                    }
                },
            },
            {
                value: 234,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                // 0% 处的颜色   
                                offset: 0,
                                color: '#F5515F'
                            },
                            {
                                // 100% 处的颜色
                                offset: 1,
                                color: '#9F041B'
                            }
                        ], false)
                    }
                },
                name: '死亡'
            },
        ]
    }]
};
var curIndex = -1;

//增加高亮效果
myChart.on('click', 'series.pie', (params) => {
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: params.dataIndex
        });
        curIndex= params.dataIndex
      });
      myChart.on('mouseover','series.pie', (e) => {
        //当检测到鼠标悬停事件，取消默认选中高亮
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: curIndex
        });
        if (this.curPieDataIndex != -1) {
          //高亮显示悬停的那块
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex
          });
        }

      });
      //检测鼠标移出后显示之前默认高亮的那块
      myChart.on('mouseout','series.pie', (e)=> {
        if (this.curPieDataIndex != -1) {
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: curIndex
          });
        }

      });








