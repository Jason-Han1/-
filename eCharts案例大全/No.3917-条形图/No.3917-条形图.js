
//var getname=<#=GRID60.A1$#>;
//var getseries = ['学院(部)转出比率', '学院(部)转入比率'];
//var getvalue=[<#=GRID60.B1$#>,<#=GRID60.C1$#>];

//源数据
var getname = ["教育", "心理", "政法", "经管", "商学院", "建筑工程", '艺术设计', '士官']
var getseries = ['学院(部)转出比率', '学院(部)转入比率']
var getvalue = [
   [11, 22, 33, 44, 55, 66, 77, 88],
    [55, 44, 66, 25, 44, 13, 22,80]
]

//转换为map操作
var data = getseries.map((item, index) => {
    return {
        name: getseries[index],
        value: getvalue[index]
    }
})

var barWidth = 20
//var imgurl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAADHQAAAAyCAYAAACHgW2RAAAQvklEQVR4Xu3dXYildR0H8N//HBZ39zzncV1Y2W62bhavlroS9qrIq8L1pTLNSCo2DERoQ0HIXoRCaS8KjEXI0kAt03wPQfBCEIRCEKTwIhFKpHYl95znmR3X5swvRjA0X3Z25syZc858nqth5v//vXyeuf3ylNhCz2AwuLDT6TwSER/bQmtblQABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIzILAG6WUK6qqenoWhl3vjGW9BWblftM0V0TEbyJix6zMbE4CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILDFBP6TmdfVdf3Led977gMdmVnatr05Im6JiLnfd97/Ye1HgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAvMvkJk/6/f7N5ZSRvO67VwHHDJze9u2d0bEV+f1BdqLAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjMo0Ap5YnFxcWr9+zZ08zlfvO41MpOTdOcHxGPRMTBed3RXgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAYM4FXux2uxfv3Lnz7/O251x+oaNt2wMR8VhmfmLeXph9CBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAFhP4V2ZeXtf1c/O099wFOhYWFj63vLx8f0T05+lF2YUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECGxhgTdLKd+squq382IwV4GOtm2PZObRiOjOywuyBwECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIPC2QEbEj6uq+mEpZeXnmX7mItCRmdvatr09Iq6d6bdheAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQOBMAvdXVfWNUsrimQ5O899nPtBx8uTJ87rd7gMRcdE0Q5uNAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI9AKeVPEXFpVVX/HE/FyVeZ6UDHYDDY3+l0Ho+ICyZPpyMBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwiQL/KKVcUlXVC5s4w5pbz2ygo2maT0fEQxGxe83bu0iAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjMskCbmVfXdb3ysYiZemYy0DEcDg+XUo5FxLaZ0jYsAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgMG6B5cy8qa7ro+MuvJH1ZirQkZndhYWFWzPzxo1EUZsAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBCYOYE7q6q6rpTy1ixMPjOBjuPHj1c7d+68LzMPzQKsGQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGJCzyzvLz8hXPPPfffE+98lg1nItBx6tSpfaPR6NGI+NRZ7uc4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsLUE/rbyMYm6rl+a5rWnPtAxGAwu7HQ6K2GOvdMMaTYCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgagTeKKVcUVXV01Mz0f8NMtWBjqZproqIX0fEjmkFNBcBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAwlQJLEXF9v9+/Yxqnm8pAR2aWtm1vjohbImIqZ5zGl2kmAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBA4H0CP6+q6oZSymiabKYuLJGZ29u2vSsiVr7O4SFAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIrEsgM588ffr0lXv27GnWVWiMl6cq0NG27d7MfCgiDo5xR6UIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAi+ORqNLd+3a9co0UExNoKNt2wOZ+URE7JsGGDMQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECcydwPDMvq+v6uc3ebCoCHcPh8FAp5d6I6G82iP4ECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAXAu8WUr5VlVV92zmlpse6Gjb9khmHo2I7mZC6E2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsGYGMiJ9UVfWDUsrKzxN/Ni3QkZnb2rY9FhGHJ761hgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBiAerqrqmlLI4aYxNCXQMBoPdnU7n9xFx0aQX1o8AAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAg8I5AZv652+1e1uv1XpukysQDHYPBYH+n0/ljROyf5KJ6ESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQ+RODVUsqhqqpemJTQRAMdTdN8NiIeiIjdk1pQHwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAKgTazLymruuHV3F23UcmFugYDoeHSynHImLbuqdWgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAwfoHlzLypruuj4y/93oobHujIzG7TND8tpXx3o5dRnwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwXoFSyt29Xu/aUspb6631Yfc3NNBx4sSJ/o4dO+7NzEMbtYC6BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIENEHgmM79U1/XrG1A7NizQcerUqX2j0eiJiDiwEYOrSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDYYIGXM/Piuq5fGnefDQl0DIfDg6WUhyJi77gHVo8AAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgMEGBk6WUK6uqemqcPcce6Gia5qqIuCsito9zULUIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABApsksBQR1/f7/TvG1X9sgY7MLG3b/igivh8RY6s7rkXVIUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAisU+AXVVV9p5QyWmed8QQvMnN727YrX+VY+TqHhwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAwlwKZ+eTS0tJXdu/ePVjPguv+kkbbtnsj4tHMvHA9g7hLgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEJgRgb+MRqNDu3btemWt864r0NG27Scz87GI2LfWAdwjQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECMygwPHM/GJd18+uZfY1BzqGw+GhUsp9EVGtpbE7BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEZFzhdSjlcVdU9Z7vHmgIdbdvekJm3RUT3bBs6T4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBCYI4EspdzW6/W+V0rJ1e51VoGOzNzWtu2xiDi82gbOESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgS2gMCDCwsLX9+7d+/CanZddaBjMBjs7nQ6f4iIz6ymsDMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgS0m8Hyn07mk1+u9dqa9VxXoGA6HF5RSHo+I/Wcq6O8ECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgS0s8Gqn07ms1+s9/1EGZwx0tG17UWY+EBHnbWFMqxMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEViVQSllYXl7+Wl3XD3/YhY8MdDRNc21E3B4R21bV0SECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEVgeXMvLmu61s/iOMDAx2Z2W2a5mgp5QhDAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBtQmUUu7u9XrfLqWcfneF9wU6Tpw40T/nnHN+V0r5/NpauUWAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIPAugWcz8/K6rl9/53fvCXQsLi5+fGlp6fGIOICNAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgbAIvR8Ql/X7/rysV/xfoGA6HB0spj0TE+WNrpRABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMA7AoNSyperqnrq7UBH27ZXZ+avImI7IwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgQ0TWIqII/8FUR7Qhy+AhvIAAAAASUVORK5CYII='
var imgurl = 'data:image/png;base64,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'

