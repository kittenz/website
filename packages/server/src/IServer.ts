interface IServer {
	port: number;

	startServer: () => null;
	stopServer: () => null;
}

export { IServer };
