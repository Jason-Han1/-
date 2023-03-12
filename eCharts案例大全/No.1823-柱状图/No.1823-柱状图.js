var uploadedDataURL = "/asset/get/s/data-1631686487010-HZsxRjGvf.png";

let color=["#00ffff","#078dfc"];
let seriesdata=[
                [11, 111, 111, 111, 222],
                [1111, 111, 1111, 1111, 222]
            ]
option = {
        backgroundColor: '#000',
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            lineStyle: {
              color: "#fff",
            },
          },
          formatter: (params) => {
            let text='';
            params.forEach(item=>{ 
              if(item.seriesName!='top'){
                text+=(item.name+':'+item.value+'<br/>')
              }
            })
            return text
          },
          textStyle: {
            align: "left",
          },
        },
        grid: {
          top: "5%",
          left: "5%",
          right: "5%",
          bottom: '5%',
          containLabel: true,
          // show: true,
          // borderColor: "transparent",
          // backgroundColor: "rgba(25, 163, 209,0.08)",
        },
        xAxis: [
          {
            type: "category",
            data: ['1月','二月','三月','四月','五月'],
            axisTick: {
              show: false, // 是否显示坐标轴轴线
            },
            axisLabel: {
              interval: 0,
            },
            splitLine: {
              show: false,
            },
            boundaryGap: true,
            axisLine: {
              //坐标轴轴线相关设置。
              show: true,
              inside: false,
              lineStyle: {
                color: "#0e7675",
              },
            },
          },
        ],

        yAxis: [
          {
            type: "value",
            min: 0,
            splitNumber: 4,
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "rgba(25, 163, 209,0.1)",
                type: "solid",
              },
            },
            show: true,
          },
        ],
        dataZoom: [
          {
            show: false,
            xAxisIndex: [0],
            left: 0,
            bottom: 30,
            start: 1,
            end: 100,
            handleSize: "100%",
            handleStyle: {
              color: "#5B3AAE",
            },
            textStyle: {
              color: "rgba(204,187,225,0.5)",
            },
            fillerColor: "rgba(67,55,160,0.4)",
            borderColor: "rgba(204,187,225,0.5)",
          },
          {
            type: "inside",
            show: true,
            start: 1,
            end: 100,
          },
        ],
        series: [
          {
            type: "bar",
            barMaxWidth: 28,
            barMinHeight: 10,
            zlevel: 10,
            legendHoverLink: true,
            emphasis: {
              show: true,
              itemStyle: {
                color: color[0],
              },
            },
            // barGap: '100%',
            data: seriesdata[0],
            label: {
              show: true,
              width: 14,
              hight: 6,
              padding: [3, 14 / 2],
              formatter: (params) => {
                return "";
              },
              backgroundColor: { image: uploadedDataURL },
              position: [0, -2.5],
              color: "#fff",
            },
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: color[0],
                    },
                    {
                      offset: 1,
                      color: color[0],
                    },
                  ],
                },
              },
            },
          },
          {
            type: "bar",
            barMaxWidth: 28,
            barMinHeight: 10,
            zlevel: 10,
            legendHoverLink: true,
            emphasis: {
              show: true,
              itemStyle: {
                color: color[1],
              },
            },
            // barGap: '100%',
            data: seriesdata[1],
            label: {
              show: true,
              width: 14,
              hight: 6,
              padding: [3, 14 / 2],
              formatter: (params) => {
                return "";
              },
              backgroundColor: { image: uploadedDataURL },
              position: [0, -2.5],
              color: "#fff",
            },
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: color[1],
                    },
                    {
                      offset: 1,
                      color: color[1],
                    },
                  ],
                },
              },
            },
          }
        ],
      }