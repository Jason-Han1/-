
let data=[
                {
                    name:"图一",
                    value:50,
                    icon:'hyacinth'
                },
                {
                    name:"图二",
                    value:50,
                    icon:'algae'
                },
                {
                    name:"图三",
                    value:50,
                    icon:'llegal'
                },
                {
                    name:"图四",
                    value:50,
                    icon:'quality'
                },
            ];
let pos;
let seriesArr = [];
let titleArr = [];
 data.map((item, index) => {
            pos=data.length==4?index * 25 + 12:(data.length==1?30:index * 26 + 25)
            titleArr.push(
                {
                    text: item.name,
                    left: pos + '%',
                    top: '45%',
                    textAlign: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: '14',
                        color: "#d0e3ee",
                        textAlign: 'center',
                    },
                }
            );
            seriesArr.push({
                    name: item.name,
                    type: 'gauge',
                    z: 3,
                    min: 20,
                    max: 200,
                    splitNumber: 1,
                    radius: '40',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 2,
                            color:[[1,'#3882C5']],
                            shadowColor: '#3882C5',
                            shadowBlur: 8,
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        length: 5, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: 'auto',
                            width: 2
                        }
                    },
                    axisLabel: {
                        color: '#3882C5',
                        fontSize: 12
                    },
                    splitLine: { // 分隔线
                        length: 5, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto',
                            width: 2
                        }
                    },
                    title: {
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color:'#000'
                        }
                    },
                    // 指针
                    pointer: {
                        length: '70%',
                        width: '4%'
                    },
                    detail: {
                        formatter: '{value}',
                        offsetCenter: [0, '80%'],
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bold',
                            backgroundColor:'#3882C5',
                            color: '#fff',
                            fontSize: 12,
                        }
                    },
                    center: [pos + '%', '40%'],
                    data: [{
                        value: item.value,
                        name:'次数'
                    }]
            })
        })



option = {
    title: titleArr,
    series: seriesArr
};