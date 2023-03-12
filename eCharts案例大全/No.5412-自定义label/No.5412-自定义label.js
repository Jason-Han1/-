var labelOption = {
    show: true,
    // position: 'top',
    position: [-7, -5],
    distance: 0,
    formatter: [
        '{a|}'
    ].join('\n'),
    rich: {
        a: {
            backgroundColor: {
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAMAAAC+Ge+yAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAANlBMVEUg/fog/fog/fog/fog/fog/fog/fog/fog/fog/fog/fog/fog/fog/fog/fog/fog/foAAADd49JDAAAAEHRSTlMAqRXpVP2HxzLmWwH5DLIkJGTo2wAAAAFiS0dEEeK1PboAAAAHdElNRQfkChYTKieqwoe8AAAANUlEQVQI12NgZGKAAAFmFihDQAAiCGRABAXAACgIYbCyQRjsHGApTi5ukBoeNl6wdj5+iDEAYtACXNh6H+QAAAAASUVORK5CYII='
            },
            height: 10,
        }
    }
};
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        },
        label: labelOption
    }]
};
