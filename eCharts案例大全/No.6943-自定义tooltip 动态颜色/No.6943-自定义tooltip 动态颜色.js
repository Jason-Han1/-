option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
            // show: false
        },
        textStyle: {
          color: "#D7E3FF"
        },
        backgroundColor:"#0F1225",
        padding: [10, 18, 20, 12],
        formatter: function (obj) {
            var str='';
            str='<div style="font-size: 12px;"><p style="color:#8DA2D3;lineHeight:18px;height:18px;">'+obj[0].name+'</p>';
            obj.map(item=>{
                let subStr = "<div style='lineHeight:22px;height:24px;'><div style='display:inline-block;width:5px;height:5px;margin-right:6px;background:"+item.color+";border-radius:50%;margin-bottom:2px;'></div>"+item.seriesName+"："+item.value+"</div>";
                str+=subStr;
            });
             str += "</div>";
            return  str;
        },
    },
    backgroundColor: "#ffffff",
    legend: {
        data: ['超上限报警', '超上上限报警', '超下限报警', '超下下限报警'],
        icon:"circle",
        itemGap: 24,
        itemWidth: 10,
        itemHeight: 10,
        icon: "circle",
        orient: "horizontal",
        right:10,
        textStyle: {
          color: "#5D6C8E",
          fontSize: 14,
          padding: [0 ,0 ,0,6],
          fontFamily: "SourceHanSansCN-Regular"
          // lineHeight: 30
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        // show: true,
        borderColor:"#F3F5F7"
    },
    xAxis: [
        {
            type: 'category',
            data: ['温度', '压力', '液位', '有毒气体', '可燃气体'],
            axisLabel: {
                textStyle: {
                    color: '#5D6C8E',
                    fontSize:14,
                },
                 margin:18
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
        }
    ],
    yAxis: [{
                axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color:"#F3F5F7"
            }
        },
        splitNumber: 2
    }

    ],

    color:['#5F9CFE',"#A8CDFF","#F4686D","#FF9A9D"],
    series: [
        {
            name: '超上限报警',
            type: 'bar',
            barWidth: 30,
            stack: '搜索引擎',
            showBackground: true,
            backgroundStyle: {
                color: '#F9FAFD'
            },
            data: [110, 110,110, 734, 1090]
        },
        {
            name: '超上上限报警',
            type: 'bar',
            stack: '搜索引擎',
            barWidth: 30,
            data: [120, 132, 101, 134, 290]
        },
        {
            name: '超下限报警',
            type: 'bar',
            stack: '搜索引擎',
            barWidth: 30,
            data: [60, 72, 71, 74, 190]
        },
        {
            name: '超下下限报警',
            type: 'bar',
            stack: '搜索引擎',
            barWidth: 30,
            data: [62, 82, 91, 84, 109]
        },
        // {
        //     // name: '超上限报警',
        //     // type: 'bar',
        //     // barWidth: 30,
        //     // stack: '搜索引擎',
        //     // data: [620, 732, 701, 734, 1090, 1130, 1120]
        //     type: 'bar',
        //     itemStyle: {
        //         color: 'rgba(0,0,0,0.05)'
        //     },
        //     barGap: '-100%',
        //     barCategoryGap: '40%',
        //     data: [300],
        //     animation: false
        // },
    ]
};