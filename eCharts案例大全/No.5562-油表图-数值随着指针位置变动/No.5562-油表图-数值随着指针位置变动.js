      let fontSize = 20; //字体大小
      let textColor = "#000";
      let nameTextColor = "#000";
      let axisLineColor = "#000";
      let nameColor = "rgba(97, 104, 112,1)";
      let datas={
        dataArr: [
          {
            // value: nowData||26589,
            value: 39376,
            name: "",
          },
        ],
        min:23376,
        max:43161,
        unit: "MW",
      };
      var dataArr = datas.dataArr;
      let nowData=dataArr[0].value;
      let min = datas.min;
      let max = datas.max;
       let splitNumber=max-min;
      let per = (dataArr[0].value - min) / (max - min);
      let unit = datas.unit;
      // let offsetX=(dataArr[0].value/max)*100;
    //   let angle =  180 *(dataArr[0].value-min)/(max-min);
      // angle=30;
    //   let offsetY = 0;
    //   let offsetX = 0;
    //   let radius=120;
    //   if (angle <= 90) {
    //     offsetX = -(radius * (Math.abs(Math.cos(angle))));
    //     offsetY = -radius * (Math.abs(Math.sin(angle)));
    //   }else{
    //     // offsetX = radius * (Math.abs(Math.sin(180-angle)));
    //     // offsetY = -radius *  (Math.abs(Math.cos(180-angle)));
    //     offsetX = radius * (Math.sin(180-angle));
    //     offsetY = radius *  (Math.cos(180-angle));
    //   }
      // let offsetY=120*(Math.sin(angle));
      // let offsetX=120*(Math.cos(angle));
// alert(angle)
    //   console.log(angle,"offsetX=",  offsetX,"offsetY=",  offsetY);
      var color = new echarts.graphic.LinearGradient(
        0,
        0,
        1,
        0,
        [
          {
            offset: 0,
            color: "#5c53d1", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#18c8ff", // 100% 处的颜色
          },
        ],
        false
      );
      var colorSet = [
        [per, color],
        [1, "#413e54"],
      ];
      let startAngle = 180;
      let endAngle = 0;
      let center = ["50%", "63%"];
      option = {
        tooltip: {
          show: false,
        },
        series: [
          {
            type: "gauge",
            radius: "90%",
            startAngle,
            endAngle,
            center,
            pointer: {
              show: false,
            },
            // data: dataArr,
            title: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: colorSet,
                width: 35,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1,
              },
            },
            axisTick: {
              show: true,
              splitNumber: 5,
              length: 8,
            },
            splitLine: {
              length: -8, //刻度节点线长度
              lineStyle: {
                width: 2,
                color: "rgba(255,255,255,.8)",
              }, //刻度节点线
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: 0,
            },
            animationDuration: 4000,
          },
          {
            name: "白色圈刻度",
            type: "gauge",
            radius: "80%",
            startAngle, //刻度起始
            endAngle, //刻度结束
            center,
            min,
            max,
            splitNumber: 1,
            z: 4,
            axisTick: {
              show: false,
            },
            splitLine: {
              length: 16, //刻度节点线长度
              lineStyle: {
                width: 2,
                color: "#018DFF",
              }, //刻度节点线
            },
            axisLabel: {
              formatter: function (v) {
                if (v == min) {
                  return `{min|${min}${unit}\n最小}`;
                } else {
                  return `{max|${max}${unit}\n最大}`;
                }
              },
              rich: {
                min: {
                  // 下右上左
                  padding: [0, 0, 80, -120],
                  color: "#000",
                  fontSize: fontSize,
                  lineHeight: 30,
                },
                max: {
                  // 下右上左
                  padding: [0, -120, 80, 0],
                  color: "#000",
                  fontSize: fontSize,
                  lineHeight: 30,
                },
              },
            }, //刻度节点文字颜色
            pointer: {
              show: false,
            //   width: 8,
            //   length: "90%",
            },
            detail: {
              show: false,
            //   offsetCenter: [offsetX + "%",  offsetY + "%"],
            // //   offsetCenter: ["-15%",  "-110%"],
            //   formatter: function (value) {
            //     return `{a|当前\n${dataArr[0].value}${unit}}`;
            //   },
            //   rich: {
            //     a: {
            //       color: "red",
            //       fontSize,
            //     },
            //   },
              // 中间字体偏移量
              // offsetCenter: ['0%', '0%'],
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: colorSet,
                width: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1,
              },
            },
            data: dataArr,
          },
         {
            name: '内部圈',
            type: 'gauge',
            z: 10,
              center,
            min,
            max,
            splitNumber: splitNumber,
            radius: '120%',
             startAngle, //刻度起始
            endAngle, //刻度结束
            axisLine: {
                show: false,
              lineStyle: {
                color: colorSet,
                // width: 10,
                // shadowOffsetX: 0,
                // shadowOffsetY: 0,
                // opacity: 0,
              },
            },
            
            tooltip: {
                show: false
            },
            axisLabel: {
                show: true,
                // padding:[-70,-90,0,0],
                color:"red",
                formatter:function(v){
                    // console.log("vv",v,"当前数值"+nowData)
                    if(v==nowData){
                        // alert(v)
                        return "当前数值\n"+nowData;
                    }
                }
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false
            },
            title: { //标题
                show: false,
            },
            data: [{
                name: "title",
                value: nowData,
            }],
            itemStyle: {
                normal: {
                    color: 'rgba(145,207,255,1)'
                }
            },
            pointer: {
            show: true,
              width: 8,
              length: "60%",
            },
            animationDuration: 4000,
        },
        ],
      };
     