var yMax = 1000;
var dataShadow = [];
    for (var i = 0; i < 5; i++) {
    dataShadow.push(yMax);
};
//柱状图阴影
var iconsa = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAEjCAYAAAAlo7FlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OTA4RDNBMzlFRjExMUVBOEIxQ0MzMjAzRDM1RURCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OTA4RDNBNDlFRjExMUVBOEIxQ0MzMjAzRDM1RURCOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk5MDhEM0ExOUVGMTExRUE4QjFDQzMyMDNEMzVFREI5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk5MDhEM0EyOUVGMTExRUE4QjFDQzMyMDNEMzVFREI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9hlL4QAAAU9JREFUeNrs0TFOwzAUANC4ClUlxJSJnZmFuUeIuAASB+A8rNwBMSFWlg5MXRk6de4IHvxJkFp1ATUIhYH3pZ84+vZ/dpyqLtrb++uHm8unapy46B/1LzQ6Hzj/rMvXOiJOru4eZ23bHu9Xc85xSJflcjn7rj6ZTNJ2XEqJzWZTT6fToy9P3BXTIfB+40Pm7rIaObYbHR3ebWBssL/n/3ViMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDB4vKi7jFJF9B855xjaoJQyaE3TNM+r1eolRcRsPp+f/hQeGovFYt0ftk4pvXWD97F+ceflz3dE/MkdfwgwADLJQUPHX3SsAAAAAElFTkSuQmCC';
var iconsb = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAESCAIAAACDzjl+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2REQzN0E4MjlFRjIxMUVBQjY1QUYwMUREMjNBRTNGNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2REQzN0E4MzlFRjIxMUVBQjY1QUYwMUREMjNBRTNGNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZERDM3QTgwOUVGMjExRUFCNjVBRjAxREQyM0FFM0Y3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZERDM3QTgxOUVGMjExRUFCNjVBRjAxREQyM0FFM0Y3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dFOOdgAAATpJREFUeNrsm8ENwzAIRd2qp2zSPTpOVu0iPXYBeukARMLG8J/PEYoB8x84udnrHL71/n48j91H9MIiFrGIxQyLjzFMcNf+PRvZs20+WtY7GvkoEutm1YxYY3F67elWw61TrC021pzChMhQHxfWnhn1UbL2ZEaGDKe/Ljj5iK8U7SLTRgshAB0/ViCAC36kY1+qM0wLO5A9tAdTzM9HTZIKp2bVW1KIFCJdcWaS9BruaaHX0eraqYsje6A9aO+/Z8OPMZSCui7UmSJfsAn2CqirkroqThWglH27D1Hac+uMMZNCr/eZKiTqNbM9uKczNcOPSn5UvIuDADoQKX7clCnwY3E2qxGZC1cVg8jAPfhR9Q/a6EtNIsOZoZ+BUvR6LuojtAc1kz30CmQPFrGIxekV17uex+F57CfAAFbL8KnQPC3aAAAAAElFTkSuQmCC';
var iconsc = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAADICAIAAACWHA2DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRjA1Q0ZCNjlFRjIxMUVBQjFBNkIxMzE3OUZGMkI4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRjA1Q0ZCNzlFRjIxMUVBQjFBNkIxMzE3OUZGMkI4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZGMDVDRkI0OUVGMjExRUFCMUE2QjEzMTc5RkYyQjg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZGMDVDRkI1OUVGMjExRUFCMUE2QjEzMTc5RkYyQjg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Bx8NlAAAAQVJREFUeNrsmtsNwyAMRa9b/jtAR+iiXTAjdIyKjhAjmQbjwzeycLgvo9jxfuhsHZ+vfOv1vN8UveIrNnXHru6u19XMsc3cBW1G1zUrxt91iq7D8VjzO+6DcA3cTE01q6oUjo7M3bV1WLgsepqFljNY+F8WajMWbsMZkhQzFwgfRLhAeATC8Ws0HMWdOA0zxaEUpL0JeFQGPAo84lwkqUQ+U/OFHZ/J7TPknlPO+E4wcEpeXVd1V9SMKW6ymikejxfPCqRm3JUpjvdHpjiciyS1SZLS+ngk2eOFZDMQHqxm/P2Au67UNfqIPuZjoWAhLMQLS+MxQ5JCKSo51zWZQtzMyfoJMADx2rl7Vp2OYwAAAABJRU5ErkJggg==';
var iconsd = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAABJCAIAAABD8Mr+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTZFNTlFNzlFRjMxMUVBODZGMzk0MDBBMDcxOEY1OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTZFNTlFODlFRjMxMUVBODZGMzk0MDBBMDcxOEY1OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBNkU1OUU1OUVGMzExRUE4NkYzOTQwMEEwNzE4RjU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNkU1OUU2OUVGMzExRUE4NkYzOTQwMEEwNzE4RjU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7nJf8AAAAM5JREFUeNrsmNENAjEMQwO6D1YBif0HAbEAS/AV3wrvw1EuPfptOW3s1L27fN/3AOv1+RHY83G7hnudk3ELMSCGVTC6KQv2KAblMLzHWKqPFYxmaWZoTasHPXUkg2JYozJhV6bTj35lxIqLHVsquSmSYTGsJBWcg60hU1jQx6RGQ7Cs8WOXMtGZXAOmkBaHjLlWH/mbgo6XeCpMuM3S6keerqEB6cpnpi1d1dtHt3tG5PVfmcMq4/92tQZNxalL/pudUOvGPoYWco+fcRdgAFNnJrv3mMOVAAAAAElFTkSuQmCC';
var iconse = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAjCAIAAADqn+bCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMDJEMUVCMDlFRjMxMUVBQjU0NEIzNTQwRUQ0RjZBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMDJEMUVCMTlFRjMxMUVBQjU0NEIzNTQwRUQ0RjZBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIwMkQxRUFFOUVGMzExRUFCNTQ0QjM1NDBFRDRGNkEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIwMkQxRUFGOUVGMzExRUFCNTQ0QjM1NDBFRDRGNkEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uobotQAAAJxJREFUeNrclsENwCAMAwPi2Uel/rv/u3t0g45CTEfAloKiNm/LOmMRKBd2o+e5faqpFj1fcGw2FDkhbkARDMdc3IbkiGhGMIxwhdGjHZlACxhdcXSqGa9K15Vg7ApjZ1J3gRE5XYuMPzlHiZF0FBidO8fU1CuaIVJDa8aY3aMwhm8KJlD+vQ5nTHq5tB9APKOlMCqOx7lNNa8AAwA6uXw8Ak9orQAAAABJRU5ErkJggg==';
var iconsf = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAACjCAIAAAAW8+ljAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQUEzOTBFOTlFRjMxMUVBODU0RUQ3MkQ5MUJEOEY5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQUEzOTBFQTlFRjMxMUVBODU0RUQ3MkQ5MUJEOEY5MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVBQTM5MEU3OUVGMzExRUE4NTRFRDcyRDkxQkQ4RjkxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVBQTM5MEU4OUVGMzExRUE4NTRFRDcyRDkxQkQ4RjkxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+niK83wAAAQZJREFUeNrsWrsNQ0EIg+jNkk0ycrZ5U6RKRzICxVmWwVejkwDzMZCv9zN673N/m5KPADx/6k8Pv6vaon3JKyLbwjnPpgEwKtv7Ye/PC9NqO6rSNiUmFEBEQbLUUJuOjH0VnCJqlMN0depjR1TNUx/VSedi8KPKiUiWYqtfXHaCKdE66u+mPPzBDDlM7ai9raTOCOmP07b6A7s+Po0E4JTOTgCQMjmDpD6RXopdooteolXaHuOUitNwK2mc0poJwLDLON1MeTzoPq8+fdC9fXNGpebLeRR/yzNR/dVDBJ0l11DGN8/7OotDyPzUh8I6YbrZpstPmnVuJrzgluFRPhY8HaY/AQYAuhaXt0ySsmoAAAAASUVORK5CYII=';
var data = ['安全事故', '火灾事故', '企事业单位火灾', '民宅火灾', '户外火灾'];
option = {
    backgroundColor:'#221631',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '8%',
        right: '8%',
        bottom: '10%',
        top:'18%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',

        axisLabel: {
        	interval: 0,
            textStyle: {
                fontSize: 14,
                color: '#d7d7d7',
            }
        },
        axisLine: {
	        show: false,
	    },
	    axisTick:{
            show:false
        },
        data: data,
    }],
    yAxis:[{
    	type : 'value',
        max: 1000,
        axisLabel: {
        	interval: 0,
            textStyle: {
                fontSize: 15,
                color: 'rgba(249,240,255,.85)',
            }
        },
        axisTick:{
            show:false
        },
        axisLine : {
            show : false,
        },
        splitLine : {
            show : true,
            lineStyle : {
            	width: 1,
                color : "rgba(255,255,255,.3)"
            }
        },
    },
    {
        type: "value",
        min: 0,
        max: 300,
        name: "",
        nameTextStyle: {
            color: "#ebf8ac"
        },
        position: "right",
        axisTick:{
            show:false
        },
        axisLine : {
            show : false,
        },
        splitLine : {
            show : false,
            lineStyle : {
                color : 'rgba(204,209,215,.5)'
            }
        },
        axisLabel: {
            show: true,
            formatter: "{value}", //右侧Y轴文字显示
            textStyle: {
                fontSize: 15,
                color: 'rgba(249,240,255,.85)',
            }
        }
    },],
    series: [
    	{ // For shadow
            type: 'pictorialBar',
            symbol: iconsa,
            itemStyle: {
                normal: {color: 'rgba(5,9,9,0)'}
            },
            barGap:'-100%',
            // barCategoryGap:'40%',
            data: dataShadow,
            barWidth: '29',
            animation: true,
            tooltip: {
	            show: false
	        },
        },
        {
	        name: '',
	        type: 'pictorialBar',
	        barWidth: '29',
	        data: [{
	                name: '安全事故',
	                value: '500',
	                symbol: iconsb,
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: 'rgba(0,0,0,0)'
	                        }]),
	                    }

	                },
	                label: {
		            	show: true,
		            	position: 'top',
		            	color: '#9ff9ef',
		            	fontSize: 14,
		            	//offset: [10, 0]
		            }
	            },
	            {
	                name: '火灾事故',
	                value: '450',
	                symbol: iconsc,
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: 'rgba(0,0,0,0)'
	                        }]),
	                    }

	                },
	                label: {
		            	show: true,
		            	position: 'top',
		            	color: '#9ff9ef',
		            	fontSize: 14,
		            	//offset: [10, 0]
		            }
	            },
	            {
	                name: '企事业单位火灾',
	                value: '400',
	                symbol: iconsd,
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: 'rgba(0,0,0,0)'
	                        }]),
	                    }

	                },
	                label: {
		            	show: true,
		            	position: 'top',
		            	color: '#9ff9ef',
		            	fontSize: 14,
		            	//offset: [10, 0]
		            }
	            },
	            {
	                name: '民宅火灾',
	                value: '350',
	                symbol: iconse,
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: 'rgba(0,0,0,0)'
	                        }]),
	                    }

	                },
	                label: {
		            	show: true,
		            	position: 'top',
		            	color: '#9ff9ef',
		            	fontSize: 14,
		            	//offset: [10, 0]
		            }
	            },
	            {
	                name: '户外火灾',
	                value: '300',
	                symbol: iconsf,
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: 'rgba(0,0,0,0)'
	                        }]),
	                    }
	                },
	                label: {
		            	show: true,
		            	position: 'top',
		            	color: '#9ff9ef',
		            	fontSize: 14,
		            	//offset: [10, 0]
		            }
	            }
	        ]
	    },
	    {
            name: "平均",
            type: "line",
            showAllSymbol: true,
	        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNDc4RDk4RTg4NkUxMUVBODM1NUM3MzI1RkE0NDM3OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNDc4RDk4Rjg4NkUxMUVBODM1NUM3MzI1RkE0NDM3OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI0NzhEOThDODg2RTExRUE4MzU1QzczMjVGQTQ0Mzc4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI0NzhEOThEODg2RTExRUE4MzU1QzczMjVGQTQ0Mzc4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vOXbaAAAAvRJREFUeNpslU9rFEEQxbtnerP/oghqxFwMeFBQ8BbBL6AHL347v4YXwYtXEfGgQkCIaBBRlJCsm+zfmW5/b6tWQ3DI257uqXpd/aqqE5+WEo5DCDVowOMQ4j74Apagx1oVQmEImuv9cgh5wXjK2gBsg41gTwpnnhac+rsMIn8YFEhi8U0rQ4y+yfnnL2Flu9U/MZwz7QAIUrSoRK5N2so2zkSbs8Ww+hZ8gxVhNqdqE4wg5TiJrx1xaMSrVqTYLR0Na01cqWDkXchFLMfQhwjCmoUEWRctezj1i0Uok9JYZH29iwj7KRHPtMHI5tI0JwSuMK6PjbzXmNMwGNkCzERSTJWuwFqfyYC1MYSTE044Ma2LSKI794lgKFKXZeLOO4xXlWTef4FRtKT0/YSRIArG7RUR/iA6Qk+VEfai6Sqya+A+DrusbYEp8wPmr3nfLxZ5xfsAhyUcC+kpzaTdBmfsZs8qH66DR+AJk5uupTIq0jvMn4FXrI1BJ5m/EtimrpdHsMRUxaLcZf4Q3P1XFatHx3yAzW/Gr4x70SJL4mjE0ZpD9DoSobJ7i/cba7I1o1eyNN7xBqk51TxbBaw6KyUrg3zGp3Hk812w3rX8s1usO6Zed1K2is9e4Po45ec946fw/0cJ28PmM1gW69K2lX5KyhiSgRWYai24+B8gf+4deVtd6TV5BN4yf4Htt2DdJP2nZGsu33TBRFErLfDueMtJ9Je8f2e8F62EdG8cgHdKiN8lyr66ZQ5rQ4E3CWVbFmYji0ZF2vdaZCm8AR+ZD2vr4RGbzP0ykaQzdQtYEFgzVoQQtEvTZuZXlMQe4tzBKeN1qA6pLBmVH1Hr0nIC+1SXxab3cyLMfGTGzZZVf0Nh5WJ921GhZyNaZVfRqEvIxITFBdo1h4CgyolroPLP+nDJr6FkV9EckTqNFWxMdsyGE7Q6ProviK6FpCXUfOIZTOuqVtoxyNve6HO7DGpdtkQclYGLXhobVl4rspn/i6i8pv4IMABEbUEd7X9/LwAAAABJRU5ErkJggg==',
	        symbolSize: 26,
	        lineStyle: {
	            normal: {
	                color: "#28ffb3", // 线条颜色
	            },
	            borderColor: '#f0f'
	        },
	        label: {
	            show: false,
	        },
	        itemStyle: {
	            normal: {
	                color: "#28ffb3",
	                width: 3,
	            }
	        },
	        // tooltip: {
	        //     show: false
	        // },

            data: [520,500,300,250,150]
    	},
    ]
};