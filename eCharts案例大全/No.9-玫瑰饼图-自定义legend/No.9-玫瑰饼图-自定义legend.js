 let datas = [
        {
          name: "出租居住",
          value: 1,
        },
        {
          name: "自营",
          value: 2,
        },
        {
          name: "出租经营",
          value: 3,
        },
        {
          name: "合作入股",
          value: 4,
        },
      ];

      var option = {
        color: ["#F56463", "#00C6FF", "#F09615", "#0079E6"],
        legend: {
          itemHeight: 14,
          itemWidth: 14,
          icon: "rect",
          orient: "vertical",
          top: "center",
          right: "5%",
          textStyle: {
            align: "left",
            color: "#",
            verticalAlign: "middle",
            rich: {
              name: {
                width:80, 
                fontSize: 16,
              },
              value: {  width:20,  
                   align:"right",
                fontFamily: "Medium",
                fontSize: 16,
              },
              rate: {width:10,
                align:"right",
                fontSize: 16,
              },
            },
          },
          data: datas,
          formatter: (name) => {
            if (datas.length) {
              const item = datas.filter((item) => item.name === name)[0];
              return `{name|${name}}{value| ${item.value}} {rate| 宗}`;
            }
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%",
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["30%", "80%"],
            center: ["35%", "50%"],
            roseType: "radius",
            label: {
              formatter: "{d}%",
            },
            labelLine: {
              length: 1,
              length2: 20,
            },
            data: datas,
          },
        ],
      };