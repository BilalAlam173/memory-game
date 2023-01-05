const data = [
    {
        imageUrl: "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
        imageName: "Pineapple"
    },
    {
        imageUrl: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
        imageName: "Orange"
    },
    {
        imageUrl: "https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
        imageName: "Cherry"
    },
    {
        imageUrl: "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
        imageName: "Watermelon"
    },
    {
        imageUrl: "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
        imageName: "Kiwi"
    },
    {
        imageUrl: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
        imageName: "Apple"
    },
    {
        imageUrl: "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
        imageName: "Avocado"
    },
    {
        imageUrl: "https://images.pexels.com/photos/566888/pexels-photo-566888.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
        imageName: "Strawberry"
    },
    {
        imageUrl: "https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
        imageName: "Blueberry"
    },
]

let time = 10;

function initGame() {
    const wrapper = document.createElement('div')
    const listWrapper = document.createElement('ol');
    const boxWrapper = document.createElement('div');
    boxWrapper.classList.add('boxWrapper')
    wrapper.classList.add('wrapper');
    const countDownTimer = document.createElement('span');
    countDownTimer.innerText = time;
    countDownTimer.classList.add('timer');

    const listStack = [...shuffle(data)];
    const boxStack = [...shuffle(data)];

    for (let i = 0; i < listStack.length; i++) {
        const dataItem = listStack[i];
        const listItem = document.createElement('li');
        listItem.innerText = dataItem.imageName;
        listWrapper.appendChild(listItem);
    }

    for (let i = 0; i < boxStack.length; i++) {
        const dataItem = boxStack[i];

        const boxItem = document.createElement('div');
        boxItem.style.backgroundImage = `url(${dataItem.imageUrl})`;
        boxItem.style.width = '100px';
        boxItem.style.height = '100px';
        boxItem.classList.add('box')

        boxItem.addEventListener('click', (event)=> {
            if(event.target.classList.contains('overlay')) {
                event.target.classList.remove('overlay')
                boxClick(dataItem, listStack);
            }
        } )

        boxWrapper.appendChild(boxItem);
    }

    setTimeout(toggleBoxes, time * 1000);
    setInterval(updateTimer, 1000)

    
    wrapper.appendChild(listWrapper);
    wrapper.appendChild(boxWrapper);
    wrapper.appendChild(countDownTimer);
    document.body.appendChild(wrapper)
}

function updateTimer() {
        document.querySelector('.timer').innerText = (--time);
}

const boxClick = (dataItem, listStack)=> {
    const firstListItem = document.querySelector('ol li:not(.checked)');
    firstListItem.classList.add('checked')
  if(listStack.shift().imageName == dataItem.imageName) {
    firstListItem.style.color = "green"
  } else {
    firstListItem.style.color = "red"
  }
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function toggleBoxes() {
    const boxes = document.getElementsByClassName('box');
    for (box of boxes) {
        toggleBox(box);
    }
}

function toggleBox(box) {
    if (box.classList.contains('overlay')) {
        box.classList.remove('overlay')
    } else {
        box.classList.add('overlay')
    }
}


initGame();