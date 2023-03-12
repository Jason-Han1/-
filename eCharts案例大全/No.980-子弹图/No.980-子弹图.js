option = {
       title: {
        show: true,
        text: '子弹图',
        left: 'center',
        top: '30%',
        textStyle: {
            color: '#00D5FF',
            fontSize: 16,
        },
    },
     tooltip: {
                show: false
            },
            grid: {
                // show: true,
                top: '45%',
                left: 20,
                right: 20,
                height: 20,
            },
            xAxis: {
                // show: false,
                type: 'value',
                position:'top',
                offset: '0',//X 轴相对于默认位置的偏移
                // 设置x轴标签格式
                axisLabel: {
                    // show: false,
                    formatter: '{value}%',
                    lineStyle: {
                      type: 'solid',
                      color: '#CCCCCC',//左边线的颜色
                      width:'0'//坐标线的宽度
                  },
                  textStyle: {
                      color: '#FFF',//坐标值得具体的颜色
                  },
                //   margin: 12,//刻度标签与轴线之间的距离。
                },
                axisTick:{
                  // show: false,
                  length: 7,// 刻度线长度
                  lineStyle: {
                    type: 'solid',
                    color: '#CCCCCC',//左边线的颜色
                    width:'1'//坐标线的宽度	
                  }
                },
              axisLine:{
                show: false,
              },
              splitLine:{
                show: false,	
              }
            },
            yAxis: {
                type: 'category',
                show: false,
            },
            color:["#FFC400","#FF2828","#00D5FF"], //配置颜色
            series: [
              {
                name: '达成进度',
                type: 'bar',
                data: [25],
                itemStyle: {
                    barBorderRadius: [100, 100, 100, 100],
                },
                barWidth:20,
                showBackground: false,
                  backgroundStyle: {
                  color: 'rgba(180, 180, 180, 0.2)'
                }
              },
              {
                  name: '时间进度',
                  type: 'line',
                  symbol:'rect',
                  symbolSize: [6,25] , // 竖线宽高
                  data: [30]
              },
              {
                  name: '预计达成',
                  type: 'line',
                  symbol:'rect',
                  symbolSize: [6,25] , // 竖线宽高
                  data: [60]
              },
              {
                name: '总目标',// 背景
                type: 'bar',
                data: [100],
                barGap: "-100%",
                itemStyle: {
                barBorderRadius: [100, 100, 100, 100],
                color: 'rgba(180, 180, 180, 0.2)'
              },
              barWidth:20,
                
              }
            ]
};
