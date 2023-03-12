option = {
    title: {
        top:150,
        text: 'Evaluation Scores of current system and predictive system',
        subtext: '2020 --- 2040',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: [20, 140],
            center: ['25%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: true
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 0.6602, name: 'USA'},
                {value: 0.5045, name: 'France'},
                {value: 0.4620, name: 'Uk'},
                {value: 0.4045, name: 'Australia'},
                {value: 0.3953, name: 'Germany'},
                {value: 0.3571, name: 'China'},
                {value: 0.3581, name: 'Canada'},
                {value: 0.324, name: 'Russia'},
                {value: 0.1767, name: 'India'},
                {value: 0.1610, name: 'SouthAfrica'},
                {value: 0.1394, name: 'Mongolia'},
                
                
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [20, 140],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                 {value: 0.664, name: 'USA'},
                {value: 0.4922, name: 'France'},
                {value: 0.4340, name: 'Uk'},
                {value: 0.42413, name: 'Australia'},
                {value: 0.3540, name: 'Germany'},
                {value: 0.3666, name: 'China'},
                {value: 0.3782, name: 'Canada'},
                {value: 0.2962, name: 'Russia'},
                {value: 0.3354, name: 'India'},
                {value: 0.1710, name: 'SouthAfrica'},
                {value: 0.1494, name: 'Mongolia'},
            ]
        }
    ]
};