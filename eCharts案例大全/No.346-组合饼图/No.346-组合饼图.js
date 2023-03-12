 //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
      let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
      let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
      return {
        x: x1,
        y: y1,
      };
    }
option= {
    backgroundColor: "#000911",
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
          triggerOn: "mousemove",
          backgroundColor: "rgba(1,70,86,1)",
          borderColor: "rgba(0,246,255,1)",
          borderWidth: 0.5,
        },
        // 标题
        title: [
            {
              zlevel: 0,
              text: "总数",
              top: 20,
              left: "8%",
              textAlign: "center",
              textStyle: {
                color: "#fff",
                fontSize: 14,
                fontFamily: 'SourceHanSansCN',
                fontWeight: 400,
              },
            },
            {
              zlevel: 0,
              text: "1,481",
              top: 14,
              left: "22%",
              textAlign: "center",
              textStyle: {
                fontSize: 24,
                fontFamily: 'DIN',
                fontWeight: 'bold',
                color: '#19B1FB',
              },
            },
             {
              zlevel: 0,
              text: "件",
              top: 20,
              left: "31%",
              textAlign: "center",
              textStyle: {
                color: "#fff",
                fontSize: 12,
                fontFamily: 'SourceHanSansCN',
                fontWeight: 400,
              },
            },
            {
              zlevel: 0,
              text: "总数",
              subtext: "329",
              top: "46%",
              left: "15%",
              textAlign: "center",
              textStyle: {
                color: "#fff",
                fontSize: 14,
              },
              subtextStyle: {
                  fontSize: 16,
                  fontfamily: 'DIN',
                  fontweight: 'bold',
                  color: '#19B1FB',
                },
            },
            {
              subtext: 'demo1',
              left: "15%",
              top: "78%",
              textAlign: "center",
              subtextStyle: {
                fontSize: 16,
                color: '#fff',
                fontFamily: 'SourceHanSansCN',
                fontWeight: 400,
              },
            },
            {
                zlevel: 0,
                text: "总数",
                subtext: "625",
                top: "46%",
                left: "49%",
                textAlign: "center",
                textStyle: {
                  color: "#fff",
                  fontSize: 14,
                },
                subtextStyle: {
                  fontSize: 16,
                  fontfamily: 'DIN',
                  fontweight: 'bold',
                  color: '#19B1FB',
                },
              },
              {
                subtext: "demo2",
                left: "49%",
                top: "78%",
                color: "#18b0fb",
                textAlign: "center",
                subtextStyle: {
                  fontSize: 16,
                  color: "#fff",
                  fontFamily: 'SourceHanSansCN',
                fontWeight: 400,
                },
              },
              {
                zlevel: 0,
                text: "总数",
                subtext: "589",
                top: "46%",
                left: "83%",
                textAlign: "center",
                textStyle: {
                  color: "#fff",
                  fontSize: 14,
                },
                subtextStyle: {
                  fontSize: 16,
                  fontfamily: 'DIN',
                  fontweight: 'bold',
                  color: '#19B1FB',
                },
              },
              {
                subtext: "demo3",
                left: "83%",
                top: "78%",
                color: "#18b0fb",
                textAlign: "center",
                subtextStyle: {
                  fontSize: 16,
                  color: "#fff",
                  fontFamily: 'SourceHanSansCN',
                fontWeight: 400,
                },
              },
      ],
        color: ["#2be4f9", "#f6bf00", "#fc4849"],

        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
            ["Milk Tea", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ["Matcha Latte", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
          ],
        },
        legend: {
          top: 2,
          x: 'right',
          show: true,
          orient: "horizontal",
          data: ["demo1","demo2","demo3",],
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemGap:  20,
          itemWidth: 15, // 图例图形的宽度
          itemHeight: 10, // 图例图形的高度
        },
        series: [
           // 第一个饼图
          //数据部分圆环
          {
            name: "访问来源",
            type: "pie",
            center: ["16%", "50%"],
            radius: ["40%", "45%"],
            labelLine: {
              show: false,
              length: 30,
            },
            label: {
              show: false,
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: "#030406",
              borderWidth: 2,
            },
            data: [
              { value: 728, name: "demo1" },
              { value: 356, name: "demo2" },
              { value: 265, name: "demo3" },
            ],
          },
          {
            animation: false,
            tooltip: {
              show: false, // 关闭鼠标移上去后显示浮框信息
              trigger: "item",
              confine: true,
            },
            name: "访问来源",
            type: "pie",
            center: ["16%", "50%"],
            radius: ["30%", "40%"],
            itemStyle: {
              normal: { color: "#0d3443" },
            },
            data: [{ value: 1048, name: "" }],
          },
          {
            name: "ring5", //最里层圆环
            type: "custom",
            coordinateSystem: "none",
            renderItem: (params, api) => {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() * 0.16,
                  cy: api.getHeight() * 0.5,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.25,
                  startAngle: (0 * Math.PI) / 180,
                  endAngle: (360 * Math.PI) / 180,
                },
                silent: true,
                style: {
                  stroke: "#1fb2d3",
                  fill: "transparent",
                  lineWidth: 0.5,
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#0d3443",
                    },
                    {
                      offset: 1,
                      color: "#0d3443",
                    },
                  ]),
                },
              };
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#4daffb" },
                { offset: 1, color: "#46d8fa" },
              ]),
            },
            data: [0],
          },
          {
            name: "ring5", //最里层圆环绿点
            type: "custom",
            coordinateSystem: "none",
            zIndex: 9,
            z: 9,
            renderItem: (params, api) => {
              let x0 = api.getWidth() * 0.16;
              let y0 = api.getHeight() * 0.5;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.25;
              let point = getCirlPoint(x0, y0, r, 320);
              return {
                type: "circle",
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 2,
                },
                style: {
                  stroke: "#4DFFFF", //绿
                  fill: "#4DFFFF",
                },
                silent: true,
              };
            },
            data: [0],
          },
            // 第二个饼图
          //数据部分圆环
          {
            name: "访问来源",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["40%", "45%"],
            labelLine: {
              show: false,
              length: 30,
            },
            label: {
              show: false,
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: "#030406",
              borderWidth: 2,
            },
            data: [
              { value: 728, name: "demo1" },
              { value: 356, name: "demo2" },
              { value: 265, name: "demo3" },
            ],
          },
          {
            animation: false,
            tooltip: {
              show: false, // 关闭鼠标移上去后显示浮框信息
              trigger: "item",
              confine: true,
            },
            name: "访问来源",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["30%", "40%"],
            itemStyle: {
              normal: { color: "#0d3443" },
            },
            data: [{ value: 1048, name: "" }],
          },
          {
            name: "ring5", //最里层圆环
            type: "custom",
            coordinateSystem: "none",
            renderItem: (params, api) => {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() * 0.5,
                  cy: api.getHeight() * 0.5,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2)* 0.25,
                  startAngle: (0 * Math.PI) / 180,
                  endAngle: (360 * Math.PI) / 180,
                },
                silent: true,
                style: {
                  stroke: "#1fb2d3",
                  fill: "transparent",
                  lineWidth: 0.5,
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#0d3443",
                    },
                    {
                      offset: 1,
                      color: "#0d3443",
                    },
                  ]),
                },
              };
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#4daffb" },
                { offset: 1, color: "#46d8fa" },
              ]),
            },
            data: [0],
          },
          {
            name: "ring5", //最里层圆环绿点
            type: "custom",
            coordinateSystem: "none",
            zIndex: 9,
            z: 9,
            renderItem: (params, api) => {
              let x0 = api.getWidth() * 0.5;
              let y0 = api.getHeight() * 0.5;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2)* 0.25;
              let point = getCirlPoint(x0, y0, r, 320);
              return {
                type: "circle",
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 2,
                },
                style: {
                  stroke: "#4DFFFF", //绿
                  fill: "#4DFFFF",
                },
                silent: true,
              };
            },
            data: [0],
          },
            // 第三个饼图
          //数据部分圆环
          {
            name: "访问来源",
            type: "pie",
            center: ["84%", "50%"],
            radius: ["40%", "45%"],
            labelLine: {
              show: false,
              length: 30,
            },
            label: {
              show: false,
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: "#030406",
              borderWidth: 2,
            },
            data: [
              { value: 728, name: "demo1" },
              { value: 356, name: "demo2" },
              { value: 265, name: "demo3" },
            ],
          },
          {
            animation: false,
            tooltip: {
              show: false, // 关闭鼠标移上去后显示浮框信息
              trigger: "item",
              confine: true,
            },
            name: "访问来源",
            type: "pie",
            center: ["84%", "50%"],
            radius: ["30%", "40%"],
            itemStyle: {
              normal: { color: "#0d3443" },
            },
            data: [{ value: 1048, name: "" }],
          },
          {
            name: "ring5", //最里层圆环
            type: "custom",
            coordinateSystem: "none",
            renderItem: (params, api) => {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() * 0.84,
                  cy: api.getHeight() * 0.5,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2)* 0.25,
                  startAngle: (0 * Math.PI) / 180,
                  endAngle: (360 * Math.PI) / 180,
                },
                silent: true,
                style: {
                  stroke: "#1fb2d3",
                  fill: "transparent",
                  lineWidth: 0.75,
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#0d3443",
                    },
                    {
                      offset: 1,
                      color: "#0d3443",
                    },
                  ]),
                },
              };
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#4daffb" },
                { offset: 1, color: "#46d8fa" },
              ]),
            },
            data: [0],
          },
          {
            name: "ring5", //最里层圆环绿点
            type: "custom",
            coordinateSystem: "none",
            zIndex: 9,
            z: 9,
            renderItem: (params, api) => {
              let x0 = api.getWidth() * 0.84;
              let y0 = api.getHeight() * 0.5;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) *0.25;
              let point = getCirlPoint(x0, y0, r, 320);
              return {
                type: "circle",
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 2,
                },
                style: {
                  stroke: "#4DFFFF", //绿
                  fill: "#4DFFFF",
                },
                silent: true,
              };
            },
            data: [0],
          },
        ],
      }
