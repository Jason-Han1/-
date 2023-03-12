var dataArray = [0.15, 0.4, 0.35, 0.6, 0.3, 0.2, 0.71];
var dataX = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00'];
var barData = [1, 0.9, 0.7, 0.4, 0];
option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: 'rgba(18, 55, 169, 1)', // 0% 处的颜色
            },
            {
                offset: 1,
                color: 'rgba(18, 55, 169, 0.8)', // 100% 处的颜色
            },
        ],
        global: false, // 缺省为 false
    },
    title: {
        text: '应用服务器Apdex T：500（ms）',
        textStyle: {
            align: 'right',
            color: '#fff',
            fontSize: 18,
            fontWeight: 400,
        },
        top: '2%',
        right: '2%',
    },
     tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "10%",
          left: "10%",
          right: "5%",
          bottom: "15%",
          // containLabel: true
        },

    xAxis: [
       {
            data: dataX,
            type: "category",
            // name: "(11月)",
            boundaryGap: false,
            nameLocation: "end",
              axisLabel: {
              color: "#fff",
            },
            axisLine: {
              show: true,
            },
            splitArea: {
              show: false,
              color: "#f00",
              lineStyle: {
                color: "#f00",
              },
            },
             splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
                type: "dashed",
                dashOffset: 100,
              },
            },
          },
          {
            type: "value",
            // name: "(11月)",
            nameLocation: "end",
            min: 0,
            max: 1,
            show: false,
          },
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 1,
            show: false,
            splitNumber: 4,
            splitLine: {
                show: false,
            },
        },
        {   
            name: '横着的',
            type: 'category',
            // data: ["类目1", "类目2", "类目3", "类目4", "类目5"],
            show: false,
        },
    ],
    series: [
        {
            type: 'bar',
            data: [barData[0]],
            z: 10,
            itemStyle: {
                color: '#f00',
            },
            label: {
                show: true,
                formatter: '优秀',
                position: [-30, 30],
                distance: 10,
                color: '#fff',
            },

            barGap: '-100%',
            barWidth: 30,
        },
        {
            type: 'bar',

            data: [barData[1]],

            z: 10,
            itemStyle: {
                color: '#41C300',
            },
            label: {
                show: true,
                formatter: '满意',
                position: [-30, 45],
                distance: 10,
                color: '#fff',
            },
            barGap: '-100%',
            barWidth: 30,
        },
        {
            type: 'bar',
            label: {
                show: true,
                formatter: '接受',
                position: [-30, 55],
                distance: 10,
                color: '#fff',
            },
            data: [barData[2]],
            z: 10,
            itemStyle: {
                color: '#BBDB00',
            },

            barWidth: 30,
        },
        {
            type: 'bar',
            label: {
                show: true,
                formatter: '较差',
                position: [-30, 75],
                distance: 10,
                color: '#fff',
            },
            data: [barData[3]],
            z: 10,
            itemStyle: {
                color: '#F59A23',
            },

            barWidth: 30,
        },

        {
            name: '健康度',
            type: 'line',
            z: 20,
            data: dataArray,
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#00BDFF',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#00BDFF',
                },
            },

            itemStyle: {
                color: '#00BDFF',
                borderColor: 'none',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: true,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0,189,255,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,189,255,0.3)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,189,255,0.3)',
                    shadowBlur: 20,
                },
            },

            markLine: {
                symbol: ['none', 'none'], //去掉箭头
                itemStyle: {
                    normal: {
                        lineStyle: { type: 'solid', color: "rgba(255,255,255,0.1)" },
                        label: { show: true, position: 'left', formatter: '{b}' ,color:'#fff',position:'end',distance:10},
                    },
                },
                formatter: function (params) {},
                data: [
                    {
                        name: '0',
                        yAxis: 0,
                    },
                    {
                        name: '0.4',
                        yAxis: 0.4,
                    },
                    {
                        name: '0.70',
                        yAxis: 0.7,
                    },
                    {
                        name: '0.90',
                        yAxis: 0.9,
                    },
                    {
                        name: '1',
                        yAxis: 1,
                    },
                ],
            },
        },
    ],
};
