

const app = Vue.createApp({
    data(){
        return {
            titulo: "mi banco Vue.js",
            cantidad : 0,
            enlace : "https://youtube.com/isaicoding",
            estado: true,
            servicios : ["trasferencias", 
                "pasgos", 
                "giros",
                "cheques"],
                desactivar:false,

        }
    },
    methods:{
        agregarSaldo() {
            this.cantidad = this.cantidad+100;
        },
        disminuirSaldo(valor){
            if(this.cantidad===0){
                this.desactivar=true;
                alert("saldo en cero!");
                return;
            }
            this.cantidad= this.cantidad-valor;
        },
    },
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? "text-success" : "text-danger"
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }
    }
})