import Image from "next/image";

export default function SocialShare() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "facebook.com/favicon.ico",
      link: "https://facebook.com",
    },
    { name: "X", icon: "x.com/favicon.ico", link: "https://x.com" },
    {
      name: "LinkedIn",
      icon: "linkedin.com/favicon.ico",
      link: "https://linkedin.com",
    },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-gray-400 mb-2">Share on social media</h3>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center cursor-pointer"
          >
            <Image
              src={`https://${social.icon}`}
              alt={social.name}
              className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
              width={32}
              height={32}
            />
            <p className="text-sm">{social.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
