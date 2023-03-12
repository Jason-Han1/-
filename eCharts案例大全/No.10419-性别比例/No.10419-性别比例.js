option = {
    title: {
        text: "性别比例",
        subtext: "{b|" +
            "总数[" +
            "}" +
            "{a|" +
            1000 +
            "}" +
            "{b|" +
            "]" +
            "}",
        subtextStyle: {
            fontSize: 14,
            rich: {
                a: {
                    color: "#ffff66",
                    fontSize: 14
                },
                b: {
                    color: "#61c1ed",
                    padding: [0, 0, 0, 0],
                    fontSize: 14
                }
            }
        },
        left: "center",
        textStyle: {
            color: "#ADD1FF"
        }
    },
    tooltip: {
        trigger: "item",
        formatter: (params, ticket, callback) => {
            return `${params.seriesName}<br />${params.name}：${params.value}(${((params.value / 1000)* 100).toFixed(2)}%)`
        }
    },
    xAxis: {
        type: "value",
        splitLine: { //垂直x轴的线
            show: false
        },
        axisLine: { //x轴线
            show: false
        },
        axisLabel: { //x坐标标语
            show: false
        },
        axisTick: { //刻度
            show: false
        }
    },
    yAxis: [{
        type: "category",
        data: ["男", "女"],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: -4,
            textStyle: {
                color: "#fff",
                fontSize: 16
            }
        }
    }],
    series: [{
            name: "性别比例",
            type: "pictorialBar",
            symbolRepeat: "fixed",
            symbolMargin: "5%",
            symbolClip: true,
            symbolSize: 22.5,
            symbolPosition: "start",
            symbolOffset: [20, 0],
            data: [{
                    value: 235, //男
                    symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZRJREFUSA3tVLFKA0EQnbkEY1KFEDQYrCxsVARTRa21TZFf0EL8BysbsRErKwNqoWhnIViIWioqWCiWmihEsBECJnfj28QjR8zNHWKZgWVnZ3be2x3eLlNIK7xcFIVknYW/rEhk6XAofxKm1AqzaaFylSChEsYwSEZsp7EjIhymNhTBZ6IWI6ZYG5ATi3Qdba/9vVAEe8nZD5x8w4XB0Ve3OFd319oceM1leYq9VqpTDjlpYR4kcWwmfncs620g03cTRKQSFMuXow1Hjk3fu50SRPfReGT+IJ0vd8ubmNqiusimH7gpRm6sUbPXjO9nKgGK8sQQJrPTCcBMtolBS9OdOe9aJUD/+pnkgUROvUVNX3gfxFXsif/KeQIqgWffn90eQWDr1OcOGd5B64/QSsoH6VYIn4hiKsFkdja3AokWns9bPyfzGdBS+OgmDOZRdmbOzBqDSmDADYDHGrhVU/8mBpniArr1VKT3B9lei/6pRcwtaQokKj++GwugUN+BWwu9l/Cax/GitkGQhJ8hS3bdvDZ/A8dbeE6ZWY8dAAAAAElFTkSuQmCC",
                },
                {
                    value: 765, //女
                    symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAr5JREFUSA3NVk1oE1EQnnn5q1Brd6WiZ8GiIFgQxYt49iAWbGiTrUREELUHDwpSIh4U8fciHipahWwSsFoRxKsUoYIUREQk4LEqan5aUOjupvucF3lh/7d48pEwb2a+me/NvHkhCGtYfOJlZqnevGIDzws4MiwpqlrEOweNuPBkHED4W43GTQ5wRmK5zc81680U6WelLUyyMIe0c86RPgWpS4nIfTbpc8pYApiZYYDcVylVlBLkzmRB+1gCzGZXkeMzbzACziKV4bV7dd/JvAChM8TTq8DTRHSYVJF0FnrTE8IXt2JLbB2tDkG7vd8GlmJgryM6bgOsUOkmsMScoo++jyKJJGjm9etiYqISAOLljRWtGIYJJaDkGiUvhQU67QmGI/1l7YnTJveBBL8KjzebhvmRA1clMEpSkp9JSOzoq+bqXlzgFFHyKZmcgs/TxOjeQGrNI7JfEHa69YE22Hd9GDL4CDqtAX5IgGkM3yiD2i3AzuR44jlXhtM3CPRWOOhA2aW8fsQDolDHcrUGYYXGZhemMk3LMGv0qBQHVJC3kpxtwyQbsNrWO6oiE9QqVwWmZRa7reFwsU8fr5mGcc2bXBAJG73Aq+tLo5+o1ksdG7XKAntS7OVyEaAN34WDevtaGc7cboxV9tHjKkiwVxLJ8eVceY9oFZ1+XvhJui7a1SIBoDvYqWxKf4YNI0arpi9Q6UPCHrEW1EFtL3x90dP6vbxVLWsfnFgfgXQ2x/RT1K7AyZAYKSnJSbU6PiV1pwwk4IVXPS1z8Rvn0O8Eh+0RoaH0bt+C93ZbXozrDrrOhwcMas1TCpwTX+ps5266frFB+EGnmxdf+tV+HpT8L8wVFaw0cqVpGvRjTi9Ddl+p5E84bUH74AqCkP9o+z8I6F34/j3QhPlsQUWuqQKWSDyg4C/dBIiLjPHprh6x+QOP5fUXvxzvJQAAAABJRU5ErkJggg==",
                }
            ],
            z: 10
        },
        {
            name: "性别比例",
            type: "pictorialBar",
            itemStyle: {
                normal: {
                    opacity: 0.3
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            animationDuration: 0,
            symbolRepeat: "fixed",
            symbolMargin: "5%",
            symbolSize: 22.5,
            symbolPosition: "start",
            symbolOffset: [20, 0],
            data: [{
                    value: 235, //男
                    symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZRJREFUSA3tVLFKA0EQnbkEY1KFEDQYrCxsVARTRa21TZFf0EL8BysbsRErKwNqoWhnIViIWioqWCiWmihEsBECJnfj28QjR8zNHWKZgWVnZ3be2x3eLlNIK7xcFIVknYW/rEhk6XAofxKm1AqzaaFylSChEsYwSEZsp7EjIhymNhTBZ6IWI6ZYG5ATi3Qdba/9vVAEe8nZD5x8w4XB0Ve3OFd319oceM1leYq9VqpTDjlpYR4kcWwmfncs620g03cTRKQSFMuXow1Hjk3fu50SRPfReGT+IJ0vd8ubmNqiusimH7gpRm6sUbPXjO9nKgGK8sQQJrPTCcBMtolBS9OdOe9aJUD/+pnkgUROvUVNX3gfxFXsif/KeQIqgWffn90eQWDr1OcOGd5B64/QSsoH6VYIn4hiKsFkdja3AokWns9bPyfzGdBS+OgmDOZRdmbOzBqDSmDADYDHGrhVU/8mBpniArr1VKT3B9lei/6pRcwtaQokKj++GwugUN+BWwu9l/Cax/GitkGQhJ8hS3bdvDZ/A8dbeE6ZWY8dAAAAAElFTkSuQmCC",
                },
                {
                    value: 765, //女
                    symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAr5JREFUSA3NVk1oE1EQnnn5q1Brd6WiZ8GiIFgQxYt49iAWbGiTrUREELUHDwpSIh4U8fciHipahWwSsFoRxKsUoYIUREQk4LEqan5aUOjupvucF3lh/7d48pEwb2a+me/NvHkhCGtYfOJlZqnevGIDzws4MiwpqlrEOweNuPBkHED4W43GTQ5wRmK5zc81680U6WelLUyyMIe0c86RPgWpS4nIfTbpc8pYApiZYYDcVylVlBLkzmRB+1gCzGZXkeMzbzACziKV4bV7dd/JvAChM8TTq8DTRHSYVJF0FnrTE8IXt2JLbB2tDkG7vd8GlmJgryM6bgOsUOkmsMScoo++jyKJJGjm9etiYqISAOLljRWtGIYJJaDkGiUvhQU67QmGI/1l7YnTJveBBL8KjzebhvmRA1clMEpSkp9JSOzoq+bqXlzgFFHyKZmcgs/TxOjeQGrNI7JfEHa69YE22Hd9GDL4CDqtAX5IgGkM3yiD2i3AzuR44jlXhtM3CPRWOOhA2aW8fsQDolDHcrUGYYXGZhemMk3LMGv0qBQHVJC3kpxtwyQbsNrWO6oiE9QqVwWmZRa7reFwsU8fr5mGcc2bXBAJG73Aq+tLo5+o1ksdG7XKAntS7OVyEaAN34WDevtaGc7cboxV9tHjKkiwVxLJ8eVceY9oFZ1+XvhJui7a1SIBoDvYqWxKf4YNI0arpi9Q6UPCHrEW1EFtL3x90dP6vbxVLWsfnFgfgXQ2x/RT1K7AyZAYKSnJSbU6PiV1pwwk4IVXPS1z8Rvn0O8Eh+0RoaH0bt+C93ZbXozrDrrOhwcMas1TCpwTX+ps5266frFB+EGnmxdf+tV+HpT8L8wVFaw0cqVpGvRjTi9Ddl+p5E84bUH74AqCkP9o+z8I6F34/j3QhPlsQUWuqQKWSDyg4C/dBIiLjPHprh6x+QOP5fUXvxzvJQAAAABJRU5ErkJggg==",
                }
            ],
            z: 5
        },
    ]
};