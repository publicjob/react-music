# axios配置

## Content-Type

get请求不用设置，只有post和put需要用到Content-Type

```js
const data = { a: 1, b: 2 }
axios({
  method: 'post',
  url: 'https://example.com/api',
  data: data
})
# 发送post请求的时候，如果第二个参数是对象的话，默认会设置这个类型是Content-Type: application/json
```

```js
const data = qs.stringify({ a: 1, b: 2 })
axios({
  method: 'post',
  url: 'https://example.com/api',
  data: data
})
# 发送post请求的时候，如果第二个参数是字符串的话，默认会设置这个类型是Content-Type: application/x-www-form-urlencoded
```

```js
cosnt data = new FormData()
data.append('a', 1)
data.append('b', 2)
axios({
  method: 'post',
  url: 'https://example.com/api',
  data: data
})
# 发送post请求的时候，如果第二个参数是formData的话，默认会设置这个类型是Content-Type: multipart/form-data
```

这三种Content-Type的值，在服务器那头会用不同的方式进行解析。如果设置成以上三种不同的参数，一般无需再特别设置，Content-Type自己会设置相应的值。

意料之外的情况：在有些时候，设置了以上三种类型的data的时候，是默认设置了对应的Content-Type，可是服务器要的Content-Type只要Content-Type: application/x-www-form-urlencoded这种形式，怎么办呢？于是axios中有一个配置transformRequest就登场了。使用这个配置transformRequest: [ function (data) { return qs.stringify(data) } ]就OK。为什么需要序列化data？因为之前讲过只有当参数是一个字符串的时候，Content-Type才会默认设置成application/x-www-form-urlencoded，同时这个Content-Type应该对应的是字符串参数，所以需要序列化参数为字符串。