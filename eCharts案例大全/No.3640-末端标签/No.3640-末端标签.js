function hexToRgba(hex, opacity) {
    return (
        'rgba(' +
        parseInt('0x' + hex.slice(1, 3)) +
        ',' +
        parseInt('0x' + hex.slice(3, 5)) +
        ',' +
        parseInt('0x' + hex.slice(5, 7)) +
        ',' +
        opacity +
        ')'
    );
}
backgroundColor = 'rgba(0,0,0,1)';
chartdata = [
    [1, 8, 5, 6],
    [6, 7, 7, 4],
    [3, 9, 1, 9],
];
categoryData = [2010, 2020, 2019, 2018];
nameArr = ['原煤', '天然气', '原油', '原煤', '天然气', '原油'];
linecolor = ['#3ffe68', '#ffe484', '#32deff', '#eb370a', '#a8eb0a', '#0aebeb', '#0a59eb'];
symbolSize = [50, 30];
areacolor = 'transparent';
labelbg = '';
linewidth = 2;
value = {
    fontSize: 16,
    color: '#fff',
};
date = {
    fontSize: 12,
    color: '#fff',
};
smooth = true;
showSymbol = true;
let color = linecolor;
let serieslist = [];
chartdata.forEach((item, index) => {
    serieslist.push({
        name: nameArr[index],
        type: 'line',
        smooth: smooth,
        showSymbol: showSymbol,
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
            color: (params) => {
                if (params.dataIndex == item.length - 1) {
                    return {
                        type: 'radial',
                        colorStops: [
                            {
                                offset: 0,
                                color: '#fff',
                            },
                            {
                                offset: 0.4,
                                color: '#fff',
                            },
                            {
                                offset: 0.4,
                                color: color[index],
                            },
                            {
                                offset: 1,
                                color: color[index],
                            },
                        ],
                    };
                } else {
                    return 'transparent';
                }
            },
            // borderColor: (params)=>{
            //   console.log(params);
            //   if(params.dataIndex==(item.length-1)){
            //     return color[index]
            //   }else{
            //     return 'transparent'
            //   };
            // },
            // borderWidth: 2,
        },
        areaStyle: {
            color: areacolor || hexToRgba(color[index], 0.3),
        },
        // 末端label(5.0版本以上支持)
        // endLabel: {
        //   show: true,
        //   formatter: "{c}",
        //   color: 'inherit',
        //   width: 40,
        //   height: 20,
        //   // distance: 0,
        //   offset: [20, 0],
        //   align: "center",
        //   lineHeight: 20,
        //   borderRadius: 2,
        //   // borderColor: "#fff",
        //   // borderWidth: 0.1,
        //   fontSize: 16,
        //   backgroundColor: labelbg||hexToRgba(color[index],0.5),
        // },
        label: {
            show: true,
            formatter: (params) => {
                if (params.dataIndex == item.length - 1) {
                    return '{kong|' + params.value + '}';
                } else {
                    return '';
                }
            },
            color: '#fff',
            align: 'center',
            lineHeight: 24,
            borderRadius: 2,
            fontSize: 16,
            backgroundColor: labelbg || hexToRgba(color[index], 0.5),
            rich: {
                kong: {
                    padding: [2, 10],
                    color: '#fff',
                    fontSize: 16,
                },
            },
        },
        labelLayout: {
            moveOverlap: 'shiftY',
        },
        lineStyle: {
            color: color[index],
            width: linewidth,
        },
        data: item,
    });
});
option = {
    backgroundColor: backgroundColor,
    color: color,
    tooltip: {
        show: true,
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'dashed',
                color: '#fff',
            },
        },
        textStyle: {
            align: 'left',
        },
    },
    grid: {
        top: '5%',
        left: '2%',
        right: '2%',
        bottom: '8%',
        containLabel: true,
        show: true,
        borderColor: 'transparent',
        backgroundColor: 'rgba(25, 163, 209,0.08)',
    },
    xAxis: [
        {
            type: 'category',
            data: categoryData,
            axisTick: {
                show: false, // 是否显示坐标轴轴线
            },
            axisLabel: {
                color: '#fff',
            },
            splitLine: {
                show: false,
            },
            boundaryGap: true,
            axisLine: {
                //坐标轴轴线相关设置。
                show: true,
                inside: false,
                lineStyle: {
                    color: '#0e7675',
                },
            },
        },
    ],

    yAxis: [
        {
            type: 'value',
            splitNumber: 4,
            splitLine: { show: false },
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                show: true,
                formatter: (val) => {
                    return val;
                },
                textStyle: {
                    color: '#fff',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(25, 163, 209,0.1)',
                    type: 'solid',
                },
            },
            show: true,
        },
    ],
    dataZoom: [
        {
            show: false,
            xAxisIndex: [0],
            left: 0,
            bottom: 30,
            start: 1,
            end: 100,
            handleSize: '100%',
            handleStyle: {
                color: '#5B3AAE',
            },
            textStyle: {
                color: 'rgba(204,187,225,0.5)',
            },
            fillerColor: 'rgba(67,55,160,0.4)',
            borderColor: 'rgba(204,187,225,0.5)',
        },
        {
            type: 'inside',
            show: true,
            start: 1,
            end: 100,
        },
    ],
    series: serieslist,
};
