import commonMethods from "../mixins/commonMethods.js"

export default {
    data() {
        return {
            summaryData: null
        }
    },

    mixins: [commonMethods],
    async mounted() {
        let data = await fetch('../jsons/summary.json')
        data = await data.json()
        this.summaryData = data.summary
    },
    template: `
    <div v-for="(item, index) in summaryData" :key="index" class="card comp-card">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col">
                    <h6 class="m-b-25">{{item.title}}</h6>
                    <slot name="value" v-bind="item"><h3 class="f-w-700 text-c-blue">{{formatIndianNumber(item.value)}}</h3></slot>
                    <p class="m-b-0">{{item.duration}} ({{item.year}})</p>
                </div>
                <div class="col-auto">
                    <slot name="icon" v-bind="item"><i class="fas fa-eye bg-c-blue"></i></slot>
                </div>
            </div>
        </div>
    </div>
    `
}