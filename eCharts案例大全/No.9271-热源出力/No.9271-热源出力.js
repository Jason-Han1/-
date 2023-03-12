var height = document.querySelector('#chart-panel').offsetHeight;
var width = document.querySelector('#chart-panel').offsetWidth;
var radiusMax = width >= height ? height : widht;
console.log(width);
var data = {
    title: '雷达图',
    ratioData: [{
            value: '95',
            name: '二电三期'
        },
        {
            value: '90',
            name: '二电二期'
        },
        {
            value: '85',
            name: '二电一期'
        },
        {
            value: '63',
            name: '二电南线'
        },
        {
            value: '48',
            name: '大唐一期'
        },
        {
            value: '35',
            name: '大唐二期'
        }
    ]
};
var indicator = [];
var showData = [];
if (data.title !== undefined) {
    data.ratioData.map(item => {
        indicator.push({
            name: item.name,
            max: 100

        });
        showData.push(Number(item.value));
    });
}

option = {
    // backgroundColor: "#000",
    title: {
        
         text: '热源出力',
        subtext:'345',
        left: 'center',
        top:'46.3%',
        textStyle: {
            color:'#fcaf17',
            fontWeight:'normal',
            fontSize: 18
        },
        subtextStyle:{
            color:'#f47a55',
            fontWeight:'normal',
            fontSize: 16,
            lineHeight:8
        }
    },
    radar: {
        indicator: indicator,
        // shape: "circle",
        center: ["50%", "53%"],
        radius: "85%",
        splitNumber: 5,
        splitArea: {
            areaStyle: {
                color: ['#d1c7b7',"#d9d6c3", '#f6f5ec', '#fffef9', '#fffffb']
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                opacity: 1,
                color: "#263c5f",
                width: 3,
            }
        },
       
          axisLine: {
            lineStyle: {
                color: '#8f4b4a'
            }
        },
       
        name: {
            show: false,
            //   formatter: '{value}',
            // textStyle: {
            //     color: '#a7a7a7'
            // },
            // fontSize: 20
              
        }
    },
    series: [{
        name: data.title,
        type: "radar",
        symbolSize: 0.1,
        areaStyle: {
            normal: {
                opacity: 1,
                color: new echarts.graphic.RadialGradient(width / 2, height / 2, radiusMax * 0.3, [{
                    offset: 0,
                    color: 'rgb(61, 171, 204,0.2)'
                }, {
                    offset: 1,
                    color: 'rgb(61, 171, 204,1)'
                }], true),
            }
        },
        lineStyle: {
            width: 0,
        },
        label: {
            normal: {
                show: true,
                position: "top",
                formatter: (params) => {
                    let dataIndex = params.data.indexOf(params.value);
                    let rang = `NO.${dataIndex+1}`;
                    let value = `${params.value}%`;
                    let name = indicator[dataIndex].name;
                    let text = '';
                    if (dataIndex < 6) {
                        text = `{value|${value}}{rang|${rang}}{name|${name}}`;
                    } else {
                        text = `{name|${name}}{value|${value}}`;
                    }
                    return text;
                },
                rich: {
                    rang: {
                        color: "#ed1941",
                        fontSize: 13,
                    },
                    value: {
                        color: "#00FFFF",
                        fontWeight: 700,
                        fontSize: 16,
                    },
                    name: {
                        color: "#8f4b38",
                        padding: [0, 5],
                        fontSize: 18
                    }
                }
            }
        },
        data: [showData],
    }]
};

var chart = document.getElementById('chart-panel');
echarts.init(chart);