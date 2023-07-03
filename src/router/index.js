import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Foto from '../components/Foto.vue';
import Game from '../components/Game.vue';
import Lokasi from '../components/Lokasi.vue';
import Stopwatch from '../components/Stopwatch.vue';


const routes = [
  { path: '/', component: Home},
  { path: '/Foto', component: Foto},
  { path: '/Game', component: Game},
  { path: '/Lokasi', component: Lokasi},
  { path: '/Stopwatch', component: Stopwatch},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
