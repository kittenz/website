import React, { createRef, useRef, useEffect } from "react";
import Head from "next/head";

import CommonMetaTags from "components/metaTags/CommonMetaTags";
import TwitterCard from "components/metaTags/TwitterCard";

interface Props {}

function CSharpRBLXPage(props: Props) {
	return (
		<>
			<Head>
				<title>CSharp.RBLX • Kittenz</title>

				<CommonMetaTags />

				<meta name="description" content="CSharp.RBLX: A C# to Lua compiler for Roblox." />
				<meta name="author" content="Kittenz" />

				<TwitterCard description="CSharp.RBLX: A C# to Lua compiler for Roblox." />
			</Head>
			<div className="page">
				<main className="main">
					<div className="text-primary">
						<h1>CSharp.RBLX</h1>
						<p>A C# to Lua compiler optimized for Roblox.</p>
						<p>Coming soon.</p>
					</div>
				</main>
			</div>
		</>
	);
}

export default CSharpRBLXPage;
