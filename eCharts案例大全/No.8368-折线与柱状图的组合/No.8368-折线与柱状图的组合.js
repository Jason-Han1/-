
var bynds=['2017','2018','2019','2020'];

var byndsRate=[92,94,96,99]

option = {
    
    backgroundColor: '#00000000',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}%"
      },
      grid:{
        top: 30,
        bottom:50,
      },
      xAxis: [{
        type: 'category',
        data: bynds,
        axisTick: {
          show: false
        },
        axisLine:{
          show:false,
        },
      }],
      yAxis: [{
        nameTextStyle:{
          color: 'rgb(99,128,218)'
        },
        axisTick: {
          show: true
        },
        axisLine:{
          show:false,
        },
        axisLabel:{
          formatter:'{value}%'
        },
        splitLine: {
          show: false,
        },
      }],
      series:[
        {
          name: "",
          type: "line",
          showAllSymbol: true,
          symbol: "none",
          lineStyle: {
            width:3,
            color: "rgb(255,195,34)"
          },
          data: byndsRate,
        },
        {
          type: 'bar',
          name: '就业率',
          barWidth: 25,
          label: {
            normal: {
              show: true,
              color: '#fff',
              position: 'top',
              formatter:'{c}%',
            }
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00FFE3'
              }, {
                offset: 1,
                color: '#4693EC'
              }], false),
              barBorderRadius: [5, 5, 0, 0],
            }
          },
          data:byndsRate,
        }],
};