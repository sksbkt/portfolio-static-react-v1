interface SocialIconProps {
  href: string;
  title: string;
  icon: string;
}
export default function SocialIcon({ href, title, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target={"_blank"}
      title={title}
    >
      <img
        src={icon}
        alt=""
      />
    </a>
  );
}
