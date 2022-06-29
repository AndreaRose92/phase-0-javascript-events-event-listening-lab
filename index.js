function addingEventListener() {
    const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked! Oh no!');
}

input.addEventListener('click', clickAlert);
}

addingEventListener()