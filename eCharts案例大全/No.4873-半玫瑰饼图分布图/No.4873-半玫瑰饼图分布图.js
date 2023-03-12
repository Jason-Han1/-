//  半玫瑰饼图分布图
 let series = [
     {name: "一线", value: "10.05"},
     {name: "新一线", value: "48.50"},
     {name: "二线", value: "11.69"},
     {name: "三线", value: "29.74"},
     {name: "三线以下", value: 0}
     ] 
        let color =  ['#C993D5', '#4BB0FD', '#52B8C9', '#FAC633', '#E67A72'];
        let aUnit = ['%'];
        let legend = series.map(item => item.name);

        series = series.sort((a,b)=>{
            return a.value-b.value;
        });
        

        let lineDatas = [];
        for (var i = 1; i < 7; i++) {
            let item = {
                name: '半圆',
                type: 'pie',
                radius: [(i * 25 - 0.5) + '%', i * 25 + '%'],
                center: ["50%", "75%"],
                startAngle: -180,
                hoverAnimation: false,
                legendHoverLink: true,
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: '40',
                    name: '半圆',
                    itemStyle: {
                        normal: {
                            color: '#E9E9E9'
                        }
                    }
                },
                {
                    value: '40',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
                ]
            }
            lineDatas.push(item);
        };
        let seriesitem1 = series.map((sery, ind) => {
            let item1 = {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false
                    }

                }
            }
            return item1;
        });
        let seriesitem2 = series.map((sery, ind) => {
            let { value, name } = sery;

            let item2 = {
                "value": value,
                "name": name,
                label: {
                    normal: {
                        rotate: 170,//文字旋转角度，新版本只能单独设置
                        show: false
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": color[ind],
                        borderWidth: 5,
                        borderColor: "#fff",
                    }
                }
            }
            return item2;
        });

        let seriesOption = [
            ...lineDatas,
            {
                "name": '分布'||'',
                "type": "pie",
                "radius": ['20px', '100%'],
                // radius: [20, 95],
                "avoidLabelOverlap": false,
                "startAngle": 0,
                "center": ["50%", "75%"],
                "roseType": "area",
                "selectedMode": "single",
                "label": {
                    "normal": {
                        "show": true,
                        "formatter": "{c}/月",
                        position: 'inside',
                    },
                    "emphasis": {
                        "show": true
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": false,
                    }
                },
                data: [...seriesitem1, ...seriesitem2]
            }
        ];

option = {
    backgroundColor: '#071729',
    title: {
        text: ''
    },
    color: color,
    legend: {
        type: 'scroll',
        data: legend,
        bottom: 5,
        itemWidth: 11,
        itemHeight: 6,
        itemGap: 20,
        textStyle: {
            color: '#8998AC',
            fontSize: 12
        }
    },
    grid: {
        top: '40',
        left: '30',
        right: '30',
        bottom: '45',
        containLabel: true
    },
    "tooltip": {
        "trigger": "item",
        confine: true,
        backgroundColor: '#fff',
        textStyle: {
            color: '#8998AC',
            fontSize: 10,
        },
        borderColor:'rgba(102, 107, 127, 0.1)',
        borderWidth:1,
        axisPointer:{
            shadowStyle :{
                shadowColor: '0px 5px 7px -3px rgba(0, 0, 0, 0.13)',
            }
        },
        formatter: '{a} <br/>{b} : {c}'+aUnit[0],
        position: function (point, params, dom, rect, size) {
            // 固定在顶部
            // return [point[0], '10%'];
            var obj = { top: '10%' };
            let pst = (point[0] < size.viewSize[0] / 2) ? 'right' : 'left'
            if (pst == 'left') {
                obj.right = size.viewSize[0] - point[0] + 15
            } else {
                obj.left = point[0] + 15
            }
            return obj

        }
    },
    "series": seriesOption,
}