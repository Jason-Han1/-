option = {
    backgroundColor:"#031d33",
    title: {
        text: '123',
        x: 'center',
        y: 'center',
        textStyle: {
         
                    fontSize: 200,
                    color: '#0077FF'
        }
    },
        angleAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 132,
          startAngle: 90
        },
        radiusAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          data: ["a", "b", "c"],
          z: 10
        },
        polar: {
          radius: "90%" //调半径
        },
        series: [
          {
            type: "bar",
            data: [, ,110],
            z: 1,
            coordinateSystem: "polar",
            barMaxWidth: 30,
            // name: "警告事件",
            roundCap: true,
            color:"#0077FF",
            // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            //   {
            //     offset: 0,
            //     color: 'rgba(48, 236, 166, 0.3)'
            //   },
            //   {
            //     offset: 1,
            //     color: 'rgba(48, 236, 166, 1)'
            //   }
            // ]),
            barGap: "-100%"
          },
          {
            type: "bar",
            data: [, , 110],
            z: 0,
            silent: true,
            coordinateSystem: "polar",
            barMaxWidth:30,
            name: "C",
            roundCap: true,
            color: "rgba(255,255,255,0.2)",
            barGap: "-100%"
          },
        ],
        tooltip: {
          show: false
        }
      };