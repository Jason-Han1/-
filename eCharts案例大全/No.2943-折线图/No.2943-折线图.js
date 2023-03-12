option = {
    "color": ["#123dac", "#73e2e2", "#ff7e85"],
    "title": {
        show:false
    },
    "legend": {
        show:true
    },
    "tooltip": {
        "backgroundColor": "#fff",
        "trigger": "axis",
        "axisPointer": {
            "type": "none"
        },
        "textStyle": {
            "color": "#565656",
            "lineHeight": 28
        },
        "confine": true,
        "padding": 12,
        "extraCssText": "box-shadow: 0px 2px 8px 0px #cacaca;border-radius: 4px;opacity: 0.9;max-height: 100%;",
        "formatter": function (params) {
            let html=params[0].name+"<br>";
            for(let i=0;i<params.length;i++){
                html+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+params[i].color+';"></span>'
                html+=params[i].seriesName+":"+params[i].value+"%<br>";
            }
            return html;
        }
    },
    "grid": {
        "left": 50,
        "right": 50,
        "top": 100,
        "bottom": 100
    },
    "xAxis": {
        "type": "category",
        "boundaryGap": false,
        "data": ["2020-05-11", "2020-05-12", "2020-05-13", "2020-05-14", "2020-05-15"],
        "axisLine": {
            "show": true
        },
        "axisTick": {
            "show": true
        }
    },
    "yAxis": {
        "name": "",
        "type": "value",
        "minInterval": 1,
        "axisLine": {
            "show": true
        },
        "axisLabel": {
            "show": true,
            "formatter": '{value} %'
        },
        "axisTick": {
            "show": true
        }
    },
    "series": [{
        "name": "白起",
        "data": [43, 58, 15, 29, 20],
        "type": "line",
        "smooth": true,
        "smoothMonotone": "x",
        "cursor": "pointer",
        "showSymbol": false,
        "lineStyle": {
            "shadowColor": "rgba(18,61,172,0.5)",
            "shadowBlur": 10
        }
    }, {
        "name": "李泽言",
        "data": [23, 39, 18, 71, 16],
        "type": "line",
        "smooth": true,
        "smoothMonotone": "x",
        "cursor": "pointer",
        "showSymbol": false,
        "lineStyle": {
            "shadowColor": "rgba(115,226,226,0.5)",
            "shadowBlur": 10
        }
    }, {
        "name": "许墨",
        "data": [20, 37, 91, 72, 68],
        "type": "line",
        "smooth": true,
        "smoothMonotone": "x",
        "cursor": "pointer",
        "showSymbol": false,
        "lineStyle": {
            "shadowColor": "rgba(255,126,133,0.5)",
            "shadowBlur": 10
        }
    }]
}