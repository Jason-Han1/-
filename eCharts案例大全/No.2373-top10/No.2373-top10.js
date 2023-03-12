option = {
    title: {
                show: true,
                textStyle: {
                  fontSize: 14,
                  // color: '#fff',
                  fontStyle: 'normal',
                  fontWeight: 'bolder'
                }
              },
              tooltip: {
                show:false,
                trigger: 'axis',
                axisPointer: {
                  type: "shadow" 
                },
                formatter:function(params) {
                  var str = params[0].name + '<br>'
                  for(let item of params) {
                    str += item.seriesName + ' : ' + item.value + '%<br>'
                  }
                  return str;
                }
              },
              grid: {
                x: 80,  //左
                y: 20,  //上
                x2: 20, //右
                y2: 20  //下
              },
              xAxis: {
                show: false,
                type: 'value',
                nameGap:100,
              },
              yAxis: [{
                type: 'category',
                offset:'10',
                data: ['TOP10','TOP9','TOP8','TOP7','TOP6','TOP5','TOP4','TOP3','TOP2','TOP1'],
                axisLabel: {
                    fontSize: 16,
                    textStyle: {
                        color: '#333'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
              },{
                type: 'category',
                zlevel: 100,
                axisLabel: {
                  inside: true,
                  show: true,
                  fontSize: 14,
                  textStyle: {
                    color: '#999999', 
                  },
                  padding: [20,-8,0,0],
                },
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                data: ["刘一", "陈二", "张三", "李四", "王五", "赵六", "孙七", "周八", "吴九", "郑十"]
              }],
              series: [{
                name: '背景',
                type: 'bar',
                barGap: '-100%',
                barWidth: 30,
                silent:true,
                data: [100, 100, 100, 100, 100,100, 100, 100, 100, 100],
                itemStyle: {
                  normal: {
                    color: '#eeeeee',
                    barBorderRadius: 30,
                  }
                },
              },{
                name: '安全评分',
                type: 'bar',
                barWidth: 20,
                barGap: '-80%',
                // zlevel: 1,
                itemStyle: {
                  normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                      offset: 0,
                      color: '#55C5F8'
                    }, {
                      offset: 1,
                      color: '#25DE8B'
                    }])
                  }
                },
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                label: {
                  show: true,
                  position: 'inside',
                  formatter: function(p) {
                    return p.value + '%'
                  },
                  color:"#fff",
                  fontSize:14,
                }
              }]
};
