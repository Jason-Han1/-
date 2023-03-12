option = {
  title: {
    text: "代表建议",
    x: "center",
    bottom: "5%",
    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000"
    }
  },
  color: ["#409eff"],
  series: [
        {
      name: "",
      type: "pie", 
      center: ["40%", "50%"],
      radius: ["30%", "55%"],
      startAngle: 180,
      silent: true,
      label: {
        position: "center",
        formatter: function(params) {
            return "共" + params.value + "件";
        },
        fontWeight: "bold",
        fontSize: 16,
        color: '#666'
      },
      labelLine: {
        show: false,
      },
       data: [
        {
          name: "类型1",
          value: 284
        },
      ]
    },
    {
      name: "",
      type: "pie", 
      center: ["40%", "50%"],
      radius: ["30%", "55%"],
      startAngle: 180,
      label: {
        formatter: function(params) {
            return params.value + "件\n" + params.percent + "%";
        },
        fontSize: 14,
        color: '#666'
      },
      labelLine: {
        length: 40,
        minTurnAngle: 0
      },
      data: [
        {
          name: "类型1",
          value: 284
        },
      ]
    },
  ],
};