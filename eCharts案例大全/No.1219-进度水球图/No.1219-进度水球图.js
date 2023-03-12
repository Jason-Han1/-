var value = 0.94;
        var option = {
            backgroundColor:"black",
            title: [
            {
                text: `{a|${value*100}%}`,
                subtext: "压铸车间",
                top: "center",
                left: "center",
                subtextStyle: {
                    color: "#fff",
                    fontSize: 23,
                    fontWeight: 600,
                    fontFamily: "PingFangSC-Regular",
                    top: "center"
                },
                itemGap: -10, //主副标题间距
                textStyle: {
                    fontWeight: "normal",
                    rich: {
                        a: {
                            padding: [0, 0, 70, 0],
                            fontWeight: "normal",
                            fontSize: 36,
                            color: "#fff",
                            fontFamily: "DINAlternate-Bold",
                            textShadow: [5, 5, 10, "#7ff06fff"]
                        },
                    }
                }
            }],
            angleAxis: {
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                min: 0,
                max: 100,
                boundaryGap: ["1000", "100"]
            },
            radiusAxis: {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: ['a', 'b', 'c'],
                z: 10
            },
            polar: {
                radius: '100%'
            },
            series: [{
                type: 'bar',
                data: [, , value * 100], //修改数据
                coordinateSystem: 'polar',
                barMaxWidth: 20,
                z: 2,
                name: '',

                color: '#1779ee',
                barGap: '-100%',
            },
            {
                type: "bar",

                data: [, , 100],
                coordinateSystem: 'polar',
                barMaxWidth: 20,
                z: -2,
                name: '',

                color: '#f0f0f0',
                barGap: '-100%',

            },
            {
                type: 'liquidFill',
                radius: '70%',
                center: ['50%', '50%'],
                color: [
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 1,
                        color: 'rgba(2, 159, 200, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(0, 186, 211, .5)'
                    }, {
                        offset: 0,
                        color: 'rgba(0, 230, 220, 1)'
                    }],
                }, ],
                data: [value, value - 0.1, value - 0.15], // data个数代表波浪数
                backgroundStyle: {
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0)',
                    color: 'rgba(255, 255, 255, 0)',
                },
                outline: {
                    show: false,
                },
                label: {
                    show: false,
                },
            }, ],
            tooltip: {
                show: false
            },

        };