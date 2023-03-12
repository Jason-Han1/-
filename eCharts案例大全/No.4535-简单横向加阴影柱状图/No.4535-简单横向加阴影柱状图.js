var colorBlue = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#155fe7',
                }, {
                    offset: 1,
                    color: '#40b0f6',
                },], false);
var showData={
    yRealData: [70,55,80,],
    yData:[100, 100, 100]
};
var itemStyles={};
option = {
    // backgroundColor: '#000',
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     },
    //     formatter: function(objs, index) {
    //         let obj = objs[0];
    //         return `${obj.name}<br/>${obj.marker}${obj.seriesName} : ${obj.value} 个`;
    //     },
    // },
    grid: {
        top: '10%',
        left: '8%',
        right: '8%',
        bottom: '15%',
        containLabel: true,

    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        boundaryGap: true,
        // inverse: true, //反向
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            
        },
        axisTick: {
            show: false
        },
        data: showData.xData
    },
    series: [
       {
            name: '销售量',
            barWidth: 25,
            type: 'bar',
            barCategoryGap: 1,
            zlevel:2,
            data:  showData.yRealData.map((item)=>{
                            itemStyles = {color: colorBlue,};
                                return{
                                    value: item,
                                    itemStyle: itemStyles,
                                };
                            }),
        },
         {
            barGap: '-100%',
            type: 'bar',
            barWidth: 25,
            barCategoryGap: 2,
            color: '#4f75ad',//单个柱条的背景颜色
            zlevel: 1,
            //底部阴影边框
            //  label: {
            //      normal: {
            //          show: false,
            //          position: 'insideRight'
            //      }
            //  },
             data: showData.yData
         },

    ]
};