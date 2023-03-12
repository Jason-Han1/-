
    echartData = [{
            name: "存量人员",
            value: 224
        },
        {
            name: "历史人员",
            value: 237
        },
        {
            name: "核查人员",
            value: 347
        },
        {
            name: "落户人员",
            value: 447
        },
        {
            name: "待审人员",
            value: 584
        },
        {
            name: "临时人员",
            value: 347
        },
        {
            name: "其他人员",
            value: 124
        },
    ];

option = {
    color: ['#6789FF', '#FF5896', '#31B5D0', '#FFA92A', '#C75FFF', '#71BAC1', '#BAC5EB'],
    tooltip: {
        show: false,
        trigger: "item",
        formatter: "{b}: {c} ({d}%)"
    },
    title: [{
        zlevel: 55,
        text: '8496',
        top: '46.5%',
        textAlign: "center",
        left: "50%",
        textStyle: {
            color: '#4970C8',
            fontFamily: 'DINAlternate-Bold, DINAlternate',
            fontSize: 40,
            fontWeight: '600'
        }
    },{
        zlevel: 55,
        text: '涉疆人员',
        top: '53%',
        textAlign: "center",
        left: "50%",
        textStyle: {
            color: '#000000',
            fontSize: 16,
            fontWeight: '500'
        }
    }],
    legend: {
        icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
        orient: 'vertical',
        itemWidth: 16,
        itemHeight: 16,
        right: '10%',
        top: 'center',
        align: 'left',
        itemGap: 20,
        formatter: function(name) {
             let target,percent;
             for (let i = 0; i < echartData.length; i++) {
                 if (echartData[i].name === name) {
                     target = echartData[i].value;
                 }
             }
             let arr = [' {a|' + name + '}' ,' {b|' + target + '}' ];
             return arr
        },
        textStyle: {
            rich: {
                a: {
                    fontSize: 15,
                    width: 90,
                    color: '#000',
                    padding: [0, 0, 0, 10]
                },
                b: {
                    fontSize: 21,
                    color: '#4970C8',
                    // fontWeight: 600,
                    padding: [0, 0, 0, 0]
                },
            }
        },
    },
    toolbox: {
        show: false
    },
    series: [{
        name: "",
        type: "pie",
        radius: [0, 160],
        center: ["50%", "50%"],
        label: {
            show: false
        },
        itemStyle: {
            normal: {
                color: '#fff',
                shadowBlur: 15,
                shadowColor: '#9CA6F3'
            },
        },
        hoverAnimation: false,
        tooltip: {
            show: false
        },
        pointer: {
            show: false
        },
        clickable:false,
        data: [100]
    }, {
        name: "",
        type: "pie",
        radius: [120, 135],
        center: ["50%", "50%"],
        zlevel: 100,
        label: {
            normal: {
                show: false
            }
        },
        hoverAnimation: true,
        tooltip: {
            show: true
        },
        hoverOffset: 2,
        data: echartData
    }, {
        name: "",
        type: "pie",
        radius: [0, 85],
        center: ["50%", "50%"],
        zlevel: 50,
        label: {
            show: false
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.RadialGradient(.5, .5, .7, [{
                        offset: 0.5,
                        color: '#ffffff'
                    },
                    {
                        offset: 1,
                        color: '#ffffff'
                    }
                ], false),
                shadowBlur: 15,
                shadowColor: '#9CA6F3'
            },
        },
        tooltip: {
            show: false
        },
        hoverAnimation: false,
        pointer: {
            show: false
        },
        clickable:false,
        data: [100]
    }]
};