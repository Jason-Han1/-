 let datas = [
    { value: "44.65", name: "初级会计师" },
        { value: "25.83", name: "中级会计师" },
        { value: "2.21", name: "税务师" },
        { value: "1.85", name: "注册会计师" },
        { value: "0.37", name: "高级会计师" },
        { value: "25.09", name: "其他人员" },
 ];
 let colorList = [
        "rgba(211, 103, 55, 1)",
        "rgba(243, 81, 85, 1)",
        "rgba(170, 31, 205, 1)",
        "rgba(91, 51, 219, 1)",
        "rgba(35, 185, 241, 1)",
        "rgba(31, 77, 205, 1)",
      ];

 option = {
     backgroundColor: "#ffffff",
     title: {
          text: "信息状态",
          subtext: "",
          textStyle: {
            fontSize: 20,
            color: "#999",
            lineHeight: 32,
          },
          subtextStyle: {
            fontSize: 28,
            color: "#333",
          },
          textAlign: "center",
          left: "50%",
          top: "34%",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%",
        },
        legend: {
          itemGap: 10,
          bottom: 100,
          left: "center",
          itemWidth:30,
          itemHeight:24,
          selectedMode: true,
          data: datas,
          textStyle: {
            fontSize: "18px",
            color: "rgba(127, 161, 253, 1)",
          },
        },
        color: colorList,
     series: [
          {
            name: "会计人员统计：",
            type: "pie",
            radius: [150, 200],
            center: ["50%", "36%"],
            label: {
              show: false,
            },
            itemStyle:{
              borderRadius: 20,
                borderColor: '#fff',
                borderWidth: 12
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "12",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: datas,
          },
          {
            type: 'pie',
            hoverAnimation: false,
            radius: [100, 110],
            center: ['50%', '36%'],
            tooltip: {
                show: false
            },
            itemStyle:{
              borderRadius: 20,
              borderColor: '#fff',
              borderWidth: 6
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    formatter:'{num|{d}} \n {name|{b}}',
                    rich: {
                        num: {
                            align: 'center',
                            fontSize: '30',
                            fontWeight: 'bold'
                        },
                        name:{
                            color:'#000000',
                            fontSize: '20',
                        }
                    }
                }
            },
             data: datas
         },

        ],
 };