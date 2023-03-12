      let shandian = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAMAAADKSsaaAAAAclBMVEUAAACAAADMAAC2AAC/AADIAADMAADRAADKAADMCAjPCAjJBwfMBgbLBgbNBgbLBQXLBQXNCQnMCAjOCQnMCAjNCQnMCQnPCgrNCgrOCQnOCwvNCgrOCgrOCgrOCgrNCgrOCwvOCgrNCgrOCgrOCgrOCwto2NwFAAAAJXRSTlMAAgUHCA4UFhgeICYoLC4xNjhBVHmKjZmvvcLO3+Hj7O/4+/3+bk5NRAAAAE5JREFUCB0FwQkCgQAABMBBFHIU5Qqh/f8XzQDzI8C9AfRTDZx+qcAhSQHrMXnB8pEkyUU3DJ8ktwW8k2cJRfLdglXSApvpDNhfZ4Ad8AeiCgXoDXM13gAAAABJRU5ErkJggg==';
      let path = ["",shandian,"",shandian,"",shandian];
      let pointColor = ["#6c50f3","red","yellow","red","#6c50f3","#6c50f3"];
      let markProfile = [
        {
          coord:[1,205.97]
        },
        {
          coord:[3,281.55]
        }
      ];
      option = {
        backgroundColor: '#080b30',
        title: {
          // text: '日用气量分析',
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
          },
          top: '2%',
          left: 'center',
        },
        // legend: {
        //   color: ["#17B4FA", "#47D8BE", "#F9A589"],
        //   data: ['日用气量分析'],
        //   left: 'center',
        //   top: "8%",
        //   textStyle: {
        //     color: "#ffffff"
        //   }
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: "shadow"
          },
        },
        grid: {
          top: '15%',
          left: '10%',
          right: '5%',
          bottom: '15%',
          // containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#9581F5'
            },
          },
          splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
              color: '#f00'
            },
          },
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            show: false
          },
          boundaryGap: true,
          data: ['8：00', '9:00', '10:00', '11:00', '12:00', '13:00'],
        }],

        yAxis: [{
          type: 'value',
          min: 0,
          // max: 140,
          splitNumber: 4,
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#9581F5'
            },
          },
          axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
              color: '#d1e6eb',

            },
          },
          axisTick: {
            show: true,
          },
        }],

        series: [{
          // name: '日用气量分析',
          type: 'bar',
          markPoint:{
            symbol:shandian,
            symbolSize:[12,18],
            symbolOffset: [0, -20],
            label:{
              show:false,
              // padding:50,
            },
            // symbol:"pin",
            data: markProfile
          },
          barWidth:40,
          itemStyle: {
            color:  function (params) {
              return pointColor[params.dataIndex]
            },
            // borderColor: "#fff",
            // borderWidth: 3,
            // shadowColor: 'rgba(0, 0, 0, .3)',
            // shadowBlur: 0,
            // shadowOffsetY: 2,
            // shadowOffsetX: 2,
          },
          tooltip: {
            show: true
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(108,80,243,0.3)'
              },
                {
                  offset: 1,
                  color: 'rgba(108,80,243,0)'
                }
              ], false),
              shadowColor: 'rgba(108,80,243, 0.9)',
              shadowBlur: 20
            }
          },
          data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
        },

        ]
      };

