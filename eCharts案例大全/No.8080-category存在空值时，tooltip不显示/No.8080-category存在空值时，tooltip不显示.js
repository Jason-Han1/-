option = {
    dataset: {
        source: [
            [
                "订单时间",
                "订单号",
                "附加2"
            ],
            [
                null,
                180510,
                180510
            ],
            [
                "2018-05-10",
                180510,
                180510
            ]
        ]
    },
    yAxis: {},
    xAxis: {
        type: "category",
        show: true,
    },
    tooltip: {
        /**
         * 问题描述：
         * 当类目轴为空时，设置trigger: "axis"，tooltip无法显示
         */
        trigger: "axis"//如果注释该行则tooltip正常
    },
    series: {
        type: "bar"
    }
}