import { CommonRoutesConfig } from "../common/common.routes";
import express from "express";
import indexController from "../../controllers/index.controller/index.controller";
import { addAuthQuery } from "./query/auth.query";
import { studentAuthQuery } from "./student-query/student.auth.query";
import { cronQuery } from "./cron/cron.query";

export class IndexRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "Index Routes");
    this.app.use("/", this.router);
  }

  configureRoutes(router: express.Router): express.Application {
    router.get("/", indexController.index);
    addAuthQuery(router);
    studentAuthQuery(router);
    cronQuery(router);

    return this.app;
  }
}
