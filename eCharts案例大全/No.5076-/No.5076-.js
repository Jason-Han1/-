var imgblue ='image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABuUlEQVRIibVWS07DMBB9jpM2tBuuAwtWXIINh2PTe7CAA1XQNo1jNGimepnaRVWFpdE0nuQ9z9cNm+0WlRVqhsrKpe3WPQfSwZHwc3aA2e2dbG0BoHGa9+BAJwKeSJ9I2gJ4rOjGeTCpJKfBJOyBgUcl9hIdgQCOBbGVah7I3gJA53SrdjuhgA0AjqobIp8U79cDH55WQZdOFmqHnm7Qdw/k2eQkXPJAQO9IFuTxqMDRndzCdqo4X0XeAwFeqfS6Dw1L50KWdJ9zBZ/kkgcrhHAf+/41xPggH+eUPtJ+/4acGXykXDQMWipTIxHpFfwZwFoI5Xfs+xf1aknhi5j3z4ygRtTpyWcrxPikYSoCe4J/W1wBcG1vcT3mlD79AXJK75rUkbr5bB61F4AHlb0kNPa9hOVRwSXJG7FpuQ41IhnXVp6dJs1Kc00lWipTAf8G8KXaZKc2eSdxmXKjGADPnmOh0XbkBYfrbFxziCw83P5jZVQcSCxMsxC1lfiX2v/wx7ArJrzmAVz7D1eM6zMPQICcDyO79sLhi2eWA7gbaXKdfc2VWfTASOQEAmYEtm6+9Nkg+va/LQB+AAC99erRdQKCAAAAAElFTkSuQmCC';
var imggreen ='image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB1klEQVRIibVWvU4CQRCevdvjECmgwlexsbK3tuF5fAYbExpfwspC38LSSCMmEvDulj0zZJZ8N+xi0LjJZGD3+L795u8wVy83lFgmdZBYbWzbqu8GvFEk+L1VgK3a253ZCECmPO6RAvUA7MHvSGwEPE/4TCnwYhvlCUlQQQDPhVhbrggY0EUsrE1KAe/1iKhQ3sp5uCGD1UTUiM+A3AveVoEOjxXQUllPzkluV8uzFSjzyswhBQx6AtYDxU6Ac3XzELZdxekq0goYeCDWl32SsBQqZBvZx1yRTnJMwcBkZjQ8G09tz57zj13tnpZvi1nrWwR3kIsMQWNlGkjY+sPJeGrL4pKMOSVjBvx5OBldi6oSwpdTt386BCmiwpbbm3eWLYsLCVMUWBP828IKINX2Ia6Nq9yzvoCrmkdJqoNu3ptH2QHgWuxrOV/MXNU8UNuu2Pjzcv5xz2dSrnWKCKvIqw7l+K45llwtn6/vt0R0B2XK4Ct5Bkk8zKIOATZKAMDZ00QabQ0qMFx74xpDFBRg+7vEqKjAUEEnRLH4x9q/+mHYRROeUkCq/esjxvXBJGM+AtmxL5xNLMmtIvEw03/zyowqCCR8AwYLBGH9+aWPB+z//reFiL4BbgAGjeNcO/MAAAAASUVORK5CYII='
let leimgblue ='image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAACR0lEQVRIib1XsY7TQBB967FzTghwBTWioIEfQFDzEVSU9xf8CM1JNPAHNNRIVHTQUPEHwHFObO8uGm5Wmkxsx06sG2k08a698/bN7MzGxRhh5cPV1d6YEjc02SH7DpS8Wq93nvORizplnQGln6MBEM3YILixgJLDzFg9poWdBgUkKHsQ1CFA2jH12MwwFES9sRgDagxDCQzJ+1bJAGIAbYcm8XMxxO8uABTG5jKfGGDnNYBGbJpL7LljGbLhygXMmdGFzEN2X8u7W8VcMNoL6hiGGMRS6UKt0woQMsykMNoTOhlQAmUZYiAr0VLGIWEqTAi9jNOYGjY2qbsYWsG5cyrL147oOTuL3n/2m8073BTboJip1TrDu3/z6eve4NNnjxMzuQLAJfWuVlouLxzRS/1t9P6jr6pLAH+McvmvJKRtyqFvX37sAerN+CxzyJwDUYacMhREKHL+fWPvP3kIR7ubjj7g1/efaNqA1vv/tvEerQ/wPiDEiBD6a2PeFVfFUDraK2HonlZH2VsAd3Z2SNnf9aMHFwB+G2WGrlVJ6GZooLneSsimNlfdj3SCsm44gaks4YheCBhO6vc8J45r+cab/jYYskMSTAUuZKeOT5OvKg7bpazRCJhrxUYCFVQvOwmQLmzJoe5dTUdhrBRLjWLp5OuHDlliSLeDtqd1bJVqhk4KWVf+dLWD7YHm2kzJo6kMwbSDesL1Y9ak1gATuKkXND9HUqfd6BtfwPFX2FkYSgvwDtl5ApTk1i/5eiG2s/4N2hEA/wAM60VKCMhUpwAAAABJRU5ErkJggg=='
let leimggreen ='image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAACeklEQVRIib2XvY4TMRDH/157s5cvKRHF0dLwDlBQ3QNcS3MlrwCvwCvQnISgp0O8AA9BQ4eouJMSCMn6AzmZIbO+/TwiRhr54t31/Pz32ONTIQSwXX59jRZTbQ9rLLQ9/PDoZW2/6RhUiVYlUPJ3SABC0tcK1xeIA2aotrJPWgzqBYgXbW+oJiAZWDe0WaKQJ3dJiyFQbQoxjKb3UtcJUASwNc7mTqVQfGcEIE9aQ89ZgRh8B6Cklp+xeuq+CqXLZQimSHxEz0Gz39G7W6GcT7wTaohCEWIsfCS+twSiE2V4GdMdOhiIoVKFIsiE/Iz6QcuUJ0voqF8POcO6krpOoYnK1GL2cHllRuZJDGZ39vP6+83b4IOEsSKXspY4d4I2qZPm0Yj8bHa+vDJFfgGlplBqEv+enS+ek2qFWE6N6vnVrdDlp1fHX4+XEqgJLDfFXpnqQEX+DMC7FpAKUCWuHKeS9V9uDl+qDFmmkGUamTbQxkBrcmPgvdhfbB7TB7fj985aOEduLbyz8N7B+4AQ/F2CGqAj+UEhFQDjgMIdcmYGYA6EOVDufV6OXxidX8iBbFl+XC021wBWB9fkxRrAhnah/SsATT61umrPuyvmQsyJKUFND2CYiqR+uoc5JvUtgDX5T9H+JiDHQPep9nyo8W7JaaYq7qbVtx9vAFzTuyUF/SXU2NG3XtSyXkvWZPJg44CydpU1B+NGqFFSvzvF9UNeIVghWQ5sQ+nYCpcKpfelQUAShhWqKwfbjuIqFeoN1VchJOVgN+D68c8KsclElHBDL2juFEnNs5E3Pp+UlCFX2JMoxAPEGcbgDMT23y/5cqDYnvTfoFoD8AdLpSoJS5EWZwAAAABJRU5ErkJggg=='

