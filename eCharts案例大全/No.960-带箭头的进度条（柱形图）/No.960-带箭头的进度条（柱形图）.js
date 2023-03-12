var data1 = 62;
option = {
    backgroundColor: 'rgba(0,0,0,0.9)',
    yAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },

    xAxis: {
        show: false,
        max: 100,
    },
    grid: {
        top: '40',
        right: '15%',
        left: '15%',
        bottom: '40', //图表尺寸大小
    },
    animationDuration: 3000,
    series: [
        {
            type: 'bar',
            barWidth: 20,
            z: 1,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(1, 54, 55, 1)',
                borderRadius: [30, 30, 30, 30], //圆角大小
            },
            label: {
                show: true,
                position: 'insideTopRight', //每一条的数据位置
                padding: [12, -16, 0, 0],
                formatter: (params) => {
                    return '▲';
                },
               color: 'rgba(254, 173, 84, 1)',
               /*color:function (params1) { // 这个不出效果
                    let Textcolor = '#ffffff';
                    if (params1.value > 5 || params1.value === 5) {
                        Textcolor = 'rgba(229, 86, 63, 1)';
                    } else if (params1.value < 5 && (params1.value > 3 || params1.value === 3)) {
                        Textcolor = 'rgba(254, 173, 84, 1)';
                    } else if (params1.value < 3 && params1.value > 1) {
                        Textcolor = 'rgba(254, 173, 84, 0.5)';
                    } else if (params1.value === 1) {
                        Textcolor = 'rgba(48, 201, 137, 1)';
                    } else {
                        Textcolor = '#ffffff';
                    }
                    return Textcolor;
                },*/
                fontSize: 28,
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let color1 = {};
                        if (params.value > 5) {
                            color1 = {
                                type: 'linear',
                                x: 1,
                                x2: 0,
                                y: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 1,
                                        color: 'rgba(48, 201, 137, 1)',
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(254, 173, 84, 1)',
                                    },
                                    {
                                        offset: 0,
                                        color: 'rgba(229, 86, 63, 1)',
                                    },
                                ],
                            };
                        } else if ((params.value < 5 || params.value === 5) && params.value > 1) {
                            color1 = {
                                type: 'linear',
                                x: 1,
                                x2: 0,
                                y: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 1,
                                        color: 'rgba(48, 201, 137, 1)',
                                    },
                                    {
                                        offset: 0,
                                        color: 'rgba(254, 173, 84, 1)',
                                    },
                                ],
                            };
                        } else if (params.value === 1) {
                            color1 = {
                                type: 'linear',
                                x: 1,
                                x2: 0,
                                y: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 1,
                                        color: 'rgba(48, 201, 137, 1)',
                                    },
                                    {
                                        offset: 0,
                                        color: 'rgba(48, 201, 137, 1)',
                                    },
                                ],
                            };
                        }
                        return color1;
                    },
                    borderRadius: [30, 30, 30, 30], //圆角大小
                },
            },
            data: [data1],
        },
        {
            type: 'pictorialBar',
            z: 4,
            padding: [60, 0, 0, 0],
            barWidth: 25,
            symbolRepeat: true,
            symbolOffset: [12, -40],
            symbolMargin: 0,
            symbol:
                'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAAAXNSR0IArs4c6QAAAmNJREFUSEutlU2IjVEYx3/POx/NRIOtqREWLJhR477n3hSjZicLpURJ0pSQLEbZaKSwIR+FaPKRkmRByU4oi3veO1NMlDSRWSgLZkiN7tx5/7rDuNed+zETz/Kc//93np7nOecY/zmsKq8ztZJAHUAzFmeJ4yEGBl5V85QHOrfVZH2gVb/N41PQXzEs2Qky6ZuASuEzgQl3xIxTRcIJoQ2GPS6CYsaZ2PvemkBzziPCEuEYsLBk7Z0iv7wmkERivZndM9ndOGC41BDEtMrokbED7x/VBgJBmDwm1Fep+CbOxxl/qNx++aaE4XbDblcCyjiA9xdnD1ybXGeBnlcEoi1E0f3ZA51rMfEZqC9n0mRuCYODI7MH5uvo3B2JbTNN9lhRurtifStOfSrVapOxB1qLNKNCSaLo7dyBeUdnZ5vVNZwDbQKeCB2sBstbqt/lvKKrqz4YH78U53L7GRycqPWWFICJZHdg2im0CGgBa1J93TZyuW7D+mXswftrgXPXJS0F+2HYt1gMkUmfBOK/MrTQvQFWFGcgtIxsdpTGxi6y2ae8eDFmoXsGrP9LZ6TwPl0AtrfPs6bmb/nmlgA3E0UPgzC8EJv109b22j6MfJRxysTZaa1k+8ikLxeAyaSzWFMnlMQDNTbstuzEF4leAoZN5Af6OzB/WmtwJY783gIwDHcZdqMMUBKHzThtcEtiDcbqGTrxVBm/sQBMuKNmHK/VwSr7f56yqS4Hzl2V6PkH4IQi31jIMJVqZXIyDAg6kFbI1Aa2GMiP0IKig/JfwVfgE2jEzN7H0hDwkigamN1gzzHtnwu66BiasxGdAAAAAElFTkSuQmCC',
            data: [data1],
        },
    ],
};
