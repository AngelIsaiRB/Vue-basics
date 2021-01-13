

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
        }
    },
    methods:{
        agregarSaldo() {
            this.cantidad = this.cantidad+100;
        }
    }
})