import { useRef } from "react";
import { useTransform, motion } from "framer-motion";
import useIntersectionObserver from "./useIntersectionObserver";

const ImageComponent = ({ image }) => {
	const customThreshold = [...Array(100).keys()].map((x) => x / 100);
	const imgRef = useRef(null);
	const imgObserver = useIntersectionObserver(imgRef, customThreshold);
	const imgtransform = useTransform(imgObserver.springValue, [0, 1], [2, 1]);

	return (
		<motion.div
			className="relative h-[550px] w-[550px]"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			ref={imgRef}
		>
			<motion.img  style={{ 
				scale: imgtransform, 
				display: "block",
				height: "550px",
				width: "550px",
				objectFit: "cover",
				objectPosition: "center",
			}} src={image} alt="Woman" />
		</motion.div>
	);
};

export default ImageComponent;
