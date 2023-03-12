
 var seriesData = [12,15,16,20];
 var axisLabelTextStyle= {
        color:['rgba(255, 255, 255, 0.6)'],
        fontSize: '12',
      };
var  axisLineLineStyle= {
        color:['rgba(255, 255, 255, 0.2)']
      };
var tooltipBackgroundColor=['rgba(0, 0, 0, 0.9)'];
option = {
        backgroundColor: '#2c343c',
         color: ['#089BFF'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            backgroundColor: tooltipBackgroundColor
        },
        grid: {
            x: '0',
            y: '20',
            x2: '20',
            y2: '20',
            containLabel: true
        },
        xAxis: {
            data: ['未开始','进行中','已完成','已过期'],
            splitLine:{
              show:false,
            },
            axisLine:{
              show:false,
              interval: 0,
                  lineStyle:axisLineLineStyle
                },
                axisLabel:{
                  textStyle: axisLabelTextStyle
                },
        },
        yAxis: {
            axisLine:{
              show:false,
              lineStyle: axisLineLineStyle
            },
            //y轴分割线样式
            splitLine:{
              show:false,
              lineStyle:{
              color:['rgba(85, 202, 255, 0.3)']
              }
            },
            axisLabel:{
              show:false,
            }
        },
        series: [
            {
                type: 'bar',
                barWidth: 40,
                label: {
                  normal: {
                      position: 'top',
                      show: true
                  }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                    }
                },
                data: seriesData
            }
        ]
};