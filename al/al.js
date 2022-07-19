import myJson from '../al/al.json' assert { type: 'json' };
const app = new Vue({
    el: "#app",
    data: {
        search: "",
        error : false,
    },
    computed: {
        filterQuestion() {
                return myJson.filter(el => el.question.toLowerCase().match(this.search.toLowerCase()))
        }
    },
    methods: {
        isHasError() {
            if(this.search?.toLowerCase().includes(this.filterQuestion.question?.toLowerCase())) {
                this.error = false;
                console.log("Bor")
            } else {
                this.error = true;
            }
        }
    },
    watch: {
    
    },
    mounted() {
        this.isHasError()
    }
})