const posts = [
    {title: 'Post One', body: 'This is Post one'},
    {title: 'Post Two', body: 'This is Post two'}
];

// setTimeout takes in a callback function and a certain amount of time you want to delay. 

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPosts(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


getPosts();

CreatePost({ title: "post Three", body: "This si post three"}, getPosts);