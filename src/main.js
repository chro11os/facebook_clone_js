import './style.css';

const button = document.getElementById('submitBtn')
const input = document.getElementById('userInput')
const feed = document.getElementById('displayFeed')

function DisplayPost(postText) {
    const newPost = document.createElement('p');
    newPost.textContent = postText;
    if (feed) {
       feed.prepend(newPost);
    }
    input.value = "";
}

function EnterAndSubmitPost() {
    button.addEventListener('click', () => {
        const inputVal = input.value;
        if (inputVal.trim() == "") return;

        DisplayPost(inputVal);
    });
};

function NavigationBar() {
    
}

EnterAndSubmitPost();
