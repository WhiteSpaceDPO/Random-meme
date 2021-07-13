const meme_img = document.getElementById('meme_img');
const meme_btn = document.getElementById('meme_btn');
const meme_name = document.getElementById('meme_name');

meme_btn.addEventListener('click', getRandomMeme);

function getRandomMeme() {
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => {
            let count = Math.round(Math.random() * 100);
            data.data.memes.forEach(todo => {
                if (count === 0) {
                    meme_img.innerHTML = `<img src=${todo.url} alt="meme" />`;
                    meme_name.innerHTML = `-${todo.name}-`;
                }
                count--;
            });

        });
}