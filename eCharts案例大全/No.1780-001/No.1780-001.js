option = {
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        x: '9%',
        y: '15%',
        x2: '3%',
        y2: '25%',
    },
    legend: {
        show: true,
        right: '5%',
        top: '8%',
        icon: 'rect',
    },
    calculable: false,
    xAxis: [
        {
            type: 'category',
            data: ['一级', '二级', '三级', '四级', '五级', '普调'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#979797',
                    width: 1,
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#3a70c3',
                    width: 2,
                },
            },
            axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                    color: '#000',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#E6E6E6',
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            position: 'left',
            min: 0,
            max: 100,
            interval: 20,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#979797',
                    width: 1,
                },
            },
            axisLabel: {
                show: true,
                // margin: 15,
                // formatter: '{value}件',
                textStyle: {
                    color: '#000',
                    fontSize: 12,
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#979797',
                    width: 1,
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#1c2a60',
                    type: 'solid',
                },
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['#fff', '#F5F6FA'],
                },
            },
        },
    ],
    dataZoom: [
        {
            show: true,
            height: 10,
            xAxisIndex: [0],
            bottom: '8%',
            start: 50,
            end: 90,
            handleIcon:
                'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '10%',
            handleStyle: {
                color: '#d3dee5',
            },
            textStyle: {
                color: '#333',
            },
            borderColor: '#1890ff',
        },
        {
            type: 'slider',
            backgroundColor: '#C4E1FF',
            borderColor: '#C4E1FF',
            bottom: '8%',
            xAxisIndex: [0],
            start: 0,
            end: 40,
            height: 10,
            /* 这里的单引号需要写成模板字符串 */
            handleIcon: `image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYBAMAAAAIZcBFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEX///8ylvsylvkylvky
lvsxlvoxlfoxmPsylfsxlflrs/ro8/7///8fKazUAAAACXRSTlMAPbLmev79Pnv0jrGrAAAAAWJL
R0QAiAUdSAAAAAd0SU1FB+UFEgEhI5eXPlMAAABWSURBVBjTY2BAAozKM4HASADIdJ0JBikMDOyh
EGaYAAPTTChQYGCGMQ0YOGeuPgMEu2ZOADL3gJin0ZlICqCAKCbx5iI5B8mRjKlwpzO0wT2E7E04
AACGLHPkoj75gAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0xN1QxNzozMzozNSswODowMNTL
hjkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMTdUMTc6MzM6MzUrMDg6MDCllj6FAAAAIHRF
WHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1
bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADI02IxsgAAAABZ0
RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAyMCdOaBQAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFn
ZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyMTI0NDAxNbgGJvgAAAARdEVYdFRodW1i
OjpTaXplADIxNUJCehoI6gAAAEZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2Vs
Yy9pbWd2aWV3Ml85XzE2MDk5MDI3OTk1OTU2ODc4XzI3X1swXcuiL5MAAAAASUVORK5CYII=`,
            handleSize: '150%',
            fillerColor: '#3195F9',
            textStyle: {
                color: '#666',
            },
            dataBackground: {
                lineStyle: {
                    color: 'transparent',
                },
                areaStyle: {
                    color: 'transparent',
                },
            },
        },
    ],
    series: [
        {
            name: '来源分类',
            type: 'bar',
            barWidth: '10px',
            data: [70, 50, 60, 40, 70, 50],
            itemStyle: {
                normal: {
                    color: '#2777ec',
                },
            },
            label: {
                show: true,
                position: 'top',
              
                backgroundColor:{
                      width:30,
                height:30,
                    image:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAAAAXNSR0IArs4c6QAAATJJREFUOE/tlL1KA1EQhb/Z+LOCP8QNlhIwksJWsUjpK2gf8wJ27gqCWAiJlY12KoidYGmlr6AEm8TCvEAippMk3pEbjIQQsoGsXW43wz3fHA5zrySP1J3++siD7gLzjHIURXgXZb90mriXtF87A90bhdmrVeVbY2Qk7VfrIzvu50y5sHCN0nUX63YM75fsOJa++/bvsdQaoJPR77pc2+f/CLoVOVwlJ2tBPdXS5gOwGtUAgZtSwcuKBSazFXdqaS7jwIKtjcPflyDKAbDRO1hwzo2YJ9t3DG2OicUMhspbIV60dbs56KwE9dSENl+A2a57z2XX2+RYWoO0oXArTge1HKqXv6CG4KyXCouvYcaGgrcH+NU7YBvhsJxPnISBh4qlA1kOPuMz2roqu95OWBwdzQ9GDm5vQmXQPwAAAABJRU5ErkJggg==`
                }
            },
        },
    ],
};
