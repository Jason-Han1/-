var uploadedDataURL = "/asset/get/s/data-1602667300728-ALVbYCu0E.json";


$.ajax({
    type: "get",
    url: uploadedDataURL,
    dataType: "json",
    success: function(res) {
        setData(res.result)


    },
    error: function(err) {
        console.log("获取数据失败!")
    }
});


/*$.getJSON(uploadedDataURL, function(geoJson) {
    setData(geoJson.result);
    

console.log(geoJson)
})*/


let Hours = [],
    inFlow = [],
    innerFlow = [],
    outFlow = []

function setData(data) {
    for (let i = 0; i < data.length; i++) {
        data[i].Hours = timeConvert(data[i].recordTime);
        Hours.push(data[i].Hours)
        inFlow.push(data[i].inFlow)
        innerFlow.push(data[i].innerFlow)
        outFlow.push(data[i].outFlow)
    }

    setOption()
    console.log(inFlow)

}

function timeConvert(timestamp) { //YYYY-MM-DD hh:mm:ss   timestamp:时间戳
    timestamp = timestamp + '';
    timestamp = timestamp.length == 10 ? timestamp * 1000 : timestamp;
    let date = new Date(timestamp);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return d + '日 ' + h + ':' + minute + ':' + second;
    // return y + '-' + m + '-' + d +' '+ h +':'+ minute +':' + second;

}

function setOption() {
    option = {
        backgroundColor: '#021228',
        title: {
            text: '流量 （Mbps/Mpps）',
            textStyle: {
                fontSize: 12,
                fontWeight: 'normal',
                color: '#99c8e7' //标题颜色
            },
            left: '0%',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985',
                },
            }
        },


        grid: {
            left: '5px',
            top: '25px',
            right: '20px',
            bottom: '30px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#033e59',
                    width: 0.5, //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#99c8e7',
                    fontSize: 12,
                },
                formatter: function(value) {
                    let ret = "";
                    let temp1 = value.substring(0, 3) + "\n";
                    let temp2 = value.substring(3, 12);
                    ret = temp1 + temp2; //凭借最终的字符串

                    return ret;

                },
            },
            data: Hours
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#033e59',
                    width: 1, //这里是为了突出显示加上的
                }
            },
            axisLabel: {

                show: true,
                textStyle: {
                    color: '#99c8e7' //字体颜色
                }
            },
            splitLine: { //保留网格线
                show: true,
                lineStyle: { //y轴网格线设置
                    color: '#105b8a',
                    width: 1,
                    type: 'solid'
                }
            },
        },
        dataZoom: [{
            type:'slider',
            start: 0,
            end: 10,
            height: 20,
            backgroundColor:'rgba(2,96,171,0.5)',
            dataBackground:{
                lineStyle:{
                    color:'#fff9c1',
                    width:1
                }
            },
            fillerColor:'rgba(53,204,251,0.2)',
            borderColor: 'rgba(53,204,251,0.9)',
            //handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#a0f1fb',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            textStyle:{
                color:"#fff"
            },
            bottom:5
        }],
        series: [

            {
                name: '流入流量',
                type: 'line',
                smooth: true,
                symbol: "none", //去掉折线点

                itemStyle: {
                    color: '#1cccff',
                    emphasis: {
                        color: '#1cccff',


                    }
                },

                lineStyle: { // 系列级个性化折线样式
                    width: 1,
                    type: 'solid',
                    color: "#1cccff"
                },
                areaStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(28,204,255,0.5)' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: 'rgba(28,204,255,0.3)' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: 'transparent' // 100% 处的颜色
                        }]), //背景渐变色

                    },

                },
                data: inFlow,
            },
            {
                name: '流出流量',
                type: 'line',
                smooth: true,
                symbol: "none", //去掉折线点

                itemStyle: {
                    color: '#9c27b0',
                    emphasis: {
                        color: '#9c27b0',


                    }
                },

                lineStyle: { // 系列级个性化折线样式
                    width: 1,
                    type: 'solid',
                    color: "#9c27b0"
                },
                areaStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(156,39,176,0.5)' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: 'rgba(156,39,176,0.3)' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: 'transparent' // 100% 处的颜色
                        }]), //背景渐变色

                    },

                },
                data: outFlow,
            },
            {
                name: '内部流量',
                type: 'line',
                smooth: true,
                symbol: "none", //去掉折线点

                itemStyle: {
                    color: '#0027ff',
                    emphasis: {
                        color: '#0027ff',


                    }
                },
                lineStyle: { // 系列级个性化折线样式
                    width: 1,
                    type: 'solid',
                    color: "#0027ff"
                },
                areaStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,39,255,0.5)' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,39,255,0.3)' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: 'transparent' // 100% 处的颜色
                        }]), //背景渐变色

                    },

                },
                data: innerFlow,
            },
        ]
    };
    myChart.setOption(option);
}