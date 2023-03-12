option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        trigger: "item",
        show: true
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [
        {

            type: "pie",
            radius: [0, 115],
            center: ["50%", "50%"],
            data: [
                {
                    value: 10,
                    name: "PDA采集"
                },
                {
                    value: 5,
                    name: "城管"
                },
                {
                    value: 15,
                    name: "安监"
                },
                {
                    value: 25,
                    name: "视屏分析"
                },
                {
                    value: 20,
                    name: "12345"
                },
            ],
            roseType: "area",
            markPoint: {
                data: []
            },
            itemStyle: {
                normal: {
                  label: {
                        show: true,
                        formatter: " {b}      {d}%",
                      textStyle: {
                            fontSize: 36,
                            color: "#fff"
                        },
                    },
                    labelLine: {
                        show: true
                    }
                },
                
            },
               color: function (params){
              var colorList = [
                ['rgb(57,125,249)','rgb(59,230,254)'],
                 ['rgb(57,125,249)','rgb(59,230,254)'],
                 ['rgb(57,125,249)','rgb(59,230,254)'],
                   ['rgb(57,125,249)','rgb(59,230,254)'],
                     ['rgb(57,125,249)','rgb(59,230,254)'],


            ];
            var index = params.dataIndex;
            if (params.dataIndex >= colorList.length) {
              index = params.dataIndex - colorList.length;
          }
          return new echarts.graphic.LinearGradient(0, 0, 1, 0,
            [{
                    offset: 0,
                    color: colorList[index][0]
                },
                {
                    offset: 1,
                    color: colorList[index][1]
                }
            ]);
          }, 
            tooltip: {
                show: true
            }
        }
    ]
}