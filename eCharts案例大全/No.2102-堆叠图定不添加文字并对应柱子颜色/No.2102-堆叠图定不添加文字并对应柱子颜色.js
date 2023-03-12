data = {
    legend: ['线上开展', '线下开展', '应开展次数'], //图例
    xaxis: ['支部党员大会', '支部委员会', '党小组会', '党课'], //x轴
    yaxis: [
        {
            //y轴
            name: '线上开展',
            data: [100, 130, 30, 334],
        },
        {
            name: '线下开展',
            data: [20, 60, 101, 134],
        },
        {
            name: '应开展次数',
            data: [281.55, 398.35, 214.02, 219.55],
        },
    ],
};
let y = data.xaxis;
let currData = data.yaxis;
let colorData = ['#5d8ff8', '#5bd8a6', '#5d7092', '#f5bd12', '#e8684a', '#6dc7ec'];

option = {
    backgroundColor: 'black',
    legend: {
        bottom: '5%',
        x: 'center', //可设定图例在左、右、居中
        data: data.legend,
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 100,
        textStyle: {
            fontSize: 32,
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'axis',
    },
    color: colorData,
    grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '20%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            // margin: 15,
            interval: 0,
            // borderWidth: 10,
            // borderColor: "#ffffff",
            fontSize: 32,
            color: '#ffffff',
        },
        data: y,
    },
    yAxis: [
        {
            name: '次数',
            nameTextStyle: {
                color: '#FFFFFF',
                fontSize: 32,
                lineHeight: 70,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
            },
            splitLine: {
                lineStyle: {
                    color: '#0C52A2',
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 30,
            },
        },
    ],
    series: [],
};
let len = currData.length;
for (let i = 0; i < len; i++) {
    let item = currData[i];
    let name = item.name;
    let value = item.data;
    let serie = {
        type: 'bar',
        barWidth: 100,
        name: name,
        stack: 1,
        data: value,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'top', //top
                    formatter: function (p) {
                        if(i > 0){
                            const preData = currData[i-1];
                            if(preData.data[p.dataIndex]==0&&p.value==0){
                                return ''
                            }
                            else if(preData.data[p.dataIndex]==0){
                                return p.value;
                            }else if(p.value==0){
                                return "{a|"+preData.data[p.dataIndex]+"}"
                            }else{
                               return p.value > 0 ? "{a|"+preData.data[p.dataIndex]+"}{c|,}{b|"+p.value+"}" : ''; 
                            }
                            
                        }else{
                            return '';
                        }
                    },
                    rich:{
                        a:{
                            color:'#5d8ff8',
                            fontSize:28
                        },
                        b:{
                            color:'#5bd8a6',
                            fontSize:28
                        },
                        c:{
                            color:"#fff",
                            fontSize:28
                        }
                    },
                    textStyle: {
                        //数值样式
                        fontSize: 28
                    },
                }
            }
        },
    };
    if (i == currData.length - 1) {
        serie = {
            type: 'bar',
            name: name,
            data: value,
            barWidth: 80,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            //数值样式
                            fontSize: 28,
                        },
                        formatter: function (p) {
                            return p.value > 0 ? p.value : '';
                        },
                    },
                    color: function (params) {
                        var colorList = ['#E8684A'];
                        return colorList[0];
                    },
                },
            },
        };
    }
    option.series.push(serie);
}
