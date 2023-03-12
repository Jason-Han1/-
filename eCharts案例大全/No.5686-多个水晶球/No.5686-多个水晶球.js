var option = {
    backgroundColor: "#000E1A",
    title: [{
            text: "混凝土拌和站",
            left: "28%",
            top: "32.5%",
            textAlign: "center",
            textStyle: {
                color: "#999B9C",
                fontSize: 16,
            },
        },
        {
            text: "水稳拌和站",
            left: "50%",
            top: "32.5%",
            textAlign: "center",
            textStyle: {
                color: "#999B9C",
                fontSize: 16,
            },
        },
        {
            text: "沥青拌和站",
            left: "72%",
            top: "32.5%",
            textAlign: "center",
            textStyle: {
                color: "#999B9C",
                fontSize: 16,

            },
        },
        {
            text: "张拉延伸量",
            left: "28%",
            top: "63%",
            textAlign: "center",
            textStyle: {
                color: "#999B9C",

                fontSize: 12,

            },
        },
        {
            text: "智能压浆",
            left: "49%",
            top: "63%",
            textAlign: "center",
            textStyle: {
                color: "#999B9C",

                fontSize: 12,

            },
        },
        {
            text: "履约出勤",
            left: "72%",
            top: "63%",
            textAlign: "center",
            textStyle: {
                color: "#999B9C",

                fontSize: 16,

            },
        },
    ],

    series: [{
            type: "liquidFill",

            radius: "20%",
            // 水球颜色
            color: ["#28b2b6"],
            center: ["28%", "21.8%"],
            label: {
                normal: {
                    textStyle: {
                        color: "#28b2b6",
                        insideColor: "#28b2b6",
                        fontSize: 20,
                    },
                },
            },
            backgroundStyle: {
                color: "transparent", //图表的背景颜色
                //borderWidth: '10',//图表的边框宽度
                //borderColor: '#000',//图表的边框颜色
                itemStyle: {
                    shadowBlur: 20, //设置无用
                    shadowColor: "#072F3A", //设置无用
                    opacity: 1, //设置无用
                },
            },
            itemStyle: {
                opacity: 0.5, //波浪的透明度
                shadowBlur: 10, //波浪的阴影范围
                shadowColor: "#072F3A", //阴影颜色
            },
            outline: {
                show: true, //是否显示轮廓 布尔值
                borderDistance: 0, //外部轮廓与图表的距离 数字
                itemStyle: {
                    borderColor: "#28b2b6", //边框的颜色
                    borderWidth: 1, //边框的宽度
                    //shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                    //shadowColor: '#000' //外部轮廓的阴影颜色
                },
            },
            emphasis: {
                itemStyle: {
                    opacity: 1, //鼠标经过波浪颜色的透明度
                },
            },


            data: [0.6, 0.6244, 0.5804, 0.5604, 0.5514],
            amplitude: 4, //振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
            waveLength: "50%", //波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
            backgroundStyle: {
                borderWidth: 2,
                borderColor: "#28b2b6",
                color: "#000f1c", //9EBB29
            },
            direction: "left", //波移动的速度 两个参数  left 从右往左 right 从左往右
            waveAnimation: true, //控制波动画的开关  值是布尔值 false 是关闭动画 true 是开启动画 也是默认值
            animationEasing: "linear", //初始动画
            animationEasingUpdate: "quarticInOut", //数据更新的动画效果
            animationDuration: 3000, //初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更绚丽的初始动画效果
            animationDurationUpdate: 300, //数据更新动画的时长
        },

        {
            type: "liquidFill",

            radius: "20%",
            // 水球颜色
            color: ["#198bdb"],
            center: ["50%", "21.8%"],
            label: {
                normal: {
                    textStyle: {
                        color: "#198bdb",
                        insideColor: "#198bdb",
                        fontSize: 20,
                    },
                },
            },
            backgroundStyle: {
                color: "transparent", //图表的背景颜色

                itemStyle: {
                    shadowBlur: 20, //设置无用
                    shadowColor: "#072F3A", //设置无用
                    opacity: 1, //设置无用
                },
            },
            itemStyle: {
                opacity: 0.5, //波浪的透明度
                shadowBlur: 10, //波浪的阴影范围
                shadowColor: "#072F3A", //阴影颜色
            },
            outline: {
                show: true, //是否显示轮廓 布尔值
                borderDistance: 0, //外部轮廓与图表的距离 数字
                itemStyle: {
                    borderColor: "#198bdb", //边框的颜色
                    borderWidth: 1, //边框的宽度

                },
            },
            emphasis: {
                itemStyle: {
                    opacity: 1, //鼠标经过波浪颜色的透明度
                },
            },

            data: [0.3, 0.3444, 0.3404, 0.3904, 0.3014],
            amplitude: 4, //振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
            waveLength: "50%", //波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
            backgroundStyle: {
                borderWidth: 2,
                borderColor: "#198bdb",
                color: "#000f1c", //9EBB29
            },
            direction: "left", //波移动的速度 两个参数  left 从右往左 right 从左往右
            waveAnimation: true, //控制波动画的开关  值是布尔值 false 是关闭动画 true 是开启动画 也是默认值
            animationEasing: "linear", //初始动画
            animationEasingUpdate: "quarticInOut", //数据更新的动画效果
            animationDuration: 3000, //初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更绚丽的初始动画效果
            animationDurationUpdate: 300, //数据更新动画的时长
        },

        {
            type: "liquidFill",

            radius: "20%",
            // 水球颜色
            color: ["#26d08b"],
            center: ["72%", "21.8%"],
            label: {
                normal: {
                    textStyle: {
                        color: "#26d08b",
                        insideColor: "#26d08b",
                        fontSize: 20,
                    },
                },
            },
            backgroundStyle: {
                color: "transparent", //图表的背景颜色

                itemStyle: {
                    shadowBlur: 20, //设置无用
                    shadowColor: "#072F3A", //设置无用
                    opacity: 1, //设置无用
                },
            },
            itemStyle: {
                opacity: 0.5, //波浪的透明度
                shadowBlur: 10, //波浪的阴影范围
                shadowColor: "#072F3A", //阴影颜色
            },
            outline: {
                show: true, //是否显示轮廓 布尔值
                borderDistance: 0, //外部轮廓与图表的距离 数字
                itemStyle: {
                    borderColor: "#26d08b", //边框的颜色
                    borderWidth: 1, //边框的宽度

                },
            },
            emphasis: {
                itemStyle: {
                    opacity: 1, //鼠标经过波浪颜色的透明度
                },
            },

            data: [0.28, 0.2544, 0.2504, 0.2804, 0.3014],
            amplitude: 4, //振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
            waveLength: "50%", //波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
            backgroundStyle: {
                borderWidth: 2,
                borderColor: "#26d08b",
                color: "#000f1c", //9EBB29
            },
            direction: "left", //波移动的速度 两个参数  left 从右往左 right 从左往右
            waveAnimation: true, //控制波动画的开关  值是布尔值 false 是关闭动画 true 是开启动画 也是默认值
            animationEasing: "linear", //初始动画
            animationEasingUpdate: "quarticInOut", //数据更新的动画效果
            animationDuration: 3000, //初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更绚丽的初始动画效果
            animationDurationUpdate: 300, //数据更新动画的时长
        },
        {
            type: "liquidFill",
            radius: "20%",
            // 水球颜色
            color: ["#F9E341"],
            center: ["28%", "52%"],
            label: {
                normal: {
                    textStyle: {
                        color: "#F9E341",
                        insideColor: "#F9E341",
                        fontSize: 20,
                    },
                },
            },
            backgroundStyle: {
                color: "transparent", //图表的背景颜色

                itemStyle: {
                    shadowBlur: 20, //设置无用
                    shadowColor: "#F9E341", //设置无用
                    opacity: 1, //设置无用
                },
            },
            itemStyle: {
                opacity: 0.5, //波浪的透明度
                shadowBlur: 10, //波浪的阴影范围
                shadowColor: "#323923", //阴影颜色
            },
            outline: {
                show: true, //是否显示轮廓 布尔值
                borderDistance: 0, //外部轮廓与图表的距离 数字
                itemStyle: {
                    borderColor: "#28b2b6", //边框的颜色
                    borderWidth: 1, //边框的宽度

                },
            },
            emphasis: {
                itemStyle: {
                    opacity: 1, //鼠标经过波浪颜色的透明度
                },
            },

            data: [0.45, 0.4144, 0.4004, 0.4104, 0.4014],
            amplitude: 4, //振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
            waveLength: "50%", //波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
            backgroundStyle: {
                borderWidth: 2,
                borderColor: "#F9E341",
                color: "#000f1c", //9EBB29
            },
            direction: "left", //波移动的速度 两个参数  left 从右往左 right 从左往右
            waveAnimation: true, //控制波动画的开关  值是布尔值 false 是关闭动画 true 是开启动画 也是默认值
            animationEasing: "linear", //初始动画
            animationEasingUpdate: "quarticInOut", //数据更新的动画效果
            animationDuration: 3000, //初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更绚丽的初始动画效果
            animationDurationUpdate: 300, //数据更新动画的时长
        },

        {
            type: "liquidFill",
            radius: "20%",
            // 水球颜色
            color: ["#f3daa9"],
            center: ["49%", "52%"],
            label: {
                normal: {
                    textStyle: {
                        color: "#f3daa9",
                        insideColor: "#f3daa9",
                        fontSize: 20,
                    },
                },
            },
            backgroundStyle: {
                color: "transparent", //图表的背景颜色

                itemStyle: {
                    shadowBlur: 20, //设置无用
                    shadowColor: "#072F3A", //设置无用
                    opacity: 1, //设置无用
                },
            },
            itemStyle: {
                opacity: 0.5, //波浪的透明度
                shadowBlur: 10, //波浪的阴影范围
                shadowColor: "#313737", //阴影颜色
            },
            outline: {
                show: true, //是否显示轮廓 布尔值
                borderDistance: 0, //外部轮廓与图表的距离 数字
                itemStyle: {
                    borderColor: "#28b2b6", //边框的颜色
                    borderWidth: 1, //边框的宽度

                },
            },
            emphasis: {
                itemStyle: {
                    opacity: 1, //鼠标经过波浪颜色的透明度
                },
            },

            data: [0.32, 0.3544, 0.3304, 0.3404, 0.3514],
            amplitude: 4, //振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
            waveLength: "50%", //波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
            backgroundStyle: {
                borderWidth: 2,
                borderColor: "#f3daa9",
                color: "#000f1c", //9EBB29
            },
            direction: "left", //波移动的速度 两个参数  left 从右往左 right 从左往右
            waveAnimation: true, //控制波动画的开关  值是布尔值 false 是关闭动画 true 是开启动画 也是默认值
            animationEasing: "linear", //初始动画
            animationEasingUpdate: "quarticInOut", //数据更新的动画效果
            animationDuration: 3000, //初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更绚丽的初始动画效果
            animationDurationUpdate: 300, //数据更新动画的时长
        },

        {
            type: "liquidFill",


            radius: "20%",
            // 水球颜色
            color: ["#8ab8c3"],
            center: ["72%", "52%"],
            label: {
                normal: {
                    textStyle: {
                        color: "#8ab8c3",
                        insideColor: "#8ab8c3",
                        fontSize: 20,
                    },
                },
            },
            backgroundStyle: {
                color: "transparent", //图表的背景颜色

                itemStyle: {
                    shadowBlur: 20, //设置无用
                    shadowColor: "#072F3A", //设置无用
                    opacity: 1, //设置无用
                },
            },
            itemStyle: {
                opacity: 0.5, //波浪的透明度
                shadowBlur: 10, //波浪的阴影范围
                shadowColor: "#1C303D", //阴影颜色
            },
            outline: {
                show: true, //是否显示轮廓 布尔值
                borderDistance: 0, //外部轮廓与图表的距离 数字
                itemStyle: {
                    borderColor: "#8ab8c3", //边框的颜色
                    borderWidth: 1, //边框的宽度

                },
            },
            emphasis: {
                itemStyle: {
                    opacity: 1, //鼠标经过波浪颜色的透明度
                },
            },

            data: [0.32, 0.3044, 0.3004, 0.3004, 0.3014],
            amplitude: 4, //振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
            waveLength: "50%", //波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
            backgroundStyle: {
                borderWidth: 2,
                borderColor: "#8ab8c3",
                color: "#000f1c", //9EBB29
            },
            direction: "left", //波移动的速度 两个参数  left 从右往左 right 从左往右
            waveAnimation: true, //控制波动画的开关  值是布尔值 false 是关闭动画 true 是开启动画 也是默认值
            animationEasing: "linear", //初始动画
            animationEasingUpdate: "quarticInOut", //数据更新的动画效果
            animationDuration: 3000, //初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更绚丽的初始动画效果
            animationDurationUpdate: 300, //数据更新动画的时长
        },
    ],
};