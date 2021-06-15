import Black from '../components/Black.vue'
import Blue from '../components/Blue.vue'
import Green from '../components/Green.vue'
import Red from '../components/Red.vue'
import Yellow from '../components/Yellow.vue'

const routes = [

    {   path: '/black',
        component: Black,
        name:'black'
    },
    {   
        path: '/blue',
        component: Blue,
        name:'blue'
    },
    {   
        path: '/green',
        component: Green,
        name:'green'
    },
    {   
        path: '/yellow',
        component: Yellow,
        name:'yellow'
    },
    {   
        path: '/red',
        component: Red,
        name:'red'
    }
]

export default routes;