option ={
  color: ["#F05A49", "#2B91E1", "#29AB91"],

  // title: {
  //   show: true,
  //   text: "120%",
  //   x: "center",
  //   y: "center",
  //   textStyle: {
  //     color: "#FFFEFE",
  //     fontSize: 12,
  //   },
  // },
  series: [
    {
      type: "pie",
      radius: "100%",
      center: ["50%", "50%"],
      data: [
        {
          name: "10%\n偏高",
          value: 10,
        },
        {
          name: "20%\n偏低",
          value: 20,
        },
        {
          name: "80%\n正常",
          value: 80,
        },
      ],
      animation: false,
      label: {
        position: "inside",
        alignTo: "none",
        bleedMargin: 5,
      },
    },
  ],
};

