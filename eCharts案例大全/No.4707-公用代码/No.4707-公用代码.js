option = {
    title: {
        text: 'Awesome Chart'
    },
    legend:{
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ["2020"]
    },
    tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: "{b}",
          extraCssText: "z-index:96"
        },
         grid: {
          top: "15%",
          left: "5%",
          right: "5%",
          bottom: "10%",
          containLabel: true
        },
    xAxis: {
        show:true,
        type: 'category',
        position:"bottom",
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        name:"2020",
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};