var imgwidth = myChart.getWidth()*0.96

//柱图body颜色
var colorsBottom = {
    '学院(部)转出比率': new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: "#61E9C1"
        },
        {
            offset: 1,
            //color: "rgba(122, 240, 205, 1)"
            color:"#0BC991"
        }
        ]),

    '学院(部)转入比率': new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: "#4EA4F3"
        },
        {
            offset: 1,
            //color: "rgba(128, 195, 255, 1)"
            color: "#0A79DF"     
        }

        ])
}

//柱图顶  淡色圆圈
var colorsTop = {
    '学院(部)转出比率': 'rgba(122, 240, 205, 1)',
    '学院(部)转入比率': 'rgba(128, 195, 255, 1)',
/*    '学院(部)转出比率': 'rgba(97, 233, 193, 1)',
    '学院(部)转入比率': 'rgba(10, 121, 223, 1)',*/
}
var colorsTip = {
    '学院(部)转出比率': 'rgba(122, 240, 205, .2)',
    '学院(部)转入比率': 'rgba(128, 195, 255, .2)',
/*    '学院(部)转出比率': 'rgba(97, 233, 193, 1)',
    '学院(部)转入比率': 'rgba(10, 121, 223, 1)',*/
}
//线图颜色变量
var colorsTopLine = {
    '学院(部)转出比率': 'orange',
    '学院(部)转入比率': '#db4040',
}
var colorsLineColor = {
    '学院(部)转出比率': 'orange',
    '学院(部)转入比率': '#db4040',
}
//获取legend：对map中的每一个元素，设定一个legend，并衍生出其它的legend
function getLegend(){

    let legendData = []
    
    getseries.map(item=>{

        legendData.push({

            name:item,
            icon:'roundRect',

        })

        legendData.push({

            name:item.replace('学院(部)','')+'均值',
            icon:'line',

        })

    })

    return legendData
}

//未知用途数组
var colors = [

    new echarts.graphic.LinearGradient(0, 1, 0, 0, [{

            offset: 0,
            color: "rgba(10, 121, 223, 1)"

        },
        {

            offset: 1,
            color: "rgba(78, 164, 243, 1)"

        }

    ]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{

            offset: 0,
            color: "rgba(97, 233, 193, 1)"
        },
        {

            offset: 1,
            color: "rgba(11, 201, 145, 1)"
        }

    ]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{

            offset: 0,
            color: "rgba(255, 189, 111, 1)"
        },

        {

            offset: 1,
            color: "rgba(255, 161, 38, 1)"
        }

    ])

]

