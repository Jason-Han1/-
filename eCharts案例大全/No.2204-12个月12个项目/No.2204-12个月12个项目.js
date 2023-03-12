 var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
     legend: {
        right: 10,
        top:12,
        textStyle: {
            color: "#333"
        },
        itemWidth: 12,
        itemHeight: 10,
    },
        xAxis: {
          type: 'category',
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
          axisLine: {
            lineStyle: {
              color: "#333"
            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
               color: "#333"
            }
          },
        },

        yAxis: {
          type: 'value',
          max:'1200',
          axisLine: {
            show: true,
            lineStyle: {
               color: "#333"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {}
        },
        "dataZoom": [{
          "show": true,
          "height": 12,
          "xAxisIndex": [
            0
          ],
          bottom:'8%',
          "start": 0,
          "end": 50,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle:{
            color:"#d3dee5",

          },
          textStyle:{
            color:"#333"},
          borderColor:"#90979c"
        }, {
          "type": "inside",
          "show": true,
          "height": 15,
          "start": 1,
          "end": 35
        }],
        series: [
        {
          name: '部门1',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [400, 400, 300, 300, 300, 400,400, 400, 300, 300, 300, 400]
        },
            {
          name: '部门2',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [500, 300, 300, 400,400, 400, 300, 300, 300, 400, 400,300]
        },
            {
          name: '部门3',
          type: 'bar',
          itemStyle: {
            color: '#fccb05'
          },
          data: [600, 300, 400, 300,300, 400, 400, 300, 500, 300,400, 400]
        },
            {
          name: '部门4',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [700, 400, 300, 300, 300, 400,400, 400, 300, 300, 300, 400]
        },
            {
          name: '部门5',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [600, 400, 300, 300, 300, 400,400, 400, 300, 300, 300, 400]
        },
            {
          name: '部门6',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [500, 400, 300, 300, 300, 400,400, 400, 300, 300, 300, 400]
        },
            {
          name: '部门7',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [400, 400, 300, 300, 300, 400,400, 400, 300, 300, 300, 400]
        },
            {
          name: '部门8',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [300, 400, 300, 300, 300, 400,400, 400, 300, 300, 300, 400]
        },
            {
          name: '部门9',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [400, 400, 300, 300, 300, 400,400, 400, 300, 300, 300, 400]
        },
            {
          name: '部门10',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [500, 400, 300, 300, 300, 400,400, 400, 300, 300, 300, 400]
        },
            {
          name: '部门11',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [600, 400, 300, 300, 300, 400,400, 400, 300, 300, 300, 400]
        },
            {
          name: '部门12',
          type: 'bar',
          // itemStyle: {
          //   color: '#fccb05'
          // },
          data: [700, 400, 300, 300, 300, 400,400, 400, 300, 300, 300, 400]
        },
        ]
      }
    

