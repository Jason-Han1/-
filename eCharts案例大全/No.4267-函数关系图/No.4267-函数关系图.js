option={
        title:[{text:"+",
        x:"50%",
        y:"40%",
        textStyle: {
      fontSize: 30
    },
    },
    {text:"—",
        x:"28.5%",
        y:"65%",
        textStyle: {
      fontSize: 20
    },
    },
    {text:".",
        x:"29%",
        y:"62.5%",
        textStyle: {
      fontSize: 30
    },
    },
    {text:".",
        x:"29%",
        y:"64.5%",
        textStyle: {
      fontSize: 30
    },
    },
    {text:"—",
        x:"72.5%",
        y:"65%",
        textStyle: {
      fontSize: 20
    },
    },
    {text:".",
        x:"73%",
        y:"62.5%",
        textStyle: {
      fontSize: 30
    },
    },
    {text:".",
        x:"73%",
        y:"64.5%",
        textStyle: {
      fontSize: 30
    },
    }],
        xAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value'
    },
    yAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value'
    },
        tooltip: {},
        series: [
          {
            type: "graph",
            coordinateSystem: "cartesian2d", 
            symbol: "rect",
            symbolOffset: ["15%", 0],
            label: {
              normal: {
                show: true
              }
            },
            label: {
            show: true,
            position: 'inside',
            color: 'black',
        },
        itemStyle: {
            color: '#66ccff',
        },
            data: [
        {
           symbolSize: [150, 50],
        value: [500, 800],
        name: '前两大股东持股比例之差\n34.75%',
        },
        {
        symbolSize: [150, 50],
        value: [300, 600],
        name: '第一大股东持股比例\n42.17%', 
        
    },
        {symbolSize: [150, 50],
        value: [700, 600],
        name: '第二大股东持股比例\n7.41%',
        },
        {
         symbolSize: [150, 50],
        value: [100, 300],
        name: '第一大股东持股总数\n2,159,807,516.00',
    },
    {
         symbolSize: [150, 50],
        value: [350, 300],
        name: '总股本数\n5,123,350,000.00',
    },
    {
         symbolSize: [150, 50],
        value: [650, 300],
        name: '第二大股东持股总数\n379,580,000.00',
    },
    

        {
          name: "1.总股本数\n5,123,350,000.00",
          symbolSize: [150, 50],
          value: [900, 300],
        },
        
      ],

            lineStyle: {
              normal: {
                opacity: 1,
                color: "#53B5EA",
                curveness: 0.2,
                width: 2
              }
            }
          },

       
          {
        type: 'lines',
        polyline: false,
        coordinateSystem: 'cartesian2d',
        lineStyle: {
            width: 2,
            color: '#66ccff',
            curveness: 0.2
        },
        data: [{
            coords: [
                [500, 800],
                [300, 600],
            ]
        }, {
            coords: [
                [500, 800],
                [700, 600],

            ]
        }, {
            coords: [
                [300, 600],
                [100,300],

            ]
        }, {
            coords: [
                [300, 600],
                [400,300],

            ]
        },
        {
            coords: [
                [700, 600],
                [600, 300]
            ]
        },
        {
            coords: [
                [700, 600],
                [900, 300]
            ]
        }
    ]
    }
        ]
      };