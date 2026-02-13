import type { ComponentProps, ElementType } from "react";

type SvgComponent = ElementType<ComponentProps<"svg">>;

type TIconProps = {
  icon: SvgComponent;
  size?: number; // px
  className?: string;
  title?: string;
};

export function Icon({ icon: IconSvg, size = 20, className, title }: TIconProps) {
  return (
    <IconSvg
      width={size}
      height={size}
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...(title ? { title } : {})}
    />
  );
}
