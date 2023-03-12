var uploadedDataURL = "/asset/get/s/data-1637741754907-6sfhRRjiv.png";
let total=60;
let total_add=120;
let sum=total+total_add;
let kg=0.3
let ljdata =(total/sum)*100;
let newdata = total_add/sum*100;
let max = ljdata+ newdata+kg*2;
var option = {
    backgroundColor: 'transparent',
    yAxis: {
        type: 'category',
        axisLine: {
            show: false, //坐标线
        },
        axisTick: {
            show: false, //小横线
        },
        axisLabel: {
            color: '#999', //坐标轴字颜色
        },
    },

    xAxis: {
        show: false,
        max: max,
    },
    grid: {
        top: '20',
        right: '10',
        left: '20',
        bottom: '0', //图表尺寸大小
    },
    animationDuration: 3000,
    series: [
        // 框
        {
            name: '框',
            type: 'bar',
            barGap: '-100%',
            data: [max],
            barWidth: '30px',
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#39BFE1',
                    borderWidth: 1,
                    barBorderRadius: 0,
                },
            },
            
        },
        // 间隔
        {
            type: 'bar',
            barWidth: '25px',
            barGap: '-92%',
            stack: 'total',
            showBackground: false,
            backgroundStyle: {
                color: 'transparent',
            },
            label: {
                normal: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    color: 'transparent', //每个数据的颜色
                },
            },
            data: [kg],
        },
        {
            type: 'bar',
            barWidth: '25px',
            barGap: '-92%',
            stack: 'total',
            showBackground: false,
            backgroundStyle: {
                color: 'transparent',
            },
          label: {
                normal: {
                    show: true,
                    position: 'insideBottomRight',
                    formatter: (params) => {
                        return total
                    },
                    distance: 0,
                    offset: [-20, -5],
                    color: '#fff',
                    fontSize: 12,
                },
            },
            itemStyle: {
                normal: {
                    color: '#39BFE1', //每个数据的颜色
                },
            },
            data: [ljdata],
        },
        {
            type: 'bar',
            barWidth: '25px',
            stack: 'total',
            showBackground: false,
            backgroundStyle: {
                color: 'transparent',
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideBottomRight',
                    formatter: '新增',
                    distance: 0,
                    offset: [0, -21],
                    color: '#fff',
                    fontSize: 12,
                    padding: [12, 12, 12, 12],
                    backgroundColor: {
                          image: uploadedDataURL,
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: '#FCB128', //每个数据的颜色
                },
            },
            data: [newdata],
        },
         {
            type: 'bar',
            barWidth: '25px',
            stack: 'total',
            showBackground: false,
            backgroundStyle: {
                color: 'transparent',
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideBottomRight',
                    formatter: (params) => {
                        return total_add
                    },
                    distance: 0,
                    offset: [-20, -5],
                    color: '#fff',
                    fontSize: 12,
                },
            },
            itemStyle: {
                normal: {
                    color: 'transparent', //每个数据的颜色
                },
            },
            data: [kg],
        },
    ],
};
