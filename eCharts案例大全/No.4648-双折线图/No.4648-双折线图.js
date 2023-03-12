option = {
    tooltip: {
         
        },
        legend: {
          data: ["", ""],
          left: 10
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
		},
		
        axisPointer: {
          link: { xAxisIndex: "all" }
        },
        color: ["#ffb100", "#1435ad"],
        dataZoom: [
          {
            show: true,
            height: 15, //组件高度
            realtime: true,
            bottom: "5px",
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
          },
          {
            type: "inside",
            height: 15, //组件高度
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
          }
        ],
        grid: [
          {
            top: "29px",
            left: "5%",
            right: "5%",
            height: "30%"
          },
          {
            left: "5%",
            right: "5%",
            top: "60%",
            height: "30%"
          }
        ],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: { onZero: true } /*改变y轴颜色*/,
            axisLine: {
              lineStyle: {
                color: "#1982ff",
                width: 1 //这里是为了突出显示加上的
              }
            },
            axisLabel: {
              //字体颜色
              show: true,
              textStyle: {
                color: "#ff0536"
              }
            },
            data: [1,2,3,4,5,6,77,8999,88,777] 
          },
          {
            gridIndex: 1,
            type: "category",
            boundaryGap: false,
            axisLine: { onZero: true },
            data: [1,2,3,4,5,6,77,8999,88,777] /*改变y轴颜色*/,
            axisLine: {
              lineStyle: {
                color: "#1982ff",
                width: 1 //这里是为了突出显示加上的
              }
            },
            axisLabel: {
              //字体颜色
              show: true,
              textStyle: {
                color: "#ff0536"
              }
            },
            position: "top"
          }
        ],
        yAxis: [
          {
            type: "value" /*改变y轴颜色*/,
            axisLine: {
              lineStyle: {
                color: "#1982ff",
                width: 1 //这里是为了突出显示加上的
              }
			},
			

			name: 'that.danf',
			nameLocation: 'center',
			nameGap: 34,
            axisLabel: {
              //字体颜色
              show: true,
              textStyle: {
                color: "#ff0536"
              }
            }
          },
          {
            gridIndex: 1 /*改变y轴颜色*/,
            axisLine: {
              lineStyle: {
                color: "#1982ff",
                width: 1 //这里是为了突出显示加上的
              }
			},
			name:  'that.dans',
			nameLocation: 'center',
			nameGap: 34,
            axisLabel: {
              //字体颜色
              show: true,
              textStyle: {
                color: "#ff0536"
              }
            },
            type: "value",
            inverse: true
          }
        ],
        series: [
          {
            name: "",
            type: "line",
            // barWidth: 10,
            symbolSize: 8,
            hoverAnimation: false,
            data: [1,2,3,4,5,6,77,8999,88,777] 
          },
          {
            name: "",
            type: "line",
            // barWidth: 10,
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: [1,2,3,4,5,6,77,8999,88,777] 
          }
        ]
};