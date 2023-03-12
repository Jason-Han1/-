var nationalImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAxCAMAAACRUGVjAAABDlBMVEXLHSPOKCPOLCPdbSXaYCXsrifPLiTMHyPQMyT33Sn33incaSXMIiPQNCTaXiXLHiPmkyfzzSj0zynfcybSOyTfdCbonCfMISPNJSPNJyPnmSftsij11inTQSTPMSTYVyXdbCXljyfWTSXjhSbqpCfURyTRNyTLHyPzzinnmifutCjRNiTOKiPZXCXyxyjsrijRNSTcaCXjhibebybURCTSPiTwwCj00inYVCXqpSfzyyj22Sn33Cn11SnVSSTNJiPyyCjVSiTjhybWTiXpoSfOKyPxxCjtsyjvuyjjiCbbZCXXUiXPMCTYViXVRyTqpyfZWiXNKCPQMiTrqCf23CncZyX11ynTQCTrqifROSSHKO95AAAA80lEQVR4Ae3BZUJiYRiA0YeGl+7uBnuYtlux2/0vxJb4ey/Ndw7TzmBkwExmi5WBsPHN7hCniwFwe/ji9fkDwRADEI7wJRqLJxiIZMpFhxVI4/WiS8YhWfokc3k0sxfeFEVKhUI5XeFT1VwTM5rF69LRaPJpYdGytLyCdqsp+bQWpeNHC11+/pI3v//Qw4BOf+XNvyoDFP8v6xsim/SwbaGLWbZ3Kg3ZpceeGV0i+wcQLR7SYS0eHZ800c57yof2GR2tdTlnwC4u61cM0rWLjJcbBsdTuXUxYJtyl60yWPfysPvIQNnazScG7xlFURRFUZSOV1ZEFjz5VOjqAAAAAElFTkSuQmCC'
let bgSvg = 'data:image/svg+xml;base64,PHN2ZyBpZD0i5p+x54q2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIyMzYiIHZpZXdCb3g9IjAgMCAzNSAyMzYiPgogIDxtZXRhZGF0YT48P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+PC9tZXRhZGF0YT4KPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzAyMDEwNTsKICAgICAgICBzdHJva2U6ICMyNjQ5Nzg7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7CiAgICAgICAgb3BhY2l0eTogMC44OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMxNjJjMzI7CiAgICAgICAgb3BhY2l0eTogMC43OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cmVjdCBpZD0i55+p5b2iXzE1MDlf5ou36LSdXzMiIGRhdGEtbmFtZT0i55+p5b2iIDE1MDkg5ou36LSdIDMiIGNsYXNzPSJjbHMtMSIgeD0iMSIgeT0iMSIgd2lkdGg9IjMzIiBoZWlnaHQ9IjIzNCIgcng9IjEyIiByeT0iMTIiLz4KICA8cmVjdCBpZD0i55+p5b2iXzE1MDlf5ou36LSdXzMtMiIgZGF0YS1uYW1lPSLnn6nlvaIgMTUwOSDmi7fotJ0gMyIgY2xhc3M9ImNscy0yIiB4PSI3IiB5PSI3IiB3aWR0aD0iMjEiIGhlaWdodD0iMjI0IiByeD0iOCIgcnk9IjgiLz4KPC9zdmc+Cg=='
var category = [
    "淮安",
    "南京",
    "宿迁",
    "镇江",
    "连云港",
       "大连",
    "南通",
    "苏州",
    "扬州",
    "无锡",
     "盐城",
    "泰州",
    "常州",
];
var barData = [{
        "name": "农房楼龄5年",
        "color": "#0f4636",
        "value": [
            10,
            41,
            22,
            92,
            72,
            10,
            41,
            22,
            92,
            72,
              92,
            72,
            10,
        ]
    },
    {
        "name": "楼龄5-10年",
        "color": "#12AF7B",
        "value": [
            64,
            40,
            24,
            97,
            39,
             10,
            41,
            22,
            92,
            72,
            10,
            41,
            22,
        ]
    },
     {
        "name": "楼龄10年以上",
        "color": "#31d0e9",
        "value": [
            64,
            40,
            24,
            97,
            39,
             10,
            41,
            22,
            92,
            72,
            10,
            41,
            22,
        ]
    },
     {
        "name": "危房",
        "color": "#C29B10",
        "value": [
            64,
            40,
            24,
            97,
            39,
             10,
            41,
            22,
            92,
            72,
            10,
            41,
            22,
        ]
    }
]
let seriesData = barData.map((d, i) => {
    let arr = []
    if (i > 0) {
        let before = barData[i - 1]
        arr = d.value.map((v, j) => {
            let res = v
            res += before.value[j]
            d.value[j] = res
            return res
        })
    } else {
        arr = d.value
    }
    console.log(arr)
    return {
        name: d.name,
        data: arr,
        type: 'pictorialBar',
        symbol: 'rect',
        symbolSize: [10, 8],
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 52,
                color: d.color
            }
        },
        stack: 'all',
        symbolRepeat: true,
        animationEasing: 'elasticOut',
        animationDelay: function(dataIndex, params) {
            return params.index * 30 * 1.1;
        },
        z: -i
    }
})
let backgroundData = [280, 280, 280, 280, 280]
option = {
    backgroundColor: '#09252e',
    legend: {
        data: barData.map((d) => d.name),
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
      top:100,
      left: 50,
      right: 10,
      bottom:90
    },
    xAxis: {
        data: category,
        show: true,
        axisLabel: {
            color: '#fff',
            formatter: (value, index) => {
                return [
                    '{national|}',
                    '{title|'+ value + '}'
                ].join('\n')
            },
            rich: {
                title: {
                    color: '#eee',
                    align: 'center',
                    lineHeight: 10
                },
                national: {
                    height: 20,
                   
                    lineHeight:10
                    
                },
            }
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },

    },
    yAxis: {
        show: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#1381c9'
        }
    },
    series:seriesData,
    animation: true
};