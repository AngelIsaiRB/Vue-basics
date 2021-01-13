app.component ("footer-banco",{
    props:["valor", "fecha","x"],

    template:/*html*/`
    <div class="bg-dark py-3 mt-2 text-white" >
            <h3 :class="x">{{texto}}-- {{x}}</h3>
            <p>{{fecha}}</p>
            
        </div>
    `,

    data(){
        return{
            texto:"footer de mi sitio web dinamico",
        }
    }
})