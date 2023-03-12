option = {
    backgroundColor: '#ffffff',
    title:{
        text:'地市分布排名',
        left:'left'
    },
    legend: {
        top: 30,
        left:30,
        textStyle: {
            color: '#000000',
        },
        data: ['企业数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },
            data: ['南宁市', '柳州市', '桂林市', '梧州市', '北海市', '防城港市', '钦州市', '贵港市', '玉林市', '百色市','贺州市','河池市','来宾市','崇左市','岑溪市','东兴市','桂平市','北流市','靖西市','宜州市','合山市','凭祥市']
        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['南宁市', '柳州市', '桂林市', '梧州市', '北海市', '防城港市', '钦州市', '贵港市', '玉林市', '百色市','贺州市','河池市','来宾市','崇左市','岑溪市','东兴市','桂平市','北流市','靖西市','宜州市','合山市','凭祥市']
        }

    ],
    series: [{
            name: '企业数',
            type: 'bar',

            itemStyle: {
                normal: {
                    show: true,
                    color: '#388E8E',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [106,109,109,110,119,125,132,132,134,135,150,157,160,166,171,171,178,178,179,185,195,197]
        }]
};