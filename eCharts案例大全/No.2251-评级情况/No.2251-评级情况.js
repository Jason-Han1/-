let dataList = [220, 320, 151];
let colors = ['#008CFF', '#FFC502', '#FF6B5D'];

option = {
    backgroundColor: '#fff',
    grid:{
        left: '3%',
        right: '7%',
        containLabel:true
    },
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    yAxis: [
        {
            inverse: true,
            axisLine: 'none',
            axisTick: 'none',
            axisLabel: {
                margin: 80,
                textStyle: {
                    fontSize: 16,
                    color: '#666',
                    align: 'left',
                },
            },
            data: ['特别感谢', '满意', '不满意'],
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    fontSize: 24,
                    color: '#222222',
                },
            },
            data: dataList,
        },
    ],
    series: [
        {
            type: 'bar',
            barGap: '-100%',
            color: ['red', 'green'],
            barWidth: 14,
            inverse: true,
            zlevel: 99,
            showBackground: true,
            backgroundStyle: {
                color: '#F5F5FC',
                borderRadius: 50,
            },
            data: dataList.map((data, i) => {
                return {
                    value: data,
                    itemStyle: {
                        color: colors[i],
                        borderRadius: 50,
                    },
                    label: {
                        normal: {
                            backgroundColor: colors[i],
                            formatter:(params)=>{
                                let count = dataList.reduce((a,b)=>a+b);
                                let per =( params.value / count * 100).toFixed(1)
                                return `${per} % `
                            }
                        },
                    },
                };
            }),
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [-20, -50],
                    padding: [4,12],
                    lineHeight:32,
                    color:'#fff',
                    fontSize:18,
                    borderRadius:5
                },
            },
        },
        {
            type: 'pictorialBar',
            zlevel: 100,
            symbol: 'circle',
            symbolSize: '16',
            symbolOffset: [50, 0],
            symbolPosition: 'end',
            data: dataList.map((data, i) => {
                return {
                    value: data,
                    itemStyle: {
                        color: '#fff',
                        borderColor: colors[i],
                        borderWidth: 100,
                    },
                };
            }),
        },
    ],
};
