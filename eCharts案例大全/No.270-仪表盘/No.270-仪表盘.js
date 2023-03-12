var dataArr = 54;
let imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAllBMVEUAAAAY258A1JYY258X2p4l2Zkd3qMY258Y3KAY258Y258X3J8V2p0Y2Z8Y26AW3Z0Y258Y2p4X258Y258X258Y258Y258Y3J8Y3J8Y258T2Z0Y258Y3J8Z26AY26AY258Y258X258X3J8Y3KAX3J8X3J8a36UY3J8Y26AX258X258Y258Y258Y258Y26AX3J8Y3J8Y258TXRF7AAAAMXRSTlMA3QSHmQYR62bM1iwiH0oWdxuv9OW1kTs0qA372SfSx1XvbU9BoQm8lVqMf1/3wplypN/JAQAAA+pJREFUaN7t2dl6ojAYBuAPFNxFcANRUXGry7S5/5ub+UNtaIk1iXAwT/ueeNDAR1ZCih/L3yWnGarltBljAaoVMlJxVfqM9JD3G/Ib8jND7E10nt0JGa6vd0L8SfQCda+MsbYnjbdpbbEh0Wkwxt6gasbI3IeOxYgusqBqH+unUAZdA2V1RqjFVFFbkQ2UOQHTqwvVg7xCgzOW1aXTnIxbljVvBbVLT1aPCWCU8jGSt7sGy7OOnY96GGWIFqshMx2zovH0vWwk2sqgLmdwYYvJjbNWsyNRD+2UI8i+FrPM+jBprlYvm3oyZJnhxuYpB8owSjnzG/SW7wnHMDfzt9H1vTK819wBnhFmo3N02UPI7rtmZOnjWVPeMNeabL30dll+F8/pNvhtQsj1eWXaLp7hzekmiXd/qvMCfxw84UC3OHx3C8+iIieY2/COdRUadGveWNTiDf/R8IupW2wYOrJ/Hr9Ra1SsCTP+leaa4k7fMux7esJYZQ6k7J8VTNgj1U8Re05j0Gyuq4+aDdXZNW0tC0pmMR8hBhLGWF2j7KtJl1zp6TRq3YKCXjS3blygq7Pp7dP7iyamddM+zmRPvmSCDWyzXzUdKuzRrxBJywlrACtaUpTnLV21AHpMiG1ZOYEG1UVn0+nQVSHtogXpEx6LIW3lUcJDKExoynuvdjN4b66R1ndAF3BqN+ep8oDR6hMP2jo65xvTwlDUaIEp1Fx4RxoYabyKJqZnRwGfUGqWfN9s4I1mpQMVXZO9hLgyhYoBzT0bJlq0bYOCPXXfDkaaqo2wEQNRm0MPuHzcCl5DVNms69kAj0RUrP/U0Wk8VWnVAMamfMlefF8mpkWuB3M1vvD73y1xa7GXNWQfHuzre/xj74inuNlHzv7bj6TAhqlOKB41gNQ+oT8m/BFSzySjYbnZ7/2BHIkvxsWw7RlkUDN8fP/GHRSlYljsl3Tao50hTlb68Z1Fv02Dlw9wOxBnSloZYkE60c0c+Qv6IiYkpRhkTHLbhGJ7rcQC74z1U5Yig6MJ15cubQkgUrQWfFdkiNCm9MUe4XPKSH2eN0QGx4++pJuAE3Ipeiv+6kojS9iJzJzDbf6I87tGCHV+ukDOq/RDKvl6RBv2XZibFLpU9FRpzrKDDZdWgrTkf2gcNs28Nz7OfZTGtphcgBJtYybT6KFM/QYrandQrtkmSFp5f3YvNv5P6ameV5uifDX21QvKZg8LIa3/MwSnQsgF5Vsd63mnLaqwd/McVGCRsE/iwEXpWuyrHcrmsII5StcuhEQoXWixzxIfFfC7eR6qMR0IC1Rky27oS7QqqXVbtkJUxw7T1WqVLvBT/QXZze13haQUPgAAAABJRU5ErkJggg==';

option = {
    backgroundColor: '#0E1327',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },
    graphic: {
        elements: [{
            type: "image",
            z: 3,
            style: {
                image: imgSrc,
                width: 70,
                height: 70,
            },
            top: 'middle',
            left: 'center',
            scale: [0.5, 0.5]
            
        }]
    },
    series: [
        {
            name: '内部进度条',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '50%',
            z: 1,
            startAngle: 270,
            endAngle: 0,
            splitNumber: 5,
            progress: {
                show: true,
                width: 27,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(17,95,234,0)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(17,95,234,0.5)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(17,95,234,1)',
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            axisLine: {
                show: false,
                // lineStyle: {
                //     color: [[1, 'rgba(240,240,240,0.2)']],

                //     width: 27,
                // },
            },
            axisLabel: {
                show: true,
                color: 'rgba(240,240,240,0.5)',
                fontSize: 12,
                distance: 15,
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
                offsetCenter: ['92%', '30%'],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 24,
                   
                    color: 'rgba(240,240,240,1)',
                },
            },
            title: {
                show: true,
                offsetCenter: ['92%', '50%'], 
                textStyle: {
                    color: 'rgba(240,240,240,1)',
                    fontSize: 12, 
                   
                    fontFamily: 'PingFangSC',
                },
            },
            data: [
                {
                    name: '标题',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false
                
            },
            // animation: false
        },
        {
            name: '刻度',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '50%',
            z: 999,
            startAngle: 270,
            endAngle: -0,
            splitNumber: 80,
            progress: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    width: 27,
                },
            },
            //仪表盘轴线
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 27,
                lineStyle: {
                    color: 'rgba(17,95,234,0.2)', 
                    width: 3,
                },
                distance: -27
            }, 
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                //标题
                show: false,
            },

            pointer: {
                show: false,
            },
            
        },
        {
            name: '最外边线',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '25%',
            z: 999,
            startAngle: 270,
            endAngle: 0,
            splitNumber: 50,
            progress: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(240,240,240,0.2)']],
                },
            },
            axisLabel: {
                show: false,
            }, 
            axisTick: {
                show: false,
            }, 
            splitLine: {
                show: true,
                length: 1,
                lineStyle: {
                    color: 'rgba(240,240,240,0.2)', 
                    width: 5,
                },
            }, 
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                show: false,
            },

            pointer: {
                show: false,
            },
        },
        {
            name: '最外刻度亮线',
            type: 'gauge',
            radius: '50%',
            center: ['50%', '50%'],
            startAngle: 270 - (270 * dataArr) / 100 + 1,
            endAngle: 270 - (270 * dataArr) / 100 - 30,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [3 / 100, 'rgba(16,235,227,1)'],
                    ],
                    width: 29,
                    shadowColor: 'rgba(16,235,227,1)',
                    shadowBlur: 10,
                },
            },
            progress: {
                show: false,
                width: 29,
                itemStyle: {
                    color: '#10EBE3',
                    shadowColor: 'rgba(16,235,227,1)',
                    shadowBlur: 10,
                },
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
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
            animationDelay: 850,
            animationDuration: 300,
            data: [
                {
                    name: 'title',
                    value: 100,
                },
            ],
            title: {
                show: false,
            },
        },
        {
            name: "",
            type: "pie",
            radius: [0, '20%'],
            center: ["50%", "50%"],
            tooltip: {
               show: false 
            },
            label: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'rgba(24,219,159,0.1)'
                },
            },
            hoverAnimation: false,
            animation: false,
            data: [100]
        }
    ],
};

