const randrinks = async () =>{
    const resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await resp.json();
    return data;
}

export default randrinks;