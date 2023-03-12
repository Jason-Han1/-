option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
         data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         minorSplitLine:{
            show:true
        }
        
    },
    dataZoom:[
      {
          type:"inside"
      }  
    ],
    yAxis: [{
        min: 180,
            max: 359,
            // splitLine: { show: false },
            // axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
              color: "#e8e7e7",
              fontSize: 10
            },
            name:"(次数/分)",
            nameTextStyle:{
              color:"#d0cece",
              align:"right",
              verticalAlign:"middle",
              padding:[8,0,0,0],
              fontSize:10
            },
            splitLine: {    //Y轴 分割横线
              show: true,
              lineStyle:{
                  color:"#34385f"
              }
            },
            minorSplitLine:{    // 细 分割横线
              show:true,
              lineStyle:{
                  color:"red"
              }
            },
            axisLine: {     //Y轴 轴线
              // show: false,
              lineStyle:{
                  color:"#34385f"
              }
            },
    },
    {
        min: 180,
            max: 359,
            // splitLine: { show: false },
            // axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
              color: "#e8e7e7",
              fontSize: 10
            },
            name:"(次数/分)",
            nameTextStyle:{
              color:"#d0cece",
              align:"right",
              verticalAlign:"middle",
              padding:[8,0,0,0],
              fontSize:10
            },
            splitLine: {    //Y轴 分割横线
              show: true,
              lineStyle:{
                  color:"#34385f"
              }
            },
            minorSplitLine:{    // 细 分割横线
              show:true,
              lineStyle:{
                  color:"red"
              }
            },
            axisLine: {     //Y轴 轴线
              // show: false,
              lineStyle:{
                  color:"#34385f"
              }
            },
    }
    ]
    ,
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};