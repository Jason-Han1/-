option = {
    backgroundColor: '#0c1e55', //背景颜色
    title: {
        text: '大声道', //表头
        x: 'center',
        top: "20",
        textStyle: {
            //文字颜色
            color: '#ffff',
            //字体风格
            fontStyle: 'normal',
            //字体粗细 
            fontWeight: 'bold',
            //字体系列
            fontFamily: 'sans-serif',
            //字体大小
            fontSize: 18

        },
    },
    tooltip: {
        trigger: 'axis',
        //  transitionDuration: 0,
        //   confine: true,
        //   bordeRadius: 51,
        borderWidth: 1, //提示框边框的大小
        borderColor: '#333', //提示框边框的颜色
        backgroundColor: 'rgba(255,255,255,0.9)', //提示框的背景颜色（0.9为透明度）
        textStyle: {
            fontSize: 12, //提示框的字体大小
            color: '#333', //提示框里的字体颜色
            aligin: 'center',

        },
    },
    color: ['red', '#12C3C3', '#FBCD14'], //颜色配置
    legend: {
        data: ['叠翠园', '北岳北'],
        // right:'30',//标签头 居右距离
        bottom: '70',
        // top:'20', //标签头 居上距离
        textStyle: {
            // color: [ '#','#'], // 标签头 提示文字的颜色
            color: '#ffff'
        },
        icon: "circle", //icon 长方形 circle 圆形 arrow箭头型 diamond菱形
        // triangle三角形  emptyDiamond 空心菱形
        //emptyCircle 空心圆型 emptyRectangle 空心长方形 emptyTriangle 空心三角形
    },
    dataZoom: [{
        type: 'slider',
        realtime: true,
        //拖拉
        handleSize: '100%', //滑动条两侧的大小
        start: 0, //开始位置
        end: 50, //结束位置
        bottom: 25, //居下的距离
        textStyle: {
            color: '#1bb4f6' // 滑动条的文字颜色
        },
    }],
    grid: {
        left: '3%', //整个曲线居左的距离
        right: '4%', //整个曲线居右左的距离
        bottom: '20%', //整个曲线居下左的距离
        height: '70%', //整个曲线的高
        containLabel: true
    },
    toolbox: {
        show: true,
        feature: {
            // dataZoom: {},
            dataView: {
                readOnly: true
            },
            magicType: {
                type: ['line', 'bar', 'pie']
            },
            restore: {},
            textStyle: {
                color: '#1bb4f6', // 左上角切换的颜色
            },
            // saveAsImage: {}
        }
    },
    optionToContent: function(opt) {
        let axisData = opt.xAxis[0].data; //坐标数据
        let series = opt.series; //折线图数据
        let tdHeads = '<td  style="padding: 0 10px;">时间</td>'; //表头
        let tdBodys = ''; //数据
        series.forEach(function(item) {
            //组装表头
            tdHeads += `<td style="padding: 0 10px">${item.name}</td>`;
        });
        let table = `<table border="1" style="margin-left:50px;border-collapse:collapse;font-size:24px;text-align:center;"><tbody><tr>${tdHeads} </tr>`;
        for (let i = 0, l = axisData.length; i < l; i++) {
            for (let j = 0; j < series.length; j++) {
                //组装表数据
                tdBodys += `<td>${ series[j].data[i]}</td>`;
            }
            table += `<tr><td style="padding: 0 10px">${axisData[i]}</td>${tdBodys}</tr>`;
            tdBodys = '';
        }
        table += '</tbody></table>';
        return table;
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10月1日', '10月2日', '10月3日', '10月4日', '10月5日', '10月6日', '10月7日'],

        axisLine: {
            lineStyle: {
                color: '#BA55D3', //设置X轴的颜色
                width: 1.5, //设置X轴的粗细
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00FF00' //Y轴的数据字体颜色
            },
        },

    },
    yAxis: [{
            name: "亿元", //左侧单位
            nameTextStyle: {
                color: "#ebf8ac" //左侧单位文字
            },
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#FFFF', //设置Y轴的颜色
                    width: 1.5, //设置Y轴的粗细
                }
            },
            axisLabel: {
                show: true,
                //formatter: "{value} %", //左侧单位添加后缀
                textStyle: {

                    color: '#00FF00' //Y轴的数据字体颜色
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#FFC125' //网格线的颜色
                }
            }
        },
        {
            type: "value",
            name: "同比",
            nameTextStyle: {
                color: "red"
            },
            position: "right",
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'red', //设置Y轴的颜色
                    width: 1.5, //设置Y轴的粗细
                }
            },
            axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "red"
                }
            }
        },
    ],
    series: [{
            name: '叠翠园',
            type: 'line',
            smooth: true, //圆滑的曲线
            data: [180, 92, 81, 174, 210, 280, 210],
            symbolSize: 1,
            //  color: '#BA55D3',
            yAxisIndex: 1, //下标以右侧同比数据参考
            lineStyle: {
                width: 5 //改变线条的粗细
            },
             label: {
                        show: true, //是否显示
                        // position: 'top', //位置
                        // distance: 15, //高度
                        // 			color: '#DB5E6A', //颜色
                        // fontWeight: 'bolder', //加粗
                        // fontSize: 20, //字体大小
                    },

        },
        {
            name: '北岳北',
            type: 'line',
            smooth: true,
            data: [340, 382, 391, 334, 390, 390, 410],
            // symbolSize: 1,
            //  label: {
            //             show: true, //是否显示
            //             position: 'top', //位置
            //             distance: 15, //高度
            //             // 			color: '#DB5E6A', //颜色
            //             fontWeight: 'bolder', //加粗
            //             // fontSize: 20, //字体大小
            //         },
        }
    ]
};