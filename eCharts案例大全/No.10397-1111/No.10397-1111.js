var data1 =  [2,50,80,10];
var option = {
    backgroundColor: '#fff',
      grid: {
        top: '0',
        left: '5%',
        right: '15%',
        bottom: '0',
        containLabel: true
      },
      yAxis: [{
        type: 'category',
        data: ['心率较慢', '心率较快','高血压','低血压'],
        inverse: true,
        axisTick: {
          show: false
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14,
            color: '#666'
          }
        },
        axisLine: {
          show: false
        }
      }],
      xAxis: [{
        type: 'value',
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }],
      series: [{
        type: 'bar',
        barWidth: 14,
        data:data1,
        label: {
          normal: {
            show: false,
          }
        },
        itemStyle: {
          normal: {
            color: "#52D7FF",
            barBorderRadius: 50
          }
        }
      }, {
        type: "bar",
        barWidth: 14,
        xAxisIndex: 0,
        barGap: "-100%",
        data: [100, 100,100,100],
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: function(data){
                let sum =0;
                for(var i = 0;i<data1.length;i++){
                    sum +=data1[i];
                   
                }
                console.log(data);
                let nums = (data1[data.dataIndex] /sum).toFixed(3)
                console.log(nums)
                
                return (nums*100).toFixed(2)+'%'
                
            },
            distance: 0,
            color: '#666',
            fontSize: 14,
            padding: [0, 0, 0, 10]
          }
        },
       
        itemStyle: {
          normal: {
            color: "#eee",
            barBorderRadius: 50
          }
        },
        zlevel: -1
      }]
    };