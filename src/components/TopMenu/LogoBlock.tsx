import { Icon, HomeLogo, AuthLogo, AppLogo } from "@/ui/icons";

export type LogoVariant = "app" | "public" | "auth";

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
  auth: {
    component: AuthLogo,
    className: "h-[75px] w-[190px]",
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
