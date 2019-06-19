<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">

            <flash></flash>

            <div class="card custom-card">
                <div class="card-header d-flex">
                    <h2 class="mb-0">Referral</h2>
                    <div class="ml-auto">
                        <a href="/referrals/create" class="btn btn-secondary btn-sm" data-toggle="tooltip" title="Add new referral" v-show="id">
                            <i class="fas fa-plus"></i>
                        </a>
                        <a href="/referrals" class="btn btn-secondary btn-sm" data-toggle="tooltip" title="List">
                            <i class="fas fa-th-list"></i>
                        </a>
                    </div>
                </div>

                <div class="card-body">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name"
                                :class="['form-control', {'is-invalid': errors.has('name') }]"
                                v-model="referral.name"
                                autofocus
                            />
                            <label class="invalid-feedback" v-show="errors.has('name')">{{ errors.first('name') }}</label>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"
                                    v-model="referral.active"
                                    true-value="1"
                                    false-value="0"
                                >
                                <label class="form-check-label" for="active">Active</label>
                            </div>
                        </div>
                        <div class="text-right">
                            <button class="btn btn-primary btn-sm" :disabled="btnDisable">Save</button>
                        </div>
                    </form>
                </div>
            </div> <!-- .card -->
        </div> <!-- .col -->
    </div> <!-- .row -->
</template>
<script>
    import { EventBus } from '../utils/eventbus'

    export default {
        props: ['id'],

        data() {
            return {
                btnDisable: false,
                referral: {
                    id: '',
                    name: '',
                    active: false
                }
            }
        },

        mounted(){
            if(this.id){
                axios.get(`/referral/${this.id}/edit`)
                    .then(res => {
                        this.referral = res.data
                    })
            }
        },

        methods: {
            onSubmit(){
                this.$validator.validateAll().then((result) => {
                     if (result) {
                         this.btnDisable = true
                         if(this.referral.id) {
                             axios.put(`/referrals/${this.id}`, this.referral)
                                .then(res => {
                                    EventBus.$emit('success', res.data)
                                })
                                .catch(error => EventBus.$emit('error', 'Something went wrong.'))
                                .finally( () => {
                                    this.btnDisable = false
                                })
                         } else {
                             axios.post(`/referrals`, this.referral)
                                .then(res => {
                                    EventBus.$emit('success', res.data)
                                })
                                .catch(error => EventBus.$emit('error', 'Something went wrong.'))
                                .finally( () => {
                                    this.btnDisable = false
                                })
                         }
                     }
                })
            }
        }
    }
</script>