 var echartData= [
        { name: "电解锌", data: [36] },
        { name: "硅锰合金", data: [19] },
        { name: "磷酸氢钙", data: [11] },
        { name: "硫酸", data: [9] },
      ];


 var option = {
     backgroundColor: '#fff',
    grid: {
          containLabel: true,
          left: 20,
          right: -20,
          top: 0,
          bottom: 40,
        },
        tooltip: {
          show: false,
        },
        legend: {
          show: false,
        },
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
          "#5292FD",
          "#3DBB33 ",
          "#FCAD2C",
          "#EF6B6E",
          "#7F6AAD",
          "#585247",
        ],
        series: [],
 }
 
 echartData.forEach((item, index) => {
        option.series.push({
          type: "bar",
          name: item.name,
          stack: "1",
          label: {
            normal: {
              show: true,
              position: [5, 5],
              formatter: `{value|${item.data}}\n\n{name|${item.name}}`,
              align: "left",
              textStyle: {
                color: "#fff",
                rich: {
                  name: {
                    fontSize: "12",
                    fontWeight: 500,
                    color: "gray",
                  },
                  value: {
                    fontSize: "18",
                    fontWeight: 500,
                    color: "#fff",
                  },
                },
              },
            },
          },
          barWidth: 30,
          data: item.data,
          itemStyle: {
            normal: {
              barBorderRadius: [0],
            },
          },
        });
        if (index === 0) {
          option.series[index].itemStyle.normal.barBorderRadius = [
            5,
            0,
            0,
            5,
          ];
        } else if (index === echartData.length - 1) {
          option.series[index].itemStyle.normal.barBorderRadius = [
            0,
            5,
            5,
            0,
          ];
        } else {
          return;
        }
      });