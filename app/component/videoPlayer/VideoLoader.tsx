import Lottie from "lottie-react";
import LoadingLottie from "../../../public/lottie/loading.json";
interface LoadProps {
  loading: boolean;
  setLoading: (event: any) => void;
}
const VideoLoader = ({ loading, setLoading }: LoadProps) => {
  return (
    loading && (
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 text-white text-xl">
        <Lottie
          loop={true}
          animationData={LoadingLottie}
          height={20}
          className="w-96"
        />
      </div>
    )
  );
};

export default VideoLoader;
