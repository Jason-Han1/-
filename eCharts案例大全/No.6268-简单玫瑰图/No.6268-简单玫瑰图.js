let labelLineColor = "green";
let fontSize = 20;
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)",
    },
    legend: {
        show: false
    },
    series: [
        // 环
     {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: fontSize,
          formatter: '{b}:\n{d}%',
          
        },
        // 修饰引导线样式
        labelLine: {
          length: 5,
          length2: 50,
          lineStyle:{
              width:1,
              color:labelLineColor
          }
        }
      }
      
    ]
};