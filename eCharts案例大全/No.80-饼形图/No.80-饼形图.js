 var data={
    title:'脱敏成功率',
    percentage:'68%',
    data:[
      {value:1001,name:'调用次数'}, 
      {value:520,name:'调用成功数'} 
    ],
  }
var option = {
      title: [
        {
          // 第一个圆环标题
          text: data.percentage, // 主标题
          textStyle: {
            // 主标题样式
            color: "#0f0f0f",
            lineHeight:70,
            fontSize: 36,
            fontWeight:"400",
          },
          left: "50%", // 定位到适合的位置
          top: "42%", // 定位到适合的位置
          subtext: "一级", // 副标题
          subtextStyle: {
            // 副标题样式
            color: "#c1c1c0",
            fontSize: 14,
          },
          textAlign: "center", // 主、副标题水平居中显示
        },
      ],
      tooltip: {
        trigger: "item",
        formatter: function (params) {
          let tip = "";
          if (params.seriesIndex === 0) {
            tip =
              params.seriesName + ":" +"<br>"+
              params.marker +
              params.name +
              ": " +
              params.value +
              " " +
              "(" +
              params.percent +
              "%)";
          } else if (params.seriesIndex === 1) {
            tip = "";
          }
          return tip;
        },
      }, //提示框，鼠标悬浮交互时的信息提示
      legend: {
        left: "center",
        bottom: "5%",
        itemGap: 8,
        itemWidth: 12,
        itemHeight: 12,
      },
      series: [
        {
          name: data.title, //tooltip提示框中显示内容
          type: "pie", //图形类型，如饼状图，柱状图等
          radius: ["45%", "58%"], //第一项是内半径，第二项是外半径。
          center: ["50%", "50%"],
          color: ["#00ffff", "#dcdcdc"],
          label: {
           
            position: "center",
            normal: {
             
              show: false,
            },
          },
          data: [
            { value: data.data[0].value, name: data.data[0].name },
            { value: data.data[1].value, name: data.data[1].name },
          ], //数据，数据中其他属性，查阅文档
        },
        {
          type: "pie",
          radius: ["0%", "35%"], //第一项是内半径，第二项是外半径。
          center: ["50%", "50%"],
          hoverAnimation: false,
          color: "#fff",
          data: [
            {
              value: 0,
              itemStyle: {
                normal: {
                  shadowColor: "#e3e3e3",
                  shadowBlur: 20,
                },
              },
            },
          ],
        },
      ],
    };