var data = 333;//数值大小

var color = getDayColor(data);

function getDayColor(data){
    if(data<= 50){return '#34e1ab'}
    if(data<= 55){return '#f8f430'}
    if(data<= 60){return '#f89e30'}
    if(data<= 65){return '#fa4b53'}
    if(data> 65){return '#c43139'}
}

function getNightColor(data){
    if(data<= 40){return '#34e1ab'}
    if(data<= 45){return '#f8f430'}
    if(data<= 50){return '#f89e30'}
    if(data<= 55){return '#fa4b53'}
    if(data> 55){return '#c43139'}
}



option = {
    title: {
        top:'40%',
        left:'center',
        textStyle:{
            color: '#fff',
            fontSize: 18
        }
    },
    "color": [color],
    "series": [{
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["48%", "50%"],
        "hoverAnimation": false,
        "itemStyle": {
            "shadowColor": color,
            "shadowBlur": 20
        },
        "data": [{
            "name": "",
            "value": data,
            "label": {
                "show": true,
                "position": "center",
                "color": color,
                "fontSize": 38,
                "fontWeight": "bold",
                "formatter": function(o){
                    return data
                }
            }
        } ]
    }]
}