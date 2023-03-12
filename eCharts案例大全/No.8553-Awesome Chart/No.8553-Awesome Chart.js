option = {
title:[{

              text: '# of Patent Filings',
              top: '1%',
              left:'50%',
              textStyle:{
                  color:'#FDAB57',
                  //fontStyle:'normal',
                  fontWeight:'800',
                  //fontFamily:'sans-serif',
          　　　　fontSize:32
              }
          },{
              text: "Fiscal Year",
              left:'80%',
              top: '1%',
              textStyle:{
                  color:'#52B0EF',
                  //fontStyle:'normal',
                  fontWeight:'800',
                  //fontFamily:'sans-serif',
          　    fontSize:32
              }
          }],
    xAxis: {

        boundaryGap: false,
        axisTick: {
            show: true
        },
        splitLine:{show: true},
        axisLabel: {
            margin:30,   
            textStyle: {
                color: '#000',
                fontSize:'32',
            }
        },
       axisLine: {
            lineStyle:{
				color:'#52B0EF',  //x坐标轴的颜色
				width:'4'
			},
            show: true
        },
     
        data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
    },
    yAxis: {        
        axisLine: {
            lineStyle:{
				color:'#FDAB57',  //y坐标轴的颜色
				width:'4'
			},
            show: true
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            margin:50,
            textStyle: {
                color: '#000',
                fontSize:'32',
                
                
            },

        }},
    series: [{
        type: 'line',
        animationDelay: function (idx) {
            return idx * 300;
        },
                                    symbol: 'circle',     //设定为实心点
                            symbolSize: 15,   //设定实心点的大小
       itemStyle: {
                            normal: {
                                color: 'red',
                                lineStyle:{
                                    width:4//设置线条粗细
                                }
                            }
          },
        data:[19, 44, 82, 77, 75, 90, 95,100]
    }]
};