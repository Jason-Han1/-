option = {
    title: {
                  text: '柱图',
                  subtext: '数据来自网络'
              },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow'
                  }
              },
              legend: {
                  data: ['数据一','数据二','数据三']
              },//图例与series数据相对应，几种数据并列或者堆叠
              grid: {
                  left: '5%',
                  right: '5%',
                  bottom: '5%',
              },//图表的位置
              xAxis: {
                  type: 'category',//轴类型  category数据类型轴  value数据值轴  横向柱图就相互交换xy轴type和对应数据
                  data: ['第一','第二','第三','第四','第五','第六','第七','第八','第九','第十',],//数据类型轴数组
              },
              yAxis: {
                  type: 'value',//数据值轴数组
                  axisLine: {
                    show: true, //坐标轴线显示与否
                    lineStyle: {
                      color: "#828282",
                      width: 1 //轴线宽
                    }
                  }, //x轴线段样式
                  axisLabel: {
                    textStyle: {
                      fontSize: 12,
                      color:'black'
                    }
                  },//轴文本样式
                  axisTick: {
                    show: false
                  } //刻度线样式
              },
              series: [
                  {
                      name: '数据一',
                      type: 'bar',
                      stack: '叠加',
                      data: [10,18,50,40,54,16,28,41,31,22]
                  },
                  {
                      name: '数据二',
                      stack: '叠加',
                      type: 'bar',//换为line 实现折线与柱状图
                      data: [10,18,50,40,54,16,28,41,31,22]
                  },
                  {
                      name: '数据三',
                      stack: '我不叠加',//添加stack属性，相同的stack值的数据类型将会叠加不并列，值为自定义值
                      type: 'line',//换为line 实现折线与柱状图
                      data: [10,18,50,40,54,16,28,41,31,22]
                  }
              ]//数据类型，一个对象代表一个图表形状，可以切换type换成折线图
};
