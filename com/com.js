

import myJson from '../com/com.json' assert { type: 'json' };
const app = new Vue({
    el: "#app",
    data: {
        search: "",
    },
    computed: {
        filterQuestion() {
            return myJson.filter(el => el.question.toLowerCase().match(this.search.toLowerCase()))
        }
    },
    watch: {
       
    }
})