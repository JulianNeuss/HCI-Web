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

Vue.component('lastused', {
    template:
        `<div>
            <p class="headline font-weight-bold">Last Used</p>
            <v-divider></v-divider>
    
                   <v-row>
                         <v-col v-for="last in lastusedvec" :key="last"  cols="12" md="4" >
                            <v-card :elevation="21" height="150" type="button">  <!-- hay que sacar height y ponerlo en un css-->
                               <v-list-item three-line>
                                      <v-list-item-content class="align-self-start">
                                            <v-list-item-title  class="medium mb-2"  v-text="last.title"></v-list-item-title>
                                            <v-list-item-subtitle v-text="last.room"></v-list-item-subtitle>
                                      </v-list-item-content>
                                    <v-icon> {{ last.icon }}</v-icon>
                               </v-list-item>
                 
                            </v-card>
                         </v-col>
                   </v-row>
        </div>`,
    data(){
        return {
            lastusedvec: [
                { title: 'Living', icon: 'tv' },
                { title: 'Smart Tv', room: 'Living' , icon: 'tv'},
                { title: 'Apple Homepods', room:'Dorm Jorge' , icon: 'speaker'},
            ]
        }
    }
})



Vue.component('devices',{
    template:
    `<div>
        <p class="headline font-weight-bold">Devices</p>
               <v-divider></v-divider>
               <v-row>
                    <v-col v-for="device in devices" :key="device"  cols="12" md="4" >
                         <v-card :elevation="21" height="150" type="button" >  <!-- hay que sacar height y ponerlo en un css-->
                              <v-list-item three-line>
                                  <v-list-item-content class="align-self-start">
                                        <v-list-item-title  class="medium mb-2"  v-text="device.title"></v-list-item-title>
                                        <v-list-item-subtitle v-text="device.room"></v-list-item-subtitle>
                                  </v-list-item-content>
                              </v-list-item>
                         </v-card>
                    </v-col>
               </v-row> 
    </div>`,
    data(){
        return {
            devices: [
                { title: 'Lights'},
                { title: 'AC', room: 'Kitchen', icon: 'ac_unit'},
                { title: 'Smart Tv', room: 'Living', icon: 'tv'},
            ]
        }
    }

})

Vue.component('rooms',{
    template:
    `<div> 

            <v-list-item one-line>
                    <v-list-item-content class="align-self-start">
                        <v-list-item-title  class="headline font-weight-bold">Room's</v-list-item-title>
                    </v-list-item-content>
                    <v-btn class="mx-2" fab dark color="deep-purple darken-1">
                        <v-icon dark> add </v-icon>
                    </v-btn>
            </v-list-item>                           
           
            <v-divider></v-divider>
            
            <v-row>
                  <v-col v-for="room in rooms" :key="room"  cols="12" md="6" >
                         <v-card :elevation="21" height="150" type="button" @click="dialog = !dialog">  <!-- hay que sacar height y ponerlo en un css-->
                               <v-img class="white--text" height="150"   :src="room.src">  <!-- hay que sacar height y ponerlo en un css-->
                                     <v-card-title v-text="room.title" > </v-card-title>
                                     <v-dialog v-model="dialog"  width="400px">  <!-- cambiar width tiene que estar en un CSS -->
                                          <v-card>
                                            
                                              <v-list-item-content class="text-center">
                                                    <v-list-item-title  class="title"  v-text="room.title"></v-list-item-title>
                                              </v-list-item-content>
                                                 
                                              <v-row justify="space-around">
                                                    <v-btn class="mx-2"  dark color="deep-purple darken-1" @click="dialog = !dialog">
                                                          <v-icon dark> edit </v-icon> EDIT
                                                    </v-btn>
                                                    <v-btn class="mx-2"  dark color="deep-purple darken-1" @click="addbutton = !addbutton" >
                                                          <v-icon dark> add </v-icon> ADD
                                                    </v-btn>
                                              </v-row>
                                              
                                              <!-- -->
                                              <v-dialog v-model="addbutton" width="400px"><!-- cambiar width tiene que estar en un CSS -->
                                                 
                                                    <v-card>
                                                        <v-card-title class="grey darken-2" light>
                                                            Add Device
                                                        </v-card-title>
                                                        <v-container grid-list-sm>
                                                        
                                                            <v-layout row wrap>
                                                                <v-col class="d-flex" cols="12" sm="12">
                                                                  <v-select
                                                                    :items="items"
                                                                    label="Select Device"
                                                                  ></v-select>
                                                                </v-col>
                                                            </v-layout>
                                                            
                                                        </v-container>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn  text  color="primary" @click="addbutton = false" >Cancel</v-btn>
                                                            <v-btn text @click="addbutton = false">Save</v-btn>
                                                        </v-card-actions>
                                                     </v-card>
                                              
                                              
                                              </v-dialog>
                                              
                                              <!-- -->
                                              
                                                 
                                                
                                              <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn  text  color="primary" @click="dialog = false" >Cancel</v-btn>
                                                    <v-btn text @click="dialog = false">Save</v-btn>
                                              </v-card-actions>
                                          </v-card>
                                     </v-dialog>
                               </v-img>
                         </v-card>
                  </v-col>
            </v-row>
            
     </div>`,
    data() {
        return {
            dialog: false,
            addbutton: false,
            items: [ 'AC', 'ASPIRADORA', 'CORTINA','HELADERA','HORNO','LAMPARA' , 'PARLANTE' , 'PUERTA'],
            rooms: [
                { title: 'Living', src: "../src/living.jpg"},
                { title: 'Garage', src: "../src/garage.jpg"},
                { title: 'Kitchen', src: "../src/kitchen.jpg"},
                { title: 'Playroom', src: "../src/playroom.jpg"},
                { title: 'Dorm Jorge', src: "../src/dormitorio.jpg"},
                { title: 'Dorm Susana', src: "../src/dormitorio.jpg"},
                { title: 'Dorm Betty', src: "../src/dormitorio.jpg"},
            ]
        }
    }

})


new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
        active_tab: 0,
        tabs: [
            { index: 0, name: 'HOME', href:'index.html' },
            { index: 1, name: 'ROUTINES', href:'routines.html' },
            { index: 2, name: 'FAVOURITES', href: 'favourites.html' },
            { index: 3, name: 'SAFETY', href: 'safety.html'},
        ]
    }),
})
