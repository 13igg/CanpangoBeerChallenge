
export async function handleRequest(request){
    const resp = await request();
    console.log(resp);
}