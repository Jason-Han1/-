data = [
    {
        value: 32,
        name: '电',
    },
    {
        value: 22,
        name: '光线收发器',
    },
    {
        value: 22,
        name: '光纤跳绳',
    },
    {
        value: 16,
        name: '保洁用品',
    },
    {
        value: 8,
        name: '硬盘录像机',
    },
    {
        value: 15,
        name: '其他类型',
    },
];

let color = ['#FE4664', '#EEAE00', '#FF57BC', '#05CC91', '#32E8F3', '#1C80D5'];

data.forEach((item, index) => {
    data[index].itemStyle = { color: color[index] };
});

option = {
        legend: {
          orient: "vertical",
          show: true,
          left: "60%",
          y: "center",
          icon: "circle",
          itemWidth: 10,
          itemGap: 30,
          padding: [0, 10, 0, 10],
          textStyle: {
            color: "#0CAAE5",
            fontSize: 16,
            lineHeight: 25,
            rich: {
              value: {
                color: "#BCE9FC",
                fontSize: 20,
              },
            },
          },
          formatter: (name) => {
            return (
              "{title|" +
              name +
              "}\n{value|" +
              data.find((item) => {
                return item.name == name;
              }).value +
              " }"
            );
          },
        },
        tooltip: {
          show: true,
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "60%"],
            center: ["30%", "50%"],
            roseType: "radius",
            hoverAnimation: true,
            z: 10,
            itemStyle: {
              normal: {
                borderWidth: 3,
                borderColor: "#000",
              },
            },
            label: {
              position: "center",
              formatter: () => {
                return "{total|1,342} \n总数(次)";
              },
              rich: {
                total: {
                  fontSize: 26,
                  color: "#BCE9FC",
                },
              },

              color: "#32E8F3",
              fontSize: 14,
              lineHeight: 30,
            },
            data: data,
            labelLine: {
              show: false,
            },
          },
        ],
      };
