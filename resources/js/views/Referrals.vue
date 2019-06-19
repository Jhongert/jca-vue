<template>
    <div>
        <v-server-table url="/referrals/all" :columns="columns" :options="options">
            <a slot="action" slot-scope="props" :href="'/referrals/' + props.row.id + '/edit'"><i class="fas fa-pen"></i></a>
        </v-server-table>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                columns: ['name', 'active', 'action'],
                options: {
                    orderBy: {column: 'name'},
                    filterable: ['name'],
                    perPage: 10,
                    perPageValues: [10,25,25],
                    responseAdapter(res) {
                        return {
                            data: res.data.data,
                            count: res.data.count
                        }
                    },
                    templates: {
                        active(h, row) {
                            return row.active === 0 ? 'No' : 'Yes';
                        },
                    },
                    sortable: ['name'],
                    sortIcon: {
                        is: 'icon-sort',
                        base: 'span-icon-sort',
                        up: 'icon-chevron-up',
                        down: 'icon-chevron-down'
                    },
                }
            }
        }
    }
</script>

<style>
    @media screen and (max-width: 767px) {
        table td:nth-of-type(1):before { content: "Name"; }
        table td:nth-of-type(2):before { content: "Active"; }
        table td:nth-of-type(3):before { content: "Action"; }
    }
</style>