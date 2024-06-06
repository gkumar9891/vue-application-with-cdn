export default {
    data() {
        return {
            products: null
        }
    },
    async mounted() {
        let data = await fetch('../jsons/New_Products.json')
        data = await data.json()
        this.products = data.new_products
    },
    methods: {
        formatIndianNumber(number) {
            // Convert the number to string
            let numStr = number.toString();
            
            // Split the number into integer and fractional parts if any
            let [intPart, fracPart] = numStr.split('.');
            
            // Handle the integer part
            let lastThree = intPart.slice(-3);
            let otherNumbers = intPart.slice(0, -3);
            
            if (otherNumbers != '') {
                lastThree = ',' + lastThree;
            }
            
            let formattedIntPart = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        
            // Combine the integer part and fractional part
            let formattedNumber = fracPart ? formattedIntPart + '.' + fracPart : formattedIntPart;
            
            return formattedNumber;
        }
    },
    template: `
    <div class="card table-card">
    <div class="card-header">
        <h5>New Products</h5>
        <div class="card-header-right">
            <ul class="list-unstyled card-option">
                <li class="first-opt"><i class="feather icon-chevron-left open-card-option"></i></li>
                <li><i class="feather icon-maximize full-card"></i></li>
                <li><i class="feather icon-minus minimize-card"></i></li>
                <li><i class="feather icon-refresh-cw reload-card"></i></li>
                <li><i class="feather icon-trash close-card"></i></li>
                <li><i class="feather icon-chevron-left open-card-option"></i></li>
            </ul>
        </div>
    </div>
    <div class="card-block p-b-0">
        <div class="table-responsive">
            <table class="table table-hover m-b-0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Product Code</th>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product,index) in products" :key="index">
                        <td>{{product.name}}</td>
                        <td>{{product.product_code}}</td>
                        <td>{{product.customer}}</td>
                        <td><label class="label" :class="product.status == 'Out Stock' ? 'label-danger' : 'label-success'">{{product.status}}</label></td>
                        <td>

                            <a v-for="i in 5" href="#!"><i class="fa fa-star f-12" :class="i < product.rating ? 'text-c-yellow' : 'text-default'"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    `
}