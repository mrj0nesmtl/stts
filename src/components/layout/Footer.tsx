import Link from "next/link";

const socialLinks = [
  { name: "IMDb", url: "https://www.imdb.com/name/nm0717003/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/marc-reichel-6177b73b/" },
];

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-zinc-800 py-8">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-red-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} STTS Special Effects Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 