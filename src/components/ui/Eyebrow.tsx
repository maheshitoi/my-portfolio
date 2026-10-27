import { ICONS, type IconName } from "@/components/ui/iconRegistry";

export default function Eyebrow({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  const Icon = ICONS[icon];
  return (
    <p className="eyebrow">
      <Icon size={14} aria-hidden="true" />
      {children}
    </p>
  );
}