let data = [
    [10, 60, 40, 50, 30, 65, 44],
    [20, 40, 30, 60, 40, 50, 34]
    ]

option = {
    backgroundColor: '#010f1c',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            },
        }
    },

    grid: {
        left: '15px',
        top: '30px',
        right: '20px',
        bottom: '0',
        containLabel: true
    },
    legend: {
        itemWidth: 40,
        itemHeight: 16,

        data: [{
                name: '发现隐患数量',
                icon:leimggreen
            },
            {
                name: '整改隐患数量',
                icon: leimgblue
            }
        ],
        textStyle: {
            fontSize: 12, //字体大小
            color: '#f1f6fb', //字体颜色
        },
        right: '0%' //距离右侧
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true, //y轴线
            lineStyle: {
                color: '#797f8a',

            }
        },
        axisLabel: {
            interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#d1d1d1'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#797f8a'],
                width: 1,
                type: 'solid'
            }
        },                                    
        data: ['烟感', '喷淋头', '消防栓', '灭火器', '监控', '防火门', '水管']

    }],
    yAxis: [{
        type: 'value',
        name: '单位 / 次',
        nameTextStyle: { //y轴上方单位的颜色
            color: '#d1d1d1'
        },
        nameGap: 10,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true, //y轴线
            lineStyle: {
                color: '#797f8a',

            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#d1d1d1',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#797f8a'],
                width: 1,
                type: 'solid'
            }
        },


    }],
    series: [
        {
            name: '发现隐患数量',
            type: 'line',
            symbol: imggreen,
            symbolSize: 30,
            showSymbol: true,
            
            lineStyle: {
                shadowColor: '#fff',
                shadowBlur: 10,
                shadowOffsetY: 0,
                width: 2,
                color: '#60ff9f',

            },
            
            itemStyle: {
                normal: {
                    color: '#60ff9f',
                    borderColor: '#60ff9f',
                    borderWidth: 0

                }
            },

            data: data[0],
        },
        {
            name: '整改隐患数量',
            type: 'line',
            symbol: imgblue,
            symbolSize: 30,
            showSymbol: true,
            
            lineStyle: {
                shadowColor: '#fff',
                shadowBlur: 10,
                shadowOffsetY: 0,
                width: 2,
                color: '#abffff',

            },
            
            itemStyle: {
                normal: {
                    color: '#abffff',
                    borderColor: '#abffff',
                    borderWidth: 0

                }
            },

            data: data[1],
        },


    ]
};

console.log(option)
