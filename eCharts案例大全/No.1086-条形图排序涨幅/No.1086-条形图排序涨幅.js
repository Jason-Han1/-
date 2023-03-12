let _data = [-10, -9, -8, -7, -6, -5, -4, -3, -2, 5];
let trueData = _data.map((v) => Math.abs(v));
// 红的
let imgUp =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAexJREFUWEftlj9IG1Ecx7+/y1FBxcEjCQqC3t3kYGkuIDqIDh2cGhBxEsFFcNDN1XZ0KJRCl0JBnKRDN1F00EWKmD9QsVC400GJ3AMXB8Wo+ZVCFAm55L0LNIO59b6/7/fzvu8e7wgNfqjefLbtFnLd27A+dQEIxzoFYBDzx2j25EMYiNAApfDex1BmnohnT36oQoQCEI75HaDJ52EE5ItcHI9nT3+pQCgD+I75hUDzlUKIcQjWU9Hcn7wshBKASJqzYPpWzZzB24VXhVTPz/MbGQhpAP9N32to2g4BUQnjtVjGm5HQQQpA9Pe3o7WwAeYRGdOSZjGW8T7X0ssBONYqAKkVPQu80QlvO9PefjWImgB+wnxPRMu1VhLwPhfR8M449M6C5qsCiIQ1BcJ6yPDSGO3c4zrVnclfVzw5QeZ+om9AI22Tge76AAAmfI2nvTklAOFYuwBG6w1/nI/o1GMcuOflfoFbIBx7ksCfQjawVxZ0FMt4C0oNVBJfJO3RCPMWgJagZh6IxrrSbjlAYJE1T0H5pHAsD4DZSICq38b/aKAJ0Gyg2UCzgRfegJ+wVoiw1LC7wE/a08S8FnC1Hms6DRsH7pXsf4TybXg5aHfc32EI4AGA256CSBN6EXtGzv0tG/5PpwygYi6j/QuNY80hJ6JoYwAAAABJRU5ErkJggg==';
// 绿的
let imgDown =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAetJREFUWEftlTFo1GAUx/8vtLVFWkdHLRaUJgfCgZe2OLSgFAqCooKbLi7ieg4mdxe+tNCOIoKTjqUFETt0EKHQwS/oIDSpS4dOdq443ND7nuTKLcddLl/uzjpc1rz3//++f973Qjjjh3T954pXx0/ODS0R07Xm3mFVe7u78vNIR1MbwHat7wDyrU34vRTRk34DcHsDPpQimjxDAECKUCtVreL4ZLZrJSQwABgkMEhgkMB/kMCo8Wdsxzuspl3HWpuwUJ6aIDV6nCTOBpuBF+33BcB2px8DxrtkcVqTYu9F1wAFx9wgogdphRLrGBXph16rmrafwHatAwBXegHAzJuBHz3UApgpWXeZ8aEnAOBHgYjWtQBOf725VYCL3UAQ6PlXsfe6nUbiLcg/zQ+PXKx+YdDNTBAMT/phJam34zWcLU9fV8r4COCSJsSWFOGdTj0dAWKBG465YBDFEOOdBE/f0y821K00+yAVQCxZcMz7RLSZBoAThq65PzVAfShLlg/Gy8RNCH4WiOhNGtB6VmkLG3W2m9sGeLFlH8ORfriso6kNMOPmcgz1CaDLTUafpQhv65hnSiBumnXMBUW0DWCkYchG9ULgHfz+JwD1eXCseyC8YuC8qqn5byv7P3TNMyeQxSjTJuylUTutv8R3siHwOq4+AAAAAElFTkSuQmCC';
const colors = [
    '#377D2C',
    '#CCCCCC',
    '#CCCCCC',
    '#CCCCCC',
    '#CCCCCC',
    '#CCCCCC',
    '#CCCCCC',
    '#F7CA75',
    '#F7CA75',
    '#F7CA75',
];

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        show: true,
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (parmas, i) {
            return _data[parmas[0].dataIndex] > 0
                ? parmas[0].name + ' : ' + parmas[0].value
                : parmas[0].name + ' : -' + parmas[0].value;
        },
    },
    legend: {
        show: false,
    },
    grid: {
        left: '-10%',
        right: '10%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            splitLine: {
                show: false,
            },
            type: 'value',
            show: false,
        },
    ],
    yAxis: [
        {
            splitLine: {
                show: false,
            },
            axisLine: {
                //y轴
                show: false,
            },
            type: 'category',
            axisTick: {
                show: false,
            },
            inverse: true,
            data: [
                'OCBG 滤片',
                'OPBG ALPS',
                'OCBG 楼镜线',
                'OCBG 单反线',
                'OPBG 米兰线',
                'OPBG 光学',
                'OCBG 镀膜线',
                'BMBG 品园线',
                'OCBG 滤片线',
                'OPBG 滤线Cover',
            ],
            axisLabel: {
                color: '#aaa',
                fontSize: 14,
                margin: 145,
                textStyle: {
                    align: 'left',
                },
            },
        },
        // {
        //     type: 'category',
        //     inverse: true,
        //     offset: 10,
        //     axisTick: 'none',
        //     axisLine: 'none',
        //     show: true,
        //     data: _data,
        //     axisLabel: {
        //         textStyle: {
        //             color: '#000',
        //             fontSize: '12',
        //         },
        //     },
        // },
        {
            type: 'category',
            inverse: true,
            offset: 60,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#000',
                    fontSize: '12',
                },
                formatter: (param) => {
                    let index;
                    if (param > 0) {
                        index = 1;
                    } else {
                        index = 2;
                    }
                    return `{img${index}|}{value|${param}%}`;
                },
                rich: {
                    img1: {
                        height: 25,
                        backgroundColor: { image: imgUp },
                    },
                    img2: {
                        height: 25,
                        backgroundColor: { image: imgDown },
                    },
                },
            },
            data: _data,
        },
    ],
    series: [
        {
            name: '',
            type: 'bar',
            barWidth: 25, // 柱子宽度
            label: {
                show: false,
                position: 'right', // 位置
                color: '#000',
                fontSize: 24,
                distance: 12, // 距离
                formatter: function (value, i) {
                    return value[i];
                },
            }, // 柱子上方的数值
            itemStyle: {
                barBorderRadius: [0, 0, 0, 0], // 圆角（左上、右上、右下、左下）
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex];
                        // 取每条数据的 index 对应 colors 中的 index 返回这个颜色
                    },
                },
            },
            data: trueData,
        },
    ],
};