var option = chuliData(data, barWidth)

function chuliData(data, barWidth) {

    let baseWidth = data.length == 3 ? 0 : 1.5 / data.length
    console.log(data)

    var seriesData = []

    //柱图详细设计
    data.forEach((item, i) => {

        var item = {

            name: data[i].name,
            
            type: 'bar',

            barWidth: barWidth,

            barGap: '50%',

            data: data[i].value,

            itemStyle:{

                normal:{

                    barBorderRadius: [0, 0, 9, 9],
                    color: colorsBottom[data[i].name],
                    
                    //柱图顶显示数据
                    label: {
                    show: true,
                    position: 'top',
                    align: 'center',
                    lineHeight: 28,
                    textStyle: { //数值样式
                        fontSize: 16,
                    },
                    formatter: item => {
                        return `{circle|${item.data}}`
                    },
                    rich: {
                        circle: {
                            width: 28,
                            //柱图顶数字颜色控制
                            backgroundColor: colorsTip[data[i].name],
                            color: '#FFFFFF',
                           // backgroundColor: colorssumbac[data[i].name],
                            color:colorsTop[data[i].name],
                            borderRadius: 3,
                            fontSize: 14,
                            padding: [0, 0, 2, 0]
                        }
                    }

                },
                    

                }

            }

        }

        //柱底圆片
        var itemBottom = { 

            name: data[i].name,

            type: "pictorialBar",

            symbolSize: [barWidth, barWidth * 0.5],

            symbolOffset: [baseWidth * barWidth + (i - 1) * barWidth * 1.5, barWidth * 0.25],

            z: 12,

            silent: true,

            barWidth:20,

            itemStyle: {

                "normal": {

                    color: colorsBottom[item.name]

                }

            },

            data: data[i].value

        }

        //柱顶圆片
        var itemTop = {

            name: data[i].name,

            type: "pictorialBar",

            symbolSize: [barWidth, barWidth * 0.75],

            symbolOffset: [baseWidth * barWidth + (i - 1) * barWidth * 1.5, -barWidth * 0.45],

            z: 12,

            symbolPosition: "end",

            silent: true,

            itemStyle: {

                "normal": {

                    color: colorsTop[item.name]
                }

            },

            data: data[i].value

        }

        //下面顺序会影响标题的颜色
        seriesData.push(item)
        seriesData.push(itemTop)
        //seriesData.push(itemBottom)

    })

    //线图详细设计
    let lineSeries = data.map(item => {
        
        return {
            name: item.name.replace('学院(部)','')+'均值',
            type: 'line',
            xAxisIndex: 0,
            data: item.value,
            lineStyle: {

                type: 'dashed',
                color: 'rgba(0,0,0,0)'

            },
            symbolSize: 0.0000001,
            silent: true,
            label: {
                show: false
            },
            
            //图例颜色控制
            //color: '#FFA387',
            color: colorsTopLine[item.name],
            symbol: 'none',
            markLine: {
                silent: true,
                data: [{
                    type: 'average',
                    name: '平均值'
                }],

                lineStyle: {
                    //color: '#FFA387',
                    color: colorsLineColor[item.name],
                    textStyle: {
                        color: 'red',
                    }
                },
                symbol: 'none',
                label: {
                    show: true,
                    position: 'end',
                    align: 'center',
                    lineHeight: 28,
                    padding: [-10, 0, 0, -50],
                    textStyle: { //数值样式
                        fontSize: 16,
                    },

                    formatter: item => {
                        console.log('markLine', item)
                        return `{circle|${item.value}}\n`
                    },

                    rich: {
                        
                        circle: {
                            //不同线不同颜色
                            //backgroundColor: 'rgba(255, 99, 136, 1)',
                            backgroundColor: colorsTopLine[item.name],
                            color: '#FFFFFF',
                            borderRadius: 3,
                            fontSize: 14,
                            padding: [0, 5, 2, 5]
                        },
                        mb: {
                            padding: [0, 0, 20, 0]
                        }
                    }
                }
            },

            markArea: {
                data: [
                    [{

                        yAxis: 'average',

                        itemStyle: {

                            color: '#FFA387',

                            opacity: 0.1

                        }

                    }, {

                        yAxis: '0'

                    }]

                ],

            }

        }

    })
    
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < lineSeries[0].data.length; i++) {
        sum1 = sum1+lineSeries[0].data[i];
    }
    for (var i = 0; i < lineSeries[1].data.length; i++) {
        sum2 = sum2+lineSeries[1].data[i];
    }
    var average1 = sum1 / lineSeries[0].data.length;
    var average2 = sum2 / lineSeries[1].data.length;
    
    var option = {

        color: colors,
        
        
        //鼠标显示
        tooltip: {

            show:true,

            //trigger: 'item',

            trigger: 'axis',

            axisPointer: {

               type: 'none'

            },
             backgroundColor : 'rgba(21, 64, 92, 0.9)',
             formatter: function(params) {
                var str = ''; //声明一个变量用来存储数据
                str += '<div>' + params[0].name + '</div>';
                for (var i = 0; i < params.length; i++) {
                    
                    str = '<span>' + params[0].name + 
                    '</span></br>'+
                    
                    '<span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#61E9C1;color:#fff;border-radius:30%;"></span>'+
                    '<span>&nbsp&nbsp学院(部)转出比率：</span>'+
                    '<span style="display:block;width:60px;float:right;text-align:right;color:rgba(0, 255, 252, 1);">'+
                    getvalue[0][params[i].dataIndex]+
                    '</span></br>'+
                    
                    '<span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#0A79DF;color:#fff;border-radius:30%;"></span>'+
                    '<span>&nbsp&nbsp学院(部)转入比率：</span>'+
                    '<span style="display:block;width:60px;float:right;text-align:right;color:rgba(0, 255, 252, 1);">'+
                    getvalue[1][params[i].dataIndex]+
                    '</span></br>'+
                    
                    '<span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:orange;color:#fff;border-radius:30%;"></span>'+
                    '<span>&nbsp&nbsp转出比率均值：</span>'+
                    '<span style="display:block;width:60px;float:right;text-align:right;color:rgba(0, 255, 252, 1);">'+
                    average1.toFixed(2)+
                    '</span></br>'+
                    
                    '<span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#db4040;color:#fff;border-radius:30%;"></span>'+
                    '<span>&nbsp&nbsp转入比率均值：</span>'+
                    '<span style="display:block;width:60px;float:right;text-align:right;color:rgba(0, 255, 252, 1);">'+
                    average2.toFixed(2)+
                    '</span></br>';
                }
                return str;
            }
             
        },

        grid: {
        top: '33',
        right: '15',
        left: '50',
        bottom: '55'
    },

        //图标详细设置
        legend: {

            show: true,

            selectedMode: true,

            orient: 'horizontal',
            right: 20,

            itemWidth: 16,

            itemHeight: 16,

            textStyle: {

                //图例文字颜色
                color: 'rgba(102, 102, 102, 1)',
                fontSize: 14

            },

            data: getLegend()

        },

        graphic: {

            type: 'image',

            id: 'logo',

             left: 50,
            right:30,

            bottom: 45,

            z: -1,


            style: {

                image: imgurl,

                width: imgwidth,

                height: 50,

            }

        },

        xAxis: [{

            data: getname,

            axisLabel: {
                formatter: function(value) {

                    var ret = ""; //拼接加\n返回的类目项  

                    var maxLength = 4; //每项显示文字个数  

                    var valLength = value.length; //X轴类目项的文字个数  

                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  

                    if (rowN > 1) //如果类目项的文字大于3,

                    {

                        for (var i = 0; i < rowN; i++) {

                            var temp = ""; //每次截取的字符串  

                            var start = i * maxLength; //开始截取的位置  

                            var end = start + maxLength; //结束截取的位置  

                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                            temp = value.substring(start, end) + "\n";

                            ret += temp; //凭借最终的字符串  

                        }

                        return ret;

                    } else {

                        return value;

                    }

                },

                margin: 20,

                color: '#666666',

                textStyle: {

                    fontSize: 13

                },

                axisLine: {

                    lineStyle: {

                        color: '#B0C5DB',

                    }
                },

                axisTick: {

                    show: false

                },

            },

            axisLine: {

                show: false //不显示x轴

            },

            axisTick: {

                show: false //不显示刻度

            },

            boundaryGap: true,

            splitLine: {

                show: false,

                width: 0.08,

                lineStyle: {

                    type: "solid",

                    color: "#03202E"

                }

            }

        }],

        yAxis: [{name: '%',

        nameTextStyle: {

            color: '#999999',

            fontSize: 13,

            padding: [0, 0, 0, 20]

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

            lineStyle: {

                color: '#CCDBEB',

                type: 'dashed',

                opacity: 0.5

            }
        }

        }],

        series: [...seriesData, ...lineSeries]

    };

    return option

}

// console.log(seriesData)

myChart.setOption(option);

myChart.on('legendselectchanged', function(obj) {

    const selectedList = []

    data.forEach((item, i) => {

        if (obj['selected'][item['name']]) {

            selectedList.push(item)

        }

    })

    var option = chuliData(selectedList, 30)

    myChart.setOption(option);

});
