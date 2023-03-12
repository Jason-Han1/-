option = {
    backgroundColor:' #013275',
   
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['省内合法', '省内非法', '省外合法', '省外非法'],
        textStyle: {
             fontSize: 12,
             color: '#F1F1F3'
         }
    },
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
                lineStyle: {
                 color: '#ffffff'
                 }
            },
            data: ['8/11', '8/12', '8/13', '8/14', '8/15', '8/16', '8/17']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                 color: '#ffffff'
                 }
            },
        }
    ],
    series: [
        {
            name: '省内合法',
            type: 'bar',
            stack: '省内',
            color:'#5BF299',
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '省内非法',
            type: 'bar',
            stack: '省内',
            color:'#ff4343',
            emphasis: {
                focus: 'series'
            },
             itemStyle: {
              normal: {
                    barBorderRadius:[10, 10, 0, 0],
              },
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '省外合法',
            type: 'bar',
            stack: '省外',
            color:'#45dbf7',
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '省外非法',
            type: 'bar',
            stack: '省外',
            color:'#FF7D34',
            emphasis: {
                focus: 'series'
            },
             itemStyle: {
              normal: {
                    barBorderRadius:[10, 10, 0, 0],
              },
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        }

      
    ]
};