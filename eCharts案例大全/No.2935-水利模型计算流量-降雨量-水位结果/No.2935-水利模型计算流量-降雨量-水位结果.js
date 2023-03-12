option = {
    color: ['#33a1ff', '#ffae00', '#00fcff', '#04e28c'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
            },
        },
    },
    grid: {
        left: '5%',
        top: 40,
        right: 150,
        bottom: 60,
    },
    dataZoom: [
        {
            type: 'slider',
            show: true,
            height: 20,
            bottom: '0%',
            start: 0,
            end: 100,
        },
        {
            type: 'inside',
        },
    ],
    legend: {
        data: ['魏桥降雨量', '魏桥预报水位', '魏桥计算流量'],
        top: 10,
        left: 180,
    },
    xAxis: {
        data: [
            '2021/06/25\n08',
            '2021/06/25\n08',
            '2021/06/25\n09',
            '2021/06/25\n09',
            '2021/06/25\n10',
            '2021/06/25\n10',
            '2021/06/25\n11',
        ],
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: '#ccc',
                // color: '#3d5269',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                // color: 'white', //X轴文字颜色
                fontSize: 14,
            },
            // interval: 0,
            rotate: 0,
            offset: 30,
        },
    },
    yAxis: [
        {
            type: 'value',
            name: '流量(m³/s)',
            axisTick: {
                show: true,
            },
            axisLine:{
                show:true,
            }
        },
        {
            type: 'value',
            name: '降雨量(mm)',
            nameLocation: 'start',
            inverse: true,
            axisTick: {
                show: true,
            },
             axisLine:{
                show:true,
            },
            max: 5,
        },
        {
            type: 'value',
            name: '水位(m)',
            offset: 60,
            axisTick: {
                show: true,
            },
             axisLine:{
                show:true,
            }
        },
    ],
    series: [
        {
            name: '魏桥降雨量',
            type: 'bar',
            barWidth: '30%',
            data: ['1.899', '1.013', '2.026', '1.342', '2.684', '0.983', '1.965'],
            yAxisIndex: 1,
        },
        {
            type: 'line',
            showAllSymbol: true,
            symbolSize: [30, 30],
            symbolOffset: ['0', '-15'],
            symbolRotate: 0,
            label: { normal: { show: true } },
            name: '',
            tooltip: { show: true, trigger: 'item', formatter: '右侧' },
            data: [null, 7.834, null, null, null, null, null],
            symbol:
                'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAE2ElEQVRYhc2ZfWhWVRzHP67NsiSNsFb0IitKM7Vaac4s2iRtmRDlyjSycojYIJRRVFosikBKIlf2stQoXAt6sdJCpy1clMnWC5kb+VIQTCsZNCEjM76757p77+5z77n3eZ7p96/n3Of8zvme3/md38s5g44uJhsUAhOA64FxwCXAmcAwM+ZfwEGgA9gJtABfAYeznTQNJgP3AlUegmE4A7gAuMLzXw/wPrAWaE4zeUHC/uXAF8A2oDqGcCYMBe4BNgM7gFvzRfpc4B2jmSkpiGZCKbAe+AQoySXpacC3xhTyhUqgHZiVC9IPARuBEXkk7OJ0oAl4Kq5jFGkJrwAG5ZxeNB4HVkbNm4n0I0b4eGER8EwS0tOjBAYQUtwcG9LnAG+mMokbn4Oa7+z7Vrfa9FxlApYPQdL1GQ/dxKVQuxuKy8NJzFgMI8c5fYb2m6d/31FlziKj+jo+vSGoRC/pCuC2UNHbm6CqDopLoLbZWYAXl0/ta6jPwo3Ri3OhRV6zIIq0cF3Q3XpJP5FRrHUVdO3pa2sB3u19cTzs+95PvHqdn3jl637CwsfPw9YlcaSFZV6u7o9JkZGuawssvwh2fdn3beR4v8aDxE85DUaMNosoh9JAtLYnLFwGzHAbJz056dhKSmNF296AwvOhoBBWz4OOtf7/d26B0bdA4WBomA8dq53vPXuhsw3G3OwspmkZbHvMlrCLU4FG/VZqWgQcAIYnHaV3yyseSCwWiiWxDusf4GygW+ZRlorwwGMwcAPGpuOztpK7YOl+R7PHF72kZR5NkdmVDpu8hYu/D0FrI2yYH764OS/A8LMcu/3ak/t43Z0O9Lr7oKczqQY2ATeJ9I7YQyj3pmDgRXODn3iYfbt95D1qQ4qU4Bjx+BW4sMAq7XxtsjOBi/bP+iYbu8iJgkHC3j5ymfWz/S5RkIxkNYYdlGb0msdBU8vFQ6Yy4Q7HJ2uia+/uvwPdB+CDOvihPnw4jTHzYcf1eWHvt08W6e5UtZ62XFFP9utC2n1rup383E/hymnOby10xRRbGx8i0r+YijkeykGEzhZHkyJes76/1pJCprOn0UboX6BINv2n9RQlpVA2C+atdFygbLVrd3aEpWU7wsJ+jJ+28ztKIYs9BXPXz2koZosOl/RPVgONudPf/i1ETB7GG46lRbVl6y6WV8CaB9Ny3+mS/tyq+3lj/e1dm9NOnA1aXNK6WzsUO1CJJ/4oKtrbYa5wxFVwgbkMfC+ye9Ce91nWgrmFCP+BpwhYEzm8jT3nH8eyNe9V7zfA1aFTyz+XeXIq9yDJ9eUKCvGKtOFQrXep8dO+GrEu4/RXVfrbezcNtJafdgkTIP0RsCFURKWTm+yowE2eUmaD7UHzDb4E6LS1ZcxFlBMPGZY0ncwGchITAd/JD3u+qDJ30ScClLO+FOQRdpenrOjZE4Dwy2GEibg1fRR4Jb+cIvEuUJOpQybSR4GF5tQONF4FZpsImIi0S1x31HPNi1S+cdhod0EU4TjSLt42he/WPJLebq7mrKKV7etWp3mO07b9mB0/H1RB3G8It9sKJX1HbDQvszOBD81VVVIcMUFMChgF6MLvvyRjZPvMrCp+qrlD1mIuNvdtReZ/hd7fjUYVIHTtqhxA31IjW9KZoOdr7WKanYgG8D92aUEoNQ5IQgAAAABJRU5ErkJggg==',
            yAxisIndex: 2,
        },
        {
            name: '魏桥预报水位',
            type: 'line',
            barWidth: '30%',
            data: ['7.550', '7.713', '7.834', '7.940', '8.032', '8.219', '8.432'],
            yAxisIndex: 2,
        },
        {
            name: '魏桥计算流量',
            type: 'line',
            barWidth: '30%',
            data: ['3.313', '5.431', '7.294', '9.280', '11.504', '17.366', '24.520'],
        },
    ],
};