import { useRef } from "react";
import { useTransform, motion } from "framer-motion";
import useIntersectionObserver from "../utils/useIntersectionObserver";

const ImageComponent = ({ src,height,width }) => {
	const customThreshold = [...Array(100).keys()].map((x) => x / 100);
	const imgRef = useRef(null);
	const imgObserver = useIntersectionObserver(imgRef, customThreshold);
	const imgtransform = useTransform(imgObserver.springValue, [0,2], [1.4, 0.7]);

	return (
		<motion.div
			className="relative overflow-clip flex justify-end items-start"
			style={{width,height}}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			ref={imgRef}
		>
			<motion.img  
				style={{ 
					width,
					height,
					scale: imgtransform, 
					display: "block",
					objectFit: "cover",
					objectPosition: "center",
				}} 
				src={src} 
			/>
		</motion.div>
	);
};

export default ImageComponent;
