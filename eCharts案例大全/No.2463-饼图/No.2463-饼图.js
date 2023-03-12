let imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAllBMVEUAAAAY258A1JYY258X2p4l2Zkd3qMY258Y3KAY258Y258X3J8V2p0Y2Z8Y26AW3Z0Y258Y2p4X258Y258X258Y258Y258Y3J8Y3J8Y258T2Z0Y258Y3J8Z26AY26AY258Y258X258X3J8Y3KAX3J8X3J8a36UY3J8Y26AX258X258Y258Y258Y258Y26AX3J8Y3J8Y258TXRF7AAAAMXRSTlMA3QSHmQYR62bM1iwiH0oWdxuv9OW1kTs0qA372SfSx1XvbU9BoQm8lVqMf1/3wplypN/JAQAAA+pJREFUaN7t2dl6ojAYBuAPFNxFcANRUXGry7S5/5ub+UNtaIk1iXAwT/ueeNDAR1ZCih/L3yWnGarltBljAaoVMlJxVfqM9JD3G/Ib8jND7E10nt0JGa6vd0L8SfQCda+MsbYnjbdpbbEh0Wkwxt6gasbI3IeOxYgusqBqH+unUAZdA2V1RqjFVFFbkQ2UOQHTqwvVg7xCgzOW1aXTnIxbljVvBbVLT1aPCWCU8jGSt7sGy7OOnY96GGWIFqshMx2zovH0vWwk2sqgLmdwYYvJjbNWsyNRD+2UI8i+FrPM+jBprlYvm3oyZJnhxuYpB8owSjnzG/SW7wnHMDfzt9H1vTK819wBnhFmo3N02UPI7rtmZOnjWVPeMNeabL30dll+F8/pNvhtQsj1eWXaLp7hzekmiXd/qvMCfxw84UC3OHx3C8+iIieY2/COdRUadGveWNTiDf/R8IupW2wYOrJ/Hr9Ra1SsCTP+leaa4k7fMux7esJYZQ6k7J8VTNgj1U8Re05j0Gyuq4+aDdXZNW0tC0pmMR8hBhLGWF2j7KtJl1zp6TRq3YKCXjS3blygq7Pp7dP7iyamddM+zmRPvmSCDWyzXzUdKuzRrxBJywlrACtaUpTnLV21AHpMiG1ZOYEG1UVn0+nQVSHtogXpEx6LIW3lUcJDKExoynuvdjN4b66R1ndAF3BqN+ep8oDR6hMP2jo65xvTwlDUaIEp1Fx4RxoYabyKJqZnRwGfUGqWfN9s4I1mpQMVXZO9hLgyhYoBzT0bJlq0bYOCPXXfDkaaqo2wEQNRm0MPuHzcCl5DVNms69kAj0RUrP/U0Wk8VWnVAMamfMlefF8mpkWuB3M1vvD73y1xa7GXNWQfHuzre/xj74inuNlHzv7bj6TAhqlOKB41gNQ+oT8m/BFSzySjYbnZ7/2BHIkvxsWw7RlkUDN8fP/GHRSlYljsl3Tao50hTlb68Z1Fv02Dlw9wOxBnSloZYkE60c0c+Qv6IiYkpRhkTHLbhGJ7rcQC74z1U5Yig6MJ15cubQkgUrQWfFdkiNCm9MUe4XPKSH2eN0QGx4++pJuAE3Ipeiv+6kojS9iJzJzDbf6I87tGCHV+ukDOq/RDKvl6RBv2XZibFLpU9FRpzrKDDZdWgrTkf2gcNs28Nz7OfZTGtphcgBJtYybT6KFM/QYrandQrtkmSFp5f3YvNv5P6ameV5uifDX21QvKZg8LIa3/MwSnQsgF5Vsd63mnLaqwd/McVGCRsE/iwEXpWuyrHcrmsII5StcuhEQoXWixzxIfFfC7eR6qMR0IC1Rky27oS7QqqXVbtkJUxw7T1WqVLvBT/QXZze13haQUPgAAAABJRU5ErkJggg==';
let chartData = [
    {
        value: 520,
        name: '幼儿园',
    },
    {
        value: 280,
        name: '小学',
    },
    {
        value: 100,
        name: '初中',
    },
    {
        value: 100,
        name: '高中',
    },
];
let colorList = ['#115FEA', '#10EBE3', '#10A9EB', '#EB9C10', '#2E10EB', '#9B10EB'];
let sum = chartData.reduce((per, cur) => per + cur.value, 0);
let gap = 1 * sum / 100;
let pieData1 = [];
let pieData2 = [];
let gapData = {
    name: '',
    value: gap,
    itemStyle: {
        color: 'transparent',
    },
};
for (let i = 0; i < chartData.length; i++) {
    // 第一圈数据
    pieData1.push({
        ...chartData[i],
        itemStyle: {
              borderRadius: 10
            }
        });
    pieData1.push(gapData);

    // 第二圈数据
    pieData2.push({
        ...chartData[i],
        itemStyle: {
            color: colorList[i],
            opacity: 0.1,
        },
    });
    pieData2.push(gapData);
}
console.log(pieData2);
option = {
    backgroundColor: '#000',
    tooltip: {
        show: false,
        backgroundColor: 'rgba(17,95,234,0.5)',
        textStyle: {
            color: '#F0F0F0',
        },
    },
    legend: {
        show: true,
        right: 'right',
        top: 'center',

        icon: 'rect',
        itemWidth: 4,
        itemHeight: 20,
        textStyle: {
            color: '#F0F0F0',
            rich: {
                name: {
                    padding: [0, 10, 0, 8],
                    color: '#fff',
                    fontSize: 16,
                },
                percent: {
                    padding: [0, 0, 0, 8],
                    color: '#fff',
                },
            },
        },
        formatter: (name) => {
            console.log(name);
            console.log(chartData);
            let item = chartData.find((i) => {
                return i.name == name;
            });
            let p = ((item.value / sum) * 100).toFixed(0);
            return '{name|' + name + '}' + '{percent|' + p + '}' + '%';
        },
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
            scale: [1.5,1.5]
        }]
    },
    grid: {
        top: 35,
        right: 30,
        bottom: 20,
        left: 30,
    },
    color: colorList,
    series: [
        {
            name: '消息来源',
            type: 'pie',
            roundCap: true,
            radius: ['76%', '80%'],
            center: ['50%', '50%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: pieData1,
        },
        {
            type: 'pie',
            radius: ['76%', '64%'],
            center: ['50%', '50%'],
            gap: 1.71,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            silent: true,
            data: pieData2,
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: [0, '45.6%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                color: 'rgba(5,37,95,0.3)',
            },
            silent: true,
            data: [
                {
                    value: 100,
                    name: '',
                },
            ],
        },
    ],
};
