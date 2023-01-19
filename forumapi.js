class ForumAPI {
    async ensureData() {
        if (this.data) return;
        this.data = await fetch(this.url)
        .then((response) => response.json())
        .then(function(data) {return data});
    }
    async getPost(index) {
        await this.ensureData()
        return this.data.post_stream.posts[index]
    }
    constructor(url) {
      this.url = url + ".json";
    }
}
