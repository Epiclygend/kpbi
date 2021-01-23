<template>
  <v-row justify="start" align="stretch" class="px-2">
    <v-col>
      <v-card elevation="3">
        <v-card-title>
          <v-tooltip bottom>
            <template v-slot:activator="{on, attrs}">
              <v-btn
                fab icon
                v-bind="attrs" v-on="on"
                :loading="isLoading"
                :disabled="isLoading"
                @click.stop="getMembers"
              >
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>

            <span>Refresh Data</span>
          </v-tooltip>

          <h1 class="text-h5">Anggota KPBI</h1>

          <v-spacer />

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line hide-details
          />
        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="members"
          :search="search"
          :loading="isLoading"
          fixed-header
          :height="`calc(70vh - ${$vuetify.application.top}px)`"
        >
          <template #item[web_prodi]="{ item }">
            <a :href="item.web_prodi" target="_blank">{{ item.web_prodi }}</a>
          </template>

          <template #item[actions]="{ item }">
            <v-btn outlined small color="green darken-2" @click="seeDetails(item)">Details</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useMemberRepository from 'api/useMemberRepository'

export default defineComponent({
  name: 'MemberPage',

  setup() {
    return useMemberRepository()
  },

  data() {
    return {
      headers: [
        { text: '#', value: 'no', sortable: false },
        { text: 'JENJANG', align: 'start', sortable: true, value: 'jenjang' },
        { text: 'PRODI', value: 'nama_prodi' },
        { text: 'PERGURUAN TINGGI', value: 'pt.lengkap' },
        { text: 'WEBSITE PRODI', value: 'web_prodi', sortable: false },
        { text: 'AKSI', value: 'actions', sortable: false },
      ],
      members: [],
      isLoading: false,
      search: null,

      detailDialog: false,
      currentProfileShow: {}
    }
  },

  mounted() {
    this.members = this.getMembers().map((v, k) => ({...v, no: k + 1}));
  }
});
</script>
