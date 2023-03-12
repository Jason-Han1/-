option = {
    "xAxis": {
        "type": "category"
    },
    "yAxis": {
        type: 'value'
    },

    "dataset": {
        "source": [{
                "xDim": 'A',
                "yDim": 820
            },
            {
                "xDim": 'B',
                "yDim": 932
            },
            {
                "xDim": 'C',
                "yDim": 901
            },
            {
                "xDim": 'D',
                "yDim": 934
            },
            {
                "xDim": 'E',
                "yDim": 1290
            },
            {
                "xDim": 'F',
                "yDim": 1330
            },
            {
                "xDim": 'G',
                "yDim": 1320
            },
        ]
    },
    "series": {
        "name": "y",
        "type": "line",
        "encode": {
            "x": "xDim",
            "y": "yDim"
        },
    }
}

app.count = 11;
setInterval(function() {
    data = {
        xDim: app.count++,
        yDim: Math.random() * 100,
    };

    option.dataset.source.shift();
    option.dataset.source.push(data);

    myChart.setOption(option);
}, 2100);