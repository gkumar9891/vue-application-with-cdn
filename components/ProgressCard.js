export default {
    data: () => ({
        progressData: null
    }),
    async mounted() {
        let data = await fetch('../jsons/Project_Progress_Summary.json')
        data = await data.json()
        this.progressData = data.project_progress_summary
    },
    template: `
    <div class="card proj-progress-card">
        <div class="card-block">
            <div class="row">
                <div v-for="(item,index) in progressData" :key="index" class="col-xl-3 col-md-6">
                    <h6>{{item.title}}</h6>
                    <h5 class="m-b-30 f-w-700">{{item.value}}<span class="text-c-green m-l-10">{{item.percentage}}</span></h5>
                    <div class="progress">
                        <slot name="progress" v-bind="item">
                            <div class="progress-bar bg-c-red" style="width: 25%;"></div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}