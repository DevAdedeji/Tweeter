export default defineNuxtRouteMiddleware((to, from)=>{
    let token = localStorage.getItem("TweeterToken")
    console.log(token);
    if(token === null){
        return navigateTo("/login")
    }
})