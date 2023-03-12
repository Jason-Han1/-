var datas = ['17:35', '17:35', '17:30', '17:42', '17:36', '17:35', '16:22'];
let ydata = [];
datas.forEach((item) => {
    if (ydata.indexOf(item) === -1) {
        ydata.push(item);
    }
});

option = {
    xAxis: {
        type: 'category',
        data: ['2021-08-26', '2021-08-27', '2021-08-30', '2021-08-31', '2021-09-01', '2021-09-02', '2021-09-03'],
    },
    yAxis: {
        type: 'category',
        data: ydata.sort(),
    },
    series: [
        {
            data: datas,
            type: 'line',
        },
    ],
};
