option = {
    // backgroundColor:'#FAFBFE',
   
    tooltip: {
        trigger: 'axis',
        backgroundColor:'#Fff',
        textStyle:{
            color:'#3B53A2',
            fontSize:12,
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(205,217,240);',
        borderColor:'#DAE1F4',
        borderWidth:1,
        formatter: "{b} <br/>{a0} : {c0}元<br/>{a1} : {c1}元<br/>{a2} : {c2}元"
    },
    legend: {
        data:['2018-07-31','2018-08-01','2018-08-02'],
        textStyle:{
            color:'#3B53A2'
        },
        inactiveColor:'#CDD9F0',
        top:20,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
    
        axisLabel: {
              color: '#3B53A2',
              fontSize: '11',
              interval: 0,
          },
          axisLine: {
            lineStyle: {
              color: '#3B53A2'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#3B53A2'
            }
          }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
              color: '#3B53A2',
              fontSize: '11',
              interval: 0,
              formatter: '{value}元'
          },
          axisLine: {
            lineStyle: {
              color: '#3B53A2'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#CDD9F0'
            }
          }
    },
    series: [
        {
            name:'2018-07-31',
            type:'line',
             lineStyle:{
                color:'#0F74DA' //连线颜色
            },
            itemStyle:
            {
                color:'#0F74DA' //连线颜色
            },
            smooth: true,
            data:[1.3, 1.1, 10.1, 8.4, 10.90, 12.30, 21.0, 9.30, 13.10, 8.2, 16.1, 12.34, 15.0, 6.30, 4.10, 1.82]
        },
        {
            name:'2018-08-01',
            type:'line',
            lineStyle:{
                color:'#FF3663' //连线颜色
            },
            itemStyle:
            {
                color:'#FF3663' //连线颜色
            },
            smooth: true,
            data:[2.20, 11.2, 11.91, 8.4, 9.0, 13.0, 23.10, 11.82,21.91, 9.4, 11.01, 13.4, 9.0, 8.01, 2.03, 1.82]
        },
        {
            name:'2018-08-02',
            type:'line',
            lineStyle:{
                color:'#5B53E6' //连线颜色
            },
            itemStyle:
            {
                color:'#5B53E6' //连线颜色
            },
            smooth: true,
            data:[5.00, 2.32, 10.10, 11.54, 19.02, 33.03, 21.10, 18.21, 19.13, 3.44, 2.90, 6.30, 4.19,9.01, 3.37,1.20 ]
        },
      
    ]
};