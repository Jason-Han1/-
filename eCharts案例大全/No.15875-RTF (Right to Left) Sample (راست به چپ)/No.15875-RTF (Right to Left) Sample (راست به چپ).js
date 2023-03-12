option = {
    title: {
        text: 'جدول',
    },
    xAxis: {
        data: ['دوشنبه', 'سه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه', 'یکشنبه'],
    },
    legend: {
        align: 'right',
        data: ['میانگین دما', 'میانگین رطوبت'],
        textStyle: {
            align: 'right',
            baseline: 'middle',
            fontFamily: 'IRANSans'
        }
    },    
    yAxis: {},
    series: [{
        name: 'میانگین دما',
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: 'میانگین رطوبت',
        type: 'line',
        data:[120, 82, 91, 34, 90, 30, 10]
    }]
};