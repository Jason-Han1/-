option = {
    grid: {
     top: "10%",
          left: "22%",
           bottom: "10%",
       /* containLabel: true*/
    },
    
    xAxis: {
        show:false
    },
    yAxis:[ {
        type: 'category',
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        //不显示y轴线条
axisLine: {
    show: false
        },
// 不显示刻度
axisTick: {
   show: false
},
//刻度标签文字颜色显示红色
axisLabel:{
       color: "#ff0000"
},
        
    },{ 
         type: 'category',
        data: [ 702, 350, 610, 793, 664],
        //不显示y轴线条
axisLine: {
    show: false
        },
// 不显示刻度
axisTick: {
   show: false
},
//刻度标签文字颜色显示红色
axisLabel:{
       color: "#ff0000"
},}
    ],
    series: [
        {
            
            name: '条',
            barCategoryGap: 50,
            barWidth: 10,
            type: 'bar',
            itemStyle: {
    normal: {
      barBorderRadius: 20,       
    }
},
            data: [70, 34, 60, 78, 69],
              yAxisIndex: 0,
            // 图形上的文本标签
            label: {
    normal: {
         show: true,
         // 图形内显示
         position: "inside",
         // 文字的显示格式
         formatter: "{c}%"
     }
},
        },
        {
            name: '框',
            type: 'bar',
            barCategoryGap: 50,
            barWidth: 10,
              yAxisIndex: 1,
               itemStyle: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
        },
            data: [100, 100, 100, 100, 100]
        }
    ]
};
