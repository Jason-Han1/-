var  getname=['广东','广西','湖南','湖北','上海'];
var  getvalue=[600,700,800,900,500];//最新一年最高分
var  getdata=[500,600,700,600,400];//最新一年最低分
var  getxj=[100,100,100,300,100];//最新一年最高分与最低分差值

var  getvalue2=[700,700,750,900,500];//倒数第二年最高分
var  getdata2=[500,600,700,600,400];//倒数第二年最低分
var  getxj2=[200,100,50,300,100];//倒数第二年最高分与最低分差值

var  getvalue3=[600,800,800,900,500];//倒数第三年最高分
var  getdata3=[500,600,700,600,400];//倒数第三年最低分
var  getxj3=[100,200,100,300,100];//倒数第三年最高分与最低分差值

var  sj=['2020','2019','2018'];//年份
option = {
    backgroundColor:'#fff',
    legend: {
        show: true,
        right: '2%',
        y: '1%',
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            color: '#666666',
            fontSize: 14
        },
        data:sj
    },
    grid: {
        top: '10%',
        right: '8%',
        left: '8%',
        bottom: '5%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        extraCssText:'width:280px;height:90px;background:#15405C;opacity:0.9',
        formatter: function(params) {
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '</div>';
            for (var i = 0; i < params.length; i++) {
                    str = '<span style="color:rgba(0, 255, 252, 1);font-size:18px;font-weight:bold">' + params[0].name + '</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#0A79DF;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp'+sj[0]+'录取分数&nbsp&nbsp&nbsp最高分</span>&nbsp<span style="color:rgba(255, 167, 88, 1);">'+getvalue[params[i].dataIndex]+'</span>&nbsp&nbsp&nbsp最低分&nbsp<span style="color:rgba(0, 255, 252, 1);">'+getdata[params[i].dataIndex]+'</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#FFBF64;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp'+sj[0]+'录取分数&nbsp&nbsp&nbsp最高分</span>&nbsp<span style="color:rgba(255, 167, 88, 1);">'+getvalue2[params[i].dataIndex]+'</span>&nbsp&nbsp&nbsp最低分&nbsp<span style="color:rgba(0, 255, 252, 1);">'+getdata2[params[i].dataIndex]+'</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#A48FFF;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp'+sj[0]+'录取分数&nbsp&nbsp&nbsp最高分</span>&nbsp<span style="color:rgba(255, 167, 88, 1);">'+getvalue3[params[i].dataIndex]+'</span>&nbsp&nbsp&nbsp最低分&nbsp<span style="color:rgba(0, 255, 252, 1);">'+getdata3[params[i].dataIndex]+'</span>';
            }
            return str;
        }
    },
    xAxis: [{
        data: getname,
        axisLabel: {
			interval: 0,  
            margin: 10,
            color: '#666666',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#B0C5DB',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        name:'分',
        nameTextStyle: {
            color: '#999999',
            fontSize: 13,
            padding: [0, 0, 0, 30]
        },
        axisLabel: {
            color: '#666666',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle:{
                color:'#CCDBEB',
                opacity:0.5
            }
        }
    }],
	animation: false,
    series: [{
        name: '2020最低分',
        type: 'bar',
        stack:1,
        data: getdata,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color:'transparent',
                barBorderRadius: [5, 5, 5, 5],
            }
        },
    },{
        name: '2020',
        type: 'bar',
        stack:1,
        data: getxj,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#4EA4F3' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#0A79DF' // 100% 处的颜色
                }], false),
                barBorderRadius: [5, 5, 5, 5],
            }
        },
    },{
        name: '2019最低分',
        type: 'bar',
        stack:2,
        data: getdata2,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color:'transparent',
                barBorderRadius: [5, 5, 5, 5],
            }
        },
    },{
        name: '2019',
        type: 'bar',
        stack:2,
        data: getxj2,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FFDB5C' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFBF64' // 100% 处的颜色
                }], false),
                barBorderRadius: [5, 5, 5, 5],
            }
        },
    },{
        name: '2018最低分',
        type: 'bar',
        stack:3,
        data: getdata3,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color:'transparent',
                barBorderRadius: [5, 5, 5, 5],
            }
        },
    },{
        name: '2018',
        type: 'bar',
        stack:3,
        data: getxj3,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#C2B4FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#A48FFF' // 100% 处的颜色
                }], false),
                barBorderRadius: [5, 5, 5, 5],
            }
        },
    }]
};