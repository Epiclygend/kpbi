<template>
    <v-container fluid>
        <v-row>
            <v-card @click="increment">
                <v-card-title>{{ count }}</v-card-title>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import useTest from 'api/useTest';

export default {
    name: 'Homepage',

    setup() {
      return {
        ...useTest(),
      };
    },
};
</script>
