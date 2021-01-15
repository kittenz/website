import React from "react";

interface CopyrightNoticeProps {
	holder: string;
	year: number;
}

class CopyrightNotice extends React.Component<CopyrightNoticeProps, object> {
	holder: string = "";
	year: number = 0;

	constructor(props: CopyrightNoticeProps) {
		super(props);

		this.holder = props.holder;
		this.year = props.year;
	}

	render = () => (
		<div id="copyright-notice">
			<p>Copyright © {this.holder} {this.year}-present. All rights reserved.</p>
		</div>
	);
}

export default CopyrightNotice;
export type { CopyrightNoticeProps };
