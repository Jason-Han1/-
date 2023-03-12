let dataX =  ['0', '100', '200', '300', '400', '500']
let dataY = ['0.0072306579898770785', '0.22342733188720174', '0.08026030368763558', '0.06218365871294288', '0.06073752711496746', '0.06146059291395517',]
      option = {
          backgroundColor:'#fff',
      tooltip: {
        trigger: 'axis',
        
        formatter: function(params) {
            let val = Number(params[0].data) 
            return "企业分:" + 200 +'<br/>'+"均值分:" + val.toFixed(4);
        },
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
      },
      grid: {
        top: '15%',
        left: '0%',
        right: '5%',
        bottom: '5%',
        containLabel: true
      },
      legend: {
        icon: 'pin',
        orient: 'horizontal',
        align: 'left',
        top: '0',
        right: '0',
        itemWidth: 10,
        itemHeight: 2,
        textStyle:{
            fontSize:7
        },
        data:['企业分','均值分']
      },
      xAxis: [{
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
              color: '#F3F5F7'
            }
        },
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: 12,
            color: '#C7CBD4'
          },
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: dataX,
      }],
      yAxis: [{
          type: 'value',
          min: 0,
          splitNumber: 4,
          splitLine: {
            show: true,
            lineStyle: {
                color: ['#F3F5F7'],
            }
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
                fontSize: 12,
                color: '#C7CBD4'
            },
            formatter: function (value, index) {           
              return value.toFixed(4)      
            }
            
          },
          axisTick: {
            show: false,
            length :80,
            lineStyle: {
                color: ['#F3F5F7']
            }
          },
      }],
      series: [
        {
        name: '均值分',
        type: 'line',
        smooth: true, //是否平滑
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
            normal: {
                width: 1.5,
                color: "#86D0FF",
            },
        },
        label: {
            show: false,
            position: 'top',
            textStyle: {
                color: '#000',
                fontSize: 14
            }
        },
        itemStyle: {
          normal: {
            color: "#E7F1FE",
            borderColor: "#fff",
            borderWidth: 1,
            shadowColor: '#A3DCFE',
            shadowBlur:5,
            shadowOffsetY: 3,
            shadowOffsetX: 0,
          },
        },
        tooltip: {
            show: true
        },
        areaStyle:{
          normal: {
            color: '#E7F1FE'
          }
        },
        data: dataY
      },
      {
        name: '企业分',
        type: 'line',
        smooth: true, //是否平滑
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
          normal: {
              width: 0,
              color: "#86D0FF",
          },
        },
        label: {
          show: false,
          position: 'top',
          textStyle: {
              color: '#fff',
              fontSize: 14
          }
        },
        itemStyle: {
          color: "#2D99FF",
          normal: {
            color: "#2D99FF",
            borderColor: "#fff",
            borderWidth: 1,
            shadowColor: '#A3DCFE',
            shadowBlur:5,
            shadowOffsetY: 3,
            shadowOffsetX: 0,
          },
        },
        tooltip: {
          show: false
        },
        data: dataY,
        markPoint: {
          symbol:'path://M170.666667 85.333333 853.333333 85.333333C900.266667 85.333333 938.666667 123.733333 938.666667 170.666667L938.666667 682.666667C938.666667 729.6 900.266667 768 853.333333 768L682.666667 768 512 938.666667 341.333333 768 170.666667 768C123.733333 768 85.333333 729.6 85.333333 682.666667L85.333333 170.666667C85.333333 123.733333 123.733333 85.333333 170.666667 85.333333Z',
          symbolKeepAspect: false,
          symbolSize:25,
          symbolOffset :[0,-20],
          silent: false,
          label:{
            normal:{
              show:true,
              textStyle:{
                  color:'red',
                  fontFamily:'digital',
                  fontSize: '13'
              },
            },
            formatter: function (value, index) {    
              console.log(value)       
              return value.toFixed(4)      
            }
          },
          itemStyle: {
            normal: {
              color: "#fff",
              shadowColor: '#8F9192',
              shadowBlur:5,
              shadowOffsetY: 3,
              shadowOffsetX: 0,
            },
          },
          data: [{
            coord: [dataX[2], dataY[2]],
          }],
        }
      },
    ]
      };