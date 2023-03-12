var category = ['2021/7/1', '2021/7/2', '2021/7/3', '2021/7/4', '2021/7/5', '2021/7/6', '2021/7/7', '2021/7/8', '2021/7/9', '2021/7/10', '2021/7/11', '2021/7/12', '2021/7/13', '2021/7/14', '2021/7/15', '2021/7/16', '2021/7/17', '2021/7/18', '2021/7/19', '2021/7/20', '2021/7/21', '2021/7/22', '2021/7/23', '2021/7/24', '2021/7/25', '2021/7/26', '2021/7/27', '2021/7/28', '2021/7/29', '2021/7/30'];
var Data1 = [11, 13, 14, 13, 12, 14, 11, 15, 14, 13, 15, 13, 15, 10, 11, 12, 12, 11, 14, 11, 11, 12, 14, 13, 11, 12, 14, 11, 12, 10];
var Data2 = [11, 14, 13, 12, 13, 12, 13, 12, 14, 12, 13, 14, 11, 15, 12, 11, 11, 11, 12, 14, 10, 13, 14, 11, 10, 10, 13, 13, 11, 15];
var Data3 = [13, 11, 13, 12, 11, 13, 13, 13, 13, 14, 14, 11, 13, 12, 11, 13, 12, 13, 12, 11, 14, 11, 11, 11, 14, 15, 12, 14, 11, 13];               
option = {
    title: {
        text: '航行时间柱状图',
        x: 'center',
        y: 0,
        textStyle:{
            color:'#2e3762',
            fontSize:16,
            fontWeight:'normal',
        }
    },
    backgroundColor: '#ffffff',   
    tooltip: {
        trigger: 'axis',
        backgroundColor:'#EAEDF2',
        textStyle:{color :'#6F8DA7'},
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#6F8DA7'
            },
        },
    },
    legend: {
        data: ['停泊', '机动航行','定速航行'],
        textStyle: {
            color: '#6F8DA7'
        },
        top:'5%',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: category,
        axisLine: {
            lineStyle: {
                color: '#000000'
            }
        },
        axisTick:{
            show:false,
        },
        }
    ],
    yAxis: [{
        splitLine: {show: true},
        axisLine: {show:true,
            lineStyle: {
                color: '#000000',
            }
        },
        axisTick:{show:true},
        axisLabel:{
            formatter:'{value}',
        },
        }],
    series: [
        {
            name: '停泊',
            type: 'bar',
            stack: 'a',
            emphasis: {
                focus: 'series'
            },
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 2,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#849EC0'},
                        {offset: 0.2, color: '#849EC0'},
                        {offset: 1, color: '#849EC0'}
                    ]
                )
            }
        },            
            data: Data1
        },
        {
            name: '机动航行',
            type: 'bar',
            stack: 'a',
            emphasis: {
                focus: 'series'
            },
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 2,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#4C6A9F'},
                        {offset: 0.2, color: '#4C6A9F'},
                        {offset: 1, color: '#4C6A9F'}
                    ]
                )
            }
        },            
            data: Data2
        },
        {
            name: '定速航行',
            type: 'bar',
            stack: 'a',
            emphasis: {
                focus: 'series'
            },
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 2,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#C4D7E6'},
                        {offset: 0.2, color: '#C4D7E6'},
                        {offset: 1, color: '#C4D7E6'}
                    ]
                )
            }
        },
            data: Data3
        }
    ]
};