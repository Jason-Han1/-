option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      stack: "1",
      barMaxWidth: 20,
      markPoint: {
        data: [120, 200, 150, 80, 70, 110, 130].map((item, index) => {
          return {
            coord: [index, item/2],
            itemStyle: {
              color: "black"
            },
            symbolSize: [25, 2],
            symbolOffset: [0, -5],
            symbol:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAADCAYAAAAp+adOAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOaADAAQAAAABAAAAAwAAAABcACqHAAAAKElEQVQoFWOc/ez/fwYoSJViZISxkcVhYoOdxuV+psHucGq4b0R4EgAU2guFUrWCeQAAAABJRU5ErkJggg=='
          };
        }),
      },
    },
    {
      data: [150, 100, 250, 180, 170, 210, 230],
      type: 'bar',
      stack: "2",
      barMaxWidth: 20,
      markPoint: {
        data: [150, 100, 250, 180, 170, 210, 230].map((item, index) => {
          return {
            coord: [index, item/2],
            itemStyle: {
              color: "black"
            },
            symbolSize: [25, 2],
            symbolOffset: [0, -5],
            symbol:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAADCAYAAAAp+adOAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOaADAAQAAAABAAAAAwAAAABcACqHAAAAKElEQVQoFWOc/ez/fwYoSJViZISxkcVhYoOdxuV+psHucGq4b0R4EgAU2guFUrWCeQAAAABJRU5ErkJggg=='
          };
        }),
      },
    }
  ]
};