option = {
    // 标题
    // title: {
    //   text: '柱状图', // 主标题
    //   textStyle: {
    //     color: 'red',
    //     fontSize: 20,
    //   },
    //   left: 'center',
    //   subtext: '副标题',
    //   subtextStyle: {
    //     color: 'red',
    //     fontSize: 10,
    //   },
    // },

    // 图例
    // legend: {
    //   show: true,
    //   top: '90%', // 百分比 数值(20) 属性(center)
    //   // right: '10%',
    //   orient: 'vertical', // 布局朝向 从左到右'horizontal'还是从上到下'vertical',
    //   icon: 'circle', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    // },

    // 直角坐标系网格
    // grid: {
    //   left: 0,
    //   right: 0,
    //   top: 0,
    //   bottom: 0,
    //   containLabel: true, // grid 区域是否包含坐标轴的刻度标签
    // },
    tooltip: {
        show: true,
        trigger: 'axis',
        // gridIndex: 1,
        borderColor: '#0DFFFE',
        // backgroundColor: 'rgba(0,3,5,0.60)',
        // formatter: (params) => {
        //   console.log(params);
        //   return `
        //   <div style="color:red;">
        //   ${params[1]?.value}
        //   </div>`;
        // },
    },
    xAxis: {
        type: 'category',
        position: 'top',
        axisLine: { show: false }, // 坐标轴轴线
        axisTick: { show: false }, // 坐标轴刻度
        axisPointer: {
            type: 'none',
        },
        // x坐标轴刻度标签
        axisLabel: {
            show: true,
            // rotate: 70,旋转角度
            color: 'red', // '#ccc'，设置标签颜色
            fontSize: 20,
            margin: -680,
            formatter: (value) => {
                return value.split('').join('\n');
            },
        },
        data: ['永远的神', '小菜鸟', '第一次', 'echarts好玩', '小白', '初级打工人', '西楠'],
    },

    yAxis: [
        {
            type: 'value',
            // name: '数量',
        },
        {
            type: 'value',
            // name: '占比',
        },
    ],
    series: [
        {
            name: '数量', // 图例名称
            barWidth: 40,
            data: [0, 0, 0, 0, 0, 0, 0],
            type: 'bar',
            // yAxisIndex: 0,
        },
        {
            name: '价格', // 图例名称
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 20,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    borderRadius: [0, 0, 6, 6],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 1,
                            color: 'rgba(22, 218, 255, 1)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(54, 255, 234, 1)',
                        },
                        {
                            offset: 0,
                            color: 'rgba(0, 227, 255, 0)',
                        },
                    ]),
                },
            },
        },
        // {
        //   data: [120, 200, 150, 80, 70, 110, 130],
        //   name: '占比',
        //   yAxisIndex: 1, // 使用的轴的index
        //   type: 'line',
        // },
    ],
};
