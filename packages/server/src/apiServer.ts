import { IServer } from "./IServer";
import * as express from "express";

class ApiServer implements IServer {
	port = 81;

	startServer = () => {}
	stopServer = () => {}
}

export { ApiServer };
