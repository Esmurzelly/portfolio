import { createSlice } from "@reduxjs/toolkit";

import logo_html from '../assets/img/stack/html.svg';
import logo_css from '../assets/img/stack/css.svg';
import logo_bootstrap from '../assets/img/stack/bootstrap.svg';
import logo_git from '../assets/img/stack/git.svg';
import logo_js from '../assets/img/stack/js.svg';
import logo_react from '../assets/img/stack/react.svg';
import logo_redux from '../assets/img/stack/redux.svg';
import logo_sass from '../assets/img/stack/sass.svg';
import logo_tailwind from '../assets/img/stack/tailwind.svg';
import logo_figma from '../assets/img/stack/figma.svg';
import logo_typescript from '../assets/img/stack/typescript.svg';
import logo_vite from '../assets/img/stack/vite.svg';
import logo_mongodb from '../assets/img/stack/mongodb.svg';
import logo_nodejs from '../assets/img/stack/nodejs.svg';
import logo_docker from '../assets/img/stack/docker.svg';


const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    skills: [
      {
        id: 1,
        name: 'logo_html',
        logo: logo_html,
      },
      {
        id: 2,
        name: 'logo_css',
        logo: logo_css,
      },
      {
        id: 3,
        name: 'logo_js',
        logo: logo_js,
      },
      {
        id: 4,
        name: "logo_typescript",
        logo: logo_typescript
      },
      {
        id: 5,
        name: 'logo_react',
        logo: logo_react,
      },
      {
        id: 6,
        name: 'logo_redux',
        logo: logo_redux,
      },
      {
        id: 7,
        name: 'logo_vite',
        logo: logo_vite,
      },
      {
        id: 8,
        name: 'logo_docker',
        logo: logo_docker,
      },
      {
        id: 9,
        name: 'logo_sass',
        logo: logo_sass,
      },
      {
        id: 10,
        name: 'logo_tailwind',
        logo: logo_tailwind,
      },
      {
        id: 11,
        name: 'logo_git',
        logo: logo_git,
      },
      {
        id: 12,
        name: 'logo_figma',
        logo: logo_figma,
      },
      {
        id: 13,
        name: 'logo_nodejs',
        logo: logo_nodejs,
      },
      {
        id: 14,
        name: 'logo_mongodb',
        logo: logo_mongodb,
      },
    ]
  },
  reducers: {}
});



export default skillsSlice.reducer;  