Vue.component('toolbar', {
    template:
        `<v-toolbar color="deep-purple darken-1" dark  flat>
                        <v-btn color="deep-purple darken-1" depressed  href="index.html">
                            <v-toolbar-title class="ml-0 pl-3">
                                        <span class="title ml-3 mr-5">UC<span class="font-italic font-weight-light">3000</span>
                                        </span> <!-- para que UC se vea en negrita y 3000 no -->
                            </v-toolbar-title>
                        </v-btn>
                        <v-spacer></v-spacer> <!-- deja espacio entre el search y boton de  notificaciones y settings -->

                        <v-text-field flat solo-inverted hide-details prepend-inner-icon="search" label="Search" class="hidden-sm-and-down"></v-text-field>

                        <v-spacer></v-spacer> <!-- deja espacio entre el search y boton de  notificaciones y settings -->

                        <v-btn icon>
                            <v-icon>settings</v-icon>
                        </v-btn>
            </v-toolbar>`,

})

Vue.component('alarm',{
    template:`
        <v-container>
            
            <v-card height="500" width="300" :elevation="21"  class="mx-auto" >
                
                <v-list-item one-line>
                        <v-icon large> notification_important </v-icon>
                        <v-list-item-content class="align-self-start">
                            <v-list-item-title  class="headline font-weight-bold">Alarms</v-list-item-title> <!-- ver si se puede centrar esto-->
                        </v-list-item-content>
                </v-list-item>
                
                
                <v-row justify="space-around">
                          <v-btn class="mx-2"  dark color="deep-purple darken-1">
                                  <v-icon dark> edit </v-icon> EDIT
                          </v-btn>
                          <v-btn class="mx-2"  dark color="deep-purple darken-1">
                                  <v-icon dark> add </v-icon> ADD
                          </v-btn>
                </v-row>
            
            </v-card>
               
        </v-container> 
    
    `

})


new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
        active_tab: 3,
        tabs: [
            { index: 0, name: 'HOME', href:'index.html' },
            { index: 1, name: 'ROUTINES', href:'routines.html' },
            { index: 2, name: 'FAVOURITES', href:'favourites.html'},
            { index: 3, name: 'SAFETY', href: 'safety.html'},
        ]
    }),
})