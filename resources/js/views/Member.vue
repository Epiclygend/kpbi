<template>
<div id="memberPage" class="h-full w-full grid grid-cols-12" :class="{ 'cursor-wait': isLoading }">
    <h1 class="mdc-typography--headline2 col-start-3 col-span-8 m-0 text-center">KPBI Member</h1>
    <button @click="getUsers" class="mdc-button mdc-button--raised col-span-2" data-mdc-auto-init="MDCRipple">
        <div class="mdc-button__ripple"></div>
        <div class="mdc-button__label">Refresh Data</div>
    </button>

    <div @MDCDataTable:sorted="sortRow" class="mdc-data-table col-span-12 lg:col-span-12 w-full h-full overflow-x-auto" data-mdc-auto-init="MDCDataTable">
        <div class="mdc-data-table__table-container h-full">
            <table class="mdc-data-table__table" aria-label="KPBI Member">
                <thead class="bg-green-100">
                    <tr class="mdc-data-table__header-row">

                        <th class="mdc-data-table__header-cell" role="columnheader" scope="col" data-column-id="no">#</th>
                        
                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--with-sort" role="columnheader" scope="col" aria-sort="none" data-column-id="jenjang">
                            <div class="mdc-data-table__header-cell-wrapper">
                                <div class="mdc-data-table__header-cell-label">Jenjang</div>
                                <button class="mdc-icon-button material-icons mdc-data-table__sort-icon-button" aria-label="Sort by Jenjang" aria-describedby="jenjang-status-label">arrow_upward</button>
                                <div class="mdc-data-table__sort-status-label" aria-hidden="true" id="jenjang-status-label"></div>
                            </div>
                        </th>

                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--with-sort" role="columnheader" scope="col" aria-sort="none" data-column-id="nama_prodi">
                            <div class="mdc-data-table__header-cell-wrapper">
                                <div class="mdc-data-table__header-cell-label">Prodi</div>
                                <button class="mdc-icon-button material-icons mdc-data-table__sort-icon-button" aria-label="Sort by Prodi" aria-describedby="prodi-status-label">arrow_upward</button>
                                <div class="mdc-data-table__sort-status-label" aria-hidden="true" id="prodi-status-label"></div>
                            </div>
                        </th>

                        <th class="mdc-data-table__header-cell" role="columnheader" scope="col" data-column-id="pt.singkat">Perguruan Tinggi</th>

                        <th class="mdc-data-table__header-cell" role="columnheader" scope="col" data-column-id="web_prodi">Website Prodi</th>

                    </tr>
                </thead>
                <tbody class="mdc-data-table__content">

                    <tr v-for="({jenjang, nama_prodi, pt: {lengkap}, web_prodi}, index) in users" class="mdc-data-table__row">
                        <td class="mdc-data-table__cell">{{ +index + 1 }}</td>
                        <td class="mdc-data-table__cell col-max-width-1/4">{{ jenjang }}</td>
                        <td class="mdc-data-table__cell truncate col-max-width-1/2" :title="nama_prodi">{{ nama_prodi }}</td>
                        <td class="mdc-data-table__cell truncate col-max-width" :title="lengkap">{{ lengkap }}</td>
                        <td class="mdc-data-table__cell truncate col-max-width group" :title="web_prodi">
                            <a :href="web_prodi" target="_blank" class="text-blue-500 no-underline hover:underline">
                                <span>{{ web_prodi }}</span>
                                <i class="material-icons text-sm hidden group-hover:inline">open_in_new</i>
                            </a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
        <!-- <div class="mdc-data-table__pagination">
            <div class="mdc-data-table__pagination-trailing">
                <div class="mdc-data-table__pagination-rows-per-page">
                    <div class="mdc-data-table__pagination-rows-per-page-label">Rows per page</div>

                    <div class="mdc-select mdc-select--outlined mdc-select--no-label mdc-data-table__pagination-rows-per-page-select">
                    <div class="mdc-select__anchor" role="button" aria-haspopup="listbox"
                            aria-labelledby="demo-pagination-select" tabindex="0">
                        <span id="demo-pagination-select" class="mdc-select__selected-text">10</span>
                        <span class="mdc-select__dropdown-icon">
                        <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5">
                            <polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
                            <polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
                        </svg>
                        </span>
                        <span class="mdc-notched-outline mdc-notched-outline--notched">
                        <span class="mdc-notched-outline__leading"></span>
                        <span class="mdc-notched-outline__trailing"></span>
                        </span>
                    </div>

                    <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth" role="listbox">
                        <ul class="mdc-list">
                        <li class="mdc-list-item mdc-list-item--selected" aria-selected="true" role="option" data-value="10">
                            <span class="mdc-list-item__text">10</span>
                        </li>
                        <li class="mdc-list-item" role="option" data-value="25">
                            <span class="mdc-list-item__text">25</span>
                        </li>
                        <li class="mdc-list-item" role="option" data-value="100">
                            <span class="mdc-list-item__text">100</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div class="mdc-data-table__pagination-navigation">
                    <div class="mdc-data-table__pagination-total">1‑10 of 100</div>
                    <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-first-page="true" disabled>
                    <div class="mdc-button__icon">first_page</div>
                    </button>
                    <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-prev-page="true" disabled>
                    <div class="mdc-button__icon">chevron_left</div>
                    </button>
                    <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-next-page="true">
                    <div class="mdc-button__icon">chevron_right</div>
                    </button>
                    <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-last-page="true">
                    <div class="mdc-button__icon">last_page</div>
                    </button>
                </div>
            </div>
        </div> -->
    </div>
</div>
</template>

<script>
import * as MDC from "material-components-web"

export default {
    name: 'Member',

    data() {
        return {
            users: [],
            isLoading: false
        }
    },

    methods: {
        getUsers() {
            this.isLoading = true

            window.axios('http://127.0.0.1:8000/api/users')
                .then(response => {
                    this.isLoading = false
                    this.users = response.data
                })
        },

        sortRow({detail: {columnId, sortValue}}) {
            const compare = (a, b) => {
                // Number handleer
                if (typeof a === 'number' && typeof a === 'number') {
                    return a - b
                }
                // String handler
                if (typeof a === 'string' && typeof b === 'string') {
                    a = a.toUpperCase()
                    b = b.toUpperCase()

                    return (a==b) ? 0:
                        (a > b) ? 1:-1
                }
                // Else Number and String
                return 1
            }

            this.users = [...this.users].sort(({[columnId]: a}, {[columnId]: b}) => {
                // if descending then swap the variable
                if (sortValue === 'descending') {
                    [a, b] = [b, a]
                }
                // console.log({a, b, compared: compare(a,b)});
                return compare(a,b)
            })
        }
    },
    
    mounted() {
        this.getUsers()
    },

    updated() {
        window.MDComponents = MDC.autoInit()
    }
}
</script>

<style lang="scss" scoped>
#memberPage {
    grid-template-rows: auto 1fr;
}
.col-max-width-1\/4 {
    max-width: 5rem;
}
.col-max-width-1\/2 {
    max-width: 10rem;
}
.col-max-width-3\/4 {
    max-width: 15rem;
}
.col-max-width {
    max-width: 20rem;
}
</style>