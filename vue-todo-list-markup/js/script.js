/*
DEFAULT
1. Creare un array di oggetti (che rappresentano ogni todo), con proprietà text diversa per ognuno e done true o false random

MILESTONE 1
2. Con un ciclo v-for (elemento, indice?) stampiamo i vari todo.text
3. Condizione se done === true aggiungiamo la classe done al li (col ternario? v-if?)

MILESTONE 2
4. @click alla x richiamo funzione che fa uno splice del todo dall'array (mi sserve indice punto2?)

MILESTONE 3
5. Input con v-model al todo.text, al click pulsante viene creato un nuovo todo con text = al contenuto input e viene pushato nell'array di oggetti(.unshift) con done: false. Aggiungere il keyup.enter
*/

const {createApp} = Vue;

createApp({

  data(){

    return{
      todoList:[
        {
          text:'Fare la spesa',
          done: false
        },
        {
          text:'Prendere le medicine',
          done: true
        },
        {
          text:'Fare i compiti',
          done: true
        },
        {
          text:'Andare a correre',
          done: false
        },
        {
          text:'Pulire casa',
          done: false
        },
      ],

      newTaskText: '',
      
      errorMsg: ''

    }

  },

  methods:{
    
    removeTask(indice){
      this.todoList.splice(indice, 1)
    },

    addTask(){
      const newTask = {
        text:this.newTaskText,
        done: false
      }
      this.todoList.unshift(newTask)

    },

    toggleDone(task){
      task.done = !task.done
    }
    
  },

  mounted(){
    
  },
}).mount('#app')