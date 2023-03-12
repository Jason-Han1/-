   option = {
       // color: ["#82F480", "#FDED35", "#FB6702", "#FB0200", "#BB0201"],
       title: {
           text: "装置监测厂家规模",
           left: "center",
           top: "10",
           textStyle: {
               fontSize: 24,
               color: 'rgba(6,217,250,1)'
           },
       },
       angleAxis: {
           type: "category",
           data: ["厂家1", "厂家2", "厂家3", "厂家4", "厂家5", "厂家6", "厂家7", "厂家8", '厂家9'],
           boundaryGap: true,
           axisTick: {
               show: false,
           },
           axisLine: {
               lineStyle: {
                   color: "#30465D",
               },
           },
           axisLabel: {
               color: "#6A6B6C",
               margin: 3,
           },
           splitLine: {
               // show: true,
           },
       },
       radiusAxis: {
           //   name: "%",
           nameLocation: "end",
           axisLine: {
               show: false,
           },
           axisTick: {
               show: false,
           },
           axisLabel: {
               formatter: "{value}",
               showMaxLabel: false,
               color: "#000",
           },
           z: 10,
       },
       tooltip: {},
       polar: {},

       visualMap: {
           show: false,
           type: "piecewise",
           left: "2%",
           top: "10%",
           min: 0,
           max: 15,
           inRange: {
               color: [
                   '#00D1F9',
                   '#01A8F6',
                   '#00C9F8',

               ],
               symbolSize: [50, 100],
           },
           outOfRange: {
               color: "#000",
           },
       },
       series: [{
           type: "bar",
           data: [110400, 202000, 400000, 532629, 475000, 380010, 489520, 370019, 265000],
           coordinateSystem: "polar",
           //   name: "6-8m/s",
           stack: "a",

       }, ],
   }