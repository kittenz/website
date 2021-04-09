import React from "react";

interface Props {
	description: string;
}

function TwitterCard(props: Props) {
	return (
		<>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@Kitt_nz" />
			<meta name="twitter:creator" content="@Kitt_nz" />
			<meta property="og:title" content="Kittenz" />
			<meta property="og:description" content={props.description} />
			<meta property="og:image" content="images/logo.png" />
		</>
	);
}

export default TwitterCard;
