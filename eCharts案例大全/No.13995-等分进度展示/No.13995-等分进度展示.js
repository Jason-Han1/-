var equalPartcalc = function(total, alreadyCompleted, equalPart) {
    var data = [];
    var average = Math.floor(total / equalPart * 100) / 100;
    var alreadyLoop = alreadyCompleted / average;
    for (var i = 1; i <= equalPart; i++) {
        if (i <= alreadyLoop) {
            data.push({
                value: average,
                name: "已完成工作",
                label: {
                    position: 'center',
                    fontSize: 18,
                    color: '#63EBFF',
                    fontFamily: 'Silom',
                    formatter: function(params) {
                      return alreadyCompleted + '%'
                    },
                }
            });
        }
        if (i > alreadyLoop && i <= equalPart) {
            data.push({
                value: average,
                name: "未完成工作",
                label: {
                    show: false
                }
            });
        }
    }
    return data;
};

var datas = equalPartcalc(100, 98.3, 50);

option = {
    backgroundColor: "#010219",
    legend: {
        show: false,
        itemGap: 12,
        data: ['已完成工作', '未完成工作']
    },
    series: [{
        name: "工作进度",
        type: "pie",
        radius: ["40%", "60%"],
        center: ["50%", "50%"],
        clockwise: true,
        data: datas,
        color: ["#14A5BB", "#05293D"],
        hoverAnimation: false,
        legendHoverLink: false,
        hoverOffset: 0,
        label: {
            normal: {
                normal: {
                    position: 'center'
                }
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: "#010219"
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
            }
        }
    },{
        value:20,
        name: '占位',
        type: "pie",
        label: {
          normal: {
              position: 'center',
            formatter: '\n月完成率',
            textStyle: {
              color: '#ffffff',
              fontSize: 14
            }
          }
        },
        itemStyle:{
          normal:{
            color: 'rgba(255,255,255,.4)'
          }
        },
    }],

    //backgroundColor: "#fff"
};