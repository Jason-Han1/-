const working = 20;
      const setup = 60;
      const blocked = 30;
      const waiting = 33;
      const unplanned = 10;
      option = {
        
    color: ['#50c48f', '#26ccd8', '#e5323e', '#f59311', '#9192ab'],  
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "3%"
          // containLabel: true
        },
        xAxis: {
          type: "value",
          show: false
        },
        yAxis: {
          type: "category",
          data: ["周一"],
          show: false
        },
        series: [
          {
            name: "working",
            type: "bar",
            stack: "总量",
            data: [working],
            barWidth: 40
          },
          {
            name: "setup",
            type: "bar",
            stack: "总量",
            data: [setup]
          },
          {
            name: "brocked",
            type: "bar",
            stack: "总量",
            data: [blocked]
          },
          {
            name: "waiting",
            type: "bar",
            stack: "总量",
            data: [waiting]
          },
          {
            name: "unplanned",
            type: "bar",
            stack: "总量",
            data: [unplanned]
          }
        ]
      };