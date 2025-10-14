import { motion as MotionTag } from "framer-motion";

function Motion() {
    return (
        <MotionTag.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0, y: 0, z: 0 }}
            transition={{ duration: 5 }}
        >
            Hello Motion 🚀
        </MotionTag.div>
    );
}

export default Motion;
