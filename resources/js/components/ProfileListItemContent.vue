<template>
  <div>
    <v-list-item-subtitle>{{ label }}</v-list-item-subtitle>

    <v-skeleton-loader v-if="$store.state.isContentLoading" type="text"></v-skeleton-loader>

    <template v-else>
      <!-- Input fields -->
      <template v-if="editMode">
        <v-select
          v-if="choices"
          :items="choices"
          :value="value"
          @change="$emit('input', $event)"
        ></v-select>

        <v-text-field v-else :type="type" :value="value" @input="$emit('input', $event)"></v-text-field>

      </template>

      <v-tooltip
        v-else
        bottom
        open-delay="300"
      >
        <template v-slot:activator="{on, attrs}">
          <v-list-item-title v-if="hyperlink" v-bind="attrs" v-on="on">
            <a :href="value" target="_blank">{{ value }}</a>
          </v-list-item-title>
          <v-list-item-title v-else v-bind="attrs" v-on="on">{{ value }}</v-list-item-title>
        </template>
        <span>{{ value }}</span>
      </v-tooltip>
    </template>
  </div>
</template>

<script>
export default {
  name: 'profile-list-item-content',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    label: String,
    type: {
      required: false,
      type: String,
      default: 'text',
    },
    value: String,
    choices: {
      type: Array,
      required: false,
    },
    hyperlink: {
      required: false,
      type: Boolean,
      default: false,
    }
  },
}
</script>
