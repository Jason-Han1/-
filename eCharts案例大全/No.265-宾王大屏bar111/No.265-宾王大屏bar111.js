data1 = [{
        name: "本科",
        value: 754
    },
    {
        name: "硕士",
        value: 611
    },
    {
        name: "大专",
        value: 400
    },
    {
        name: "博士",
        value: 200
    }
];
colorList2=[
    {
        c1:"rgba(46, 149, 246, 1)",
        c2:"rgba(26, 85, 145, 1)"
    },
    {
        c1:"rgba(249, 203, 25, 1)",
        c2:"rgba(116, 92, 0, 1)"
    },
    {
        c1:"rgba(0, 175, 121, 1)",
        c2:"rgba(0, 95, 66, 1)"
    },
    {
        c1:"rgba(237, 72, 94, 1)",
        c2:"rgba(120, 0, 16, 1)"
    }
    ]
arrName = getArrayValue(data1, "name");
arrValue = getArrayValue(data1, "value");
sumValue =getsumValue(data1,"value");
optionData = getData(data1)

function getsumValue(array ,key){
    let sum=0;
     for(let i=0;i<array.length;i++){
            sum=sum+array[i].value
        }
    return sum;
}

function getArrayValue(array, key) {
    var key = key || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
}


function getData(data1) {
    var res = {
        series: [],
        yAxis: [],
        formatter:[],
    };
    for (let i = 1; i <= data1.length; i++) {
        
        res.series.push({
            name: '学历',
            type: 'pie',
            clockWise: true,
            z: 2,
            hoverAnimation: false,
            radius: [73 - i * 15 + '%', 65 - i * 15 + '%'],
            center: ["30%", "55%"],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: colorList2[i-1].c2,
                        },
                        {
                            offset: 1,
                            color:colorList2[i-1].c1,
                        },
                    ]),
                },
            },
            data: [{
                value: data1[i-1].value,
                name: data1[i-1].name
            }, {
                value: sumValue - data1[i-1].value,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        res.series.push({
            name: '背景线',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: true,
            hoverAnimation: false,
            radius: [71 - i * 15 + '%', 69 - i * 15 + '%'],
            center: ["30%", "55%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
            },
            data: [{
                value: 100,
                itemStyle: {
                    color: "RGB(12,64,128)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        res.yAxis.push(data1[i-1].name);
    }
    return res;
}

option = {
    backgroundColor: 'RGB(8,20,67)',
    grid: {
        top: '16%',
        bottom: '54%',
        left: "50%",
        containLabel: false
    },
    legend: {
      bottom: 6,
      icon: "rect",
      orient: 'vertical',
      itemHeight: 10,
      itemWidth: 10,
      left: 800,
      top: 200,
      show: true,
      data: arrName,
      selectedMode: false,
      textStyle: {
        color: "#96F5F6",
        fontSize: 16
      },
      formatter: function(name) {
          let tarValue
            for (var i = 0; i < 4; i++) {
              if (data1[i].name == name) {
                tarValue = data1[i].value;
                break;
              }
            }
            var p = Math.round(((tarValue / sumValue) * 1000))/10;
            return `${name}     ${p}%`;
          },
      
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        z: 3,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:false,
            interval: 0,
            inside: false,
            textStyle: {
                color: "RGB(78,184,252)",
                fontSize: 25,
            },
        },
        data: optionData.yAxis
    }],
    xAxis: [{
        show: false
    }],
    series: optionData.series
};