interface IServer {
	port: number;

	startServer: () => void;
	stopServer: () => void;
}

export { IServer };
