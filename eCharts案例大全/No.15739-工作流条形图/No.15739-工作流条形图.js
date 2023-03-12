let result = [];
for (let i = data.length - 1; i >= 0; i--) {
    result.push(data[i]);
}

data = result;
option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var res = params[0].name + "</br>";
            var date0 = params[0].data;
            var date1 = params[1].data;
            date0 = date0.getFullYear() + "-" + (date0.getMonth() + 1) + "-" + date0.getDate();
            date1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate();

            res += params[0].seriesName + "~" + params[1].seriesName + ":</br>" + date0 + "~" + date1 + "</br>";

            console.log(params[0]);
            return res;
        }

        // formatter: '{b}: {c}<br/>{b1}: {c1}'
    },
    legend: {
        y: 'bottom',
        data: ['实际时间'] //修改的地方1javascript:;
    },

    xAxis: {
        type: 'time'
    },
    yAxis: {
        data: ['    Literature review', '    Research training', '    Select and prepare data (4.2.1)', '    Establish optimization objective (4.2.2)', '    Mathematical reason and program (4.2.3)', '    Evaluate and improve performance (4.2.4)', '    Write paper', '    Select and prepare data (4.3.1)', '    Establish optimization objective (4.3.2)', '    Mathematical reason and program (4.3.3)', '    Evaluate and improve performance (4.3.4)', '    Write paper', '    Select and prepare data (4.4.1)', '    Learn related definition (4.4.2)', '    Implement maximum-weight clique search ', '    Evaluate and improve performance (4.4.4)', '    Write paper', '    Complete PHD thesis']
    },
    series: [{
            name: '实际开始时间',
            type: 'bar',
            stack: 'test2',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [
                new Date("2021/8/1"),
                new Date("2021/8/1"),
                new Date("2021/11/1"),
                new Date("2021/12/1"),
                new Date("2022/2/1"),
                new Date("2022/6/1"),
                new Date("2022/8/1"),
                new Date("2022/9/1"),
                new Date("2022/10/1"),
                new Date("2022/12/1"),
                new Date("2023/4/1"),
                new Date("2023/6/1"),
                new Date("2023/7/1"),
                new Date("2023/8/1"),
                new Date("2023/10/1"),
                new Date("2024/2/1"),
                new Date("2024/3/1"),
                new Date("2024/4/1")
            ]
        },
        {
            name: '实际时间',
            type: 'bar',
            stack: 'test2',
            //修改地方3
            itemStyle: {
                normal: {
                    color: '#F98563'
                }
            },
            data: [
                new Date("2022/8/1"),
                new Date("2022/8/1"),
                new Date("2022/11/1"),
                new Date("2022/12/1"),
                new Date("2023/2/1"),
                new Date("2023/6/1"),
                new Date("2023/8/1"),
                new Date("2023/9/1"),
                new Date("2023/10/1"),
                new Date("2023/12/1"),
                new Date("2024/4/1"),
                new Date("2024/6/1"),
                new Date("2024/7/1"),
                new Date("2024/8/1"),
                new Date("2024/10/1"),
                new Date("2025/2/1"),
                new Date("2025/3/1"),
                new Date("2025/4/1")
            ]
        }
    ]
};