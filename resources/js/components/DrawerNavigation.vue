<template>
    <v-navigation-drawer
        app class="elevation-2"
        :value="value"
        @input="$emit('input', $event)"
    >
        <v-system-bar color="light-green lighten-2" />

        <v-list>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img :src="require('resources/img/ICON_KPBI.png')" />

                    <v-list-item-content v-if="!isLoggedIn">
                        <v-list-item-title>KPBI</v-list-item-title>
                    </v-list-item-content>
                </v-list-item-avatar>
            </v-list-item>

            <v-list-item v-if="isLoggedIn">
                <v-list-item-content>
                    <v-list-item-title class="title">{{ userName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ userEmail }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider />

        <v-list dense>
            <v-list-item
                v-if="!isLoggedIn"
                :to="{name: 'Login'}"
                link
            >
                <v-list-item-action>
                    <v-icon>mdi-login-variant</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Login</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'DrawerNavigation',

	props: {
		value: Boolean,
	},

    data: () => ({
        isLoggedIn: true,
        userEmail: 'alwan.nuha7@gmail.com',
        userName: 'ANHzF',
    }),
};
</script>
