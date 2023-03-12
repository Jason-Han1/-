option ={
    grid: {
        borderWidth: 1,
        borderColor: "#ccc",
        x: 163,
        y: 20,
        x2: 80,
        y2: 80
    },
    tooltip: {
        trigger: "axis"
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            magicType: {
                show: false,
                type: ["line", "bar"]
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    yAxis: [
      {
          
        type: "value",
        boundaryGap: [0, 0.01],
        splitArea: {
            areaStyle: {
                type: "default"
            },
            show: true
        },
        axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
                color: "rgb(79, 88, 104)",
                width: 1
            }
        },
        axisLabel: {
            textStyle: {
                color: "#fff",
                fontSize: 24
            },
            margin: 10,
        },
        splitLine: {
            show: false
        },
        splitNumber: 11,
         splitArea : {show : false}
    }],
    xAxis: [{
        type: "category",
        data: ["类1", "类2", "类3", "类4", "类5", "类6", "类7", "类8", "类9", "类10"],
        axisTick: {
            show: false
        },
        
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgb(79, 88, 104)",
                width: 1
            }
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: "#fff",
                fontSize: 24
            },
            margin: 35,
        },
        splitLine:{
            show:false     
         },
          splitArea : {show : false},
    }],
    series: [{
        name: "",
        type: "bar",
        data: [50,100,150,200, 250, 300, 350, 400,450,500],
        barWidth : 15,
        itemStyle: {
            normal: {
              color: function (params){
                var colorList = [
                  ['rgb(255,198,99)','rgb(236,185,94)'],
                  ['rgb(255,231,99)','rgb(236,218,94)'],
                  ['rgb(249,255,81)','rgb(230,236,76)'],
                  ['rgb(220,255,81)','rgb(201,236,76)'],
                  ['rgb(148,255,95)','rgb(129,236,90)'],
                  ['rgb(95,255,136)','rgb(76,236,131)'],
                  ['rgb(80,255,178)','rgb(61,236,173)'],
                  ['rgb(80,255,249)','rgb(61,236,244)'],
                  ['rgb(0,204,255)','rgb(0,185,250)'],
                  ['rgb(0,186,255)','rgb(0,167,250)'],


              ];
              var index = params.dataIndex;
              if (params.dataIndex >= colorList.length) {
                index = params.dataIndex - colorList.length;
            }
            return new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [{
                      offset: 0,
                      color: colorList[index][0]
                  },
                  {
                      offset: 1,
                      color: colorList[index][1]
                  }
              ]);
            },
                borderWidth: 1,
                barBorderRadius: [0, 2, 2, 0]
            },
             emphasis: {
                            barBorderRadius:[0, 2, 2, 0]
                        },

        },
    }]
    };



