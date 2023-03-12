let datas = {
    yData: [-502.84, 205.97, 332.79, 281.55],
    xData: [
        "2021.01.01",
        "2021.01.02",
        "2021.01.03",
        "2021.01.04",
        "2021.01.05",
        "2021.01.06",
        "2021.01.07",
        "2021.01.08",
        "2021.01.09",
        "2021.01.10",
    ],
    unit: "亿元"
}
let xData = datas.xData;
let yData = datas.yData;
let color = "rgb(121, 238, 255)";
let textColor = "#fff";
let splitLineColor = "rgba(255,255,255,.1)";
let dataArr = [4, 2, 3, 1];
let unit = datas.unit;
let series = [];
let xdata = datas.xData;

function getDataArr(data, index) {
    var newArr = [];
    if (index > 0) {
        let arr = dataArr.slice(0, index);
        let len = arr.reduce((x, y) => x + y);
        for (var j = 1; j <= len; j++) {
            newArr.push('');
        };
    }
    for (var i = 0; i <= dataArr[index]; i++) {
        newArr.push(data);
    }

    return newArr;
}
datas.yData.map((item, index) => {
    let data = getDataArr(item, index);
    // console.log("data", data, );
    let obj = {
        name: '',
        type: 'line',
        // smooth: false, //是否平滑
        // showAllSymbol: false,
        // symbol: 'circle',
        symbolSize: 1,

        emphasis: {
            // focus :'series'
            itemStyle: {
                color: 'rgba(0,0,0,0)',
                borderWidth: 0
            }
        },

        lineStyle: {
            normal: {
                color,
                width: 5
            },
        },
        areaStyle: {

            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgb(81, 203, 216,.5)"
                },
                {
                    offset: 1,
                    color: "rgb(81, 203, 216,.1)"
                }
            ], false),

        },
        itemStyle: {
            color,
        },
        label:{
          show:true  ,
          formatter:(p,i)=>{
              console.log(p,i)
              return "111"
          }
        },
        data: data
    };
    series.push(obj)
})
// console.log("xdata", xdata);

option = {
    backgroundColor: "rgb(48, 160, 199)",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // type: "none",
            //   axis:'y',

        },
    },
    xAxis: [{
        show: true,
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: splitLineColor,

            }
        },
        splitArea: {
            show: false,

        },
        axisLabel: {
            color: textColor,
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: splitLineColor,
            }
        },
        axisTick: {
            show: false
        },
        boundaryGap: true,
        data: xdata,

    }],
    grid: {
        x: '5%',
        y: '5%',
        x2: '5%',
        y2: '5%',
        borderWidth: 1
    },
    yAxis: [{
        type: 'value',
        name: unit,
        nameTextStyle: {
            color: textColor,
            //   fontSize:16
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: splitLineColor,

            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: splitLineColor,
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: textColor,
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series
};