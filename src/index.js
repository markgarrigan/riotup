import '@riotjs/hot-reload'
import { Route, Router } from '@riotjs/route'
import { register } from 'riot'
import {component} from 'riot'
import App from './app.riot'

// now the Router and Route components are globally available
register('router', Router)
register('route', Route)

component(App)(document.querySelector('#root'))
