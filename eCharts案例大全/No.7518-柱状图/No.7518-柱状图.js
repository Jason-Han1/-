  var iconList = {
      type: "pictorialBar",
      symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABpElEQVRIx7WWT0pcQRDGf6XOwhxAyB3c5BCCQkDcJWEiXiFrl4JLD6BuwogSCIRAIBcIOUEgN8hWV1GY7v5cvO7XNRMXEaYamq5+/ej66quuP0bw2Pmo41Q4ToXNVGBeIBXIhfssTi1S+e5ML3LmLhUmSV15ypAFpTBfCyZgH2OCgQATVRgOZUxCARgcOhk1vtVnGIDXV3oJ7Hh91pC4GQbAjCmw7nXqif/CAEid/rp3m76GANi/1itguylSpcHaxtERw4A4Gnnvy8iCuY8rB3BwownGm9HyDqpjcgcRDOwKtlCNe7oLZF1uVEQA6I9vyQULb6KOjb2Z9D+3PmP8GbW6mxdygIuCldeCgxudFfEhlyHfpwxJQw2Y51oLhmJEJsYFF03w/parAT5CVg7gy1v7DfwYdWuh/vRR6Q/JA4LzJsic4c73soGVEAAGnzFuW/YTPQTHOhSZCb++s3vErBnsU7DqxMAiqyFw4SPOfC/QxMh+4NvUfgE//3l8tihHt2SX3lp7IuVFA/gEzJu1Wu5KFNyUfn9vf4ETxENV6FPxA8bJIxTeqMyla89QAAAAAElFTkSuQmCC",
      symbolSize: [32, 24],
      symbolRotate: 0,
      symbolOffset: [-36, 0],
      symbolBoundingData: 300,
      data: [1, 2, 3],
      zlevel: 100,
      z: 100
  };
option = {
    title: {
        show:false
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['总部招商项目', '全网快消品大单品'],
        align: 'left',
        right: 10,
        left:10,
        textStyle: {
            color: "#E5DFFF"
        },
        selectedMode:false,
        icon:'circle',
        itemWidth: 8,
        itemHeight:8,
        itemGap: 80
    },
    grid: {
        left: 10,
        top:'5%',
        right: '4%',
        bottom: '63%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show:false
    },
    yAxis: {
        type: 'category',
        data: ['下单站点数', '单品上架率', '下单站点数'],
            axisLabel: {
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              margin: 50,
              textStyle: {
                  color: "#E8E8FF",
                  fontSize: 14
              }
          },
        axisTick: {
              //坐标轴刻度相关设置。
              show: false
          },
          axisLine: {
              //坐标线相关设置。
              show: false,
          },
          splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
          }
    },
    itemStyle:{
        barBorderRadius: [0,10,10,0]  
    },
    series: [
        {
            name: '总部招商项目',
            type: 'bar',
            data: [18203, 23489, 29034, 104970],
            barWidth: 8, //柱子宽度
            itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: '#0084FF'
                }, {
                    offset: 1,
                    color: '#05F6FF'
                }]),
                opacity: 1,
            }
            }
        },
        {
            name: '全网快消品大单品',
            type: 'bar',
            barWidth: 8, //柱子宽度
            data: [19325, 23438, 31000, 121594],
                        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: '#FF5A1C'
                }, {
                    offset: 1,
                    color: '#FEE0B5'
                }]),
                opacity: 1,
            }
        }
        },iconList
    ]
};
