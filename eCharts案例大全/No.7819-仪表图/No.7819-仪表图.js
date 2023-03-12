// 先声明一下，这个仪表图是原作者在我镜像圆点饼图作品下修改的#4版本
// 由于和标题镜像圆点饼图不符，再加上有越来越多的人的关注#4版本的仪表图
// 所以我单独创建了一个仪表图作品
// 我没有对原作者的代码做任何的修改，仅仅作为代码的搬运工
// 原作者：https://gallery.echartsjs.com/explore.html?u=obd-oNY2jGb5fA5LnaflR-Sl_Oq8SzBANCp#sort=rank~timeframe=all~author=all
// 镜像圆点饼图：https://gallery.echartsjs.com/editor.html?c=xCCPKm1NLI&v=5
// 在镜像圆点饼图作品下，切换版本#4，即可看到原作者作出的修改

var dataArr = 10;
var colorSet = {
    color: '#409EFF'
};
option = {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}KM"
    },

    series: [{
            name: "内部进度条",
            type: "gauge",
            // center: ['20%', '50%'],
            radius: '40%',

            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / 100, colorSet.color],
                        [1, "#409EFF"]
                    ],
                    width: 8
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                formatter: function(value) {
                    if (value !== 0) {
                        var num = Math.round(value ) ;
                        return parseInt(num).toFixed(0)+"%";
                    } else {
                        return 0;
                    }
                },
                offsetCenter: [0, 82],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 18,
                    fontWeight: '700',
                    color: colorSet.color
                }
            },
            title: { //标题
                show: true,
                offsetCenter: [0, 46], // x, y，单位px
                textStyle: {
                    color: "#fff",
                    fontSize: 14, //表盘上的标题文字大小
                    fontWeight: 400,
                    fontFamily: 'PingFangSC'
                }
            },
            data: [{
                name: "title",
                value: dataArr,
            }],
            pointer: {
                show: true,
                length: '75%',
                radius: '20%',
                width: 10, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '50%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#409EFF',
                distance: 25,
                formatter: function(v) {
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '10':
                            return '10';
                        case '20':
                            return '20';
                        case '30':
                            return '30';
                        case '40':
                            return '40';
                        case '50':
                            return '50';
                        case '60':
                            return '60';
                        case '70':
                            return '70';
                        case '80':
                            return '80';
                        case '90':
                            return '90';
                        case '100':
                            return '100';
                    }
                }
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: colorSet.color, //用颜色渐变函数不起作用
                    width: 1,
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: colorSet.color, //用颜色渐变函数不起作用
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
    ]
};