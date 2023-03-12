option = {
          title: {
            text: '在线人数统计',
            left: 15,
            top: 15
          },
          color: ['#53c6f2'],
          tooltip : {
              trigger: 'axis',
              position: function (point, params, dom) {
                  // 固定在顶部
                  return [point[0]-80, '20%'];
              },
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'       // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  data : ['爱玩棋牌','爱冠棋牌','王中王棋牌','236棋牌','虢都棋牌','68竞技','爱酷棋牌','爱跑棋牌','爱趣棋牌','大千游戏','福城棋牌'],
                  axisTick: {
                      alignWithLabel: true
                  }
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'当前在线人数',
                  type:'bar',
                  barWidth: '40%',
                  data:[1000, 2500, 2010, 3304, 3900, 3300, 2200,1000,1200,1800,2100]
              }
          ]
      };