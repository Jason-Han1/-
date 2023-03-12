option = {
// drawbar() {
        // this.chart4 = this.$echarts.init(this.$refs["bar"])
        // this.chart4.setOption({
          color: ['#2397f6', '#ffc934','#12EB32'],
          title: {
            text: '全县相对薄弱村消除进程',
            textStyle: {
              fontSize: 14,
            },
            top: 0,
            left: 'center'
          },
          grid: {
            bottom: '20',
          },
          legend: {
            right: '0'
          },

          tooltip: {},
          dataset: {
            source: [
              ['area', '已种植', '任务','折线'],
              ['早稻', 2.1, 1.6,0.3],
              ['晚稻', 2.1, 1.6,1.5],
              ['小麦', 2.1, 1.6,1.8],
              ['早稻1', 2.1, 1.6,0.3],
              ['晚稻1', 2.1, 1.6,1.5],
              ['小麦1', 2.1, 1.6,2.1],
            ]
          },
          xAxis: { type: 'category' },
          yAxis: [
            {
                type:'value',
                boundaryGap : [ 0, 0.1 ],
                name: '单位(个)',
                axisLine: {
                show: false,
                },
                splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD'
                }
                },
            },
            {
                type:'value',
                boundaryGap : [ 0, 0.1 ],
                name: '单位(%)',
                axisLine: {
                show: false,
                },
                splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD'
                }
                },
            },
          ],
          
          
          series: [
            { type: 'bar',barGap: 0,barWidth : 24,
            yAxisIndex:0,
            },
            { type: 'bar',barWidth : 24 ,
            yAxisIndex:0,
            },
            {
                 type: 'line',
                 barGap: 0,
                 barWidth : 24, 
                 smooth: true,
                 areaStyle: {
                     color:'#EDFAEE'
                 },
                 yAxisIndex:1,
            },
          ]
        // })
        // window.addEventListener("resize", this.chart4.resize);
    //   },
};
