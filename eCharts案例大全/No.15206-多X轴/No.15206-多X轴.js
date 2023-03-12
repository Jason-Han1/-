app.title = '3 Y axis demo for OiQ ';

var colors = ['#d73435', '#f5317f', '#d75000','#ffbf00','#0e77ca','#6252cd','#00924c'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['Mbps','count','count']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['01:00','02:00','03:00','04:00','05:00','06:00'
            ,'07:00','08:00','09:00','10:00','11:00','12:00']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Mbps',
            min: 0,
            max: 230,
            position: 'left',
            nameLocation:"middle",
            axisLine: {
                lineStyle: {
                    color: "#6252cd"
                }
            },
            axisLabel: {
                formatter: '{value} Mbps'
            }
        },
        {
            type: 'value',
            name: 'count',
            min: 0,
            max: 150,
            position: 'left',
            offset: 80,
            nameGap:-30,
            nameLocation:"middle",
            axisLine: {
                lineStyle: {
                    color:"#f5317f"
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: 'ms',
            min: 0,
            max: 1000,
            position: 'right',
            nameLocation:"middle",
            axisLine: {
                lineStyle: {
                    color: "#00924c"
                }
            },
            axisLabel: {
                formatter: '{value} ms'
            }
        }
    ],
    series: [
        {
            name:'5G WLAN Bandwidth',
            type:'line',
            yAxisIndex: 0,
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'5G WLAN Traffic Used',
            type:'line',
            yAxisIndex: 0,
            data:[5.6, 1.9, 8.0, 20.4, 18.7, 50.7, 185.6, 200.2, 50.7, 10.8, 16.0, 5.3]
        },
        {
            name:'2.4G WLAN Bandwidth',
            type:'line',
            yAxisIndex: 0,
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'2.4G WLAN Traffic Used',
            type:'line',
            yAxisIndex: 0,
            data:[4.6, 10.9, 19.0, 30.4, 38.7, 100.7, 195.6, 212.2, 88.7, 28.8, 26.0, 20.3]
        },
        {
            name:'Roams',
            type:'line',
            yAxisIndex: 1,
            data:[30,43,45,63,75,86,89,90,92,93,95,100]
        },
        {
            name:'Band Steers',
            type:'line',
            yAxisIndex: 1,
            data:[19,30,48,50,60,70,75,80,83,88,98,135]
        },
        {
            name:'',
            type:'line',
            yAxisIndex: 2,
            data:[500,689,846,573,492,674,500,467,674,973,285,985]
        }
    ]
};
