option = {
    title: {
        text: 'Awesome Chart'
    },
     series: [
          {
            type: "gauge",
            // 大小
            radius: "30%",
            // 图标位置居中
            center: ["50%", "50%"],
            // 圆刻度数
            min: 0,
            max: 360,
            // 0到360是圆形
            startAngle: -270,
            endAngle: 90,
            // 图表的外边框
            axisLine: {
              lineStyle: {
                width: 0,
                color: [
                  [0.2, "#00A8FF"],
                  [0.8, "#00A8FF"],
                  [1, "#00A8FF"],
                ],
              },
            },
            // 指针
            pointer: {
              icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
              length: "10%",
              width: 8,
              offsetCenter: [0, "-40%"],
              itemStyle: {
                color: "red",
              },
            },
            // 刻度长度
            axisTick: {
              distance: 0,
              // 刻度数量，越大越密集
              splitNumber: 12,
              length: 4,
              lineStyle: {
                color: "#00A8FF",
                width: 1,
              },
            },
            // 刻度
            splitLine: {
              distance: 0,
              length: 10,
              lineStyle: {
                color: "auto",
                width: 1,
              },
            },
            axisLabel: {
              color: "auto",
              distance: 5,
              fontSize: 8,
              color: "#fff",
              // 防止360和0重复显示
              formatter: function (value) {
                if (value === 360) {
                    return '';
                }
                return value;
            }
            },
            detail: {
              valueAnimation: true,
              color: "#fff",
              fontSize: 12,
              lineHeight: 16,
              offsetCenter: [0, "8%"],
              formatter: function(value) {
                return value + "°";
              },
            },
            data: [{ value: 260 }],
          },
        ],
};
