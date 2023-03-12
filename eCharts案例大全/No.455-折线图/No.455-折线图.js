let xLabel = ['1', '2', '3', '4', '5', '6'];
let goToSchool = ['40', '60', '22', '85', '50', '40'];
let goOutSchool = ['20', '50', '12', '65', '30', '60'];

option = {
    backgroundColor: '#0e1c47',
    color: ['#5CFFDC', '#FFD24A', '#FF4A4A', '#4AA2FF'],
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderColor: '#34CEFFBD',
        borderWidth: 2,
        padding: [5, 10],
        formatter: (params) => {
            // console.log('params',params)
            let str = `${params[0].name}月<br/>`;
            //seriesName color value
            for (let i = 0; i < params.length; i++) {
                str =
                    str +
                    `<span style='display:inline-block;margin-right:5px;
                border-radius:10px;width:9px;height:9px;background-color:${params[i].color}'></span>
                ${params[i].seriesName}：<i style='float:right;color:#4AEFED ' >${params[i].value}件</i><br/>`;
            }
            return str;
        },
    },
    legend: {
        align: 'left',
        right: '10%',
        top: '10%',
        type: 'plain',
        textStyle: {
            color: '#7ec7ff',
            fontSize: 16,
        },
        // icon:'rect',
        itemGap: 25,
        itemWidth: 18,
        icon: 'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '10%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            name: '月份',
            nameGap: 10,
            boundaryGap: false,
            nameTextStyle: {
                // ---坐标轴名称样式
                color: '#E2E8EDE8',
                fontSize: 15,
            },
            axisLabel: {
                show: true,
                interval: 0, //横轴信息全部显示
                // rotate:-30,//-30度角倾斜显示
                textStyle: {
                    color: '#E2E8EDE8', // 更改坐标轴文字颜色
                    fontSize: this.screenScale * 15, // 更改坐标轴文字大小
                },
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#379E98AB',
                },
            },
            axisTick: {
                show: false,
            },
            data: xLabel,
        },
    ],
    yAxis: [
        {
            name: '销售额',
            nameTextStyle: {
                color: '#E2E8EDE8',
                fontSize: 16,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                // formatter: "{value}"+this.lineData.unit[0],
                textStyle: {
                    color: '#E2E8EDE8', // 更改坐标轴文字颜色
                    fontSize:  15, // 更改坐标轴文字大小
                },
            },
        },
    ],
    series: [
        {
            name: '食品',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 5,
                },
                borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
                borderColor: '#646ace',
                borderWidth: 2,
            },
            tooltip: {
                show: true,
            },
            data: goToSchool,
        },
        {
            name: '日用品',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 5,
                },
                borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
                borderColor: '#646ace',
                borderWidth: 2,
            },
            tooltip: {
                show: true,
            },
            data: goOutSchool,
        },
    ],
};
let len = 0;
setInterval(() => {
    if (len === xLabel.length) {
        len = 0;
    }
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: len,
    });
    len++;
}, 1000);
