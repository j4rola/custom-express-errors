

const btn = document.getElementById('btn');  

const data = {name: 'test'}

const postFunc = () => {
    console.log('we got here')
     fetch('http://localhost:3000/test', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
          },
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached 
        credentials: 'same-origin', // include, *same-origin, omit, 
        body: JSON.stringify(data), 
        }).then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);  
        })
        .catch((error) => {  
          console.error('Error:', error);
        });    
    console.log('we got here')    
}

const postFunction = async () => {
    try {
        const res = await axios.post('http://localhost:3000/test', {test: 'test'})
    } catch (error) {
        alert(error.response.data)
        console.log(error.response.data)
    }
    
    
}

const btnEvent = btn.addEventListener('click', postFunction)