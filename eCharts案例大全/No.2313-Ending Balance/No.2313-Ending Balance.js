option = {
    "title": [
        {
            "text": "Ending Balance",
            "left": "center",
            "top": "5%"
        },
        {
            "subtext": "('000 RMB)",
            "top": "10%",
            "x": "65%"
        }
    ],
    "legend": {
        "y": "90%"
    },
    "tooltip": {
        "trigger": "axis",
        "showContent": false
    },
    "dataset": {
        "source": [
            [
                "product",
                "2021"
            ],
            [
                "<1year",
                23784
            ],
            [
                "1-2years",
                4495
            ],
            [
                "2-3years",
                634
            ],
            [
                ">3years",
                0
            ]
        ]
    },
    "grid": {
        "left": "5%",
        "right": "20%",
        "bottom": "20%",
        "top": "20%",
        "containLabel": true
    },
    "series": [
        {
            "type": "pie",
            "id": "pie",
            "radius": "50%",
            "center": [
                "50%",
                "45%"
            ],
            "label": {
                formatter: function(v){
                    return '123'+' \n '+'456'
                }
            },
            "encode": {
                "itemName": "product",
                "value": "2021",
                "tooltip": "2021"
            }
        }
    ]
}