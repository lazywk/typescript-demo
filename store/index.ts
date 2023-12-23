import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import user from "./user";


const store = configureStore({
    reducer: {
        auth,
        user
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;