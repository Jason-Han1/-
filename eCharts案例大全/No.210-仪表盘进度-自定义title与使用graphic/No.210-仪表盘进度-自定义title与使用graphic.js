const GuageSVG = `data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEwNyIgaGVpZ2h0PSIxMDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSI+PGc+PHRpdGxlPkxheWVyIDE8L3RpdGxlPjxnIGlkPSJzdmdfMSIgc3Ryb2tlPSJudWxsIiBmaWx0ZXI9InVybCgjc3ZnXzFfYmx1cikiIHRyYW5zZm9ybT0icm90YXRlKDEgMTI4LjcwNiAxMjkuMDE1KSI+PGNpcmNsZSBmaWxsPSIjMjUyNTQ3IiByPSIyMC43MDYxIiBjeT0iMTI5LjAxNTQ3IiBjeD0iMTI4LjcwNjExIiBpZD0ic3ZnXzIiIHN0cm9rZT0ibnVsbCIvPjwvZz48ZyBpZD0ic3ZnXzMiPjxwYXRoIGZpbGw9IiMwMkZGQzIiIGQ9Im0xMjAuOTA2MDEsMTMxLjAyMzAxbDMuNDAyLC0zLjQwMjAzbDIuODI4LDIuODI5MDNsMy4xNTY5OSwtMy4xNTcwM2wtMS43OTMsLTEuNzkzbDUsMGwwLDUuMDAwMDNsLTEuNzkzLC0xLjc5M2wtNC41NzA5OSw0LjU3MWwtMi44MjgsLTIuODI4bC0yLjQ3NSwyLjQ3NGMxLjEyMzQxLDEuNjkwOCAyLjg0NzYyLDIuODkxNCA0LjgyMzIzLDMuMzU4M2MxLjk3NTU2LDAuNDY3IDQuMDU0ODYsMC4xNjU0IDUuODE2MzYsLTAuODQzNmMxLjc2MTYsLTEuMDA5IDMuMDczNiwtMi42NSAzLjY3MDMsLTQuNTkwM2MwLjU5NjgsLTEuOTQwNCAwLjQzMzUsLTQuMDM1MDIgLTAuNDU2NiwtNS44NTk0OWMtMC44OTAyLC0xLjgyNDQ3IC0yLjQ0MDcsLTMuMjQyMzEgLTQuMzM3MiwtMy45NjYxOWMtMS44OTY2LC0wLjcyMzg5IC0zLjk5NzUsLTAuNjk5NjggLTUuODc2OTEsMC4wNjc3MmMtMS44Nzk0LDAuNzY3NCAtMy4zOTY3OCwyLjIyMDU5IC00LjI0NDY1LDQuMDY1MDljLTAuODQ3ODcsMS44NDQ1IC0wLjk2MjgxLDMuOTQyMzcgLTAuMzIxNTMsNS44Njg0N2wwLC0wLjAwMXptLTEuNTM4LDEuNTU4bC0wLjAxLC0wLjAxbDAuMDA0LC0wLjAwNGMtMC41NzAwNywtMS4yOCAtMC44NjM4LC0yLjY2NTggLTAuODYyLC00LjA2N2MwLC01LjUyMzAzIDQuNDc3LC0xMC4wMDAwMyA5Ljk5OTk5LC0xMC4wMDAwM2M1LjUyMywwIDEwLDQuNDc3IDEwLDEwLjAwMDAzYzAsNS41MjMgLTQuNDc3LDEwIC0xMCwxMGMtNC4wNjk5OSwwIC03LjU2OTk5LC0yLjQzIC05LjEzMTk5LC01LjkxOWwwLDB6IiBpZD0ic3ZnXzQiLz48L2c+PGcgc3Ryb2tlPSJudWxsIj48Y2lyY2xlIHN0cm9rZT0ibnVsbCIgZmlsbD0iIzI1MjU0NyIgcj0iMzQuNzA2MSIgY3k9IjU1LjUiIGN4PSI1NC41Ii8+PC9nPjxnIHN0cm9rZT0ibnVsbCI+PHBhdGggc3Ryb2tlPSJudWxsIiBmaWxsPSIjMDJGRkMyIiBkPSJtNDQuOTg4NzEsNjAuMDMyMjJsNC45MzI5LC00Ljc2Mjg0bDQuMTAwNiwzLjk2MDY0bDQuNTc3NjQsLTQuNDE5ODRsLTIuNTk5ODUsLTIuNTEwMmw3LjI1LDBsMCw3LjAwMDA0bC0yLjU5OTg1LC0yLjUxMDJsLTYuNjI3OTQsNi4zOTk0bC00LjEwMDYsLTMuOTU5MmwtMy41ODg3NSwzLjQ2MzZjMS42Mjg5NCwyLjM2NzEyIDQuMTI5MDUsNC4wNDc5NiA2Ljk5MzY4LDQuNzAxNjJjMi44NjQ1NiwwLjY1MzggNS44Nzk1NSwwLjIzMTU2IDguNDMzNzIsLTEuMTgxMDRjMi41NTQzMiwtMS40MTI2IDQuNDU2NzIsLTMuNzEgNS4zMjE5MywtNi40MjY0MmMwLjg2NTM2LC0yLjcxNjU2IDAuNjI4NTcsLTUuNjQ5MDMgLTAuNjYyMDcsLTguMjAzMjhjLTEuMjkwNzksLTIuNTU0MjYgLTMuNTM5MDEsLTQuNTM5MjMgLTYuMjg4OTQsLTUuNTUyNjZjLTIuNzUwMDcsLTEuMDEzNDUgLTUuNzk2MzcsLTAuOTc5NTUgLTguNTIxNTIsMC4wOTQ4MWMtMi43MjUxMywxLjA3NDM2IC00LjkyNTMzLDMuMTA4ODIgLTYuMTU0NzQsNS42OTExMmMtMS4yMjk0MSwyLjU4MjMgLTEuMzk2MDcsNS41MTkzMiAtMC40NjYyMiw4LjIxNTg1bDAsLTAuMDAxNHptLTIuMjMwMSwyLjE4MTJsLTAuMDE0NSwtMC4wMTRsMC4wMDU4LC0wLjAwNTZjLTAuODI2NiwtMS43OTIgLTEuMjUyNTEsLTMuNzMyMTIgLTEuMjQ5OSwtNS42OTM4YzAsLTcuNzMyMjQgNi40OTE2NSwtMTQuMDAwMDQgMTQuNDk5OTksLTE0LjAwMDA0YzguMDA4MzUsMCAxNC41LDYuMjY3OCAxNC41LDE0LjAwMDA0YzAsNy43MzIyIC02LjQ5MTY1LDEzLjk5OTk5IC0xNC41LDEzLjk5OTk5Yy01LjkwMTQ5LDAgLTEwLjk3NjQ5LC0zLjQwMiAtMTMuMjQxMzksLTguMjg2NmwwLDB6Ii8+PC9nPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSJzdmdfMV9ibHVyIj48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMC4xIi8+PC9maWx0ZXI+PC9kZWZzPjwvc3ZnPg==`;
option = {
    title: {
        bottom: '10%',
        left: 'center',
        text: `{a| 0% } 回款金额 : 46亿5432万  {a|100%}`,
        textStyle: {
            color: '#fff',
            rich: {
                a: {
                    color: '#5a5a89',
                    fontSize: 16,
                },
            },
        },
    },
    graphic: {
        elements: [
            {
                type: 'image',
                z: 999,
                style: {
                    image: GuageSVG,
                    width: 80,
                    height: 80,
                },
                left: 'center',
                top: '30%',
            },
        ],
    },
    series: [
        // 是否正常
        {
            type: 'gauge',
            radius: '50%',
            pointer: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            detail: {
                fontSize: 12,
                color: '#5A5A89',
                offsetCenter: ['0', '5%'],
                formatter: (value) => {
                    return value > 20 ? '正常' : '异常';
                },
            },
            data: [
                {
                    value: 45.5,
                },
            ],
        },
        // 主图
        {
            type: 'gauge',
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 240,
            splitNumber: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: '#7C3FFF',
                        },
                        {
                            offset: 0.5,
                            color: '#7C3FFF',
                        },
                        {
                            offset: 1,
                            color: '#02A3FF',
                        },
                    ]),
                },
            },
            progress: {
                show: true,
                roundCap: true,
                width: 18,
            },
            pointer: {
                show: false,
            },
            axisLine: {
                roundCap: true,
                lineStyle: {
                    width: 18,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            title: {
                show: false,
            },
            detail: {
                fontSize: 25,
                color: '#fff',
                offsetCenter: ['0', '25%'],
                formatter: (value) => {
                    return `${value}%`;
                },
            },
            data: [
                {
                    value: 45.5,
                },
            ],
        },
        // 总回款比例
        {
            type: 'gauge',
            radius: '50%',
            pointer: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            detail: {
                fontSize: 14,
                color: '#5A5A89',
                offsetCenter: ['0', '70%'],
                formatter: () => {
                    return '总回款比例';
                },
            },
            data: [
                {
                    value: 45.5,
                },
            ],
        },
    ],
};
