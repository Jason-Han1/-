option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['FPN-3x', 'FPN-1x', 'C4', 'FPN-3x-with less anchor box', 'FPN-3x-with data augmentation', 'FPN-3x-with multiwarmup']
            },
            dataZoom: [
                {
                    type: 'slider',
                    yAxisIndex: 0,
                    filterMode: 'empty'
                },
                {
                    type: 'inside',
                    yAxisIndex: 0,
                    filterMode: 'empty'
                }
            ],
            xAxis: 
                {
                    type: 'category',
                    data: ['AP', 'AP50', 'AP75', 'APs', 'APm', 'APl']
                },
            
            yAxis: 
                {
                    type: 'value',
                },
            
            series: [
                {
                    name: 'FPN-3x',
                    type: 'line',
                    data: [47.579, 82.514, 48.682, 39.021, 50.524, 50.547]
                },
                {
                    name: 'FPN-1x',
                    type: 'line',
                    data: [47.152, 81.592, 48.428, 37.673, 50.366, 48.473]
                },
                {
                    name: 'C4',
                    type: 'line',
                    data: [43.701, 77.595, 44.654, 32.112, 47.250, 49.071]
                },
                {
                    name: 'FPN-3x-with less anchor box',
                    type: 'line',
                    data: [43.355, 75.927, 46.235, 34.542, 46.575, 37.906]
                },
                {
                    name: 'FPN-3x-with data augmentation',
                    type: 'line',
                    data: [45.220, 79.295, 47.398, 34.106, 48.527, 48.507]
                },
                {
                    name: 'FPN-3x-with multiwarmup',
                    type: 'line',
                    data: [45.272, 81.489, 46.054, 35.275, 48.326, 47.246]
                },
            ]
        };