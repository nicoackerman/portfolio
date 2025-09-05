import { div } from "motion/react-client";
import TiltedCard from "../ui/TiltedCard";
import Title from "../ui/Title";

interface CustomTiltedCardProps {}

export default function CustomTiltedCard({}: CustomTiltedCardProps) {
  return (
    <>
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="200px"
        imageWidth="200px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div>
            <h1 className="text-sm">Whatsapp Clone</h1>
            <a href="">View project</a>
          </div>
        }
      />
    </>
  );
}
