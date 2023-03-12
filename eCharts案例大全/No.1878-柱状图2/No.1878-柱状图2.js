const seriesData1 = [140, 80, 130, 80, 80,10];
const seriesData2 = [120, 55, 55, 55, 55,80];
const dataName=['成都', '四川', '达州', '遂宁', '乐山','南充'];
// const arr = [...new Set([...seriesData1, ...seriesData2])];
// let newArr = arr.sort(function (a, b) {
//     return b - a;
// });
// const max=newArr[0]+30;
// const maxList = [];
// const dataLength=seriesData1.length;
// for(var i=0;i<dataLength;i++){
//     maxList.push(max)
// }
// console.log(maxList)
option = {
     dataZoom: {
        type: 'inside',
        xAxisIndex: [0, 1],
    },
     tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: false,
            },
          },
          transitionDuration: 0,
          textStyle: {
            align: "left",
          },
        },
    legend: {
        itemWidth: 12,
        itemHeight:12,
        top: 15,
        textStyle: {
            color: '#404040',
            fontSize: '10px',
        },
        itemGap: 15,
    },
    xAxis: [
        {
            data: [0,0,0,0,0,0],
              axisLine: {
            lineStyle: {
                color: '#CED5E1',
            }
        },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
        },
        {
            type: 'category',
            data: dataName,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false, //隐藏X轴刻度
            },
        },
    ],
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#cdd5e2',
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false, //隐藏X轴刻度
        },
    },
    series: [
        {
            data: [0,0,0,0,0,0],
            type: 'bar',
            xAxisIndex:0,
            // silent: false,
            itemStyle: {
                color: 'rgba(206,213,225,0.12)',
            },
            barWidth: 80,
            tooltip: {
                show: false,
            },
            showBackground:true,
            backgroundStyle:{
                color:'rgba(206,213,225,0.12)'
            }
        },
        {
            name: '类目1',
            data: seriesData1,
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                color: '#22D7BB',
                borderRadius:4
            },
            barWidth: 14,
        },
        {
            name: '类目2',
            data: seriesData2,
            type: 'bar',
            xAxisIndex:1,
            itemStyle: {
                color: '#9DF3CC',
                borderRadius:4
            },
            barWidth: 14,
        },
    ],
};
