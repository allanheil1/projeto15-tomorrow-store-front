import { ProgressBar } from "react-loader-spinner";
import { LoadingContainer } from "./style";

function Loading() {
	return (
		<LoadingContainer>
			<ProgressBar
				width="200"
				height="200"
				ariaLabel="progress-bar-loading"
				wrapperStyle={{}}
				wrapperClass="progress-bar-wrapper"
				borderColor="#79e499"
				barColor="#0dcdf4"
			/>
		</LoadingContainer>
	);
}

export default Loading;
