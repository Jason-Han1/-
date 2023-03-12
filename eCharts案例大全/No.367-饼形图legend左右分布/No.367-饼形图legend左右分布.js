let imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAllBMVEUAAAAY258A1JYY258X2p4l2Zkd3qMY258Y3KAY258Y258X3J8V2p0Y2Z8Y26AW3Z0Y258Y2p4X258Y258X258Y258Y258Y3J8Y3J8Y258T2Z0Y258Y3J8Z26AY26AY258Y258X258X3J8Y3KAX3J8X3J8a36UY3J8Y26AX258X258Y258Y258Y258Y26AX3J8Y3J8Y258TXRF7AAAAMXRSTlMA3QSHmQYR62bM1iwiH0oWdxuv9OW1kTs0qA372SfSx1XvbU9BoQm8lVqMf1/3wplypN/JAQAAA+pJREFUaN7t2dl6ojAYBuAPFNxFcANRUXGry7S5/5ub+UNtaIk1iXAwT/ueeNDAR1ZCih/L3yWnGarltBljAaoVMlJxVfqM9JD3G/Ib8jND7E10nt0JGa6vd0L8SfQCda+MsbYnjbdpbbEh0Wkwxt6gasbI3IeOxYgusqBqH+unUAZdA2V1RqjFVFFbkQ2UOQHTqwvVg7xCgzOW1aXTnIxbljVvBbVLT1aPCWCU8jGSt7sGy7OOnY96GGWIFqshMx2zovH0vWwk2sqgLmdwYYvJjbNWsyNRD+2UI8i+FrPM+jBprlYvm3oyZJnhxuYpB8owSjnzG/SW7wnHMDfzt9H1vTK819wBnhFmo3N02UPI7rtmZOnjWVPeMNeabL30dll+F8/pNvhtQsj1eWXaLp7hzekmiXd/qvMCfxw84UC3OHx3C8+iIieY2/COdRUadGveWNTiDf/R8IupW2wYOrJ/Hr9Ra1SsCTP+leaa4k7fMux7esJYZQ6k7J8VTNgj1U8Re05j0Gyuq4+aDdXZNW0tC0pmMR8hBhLGWF2j7KtJl1zp6TRq3YKCXjS3blygq7Pp7dP7iyamddM+zmRPvmSCDWyzXzUdKuzRrxBJywlrACtaUpTnLV21AHpMiG1ZOYEG1UVn0+nQVSHtogXpEx6LIW3lUcJDKExoynuvdjN4b66R1ndAF3BqN+ep8oDR6hMP2jo65xvTwlDUaIEp1Fx4RxoYabyKJqZnRwGfUGqWfN9s4I1mpQMVXZO9hLgyhYoBzT0bJlq0bYOCPXXfDkaaqo2wEQNRm0MPuHzcCl5DVNms69kAj0RUrP/U0Wk8VWnVAMamfMlefF8mpkWuB3M1vvD73y1xa7GXNWQfHuzre/xj74inuNlHzv7bj6TAhqlOKB41gNQ+oT8m/BFSzySjYbnZ7/2BHIkvxsWw7RlkUDN8fP/GHRSlYljsl3Tao50hTlb68Z1Fv02Dlw9wOxBnSloZYkE60c0c+Qv6IiYkpRhkTHLbhGJ7rcQC74z1U5Yig6MJ15cubQkgUrQWfFdkiNCm9MUe4XPKSH2eN0QGx4++pJuAE3Ipeiv+6kojS9iJzJzDbf6I87tGCHV+ukDOq/RDKvl6RBv2XZibFLpU9FRpzrKDDZdWgrTkf2gcNs28Nz7OfZTGtphcgBJtYybT6KFM/QYrandQrtkmSFp5f3YvNv5P6ameV5uifDX21QvKZg8LIa3/MwSnQsgF5Vsd63mnLaqwd/McVGCRsE/iwEXpWuyrHcrmsII5StcuhEQoXWixzxIfFfC7eR6qMR0IC1Rky27oS7QqqXVbtkJUxw7T1WqVLvBT/QXZze13haQUPgAAAABJRU5ErkJggg==';
// 数据初始化
let fontColor = '#18DB9F',
    echartData = [{
            name: "1分",
            value: 100
        },
        {
            name: "2分",
            value: 200
        },
        {
            name: "3分",
            value: 200
        },
        {
            name: "4分",
            value: 100
        },
        {
            name: "5分",
            value: 100
        }
    ];
// 数据整理
let total = echartData.reduce((a, b) => {
    return a + b.value
}, 0);
let legendOption = {
    top: "center",
    orient: 'vertical',
    icon: "circle",
    itemWidth: 12,
    itemGap: 13,
    textStyle: {
        fontSize: 14,
        rich: {
            name: {
                color: "#333333",
                padding: [10, 5, 30, 5],
                // align: 'right'
                // width: 60
            },
            percent: {
                color: fontColor,
                fontSize: 18,
                padding: [0, 5, 0, 5],
                // align: 'right'
            }
        }
    },
    formatter: function(name) {
        let res = echartData.filter(v => v.name === name);
        let percent = ((res[0].value * 100) / total).toFixed(2);
        return (
            "{name| " + name + "}\n{percent|" + percent + "%}"
        );
    }
};

// option
option = {
    backgroundColor: '#FFFFFF',
    color: ['#06FDBC', '#F6FE05', '#07B0FE', '#FDB408', '#00DB1C', '#0188FE'],
    tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)"
    },
    graphic: {
        elements: [{
            type: "image",
            z: 3,
            style: {
                image: imgSrc,
                width: 90,
                height: 90
            },
            left: 'center',
            top: "36%",
            position: [100, 100]
        }]
    },
    title: {
        text: '评分总人数',
        top: '58%',
        textAlign: "center",
        left: "50%",
        textStyle: {
            color: fontColor,
            fontSize: 20,
            fontWeight: '400'
        }
    },
    legend: [{
        left: 60,
        data: [ '5分', '4分', '3分'],
        align: 'right',

        ...legendOption
    }, {
        right: 60,
        data: ['1分', '2分'],
        align: 'left',
        ...legendOption
    }],
    toolbox: {
        show: false
    },
    series: [{
        name: "",
        type: "pie",
        radius: [0, 150],
        center: ["50%", "50%"],
        label: {
            show: false
        },
        itemStyle: {
            normal: {
                color: 'rgba(24,219,159,0.1)'
            },
        },
        hoverAnimation: false,
        data: [100]
    }, {
        name: "",
        type: "pie",
        radius: [120, 135],
        center: ["50%", "50%"],
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(24,219,159,0.6)',
            }
        },
        hoverAnimation: false,
        hoverOffset: 5,
        data: echartData
    }, {
        name: "",
        type: "pie",
        radius: [0, 105],
        center: ["50%", "50%"],
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
                        color: '#18DB9F'
                    }
                ], false)
            },
        },
        hoverAnimation: false,
        data: [100]
    }]
};