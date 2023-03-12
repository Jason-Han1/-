option = {
    name: "salemanData",
    backgroundColor: '#000',
    animation: true,
    tooltip: {
      show: false
    },
    grid: {
      left: '24',
      right: '0',
      top: '20',
      bottom: '0',
      x: 0,
      y: 0,
      containLabel: false,
      show: true, // 查看边界
      width: '335px'
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    dataset: {
      dimensions: [
        'name', 'productArea', 'customerArea', 'productValues', 'customerAmount', 'text', 'percent', 'calText'
      ],
      source: [{
        "customerName": "东山13号(C3C)/B瓦",
        "productArea": "6,194m²",
        "unit": "(m²)",
        "name": "5 东山13号(C3C)/B瓦",
        "customerArea": "6194",
        "productValues": "2v",
        "customerAmount": '￥5200',
        "text": 123,
        "calText": 90,
        "percent": 90
      }, {
        "customerName": "东力4号(双面玖龙双面玖龙双面玖龙双面玖龙双面玖龙双面玖龙双面玖龙)",
        "productArea": "6,296m²",
        "unit": "(m²)",
        "name": "4 东力4号(双面玖龙)",
        "customerArea": "6296",
        "productValues": "15",
        "customerAmount": '￥15200',
        "text": 72,
        "calText": 60,
        "percent": 90
      }, {
        "customerName": "东青2号(A5A)/B瓦",
        "productArea": "7,297m²",
        "unit": "(m²)",
        "name": "3 东青2号(A5A)/B瓦",
        "customerArea": "7297",
        "productValues": "b9",
        "customerAmount": '￥25200',
        "text": 67,
        "calText": 54,
        "percent": 90
      }, {
        "customerName": "东青2号(A5A)/E瓦",
        "productArea": "7,440m²",
        "unit": "(m²)",
        "name": "2 东青2号(A5A)/E瓦",
        "customerArea": "7440",
        "productValues": "i5",
        "customerAmount": '￥35200',
        "text": 55,
        "calText": 55,
        "percent": 90
      }, {
        "customerName": "东经2号(A737T)",
        "productArea": "9,002m²",
        "unit": "(m²)",
        "name": "1 东经2号(A737T)",
        "customerArea": "9002",
        "productValues": "mq",
        "customerAmount": '￥65200',
        "text": 44,
        "calText": 44,
        "percent": 90 // 该值的大小会影响进度条的长度，若是100或者100 的倍数则进度条会到底
      }]
    },
    yAxis: [{
      type: "category",
      axisTick: "none",
      axisLine: "none",
      num: 0,
      axisLabel: {
        verticalAlign: "bottom",
        align: "left",
        padding: [-6, 8, 15, 10],
        textStyle: {
          color: "#fff",
          fontSize: 15,
        }
      },
    }, {
      type: "category",
      axisTick: "none",
      axisLine: "none",
      num: 1,
      axisLabel: {
        show: true,
        verticalAlign: "bottom",
        align: "left",
        padding: [0, 8, 15, 0],
        textStyle: {
          color: "#fff",
          fontSize: "16",
          align: 'left'
        },
        formatter: '{x|{value}}',
        rich: {
          x: {
            "width": 60,
            "align": "right",
            "fontSize": 14,
            "color": "#C8F8FD"
          }
        },
      },
    }, {
      num: 2,
      type: "category",
      axisTick: "none",
      axisLine: "none",
      axisLabel: {
        show: true,
        verticalAlign: "top",
        align: "left",
        padding: [-8, 8, 15, 0],
        formatter: '{x|{value}}',
        rich: {
          "x": {
            "width": 60,
            "align": "right",
            "fontSize": 14,
            "color": "#909399"
          }
        },
      },
    }],
    series: [{
      num: 0,
      name: "值",
      type: "bar",
      encode: {
        x: "calText",
        y: "name"
      },
      barWidth: 6,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: '#2A84CF'
          }, {
            offset: 1,
            color: '#03FECD'
          }]),
          barBorderRadius: 5
        }
      },
      "z": 3
    }, {
      num: 1,
      name: "外框1",
      type: "bar",
      barGap: "-100%",
      encode: {
        x: "percent",
        y: "calText"
      },
      barWidth: 6,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: "rgba(255, 255, 255, .2)",
          barBorderRadius: 5
        }
      },
      label: {
        width: 100,
        show: true,
        position: "insideTopRight",
        align: "right",
        padding: [-30, 0, 0, 0],
        fontSize: 16,
        formatter: function (val) {
          // console.log(val)
          let percent = val.data.text + '%';
          return `{a| ${percent}}`;
        },
        rich: {
          a: {
            "color": '#C8F8FD'
          }
        }
      },
      "z": 2
    }, {
      num: 2,
      name: "外框",
      type: "bar",
      barGap: "-100%",
      encode: {
        x: "percent",
        y: "productArea"
      },
      barWidth: 6,
      yAxisIndex: 2,
      itemStyle: {
        normal: {
          color: "rgba(255, 255, 255, .2)",
          opacity: 1,
          barBorderRadius: 5
        }
      },
      "z": 1
    }]
  }