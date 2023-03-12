var symbolIcon = "/asset/get/s/data-1565836233540-7UHP9D1bb.png";

var ringBg = "/asset/get/s/data-1565835657730-Gg-Tn_mWy.png";

let minorityPeople = 70 // 少数民族人数
let hanNationality = 100 - minorityPeople

option = {
    backgroundColor: "#03141c",
    tooltip: {
        trigger: 'item',
        formatter:function (p){
            let dom = `${p.marker} ${p.name} ${p.value}%`
            return dom
        }
    },
    legend: {
          x: "center",
          bottom: "5%",
          orient: "horizontal",
          itemWidth:12,
          itemHeight:12,
          itemGap: 20,
          textStyle: {
            color: "#fff",
          },
    },
    calculable: true,
    xAxis: {
        max: 10,
        show: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        max: 10,
        show: false,
        splitLine: {
            show: false
        }
    },
    series: [
        {
            // name:'少数民族人数',
            type: 'pie',
  
            radius: [80, 120],
            center: ['50%', '50%'],
             data: [
              {
                name: "女性",
                value: 80,
                itemStyle: {
                  color: "#f53468",
                },
                labelLine: {
                  show:false,
                  length:-10,
                  length2:0
                },
                label: {
                  position: "outside",
                  color: "#333333",
                  width: 40,
                  height: 40,
                  backgroundColor: '#ffffff',
                  borderRadius: 50,
                  formatter: '{per|{d}%}',
                  rich: {
                      per: {
                            color: '#333333',
                            align: 'center',
                            verticalAlign: 'middle',
                            fontFamily:'Arial',
                            fontSize: 16,
                            fontWeight:'bold',
                            lineHeight: 40
                        }
                  },
                },
              },
              {
                name: "男性",
                value: 20,
                itemStyle: {
                  color: "#119dff",
                },
                labelLine: {
                  show:false,
                  length:-10,
                  length2:0
                },
                label: {
                  position: "outside",
                  color: "#333333",
                  width: 40,
                  height: 40,
                  backgroundColor: '#ffffff',
                  borderRadius: 50,
                  formatter: '{per|{d}%}',
                  rich: {
                      per: {
                            color: '#333333',
                            align: 'center',
                            verticalAlign: 'middle',
                            fontFamily:'Arial',
                            fontSize: 16,
                            fontWeight:'bold',
                            lineHeight: 40
                        }
                  },
                },
              },
            ],
            emphasis: {
              labelLine: {
                show: false,
              },
            },
        },
      
        
    ]
};