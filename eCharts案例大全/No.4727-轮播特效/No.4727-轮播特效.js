option = {
    "title": {
        "text": "asdas",
        "textStyle": {
            "color": "#898989",
            "fontSize": 14
        }
    },
    "color": ["#3366ff", "#73e2e2", "#ff7e85", "#9b52ff", "#fac524", "#46caff", "#a1e867", "#10b2b2", "#ec87f7", "#f4905a", "#00baba", "#facf24", "#e89d67", "#23c6c6", "#fa8699", "#40b7fc", "#006d75", "#595959", "#f4764f", "#a640fc", "#fda23f", "#2d7ae4", "#5092ff", "#9351ed", "#8a89fe", "#df89e8", "#2797ff", "#6ad089", "#7c92e8 "],
    "legend": {
        "data": ["cusername"],
        "left": "center",
        "itemWidth": 10,
        "itemHeight": 10,
        "itemGap": 10,
        "textStyle": {
            "color": "#898989",
            "lineHeight": 15
        }
    },
    "tooltip": {
        "backgroundColor": "#fff",
        "trigger": null,
        "textStyle": {
            "color": "#898989",
            "lineHeight": 28
        },
        "confine": true,
        "padding": 12,
        "extraCssText": "box-shadow: 0px 2px 8px 0px #cacaca;border-radius: 4px;opacity: 0.9;max-height: 100%;"
    },
    "grid": {
        "left": 0,
        "right": 0,
        "top": "25%",
        "bottom": "13%"
    },
    "series": [{
        "center": ['50%', '50%'],
        "radius": ['25%', '40%'],
        "name": "cusername",
        "data": [{
            "name": "admin",
            "value": 2
        }, {
            "name": "admin01",
            "value": 2
        }, {
            "name": "admin010",
            "value": 1
        }, {
            "name": "admin03",
            "value": 1
        }, {
            "name": "admin05",
            "value": 1
        }],
        "type": "pie",
        "smooth": true,
        "barWidth": 25,
        "smoothMonotone": "x",
        "cursor": "pointer",
        "showSymbol": false,
        "lineStyle": {
            "shadowColor": "#898989",
            "shadowBlur": 10
        },
        "label": {
            "normal": {
                "show": true,
                "fontSize": 14,
                "color": "#898989",
                "position": "right"
            }
        }
    }]
};
let index = 0,
    timerId = "",
    len = option.series[0].data.length;

const dynamic = () => {
    timerId = setInterval(() => {
        if (index >= len) index = 0
        if (index !== 0) option.series[0].data[index - 1].selected = false
        if (index === 0) option.series[0].data[len - 1].selected = false

        option.series[0].data[index].selected = true;
        option.title.text = option.series[0].data[index].name;
        option.title.subtext = `${
          option.series[0].data[index].value
        } 起`;
        index++;
        myChart.setOption(option);
    }, 2000)
}
dynamic()