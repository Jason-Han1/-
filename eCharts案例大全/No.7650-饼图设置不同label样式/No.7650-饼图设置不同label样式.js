data = [{
        value: 100,
        name: '湖北'
    },
    {
        value: 50,
        name: '湖南'
    },
    {
        value: 20,
        name: '河南'
    },
    {
        value: 20,
        name: '浙江'
    },
    {
        value: 100,
        name: '江西'
    }
];
total = 0;
radiusData = ['38%', '45%'];
optionColor = ['#ff2c2c', '#ed8218', '#edc718', '#239dac', '#55ac3d'];
pieTopBg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAMCAYAAABGFRI7AAAAsUlEQVRYhe3VIQ7CQBBA0U9BrKAEU8MFIHU4agmoOtLLcAFuUMMV2htg6vYOqPqViG2TCrJJL9GdeUeYn5lZ1XUNcARewB1IUUv3Az7A0zn33QAnwLZtu7fWMgyDFl44Y0xaFMWjqqprlmWXdVmW76Zpzl3XMU2T9PlEIXTs+x7vvcnz/JCEEx02WMVn7noLkbfjOGriCM2vd5dIH4QEGlkAjSyARhZAIwugkQXQyLED/rKmMMxlQhtWAAAAAElFTkSuQmCC';
pieBottomBg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAMCAYAAABGFRI7AAAAnUlEQVRYhe3ToQ1CMRCA4R8QrWILVCeoqcLVPkPCIIzAAp0GlkAzQEUNeUFUNIFcwhL07ktugLs/RynlA9hMOtJ3i5meRVbAIitgkRWwyApYZAUssgIS+e2c036HKXnvZa1VIt9ijNrvMaVf1/su5/wIIZx7777WyhhD+23+nnxwSollWV7AaVNKkZ0OwBU4AnvtR5rAKh8MXFprzy/6bJe7L7EWVQAAAABJRU5ErkJggg==';
data.forEach((item, index) => {
    total += item.value;
});
option = {
    title: {
        text: '饼图设置不同label样式',
        top:20,
        left:'center',
        textStyle:{
            color:'#fff',
            fontSize:20
        }
    },
    color: optionColor,
    backgroundColor: '#061326',
    series: [{
        name: '使用占比',
        type: 'pie',
        radius: radiusData,
        center: ['42%', '50%'],
        data: data,
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        labelLine: {
            show: false,
            length: 14,
            length2: 0
        },
        label: {
            formatter: function(params) {
                var tooltipText = '';
                var ratio = (params.value / total * 100).toFixed(2);
                if (params.dataIndex === 0) {
                    tooltipText = '{a|' + params.name + '}\n{b|' + ratio + '%}';
                    return tooltipText;
                } else {
                    return '{c|' + params.name + '}' + '\n' + ratio + '%';
                }
            },
            textStyle: {
                rich: {
                    a: {
                        width: 60,
                        padding: [4, 4],
                        color: '#cdcdcd',
                        fontSize: 12,
                        align: 'right',
                        backgroundColor: {
                            image: pieTopBg
                        }
                    },
                    b: {
                        width: 60,
                        padding: [2, 4],
                        align: 'right',
                        fontSize: 12,
                        color: optionColor[0],
                        backgroundColor: {
                            image: pieBottomBg
                        }
                    },
                    c: {
                        color: '#cdcdcd'
                    }
                }
            }
        }
    }]
};