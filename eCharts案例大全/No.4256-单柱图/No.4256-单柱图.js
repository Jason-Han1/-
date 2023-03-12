 var echartData= [
        { name: "20M以下", data: [7.5] },
        { name: "20M-49M", data: [9.7] },
        { name: "50M-99M", data: [22.5] },
        { name: "100M-499M", data: [36.7] },
        { name: "500M-999M", data: [17.5] },
         { name: "1000M以上", data: [6.1] },
      ];


 var option = {
     backgroundColor: '#0D468D',
    grid: {
        },
        tooltip: {
          show: false,
        },
        legend: [
         {
          show: true,
          bottom: 50,  
          textStyle:{
              color:'#ffff',
              width:'300px'
          },
          data:['20M以下','20M-49M','50M-99M'],
         },
          {
              data:['100M-499M','500M-999M','1000M以上'],
               bottom: 20,  
              textStyle:{
                  color:'#ffff',
                  width:'300px'
              },
          }
        ],
        xAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        yAxis: {
          data: ["sss"],
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        color: [
          "#22FFD2",
          "#DBD337 ",
          "#4CFF22",
          "#0085FF",
          "#A26FFF",
          "#DF4255",
        ],
        series: [],
 }
 
 echartData.forEach((item, index) => {
        option.series.push({
          type: "bar",
          name: item.name,
          stack: "1",
          barWidth: 25,
          data: item.data,
          label: {
            normal: {
              show: true,
              position:'outside',
                formatter: `{b|}{hr|}{a|${item.data}%}`,
               rich: {
                   b:{
                       padding:[0,60,0,0]
                   },
                a: {
                    fontSize:17,
                    fontWeight:500,
                    fontFamily: 'Agency FB',
                    padding:[15,0,20,2]
                },
                hr:{  
                    backgroundColor: 't',
                    borderRadius: 6,
                    width: 6,
                    height: 6
                }
               }
            },
          },
         labelLine: {
            show:true,
            showAbove:true,
            length:'200px',
            length2:'100px',
            smooth:false,
             minTurnAngle:'135',
           lineStyle: {
               color: 'red',
               type:'solid'
            }
        },
        
        })
      });