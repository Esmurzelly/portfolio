import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectSlice';
import skillsSlice from './skillsSlice';


export default configureStore({
    reducer: {
        projects: projectReducer,
        skills: skillsSlice,
    }
})