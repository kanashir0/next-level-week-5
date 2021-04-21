import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();


/**
 * Tipos de parametros
 * route params = Parametros de  (e.g. http://localhost:3333/settings/1)
 * query params = filtros e buscas (e.g. http://localhost:3333/settings/1?search=something&search2=something)
 * body params = parametros que vem no corpo da requisicao (e.g. {key: value})
 */

routes.post("/settings", settingsController.create)

export { routes };