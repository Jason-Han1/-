let nameData = ['贝店', '拼多多', '京东', '唯品会', '淘宝'];
let valueData = ['127.28', '1297.50', '2240.59', '261.91', '2360.95'];

option = {
    // 图形的背景颜色
    backgroundColor: '#efefef',
    // 图形边距
    grid: {
        left: '6.5%',
        top: '19.5%',
        right: '12%',
        bottom: '10%',
        containLabel: true,
    },
    // 更多的操作
    /*toolbox: {
                    feature: {
                        // 数据视图
                        dataView: {
                            show: true,
                            readOnly: false,
                            backgroundColor:'#ffffff',
                            magicType: {
                                type: ['line', 'bar']
                            }
                        },
                        // 折线图和柱状图互相切换
                        magicType : {
                            show: true,
                            type: ['line', 'bar']
                        },
                        // 还原
                        restore: {
                            show: true
                        },
                        // 保存为图片
                        saveAsImage: {
                            show: true
                        }
                    }
                },*/
    tooltip: {
        trigger: 'axis',
        // 坐标轴指示器，坐标轴触发有效。高亮显示当前鼠标所选取的十字坐标
        axisPointer: {
            type: 'cross', // 默认为直线，可选为：'line' | 'shadow' | 'cross'
            label: {
                // 当前所选取的xy轴字体显示颜色
                backgroundColor: '#6a7985',
                fontSize: 12,
            },
        },
        textStyle: {
            fontSize: '100%',
        },
        formatter: '{a} <br/>{b} ： {c}万元',

        // 自定义鼠标移入提示样式
        /*formatter: v => {
                        return `
                  <div class='u-p-2'>
                    <div class='fz-10'>平台：${v[0].axisValue}</div>
                    <div class='fz-10 u-mt-2'>销售额：${v[0].value}（万元）</div>
                  </div>
                `
                    }*/
    },
    xAxis: {
        type: 'category',
        name: '平台',
        position: 'bottom',
        // 是否两边留白
        boundaryGap: true,
        axisTick: {
            // 是否显示x轴刻度线
            show: true,
            // 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
            alignWithLabel: true,
            // 坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。
            interval: 0,
            // 坐标轴刻度是否朝内，默认朝外。
            inside: false,
            // 坐标轴刻度的长度。
            length: 5,
        },
        // x轴单位说明字体样式
        nameTextStyle: {
            color: '#8e6b1d',
            fontSize: '12',
        },
        // x轴单位字体样式
        axisLabel: {
            textStyle: {
                color: '#d9a033',
                fontSize: '12',
                // width:1
            },
            // 间隔显示，设置为0为全显示，如果x轴数据较多，不推荐设置成0，不然字体会挤在一起
            // interval:0,
            // x轴数据说明倾斜角度
            rotate: 0,
        },
        data: nameData,
        // x轴直线样式
        axisLine: {
            lineStyle: {
                color: '#8e6b1d',
                // width:1
            },
        },
        splitLine: {
            // 是否显示x轴刻度线虚线
            show: false,
            // 虚线样式
            /*lineStyle: {
                            type: 'dashed',
                            color: 'rgba(255,255,255,.2)',
                            width:1
                        }*/
        },
    },
    yAxis: {
        name: '单位（万元）',
        type: 'value',
        scale: true,
        nameGap: 25,
        // y轴单位说明字体样式
        nameTextStyle: {
            color: '#8e6b1d',
            // align:'right',
            // padding:[0,10,0,0],
            fontSize: '12',
        },
        // y轴单位字体样式
        axisLabel: {
            textStyle: {
                color: '#d9a033',
                fontSize: '12',
            },
            // margin: 8
        },
        axisTick: {
            // 是否显示y轴刻度线
            show: false,
        },
        axisLine: {
            // y轴直线样式
            lineStyle: {
                color: '#8e6b1d',
                // width:1
            },
        },
        splitLine: {
            // 是否显示y轴刻度线虚线
            show: false,
            // 虚线样式
            /*lineStyle: {
                            type: 'solid',
                            color: 'rgba(255,255,255,.2)',
                            width:1
                        }*/
        },
    },
    series: {
        name: '线上销售数据',
        type: 'line',
        // 折线是否为圆角过度
        smooth: true,
        stack: '',
        // 每个坐标点显示样式
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#ff9500',
            },
        },
        // 修改的是线下区域的颜色
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                    offset: 0,
                    color: '#3c3f41',
                },
                {
                    offset: 0.25,
                    color: '#906328',
                },
                {
                    offset: 0.5,
                    color: '#cc662c',
                },
                {
                    offset: 0.75,
                    color: '#6f3e59',
                },
                {
                    offset: 1,
                    color: '#9434ad',
                },
            ]),
        },
        // 修改的是线的颜色
        lineStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                // 0% 处的颜色     // 100% 处的颜色
                colorStops: [
                    { offset: 0, color: '#e89100' },
                    { offset: 0.25, color: '#e58e04' },
                    { offset: 0.5, color: '#f0652c' },
                    { offset: 0.75, color: '#ce4469' },
                    { offset: 1, color: '#ae29c9' },
                ],
                global: false, // 缺省为 false
            },
            // 线的宽度
            width: 2,
        },
        // 图例样式，默认空心圆，设为none是实心，还有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        symbol: 'circle',
        data: valueData,
        // 可进行一些特殊的显示，比如强调某个数据
        /*markLine: {
                        symbol: 'none',
                        data: [{
                            name: "销售额最高",
                            xAxis: '淘宝',
                            lineStyle: {
                                color: '#eb6272',
                                type: "dashed",
                                width: 0
                            },
                            label: {
                                show: true, formatter: '淘宝\n销售额最高\n{a|}',
                                align:'center',
                                // 显示的位置坐标
                                distance: [0, 0],
                                fontSize: 14,
                                rich: {
                                    // 可追加图片
                                    a:{ backgroundColor: { image: onlineSale }, width: 20, height: 20 }
                                }
                            }
                        },{
                            name: "销售额最低",
                            xAxis: '贝店',
                            // symbol: 'image://' + onlineSale,
                            symbol: 'circle',
                            symbolSize: 10,
                            lineStyle: {
                                color: '#66cfef',
                                type: "dashed",
                                width: 1
                            },
                            label: {
                                show: true, formatter: '贝店\n销售额最低',
                                fontSize: 14,
                                align:'center',
                                // 显示的位置坐标
                                distance: [0, 0]
                            }
                        }]
                    }*/
    },
};
