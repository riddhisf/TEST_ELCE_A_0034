/*async function getJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();
        let joke = data.joke;

        document.getElementById('joke').innerText = joke;
        document.getElementById('character-count').innerText = `Character count: ${joke.length}`;
    } catch (error) {
        document.getElementById('joke').innerText = 'Failed to fetch a joke. Please try again later.';
        document.getElementById('character-count').innerText = 'Character count: 0';
        console.error('Error fetching joke:', error);
    }
}*/

function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then((response) => response.json())
        .then((data) => {
            let joke = data.joke;
            
            document.getElementById('joke').innerText = joke;
            document.getElementById('character-count').innerText = `Character count: ${joke.length}`;
        })
        .catch((error) => {
            document.getElementById('joke').innerText = 'Failed to fetch a joke. Please try again later.';
            document.getElementById('character-count').innerText = 'Character count: 0';
            console.error('Error fetching joke:', error);
        });
}

function clearJoke() {
    document.getElementById('joke').innerText = 'Press the button for a joke!';
    document.getElementById('character-count').innerText = 'Character count: 0';
}