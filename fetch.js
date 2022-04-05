async function get(url){
    const response=await fetch(url)
    const res=await response.json()
    try{
    for(let i of res){
      console.log(i);
    }
}
    catch(e){
    console.error(error)}
    }