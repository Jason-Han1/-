var eachartPiedata = {
    seriesData1: [
      { value: (10.36 / 19.0) * 100, Amount: 10.36, totalAmount: 19.0 },
      { value: (10.36 / 106.92) * 100, Amount: 10.36, totalAmount: 106.92 },
    ],
    seriesData2: [
      { value: 100, Amount: 10.36, totalAmount: 19.0 },
      { value: 100, Amount: 10.36, totalAmount: 106.92 },
    ],
  },

 option = {
        grid: {
          containLabel: true,
          // 显示数据的图表位于当前canvas的坐标轴
          top: 50,
          bottom: 10,
          left: 10,
          right: 10,
        },
        legend:{
          data:[
            {
              name: "已完成",
              itemStyle: {
                color: "#09E3EF",
              },
            },
            {
              name: "总计划",
              itemStyle: {
                color: "#ffc000 ",
              },
            },
          ],
         textStyle: {
            color: "rgba(255, 255, 255, 0.65)",
            fontSize: 12,
          },
          itemWidth: 10,
          itemHeight: 10,
          right: "0",
          top: 0,
        },
        tooltip: {
          trigger: "item",
          // show:false,
          confine: true,
          // <span style="color: #333;font-size: .14rem; font-weight: 600;">'+params.name+
          formatter: function (params) {
            return (
              '<div style="color: #333;"><span style="color: #333;font-size: .14rem; font-weight: 600;">' +
              params.name.replace('(亿元)','') +
              '</span><br/><span style="color: #333;margin-right:.2rem">总计划:</span><span style="color: #5396b9;float: right;">' +
              params.data.totalAmount.toFixed(2) +
              "(亿元)</span>" +
              '</span><br/><span style="color: #333;margin-right:.2rem">已完成:</span><span style="color: #5396b9;float: right;">' +
              params.data.Amount.toFixed(2) +
              "(亿元)</span></div>"
            );
          },
        },
        xAxis: {
          type: "category",
          data: [
            "年度投资计划(亿元)",
            "总投资(亿元)"
          ],
          axisTick: {
            show: false, // 不显示坐标轴刻度线
          },
          axisLine: {
            lineStyle: {
              width: 2,
            },
          },
          axisLabel: {
            show: true,
            interval: 0,
            formatter: function (value) {
              if (value.indexOf("年度投资计划") != -1) {
                return value.substring(0, 6) + "\n" + value.slice(6);
              } else if (value.indexOf("总投资") != -1) {
                return value.substring(0, 3) + "\n" + value.slice(3);
              } else {
                return value;
              }
            },
            textStyle: {
              color: "rgba(255,255,255,0.75)", // X轴文字颜色
              padding: [0, 0, 0, 0],
              fontSize: 12,
            },
          },
        },
        yAxis: {
          type: "value",
          show:false,//不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
          axisTick:{
                show:false//不显示坐标轴刻度线
          },
          axisLine: {
                show: false,//不显示坐标轴线
          },
          axisLabel: {
                show: false,//不显示坐标轴上的文字
          },
        },
        series: [
          {
            name: "已完成",
            type: "bar",
            barGap:'80%',
            barWidth: 20,
            data: eachartPiedata.seriesData1,
            label: {
              show: true,		//开启显示
              position: 'top',	//在上方显示
              textStyle: {	    //数值样式
                color: '#fff',
                fontSize: 14
              },
              formatter:function(params){
                return params.data.Amount.toFixed(2)
              }
            },
            itemStyle: {
              // 柱子颜色渐变
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#09E3EF ", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(9, 227, 239, 0.3)", // 100% 处的颜色
                  },
                ],
                false
              ),
            }
          },
          {
            name: "总计划",
            type: "bar",
            barWidth: 20,
            data: eachartPiedata.seriesData2,
            label: {
              show: true,		//开启显示
              position: 'top',	//在上方显示
              textStyle: {	    //数值样式
                  color: '#fff',
                  fontSize: 14
              },
              formatter:function(params){
                return params.data.totalAmount.toFixed(2)
              }
            },
            itemStyle: {
              // 柱子颜色渐变
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#ffc000 ", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(255,192,0, 0.3)", // 100% 处的颜色
                  },
                ],
                false
              ),
            }
          },
        ],
      };