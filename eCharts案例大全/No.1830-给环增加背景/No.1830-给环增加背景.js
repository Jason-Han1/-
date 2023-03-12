var uploadedDataURL = "/asset/get/s/data-1631672691480-Cv0mNjvUJ.json";


var data = [
    {
        name: '高中及以下',
        value: 234,
        color: '#F8806C',
    },
    {
        name: '硕士研究生',
        value: 222,
        color: '#D689FF',
    },
    {
        name: '专科',
        value: 120,
        color: '#FFC64E',
    },
    {
        name: '博士研究生',
        value: 789,
        color: '#3AED9E',
    },
    {
        name: '本科',
        value: 456,
        color: '#3DADFE',
    },
];

var nameList = data.map((item) => item.name);
var color = data.map((item) => item.color);
var newData = [];
// 根据总值设置间隔值大小
var sum = data.reduce((cur, pre) =>pre.value + cur, 0);

// 给每个数据后添加特定的透明的数据形成间隔
data.forEach((item) => {
    newData.push(item, {
        name: '',
        value: sum / 80,
        labelLine: {
            show: false,
            lineStyle: {
                color: 'transparent',
            },
        },
        itemStyle: {
            color: 'transparent',
        },
    });
});
var option = {
    grid: {
        top: '5%',
        left: '2%',
        right: '5%',
        bottom: '5%',
        containLabel: true,
    },
    graphic: {
        elements: [
            {
                type: 'image',
                z: 1,
                style: {
                    image: uploadedDataURL.img,
                    width: 230,
                    height: 230,
                },
                left: '-10%',
                top: 'center',
            },
        ],
    },
    legend: [
        {
            icon: `path://M962 962H62V62h900v900zM162 862h700V162H162v700z`,
            data: nameList.slice(0, 3),
            orient: 'vertical',
            left: '60%',
            top: '40%',
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                rich: {
                    a: {
                        fontSize: 12,
                        color: '#000',
                        width: 60,
                    },
                    b: {
                        fontSize: 14,
                        color: '#000',
                        align: 'right',
                    },
                },
            },
            itemGap: 20,
            formatter: (name) => {
                if (data.length) {
                    const item = data.filter((item) => item.name === name)[0];
                    return `{a|${name}}{b|${item.value}}`;
                }
            },
        },
        {
            icon: `path://M962 962H62V62h900v900zM162 862h700V162H162v700z`,
            data: nameList.slice(3, 5),
            orient: 'vertical',
            left: '70%',
            top: '40%',
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                rich: {
                    a: {
                        fontSize: 12,
                        color: '#000',
                        width: 60,
                    },
                    b: {
                        fontSize: 14,
                        color: '#000',
                        align: 'right',
                    },
                },
            },
            itemGap: 20,
            formatter: (name) => {
                if (data.length) {
                    const item = data.filter((item) => item.name === name)[0];
                    return `{a|${name}}{b|${item.value}}`;
                }
            },
        },
    ],
    color,
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['30.5%', '50%'],
            data,
            hoverOffset: 5,
            labelLine: {
                show: false,
            },
            label: {
                show: false,
            },
        },
    ],
};
var imgLen = 600;
$.getJSON(uploadedDataURL, function(targetImg) {
  option = {
    grid: {
        top: '5%',
        left: '2%',
        right: '5%',
        bottom: '5%',
        containLabel: true,
    },
    graphic: {
        elements: [
            {
                type: 'image',
                z: 1,
                style: {
                    image: targetImg.img,
                    width: imgLen,
                    height: imgLen,
                },
                left: '3.6%',
                top: 'center',
            },
        ],
    },
    legend: [
        {
            icon: `path://M962 962H62V62h900v900zM162 862h700V162H162v700z`,
            data: nameList.slice(0, 3),
            orient: 'vertical',
            left: '50%',
            top: '40%',
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                rich: {
                    a: {
                        fontSize: 12,
                        color: '#000',
                        width: 70,
                    },
                    b: {
                        fontSize: 14,
                        color: '#000',
                        align: 'right',
                    },
                },
            },
            itemGap: 20,
            formatter: (name) => {
                if (data.length) {
                    const item = data.filter((item) => item.name === name)[0];
                    return `{a|${name}}{b|${item.value}}`;
                }
            },
        },
        {
            icon: `path://M962 962H62V62h900v900zM162 862h700V162H162v700z`,
            data: nameList.slice(3, 5),
            orient: 'vertical',
            left: '65%',
            top: '40%',
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                rich: {
                    a: {
                        fontSize: 12,
                        color: '#000',
                        width: 70,
                    },
                    b: {
                        fontSize: 14,
                        color: '#000',
                        align: 'right',
                    },
                },
            },
            itemGap: 20,
            formatter: (name) => {
                if (data.length) {
                    const item = data.filter((item) => item.name === name)[0];
                    return `{a|${name}}{b|${item.value}}`;
                }
            },
        },
    ],
    color,
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['30.5%', '50%'],
            data,
            hoverOffset: 5,
            labelLine: {
                show: false,
            },
            label: {
                show: false,
            },
        },
    ],
};
  myChart.setOption(option)
})

