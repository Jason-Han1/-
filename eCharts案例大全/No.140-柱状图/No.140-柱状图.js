option = {
    backgroundColor: 'rbg(40,46,72)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '8%',
        right: '5%',
        left: '8%',
        bottom: '20%'
    },
    xAxis: [{
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
        axisLine: {
            lineStyle: {
                color: '#D1D9EB'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#A1A7B3',
            textStyle: {
                fontSize: 14
            },
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [
        
         {
        type: "value",
        name: '',
        nameTextStyle: {
          color: '#C1C6CF',
          fontSize: 14,
          align: "right",
          padding:5
        },
          axisLabel: {
              formatter:'{value}',
            color: '#A1A7B3',
            fontSize:14
        },
     axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: '#D1D9EB',
                type:'dashed'
            }
        }
      },
        ],
    series: [{
        type: 'bar',
        data: [80, 80, 97, 53, 95, 26, 72],
        barWidth: '24px',
        itemStyle: {
            color:'rgb(38,80,180)',
            barBorderRadius: [2 ,2 ,0 ,0 ]
        },
    }]
};