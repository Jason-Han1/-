option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          show: false,
          icon: "circle",
          orient: "vertical",
          right: 400,
          textStyle: {
            fontSize: 47,
            lineHeight: 56,
            color: "#4394CB",
          },
          top: 80,
          data: ["待布控", "布控中", "已反馈"],
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["65%", "80%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            // itemStyle:{
            //   shadowBlur:{
            //     shadowColor: 'rgba(0, 0, 0, 0.5)',
            //     shadowBlur: 10
            //   }
            // },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 0,
                name: "待布控",
                itemStyle: {
                  color: " #005fbf",
                  borderColor: "#0071DC",
                  borderWidth: 10,
                },
              },
              {
                value: 0,
                name: "布控中",
                itemStyle: {
                  color: "#18CCE5",
                  borderColor: "#1ce7ff",
                  borderWidth: 10,
                },
              },
              {
                value: 0,
                name: "已反馈",
                itemStyle: {
                  color: "#da4a39",
                  borderColor: "#D15337",
                  borderWidth: 10,
                },
              },
            ],
          },
        ],
      }