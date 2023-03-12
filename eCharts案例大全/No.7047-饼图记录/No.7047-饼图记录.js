var dataStyle = {
        normal: {
          label: {
            show: true,
            color: "#fff",
            fontSize: fontSize(.18),
            position : "outside"
          },
          labelLine: {
            //smooth: 0.2,
            // show: false,
            length: 20,
            length2: 24,
          },
        },
      };
      var colors = ['#67ff95','#f01647','#0197de','#a470fc'];
      function labelShowfun(colors,i){
        return {
            show: true,
            color: function(params){
                console.log(params,111)
            },
            fontSize: fontSize(.15),
            lineHeight: 20,
            formatter: ["{d| {d} }", "{b| {b} }"].join("\n"),
            rich: {
              d: {
                fontSize: fontSize(.18),
                // color: function(params){
                //     console.log(params)
                // },
                color: colors[i]
              },
              b: {
                fontSize: fontSize(.15),
                
                color: "#fff",
              },
            },
          };
      }
      
    
      var placeHolderStyle = {
        normal: {
          color: "rgba(0,0,0,0)",
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
        emphasis: {
          color: "rgba(0,0,0,0)",
        },
      };
      var option = {
        // backgroundColor: '#111',
        title: {
          text: "设备类型及数量",
          left: '4%',
          top: '0',
          textStyle: {
            fontSize: fontSize(.22),
            color: "#00ffff",
            fontWeight: 400
          },
          show: true,
        },
        color: ["#2078d1", "#8a00ec", "#ff00f3", "#fb0065"],
        tooltip: {
          show: true,
          formatter: "{b} <br/> {c} ({d}%)",
        },
        angleAxis: {
          type: "category",
          // z: 10,
          // axisLine: {
          //     color: '#fff',
          //     lineStyle: {
          //         width: 0,
          //         color: '#fff',
          //     }
          // },
        },
        grid:{
            left:'18%',
            right:'0',
            bottom:'1%',
            containLabel:true
        },
        radiusAxis: {
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            color: "#fff",
          },
          axisLine: {
            show: false,
            color: "#fff",
            lineStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              width: 10,
              color: "rgba(28,28,75,.5)",
            },
          },
        },
        polar: {
          center: ["50%", "50%"],
          radius: 80,
        },
        series: [
          {
            name: "Line 1",
            type: "pie",
            clockWise: false,
            radius: [10, 20],
            center: ['50%', '50%'],
            // center: [60, 70],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [
              {
                value: 160,
                name: "",
                itemStyle: placeHolderStyle,
              },
              {
                value: 100,
                name: "防火墙",
                label: labelShowfun(colors,0),
              },
              {
                value: 0,
                name: "",
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: "Line 2",
            type: "pie",
            clockWise: false,
            radius: [30, 40],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [
              {
                value: 190,
                name: "",
                itemStyle: placeHolderStyle,
              },
              {
                value: 70,
                name: "路由器",
                label: labelShowfun(colors,1),
              },
              {
                value: 100,
                name: "",
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: "Line 3",
            type: "pie",
            clockWise: false,
            hoverAnimation: false,
            radius: [40, 50],
            itemStyle: dataStyle,
            center: ['50%', '50%'],
            data: [
              {
                value: 130,
                name: "",
                itemStyle: placeHolderStyle,
              },
              {
                value: 60,
                name: "交换机",
                label: labelShowfun(colors,2),
              },
              {
                value: 170,
                name: "",
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: "Line 4",
            type: "pie",
            clockWise: false,
            hoverAnimation: false,
            radius: [74, 84],
            itemStyle: dataStyle,
            center: ['50%', '50%'],
            data: [
              {
                value: 0,
                name: "",
                itemStyle: placeHolderStyle,
              },
              {
                value: 70,
                name: "负载均衡",
                label: labelShowfun(colors,3),
              },
              {
                value: 230,
                name: "",
                itemStyle: placeHolderStyle,
              },
            ],
          },
    
          {
            type: "bar",
            data: [0],
            coordinateSystem: "polar",
            name: "dom",
            stack: "a",
          },
        ],
      };