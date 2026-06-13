import { SVGProps } from "react";

type IconComponent = React.FC<SVGProps<SVGSVGElement>>;

interface IconsProps extends SVGProps<SVGSVGElement> {
    src: IconComponent;
    width?: number;
    height?: number;
}

export default function Icons({
    src: SvgComponent,
    width = 24,
    height = 24,
    ...props
}: IconsProps) {
    return (
        <SvgComponent
            width={width}
            height={height}
            {...props}
        />
    );
}