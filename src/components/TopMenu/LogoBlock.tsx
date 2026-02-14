import { Icon, HomeLogo, AppLogo } from "@/ui/icons";

export type LogoVariant = "app" | "public";

const LOGO_CONFIG: Record<
  LogoVariant,
  {
    component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    className: string;
  }
> = {
  app: {
    component: AppLogo,
    className: "h-10 w-auto",
  },
  public: {
    component: HomeLogo,
    className: "h-[90px] w-[220px]",
  },
};

type TLogoProps = {
  variant: LogoVariant;
};

export function LogoBlock({ variant }: TLogoProps) {
  const { component: Logo, className } = LOGO_CONFIG[variant];

  return (
    <div className="flex items-center">
      <Icon icon={Logo} className={className} title="ИАС Демо" />
    </div>
  );
}
