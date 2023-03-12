 let dataC1 =[20,30,60,40,50,30];
  let dataC2 =[20,30,60,40,50,30]
   let dataC3 =[20,30,60,40,50,30]
     let xData = ["-1F","1F","2F","3F","4F","5F"];
// for(var i = 0;i<xData.length;i++){
//     dataC1.splice(i,1,{name:xData[i],value:dataC1[i]});
//     dataC2.splice(i,1,{name:xData[i],value:dataC2[i]});
//     dataC3.splice(i,1,{name:xData[i],value:dataC3[i]});
// }
// console.log(dataC1);
// console.log(dataC2);
// console.log(dataC3);

var fontColor = '#30eee9';
option = {
    backgroundColor: 'transparent',
    grid: {
        left: '5%',
        right: '2%',
        top: '10%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //     type: 'shadow',
        //     lineStyle: {
        //         color: '#57617B'
        //     }
        // }
    },
    xAxis: [{
        type: 'category',

        boundaryGap: false,
        axisLabel: {
            // -1f文字颜色
            color: "rgba(67, 121, 253, 1)"
        },
        axisLine: {
            show: true,
            lineStyle: {
                // x轴线颜色
                color: "rgba(17, 52, 131, 1)",
                width: 1
            }
        },
        data:xData
    }],
    yAxis: [{
        show:false,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
        },
            axisTick:{
	            show:false,
	            },  
	            splitLine:{
	            	show:false,
		        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#0a2b52',
                width: 1,
                type: 'solid'
            }
        }
    }],
    series: [{
            name: '',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 1
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0.4,
                            color: "rgba(60, 70, 255, 0)"
                        }, {
                            offset: 1,
                            color: "rgba(25, 125, 240, 1)"
                        }]),
                    }
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data:dataC1
        },
       
    ]
};