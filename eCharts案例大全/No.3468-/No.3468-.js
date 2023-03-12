 var echartData= [
        { name: "楼栋数", data: [36] },
        { name: "平房数", data: [19] },
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
          data: ["le"],
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
          "#F175AB",
          "#FCDE9E ",
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
              formatter: `{value|${item.name}}：{value|${item.data}}`,
              position: 'top',
              textStyle: {
                color: "#fff",
                rich: {
                  value: {
                    fontSize: "18",
                    fontWeight: 500,
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