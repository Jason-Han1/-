
let xLabel = ['3.26', '3.27', '3.28', '3.29', '3.30', '3.31']
let goToSchool = ["40", "60", "22", "85", "50", "40"]
let goOutSchool = ["20", "50", "12", "65", "30", "60"]

option = {
    backgroundColor: '#0e1c47',
     tooltip: {
          trigger: "axis",
          backgroundColor: "#202630",
          borderColor: "#202630",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          axisPointer: {
            type: "line",
            lineStyle: {
              type: "solid",
            },
          },
          formatter: function (params) {
            return params[0].name + ':<br/>' + params[0].value+'万';
        },
        },
  
    grid: {
        top: '15%',
        left: '10%',
        right: '10%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: '#233653'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#91aac4',
                padding: 16,
                fontSize: 14
            },
            formatter: function(data) {
                return data
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#192a44'
            },
        },
        axisTick: {
            show: false,
        },
        data: xLabel
    }],
    yAxis: [{
        name: '',
        nameTextStyle: {
            color: "#91aac4",
            fontSize: 16,
            padding: 10
        },
        min: 0,
       splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(33, 57, 93,.9)',
                },
            },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#233653"
            }

        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#91aac4',
                padding: 16
            },
            formatter: function(value) {
                if (value === 0) {
                    return value
                }
                return value+'万'
            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '上学',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 8,
        smooth: true,
        lineStyle: {
            normal: {
                width: 2,
                color: "rgba(25,163,223,1)", // 线条颜色
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: "#b7f9ff",
            borderColor: "#2185da",
            borderWidth: 3,
             shadowColor: 'rgba(22, 137, 229)',
             shadowBlur: 14

        },
        tooltip: {
            show: true
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(25,163,223,.3)"


                    },
                    {
                        offset: 1,
                        color: "rgba(25,163,223, 0)"
                    }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: goToSchool
    }]
};

