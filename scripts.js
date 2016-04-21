class Channel {
    constructor() {
        fetch('vimeo.json').then(response => response.json())
            .then(data => {
                this.json_data = data;
                this.render();
            }).catch(e => alert(e));
    }

    render() {
        var container = document.getElementById('container');
        this.json_data.forEach(function(video) {
            var vid = document.createElement('div');
            vid.setAttribute('class', 'video');
            vid.innerHTML = `
                <img class="screenshot" src="${video.thumbnail_large}"></img>
                <div class="description">
                    <div class="title">
                        <a href="${video.url}">
                            ${video.title}
                        </a>
                    </div>
                    <div class="user">
                        <img class="user_thumb" src="${video.user_portrait_small}">
                        <a href="${video.user_url}">
                            <span class="username">${video.user_name}</span>
                        </a>
                    </div>
                    <div class="about">${video.description}</div>
                    <div class="stats">
                        <div>
                            <span class="plays">${video.stats_number_of_plays}</span> Plays
                        </div>
                        <div>
                            <span class="likes">${video.stats_number_of_likes}</span> Likes
                        </div>
                        <div>
                            <span class="comments">${video.stats_number_of_comments}</span> Comments
                        </div>
                    </div>
                </div>`
            container.appendChild(vid);
        });
    }
}

window.onload = function(){ new Channel(); }
