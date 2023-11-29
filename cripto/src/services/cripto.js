export const getCripto= async ()=>{
    let res = await fetch("https://api.coincap.io/v2/assets")
    let {data}= await res.json()
    return data;
}