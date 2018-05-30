import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutMe from '@/components/AboutMe'
import Download from '@/components/Download'
import Plan from '@/components/Plan'
import Product from '@/components/Product'
import Serve from '@/components/Serve'

import Xyjh from '@/components/Xyjh'
import Xyzp from '@/components/Xyzp'

import AboutQiJi from '@/components/AboutQiJi'
import NewsContent from '@/components/NewsContent'
import AddMe from '@/components/AddMe'
import LinkMe from '@/components/LinkMe'

Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe,
      children:[
        
         {
           path: "NewsContent",
           component: NewsContent
         }, 
         {
           path: "AddMe",
           component: AddMe           
         },
         {
          path: "LinkMe",
          component: LinkMe           
        },{
         path: "",
         component: AboutQiJi
         }, 
     ]
    },
    {
      path: '/Download',
      name: 'Download',
      component: Download,
     
    },
    {
      path: '/Plan',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product,
      children:[
          {
            path: "Xyzp",
            component: Xyzp
          }, 
          {
            path: "",
            component: Xyjh           
          },
      ]
       
     
    },
     {
      path: '/',
      name: 'Home',
      redirect: Home
    },
    {
      path: '/Serve',
      name: 'Serve',
      component: Serve
    }
  ]
})
