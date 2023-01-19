# pickle_forumapi
A FiveM Forums API, simple and effective.


## class ForumAPI(string url)

```js
var forum = new ForumAPI("POST_URL")
```

## function ForumAPI.getPost(int index)

```js
var forum = new ForumAPI("POST_URL")
forum.getPost(0).then((data) => {
    document.getElementById("post").innerHTML = data.cooked // Returns post's HTML content. 
})
```
