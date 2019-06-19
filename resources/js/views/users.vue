<template>
    <div>
        <v-server-table url="/users/all" :columns="columns" :options="options">
            <a slot="action" slot-scope="props" :href="'/users/' + props.row.id + '/edit'"><i class="fas fa-pen"></i></a>
        </v-server-table>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                columns: ['username', 'name', 'phone', 'email', 'role', 'active', 'action'],
                options: {
                    orderBy: {column: 'username'},
                    filterable: ['username','name', 'phone'],
                    perPage: 10,
                    perPageValues: [10,25,50],
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
                    sortable: ['username', 'name', 'phone'],
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
        table td:nth-of-type(1):before { content: "Username"; }
        table td:nth-of-type(2):before { content: "Name"; }
        table td:nth-of-type(4):before { content: "Phone"; }
        table td:nth-of-type(3):before { content: "Email"; }
        table td:nth-of-type(5):before { content: "Role"; }
        table td:nth-of-type(6):before { content: "Active"; }
        table td:nth-of-type(3):before { content: "Action"; }
    }
</style>