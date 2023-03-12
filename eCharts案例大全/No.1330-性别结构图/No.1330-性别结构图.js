/**
 * 双向柱状图
 * 排名
 * 对比
 *
 * 参考一下作品，感谢相关作者
 * https://gallery.echartsjs.com/editor.html?c=xL00juR_Rr
 */

let data1 = {
    etc: {
        name: '男',
        data: [
            {
                value: '22',
                label: `男`,
            },
            {
                value: 23,
                label: '男',
            },
            {
                value: 4,
                label: '男',
            },
            {
                value: 56,
                label: '男',
            },
            {
                value: 32,
                label: '男',
            },
            {
                value: 5,
                label: '男',
            },
            {
                value: 9,
                label: '男',
            },
            {
                value: 48,
                label: '男',
            },
            {
                value: 48,
                label: '男',
            },
            {
                value: 48,
                label: '男',
            },
            {
                value: 19,
                label: '男',
            },
            {
                value: 23,
                label: '男',
            },
            {
                value: 43,
                label: '男',
            },
            {
                value: 34,
                label: '男',
            },
            {
                value: 53,
                label: '男',
            },
            {
                value: 12,
                label: '男',
            },
            {
                value: 34,
                label: '男',
            },
            {
                value: 34,
                label: '男',
            },
            {
                value: 34,
                label: '男',
            },
        ],
    },
    notEtc: {
        name: '女',
        data: [
            {
                value: 5,
                label: '女',
            },
            {
                value: 19,
                label: '女',
            },
            {
                value: 23,
                label: '女',
            },
            {
                value: 43,
                label: '女',
            },
            {
                value: 34,
                label: '女',
            },
            {
                value: 53,
                label: '女',
            },
            {
                value: 12,
                label: '女',
            },
            {
                value: 34,
                label: '女',
            },
            {
                value: 35,
                label: '女',
            },
            {
                value: 33,
                label: '女',
            },
            {
                value: 19,
                label: '女',
            },
            {
                value: 23,
                label: '女',
            },
            {
                value: 43,
                label: '女',
            },
            {
                value: 34,
                label: '女',
            },
            {
                value: 53,
                label: '女',
            },
            {
                value: 12,
                label: '女',
            },
            {
                value: 34,
                label: '女',
            },
            {
                value: 34,
                label: '女站',
            },
            {
                value: 34,
                label: '女',
            },
        ],
    },
};

let legendData = [data1.etc.name, data1.notEtc.name];
let yAxisDataN = data1.etc.data.map((e) => e.label);
let yAxisDataV = data1.notEtc.data.map((e) => e.label);
let yAxisLabelN = data1.etc.data.map((e) => e.value).sort((a, b) => a - b);
let yAxisLabelV = data1.notEtc.data.map((e) => e.value).sort((a, b) => a - b);
let rankData = data1.etc.data.map((item, index) => index);

let top1 = 60;
let bottom = 10;
var labelSetting = {
    label: '16',
    yLabel: '16',
};
option = {
    title: {
        text: '',
        x: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 22,
        },
    },
    backgroundColor: '#00000000',
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        left: 'center',
        top: 30,
        itemWidth: 0, //图例标记的图形宽度
        itemHeight: 0, //图例标记的图形高度
        y: 'center',
        borderRadius: 0,
        inactiveColor: '#FFF',
        formatter: (name) => {
            if (name == data1.etc.name) {
                return '{a|' + name + '}';
            } else {
                return '{b|' + name + '}';
            }
        },
        textStyle: {
            rich: {
                a: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: '#298bf6',
                    color: '#fff',
                },
                b: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: '#f9c807',
                    color: '#fff',
                },
            },
        },
        data: legendData,
    },
    grid: [
        {
            right: '53%',
            containLabel: false,
            bottom,
            top: top1,
        },
        {
            left: '50%',
            width: 0,
            top: top1,
            bottom: bottom,
        },
        {
            left: '53%',
            containLabel: false,
            bottom,
            top: top1,
        },
    ],
    xAxis: [
        {
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
        {
            gridIndex: 1,
            show: false,
        },
        {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            position: 'right',
            axisLabel: {
                color: '#fff',
                fontSize: labelSetting.yLabel,
            },
            axisLine: {
                show: false,
            },
            type: 'category',
            inverse: false,
            axisTick: {
                show: false,
            },
            data: yAxisDataN,
        },
        {
            gridIndex: 1,
            position: 'center',
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                margin: 0,
                color: '#fff',
                fontSize: labelSetting.yLabel,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: [],
        },
        {
            gridIndex: 2,
            position: 'left',
            axisLabel: {
                color: `#fff`,
                fontSize: labelSetting.yLabel,
            },
            axisLine: {
                show: false,
            },
            type: 'category',
            inverse: false,
            axisTick: {
                show: false,
            },
            data: yAxisDataV,
        },
    ],
    series: [
        {
            name: legendData[0],
            type: 'bar',
            barWidth: '50%',
            label: {
                show: true,
                fontFamily: 'Rubik-Medium',
                fontSize: labelSetting.label,
                distance: 10,
                color: 'black',
                position: 'right',
            },
            itemStyle: {
                color: '#298bf6',
            },
            data: yAxisLabelN,
        },
        {
            type: 'bar',
            barWidth: '50%',
            label: {
                show: true,
                fontFamily: 'Rubik-Medium',
                fontSize: labelSetting.label,
                distance: 10,
                color: 'black',
                position: 'left',
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: legendData[1],
            itemStyle: {
                color: '#f9c807',
            },
            data: yAxisLabelV,
        },
    ],
};
