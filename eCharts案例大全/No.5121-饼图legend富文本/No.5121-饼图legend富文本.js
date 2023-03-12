option = {
    "title": {
        "text": "",
        "left": "center",
        "textStyle": {
            "fontSize": 20,
            "color": "rgb(85,85,85)"
        }
    },
    "legend": {
        "show": true,
        "type": "scroll",
        "orient": "vertical",
        "x": "right",
        "y": "center",
        "icon": "rect",
        "align":"left",
        "itemWidth":14,
        "formatter": function(name) {
            let target = 0;
            let sum = 0;
            let data = option.series[0].data;
            data.forEach(item => {
                sum += item.value;
                if (item.name === name) {
                    target = item.value;
                }
            })
            let ratio = (target / sum * 100).toFixed(2);
            let arr = [
                '{a|'+name+' }',
                '{b|'+  ratio +'%}',
            ];
            return  arr.join('');
        },
        "textStyle":{
                "rich":{
                    a:{
                        color: 'red'
                    },
                    b:{
                        "fontSize":18,
                        "fontStyle": 'italic',
                    }
                }
            
        },
        "data": ["男", "女"]
    },
    "color": ["#2f81f2", "#bc58ef", "rgba(255,255,255,.5)"],
    "series": [
    {
        "name": "xbmc",
        "type": "pie",
        radius: ['30%', '46%'],
        "label": {
            "normal": {
                "show": false
            }
        },
        "data": [{
            "name": "男",
            "value": 72537
        },
        {
            "name": "女",
            "value": 43990
        }]
    },
    {
        "type": "pie",
         radius: ['30%', '36%'],
         silent: true,
        "data": [{
            "name": "",
            "value": 1
        }]
    }]
}