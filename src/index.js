import "./styles.css";
import app from "./modules/views/app";
import { loadGameController } from "./modules/controller";

// ! AppEventHandler will be called during initial load of the app
app.AppEventHandler(loadGameController);
