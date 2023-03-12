option = {
    title:{
        show:true,
        text:"柱状图多轴设计"
    },
    legend:{
        data:["直接访问","间接"],
    },
    
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid:[
        {
          show: false,
          bottom: '12%',
          left: 93,
          right: 100,
          containLabel: true,
          height: '40%'
        }, {
          show: false,
          top: '48%',
          left: 124,
          right: 100,
          height: '0%',
          zlevel:100
        }, {
          show: false,
          top: '8%',
          // left: 76,
          left: 93,
          right: 100,
          containLabel: true,
          height: '40%'
        }
    ],
    xAxis : [
       {
            type: 'category',
            position: 'bottom',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
            },
            data: [],
 
          }, {
            gridIndex: 1,
            type: 'category',
            position: 'center',
            axisLine: {
              show: true
            },
            axisTick: {
              show: true
            },
            zlevel:200,
            axisLabel: {
              show: true,
              align: 'center',
              textStyle: {
                color: '#323232',
                fontSize: 12
              }
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          {
            gridIndex: 2,
            type: 'category',
            position: 'top',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
            },
            data: [],
          }
    ],
    yAxis : [
        {
          type: 'value',
          inverse: true,
          position: 'left',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#646464',
              fontSize: 12,             
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(0,162,255,0.08)",
              width: 1,
            }
          }
        }, {
          gridIndex: 1,
          show: false,
        }, {
          gridIndex: 2,
          type: 'value',
          position: 'left',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#646464',
              fontSize: 12,            
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(0,162,255,0.08)",
              width: 1,
            }
          }
        }
    ],
    series : [
        {
            gridIndex:0,
            name:'直接访问',
            type:'bar',
            barWidth: '40%',
            data:[300, 52, 200, 334, 390, 330, 220],
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle:{
                color:"#B23AEE"
            }
        },
        {
            gridIndex:2,
            name:'间接',
            type:'bar',
            barWidth: '40%',
            data:[100, 300, 50, 150, 210, 110, 48],
        }
    ]
};
